import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'

const src = readFileSync(new URL('../client.js', import.meta.url), 'utf8')

describe('packed client.js', () => {
  it('inlines picker classification and both picker surfaces', () => {
    assert.match(src, /function pickerModel/)
    assert.match(src, /function isDayWorkspace/)
    assert.match(src, /variant: 'hub'/)
    assert.match(src, /variant: 'picker'/)
    assert.match(src, /conversation\.hero\.workspace/)
    assert.match(src, /dsh-workspace-path-hero/)
  })
})
