import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'

// client/add-workspace.js 是拼接进 client.js 的浏览器片段（无 import/export），
// 这里按同样方式求值，验证它与官方目录选择器同一条路。
const src = readFileSync(new URL('../client/add-workspace.js', import.meta.url), 'utf8')
const locale = () => ({ pickerUnavailable: 'no picker' })
const pickAndAddWorkspace = new Function('locale', `${src}; return pickAndAddWorkspace`)(locale)

function harness({ pickedPath = '/tmp/chosen', uiWorkspace, createResult = { workspaceId: 'w1' } } = {}) {
  const calls = [], started = []
  const ui = uiWorkspace ?? { pickDirectory: async () => { calls.push('pick'); return pickedPath } }
  const workspaces = { create: async (input) => { calls.push(`create:${input.path}`); return createResult } }
  const run = () => pickAndAddWorkspace({ getUiWorkspace: () => ui, workspaces, startSession: (id) => started.push(id) })
  return { calls, started, run }
}

describe('pickAndAddWorkspace follows the official add-workspace route', () => {
  it('picks a directory, adopts it, then opens a session there', async () => {
    const h = harness()
    const result = await h.run()
    assert.deepEqual(h.calls, ['pick', 'create:/tmp/chosen'])
    assert.deepEqual(h.started, ['w1'])
    assert.deepEqual(result, { workspaceId: 'w1', path: '/tmp/chosen' })
  })

  it('does nothing when the operator cancels the picker', async () => {
    const h = harness({ pickedPath: null })
    assert.equal(await h.run(), null)
    assert.deepEqual(h.calls, ['pick'])
    assert.deepEqual(h.started, [])
  })

  it('reads the late-injected uiWorkspace through the getter', async () => {
    let ui
    await assert.rejects(
      () => pickAndAddWorkspace({ getUiWorkspace: () => ui, workspaces: { create: async () => ({ workspaceId: 'x' }) } }),
      /no picker/,
    )
    ui = { pickDirectory: async () => '/tmp/late' }
    const result = await pickAndAddWorkspace({ getUiWorkspace: () => ui, workspaces: { create: async () => ({ workspaceId: 'late1' }) } })
    assert.equal(result.workspaceId, 'late1')
  })
})
