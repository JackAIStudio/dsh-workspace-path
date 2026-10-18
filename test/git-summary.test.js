import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { countPorcelainZ, summarizeGitRepos } from '../git-summary.js'

function tempDir() {
  return mkdtempSync(join(tmpdir(), 'wspath-git-'))
}

function git(dir, ...args) {
  execFileSync('git', ['-C', dir, ...args], { stdio: 'ignore' })
}

function makeRepo() {
  const dir = tempDir()
  git(dir, 'init', '-q')
  git(dir, 'config', 'user.email', 'test@example.com')
  git(dir, 'config', 'user.name', 'Test')
  writeFileSync(join(dir, 'a.txt'), 'a')
  git(dir, 'add', '.')
  git(dir, 'commit', '-qm', 'init')
  return dir
}

describe('countPorcelainZ', () => {
  it('counts entries and collapses rename pairs', () => {
    assert.equal(countPorcelainZ(''), 0)
    assert.equal(countPorcelainZ(' M a.txt\0?? b.txt\0'), 2)
    assert.equal(countPorcelainZ('R  new.txt\0old.txt\0'), 1)
  })
})

describe('summarizeGitRepos', () => {
  it('reports non-repositories (missing .git or missing path) as isRepo:false', async () => {
    const plain = tempDir()
    try {
      const missing = join(plain, 'missing')
      const map = await summarizeGitRepos([plain, missing])
      assert.deepEqual(map[plain], { isRepo: false, changed: 0 })
      assert.deepEqual(map[missing], { isRepo: false, changed: 0 })
    } finally {
      rmSync(plain, { recursive: true, force: true })
    }
  })

  it('counts a clean tree, modifications and untracked files', async () => {
    const dir = makeRepo()
    try {
      let map = await summarizeGitRepos([dir])
      assert.deepEqual(map[dir], { isRepo: true, changed: 0 })
      writeFileSync(join(dir, 'a.txt'), 'changed')
      writeFileSync(join(dir, 'new.txt'), 'new')
      map = await summarizeGitRepos([dir])
      assert.deepEqual(map[dir], { isRepo: true, changed: 2 })
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })

  it('deduplicates repeated paths', async () => {
    const dir = makeRepo()
    try {
      const map = await summarizeGitRepos([dir, dir])
      assert.deepEqual(Object.keys(map), [dir])
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })
})
