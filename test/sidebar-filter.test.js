import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { currentWorkspaceId, sidebarFilterModel } from '../sidebar-filter.js'

const now = new Date(2026, 9, 22) // 2026-10-22 local
const ws = (id, title, path, sessionIds = []) => ({ workspaceId: id, title, path, sessionIds })

const items = [
  ws('d-today', '2026-10-22', '/Users/x/Documents/JackDSH/days/2026-10-22', ['s-today']),
  ws('d-old', '2026-10-19', '/Users/x/Documents/JackDSH/days/2026-10-19', ['s-old']),
  ws('d-older', '(老) 2026-08-29', '/Users/x/old/2026-08-29', ['s-older']),
  ws('p1', 'jackskill', '/Users/x/Projects/jackskill', ['s-p1']),
  ws('p2', 'WaterFlow', '/Users/x/Projects/WaterFlow', ['s-p2']),
  ws('p3', 'Projects', '/Users/x/Projects', []),
]

describe('currentWorkspaceId', () => {
  it('resolves the open session through workspace membership', () => {
    const sessions = { 's-p2': { id: 's-p2', retainedBy: { mainView: 1 } } }
    assert.equal(currentWorkspaceId(items, sessions), 'p2')
  })

  it('falls back to cwd when the session has no recorded workspace', () => {
    const sessions = { 's-new': { id: 's-new', cwd: '/Users/x/Projects/WaterFlow', retainedBy: { mainView: 2 } } }
    assert.equal(currentWorkspaceId(items, sessions), 'p2')
  })

  it('returns nothing without a session in the main view', () => {
    const sessions = { 's-p1': { id: 's-p1', retainedBy: {} } }
    assert.equal(currentWorkspaceId(items, sessions), '')
    assert.equal(currentWorkspaceId(items, undefined), '')
  })
})

describe('sidebarFilterModel', () => {
  it('hides dated folders by default but keeps today', () => {
    const model = sidebarFilterModel(items, { now })
    assert.equal(model.mode, 'projects')
    assert.deepEqual([...model.hidden], ['d-old', 'd-older'])
    assert.equal(model.hiddenCount, 2)
    assert.equal(model.dayCount, 3)
    assert.equal(model.projectCount, 3)
    assert.equal(model.today, '2026-10-22')
  })

  it('keeps the workspace of the open session even when it is dated', () => {
    const model = sidebarFilterModel(items, { now, currentId: 'd-old' })
    assert.equal(model.hidden.has('d-old'), false)
    assert.equal(model.hidden.has('d-older'), true)
  })

  it('hides nothing in the all mode', () => {
    const model = sidebarFilterModel(items, { mode: 'all', now, currentId: 'd-old' })
    assert.equal(model.mode, 'all')
    assert.equal(model.hidden.size, 0)
  })

  it('never classifies parent folders or a projects directory as dated', () => {
    const model = sidebarFilterModel(items, { now })
    assert.equal(model.hidden.has('p1'), false)
    assert.equal(model.hidden.has('p3'), false)
  })

  it('tolerates an empty registry', () => {
    const model = sidebarFilterModel([], { now })
    assert.equal(model.hiddenCount, 0)
    assert.equal(model.dayCount, 0)
  })
})
