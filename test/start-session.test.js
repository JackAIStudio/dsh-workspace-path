import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'

const src = readFileSync(new URL('../client.js', import.meta.url), 'utf8')

describe('client.js dual-track startSession', () => {
  it('prefers uiWorkspace.startSession when the 0.1.2 service appears', () => {
    assert.match(src, /ctx\.inject\(\['uiWorkspace'\]/)
    assert.match(src, /uiWorkspace && typeof uiWorkspace\.startSession === 'function'/)
  })

  it('falls back to workspaces.startSession on 0.1.1', () => {
    assert.match(src, /: ctx\.workspaces/)
    assert.match(src, /owner\.startSession\(workspaceId\)/)
  })
})
