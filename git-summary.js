/**
 * Batch git working-tree summaries for the workspace hub. One
 * `git status --porcelain -z` per repository, bounded concurrency and a
 * per-call timeout, so a hung or huge repository never blocks the list.
 * `--no-optional-locks` keeps the probe from refreshing the on-disk index
 * (safe to run while the user or an agent works in the same repository).
 *
 * A row is `{ isRepo, changed }`:
 *   - `{ isRepo: false }` — no `.git` entry at the path;
 *   - `{ isRepo: true, changed: 0 }` — clean working tree;
 *   - `{ isRepo: true, changed: n }` — n modified/staged/untracked rows;
 *   - `{ isRepo: true, changed: -1 }` — the probe failed (timeout/lock);
 *     the UI renders an unknown marker instead of a stale count.
 */
import { stat } from 'node:fs/promises'
import { join } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const CONCURRENCY = 6
const TIMEOUT_MS = 4000
const MAX_PATHS = 300

/**
 * Summarize many repositories with bounded concurrency.
 * @param {readonly string[]} paths - absolute workspace paths.
 * @returns {Promise<Record<string, { isRepo: boolean, changed: number }>>}
 */
export async function summarizeGitRepos(paths) {
  const list = [...new Set((paths ?? []).filter((p) => typeof p === 'string' && p !== ''))].slice(0, MAX_PATHS)
  const summaries = {}
  let cursor = 0
  const workers = Array.from({ length: Math.min(CONCURRENCY, list.length) }, async () => {
    while (cursor < list.length) {
      const path = list[cursor]
      cursor += 1
      summaries[path] = await summarizeRepo(path)
    }
  })
  await Promise.all(workers)
  return summaries
}

/** Whether `dir` carries a `.git` entry (directory, or file for worktrees/submodules). */
async function hasGitEntry(dir) {
  try {
    await stat(join(dir, '.git'))
    return true
  } catch {
    return false
  }
}

/** Count porcelain rows for one repository (untracked files count as changes). */
async function summarizeRepo(dir) {
  if (!(await hasGitEntry(dir))) return { isRepo: false, changed: 0 }
  try {
    const { stdout } = await execFileAsync('git', [
      '--no-optional-locks', '-C', dir,
      'status', '--porcelain=v1', '-z', '--untracked-files=normal',
    ], { timeout: TIMEOUT_MS, maxBuffer: 8 * 1024 * 1024, windowsHide: true })
    return { isRepo: true, changed: countPorcelainZ(stdout) }
  } catch {
    return { isRepo: true, changed: -1 }
  }
}

/**
 * Count status rows in `git status --porcelain=v1 -z` output. Rename/copy
 * entries carry the origin path as the next NUL field and collapse to one row.
 * @param {string} output
 */
export function countPorcelainZ(output) {
  const tokens = String(output).split('\0')
  let rows = 0
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i]
    if (token === '') continue
    rows += 1
    const xy = token.slice(0, 2)
    if ((xy[0] === 'R' || xy[0] === 'C') && tokens[i + 1] !== undefined && tokens[i + 1] !== '') i += 1
  }
  return rows
}
