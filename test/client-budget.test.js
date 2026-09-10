import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LIMIT = 300

function lineCount(rel) {
  return readFileSync(join(root, rel), 'utf8').split('\n').length
}

function walkJs(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walkJs(full, acc)
    else if (name.endsWith('.js')) acc.push(full.slice(root.length + 1))
  }
  return acc
}

describe('source file line budget (AGENTS.md §1)', () => {
  it('keeps every source file within 300 lines (packed client.js excluded)', () => {
    const files = walkJs(root).filter((rel) => rel !== 'client.js')
    const over = files.filter((rel) => lineCount(rel) > LIMIT).map((rel) => `${rel} ${lineCount(rel)}`)
    assert.deepEqual(over, [], over.join(', '))
  })

  it('keeps client apply entry small', () => {
    assert.ok(lineCount('client/apply.js') <= 100, `client/apply.js is ${lineCount('client/apply.js')} lines`)
  })
})
