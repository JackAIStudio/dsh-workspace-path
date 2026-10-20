import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { lastUsedAt, orderProjectsByRecentUse, pickerModel, sortByRecentUse } from '../paths.js'

const ws = (id, sessionIds = [], updatedAt = '2026-01-01T00:00:00.000Z') => ({
  workspaceId: id,
  title: id,
  path: `/ws/${id}`,
  sessionIds,
  updatedAt,
})

describe('lastUsedAt', () => {
  it('takes the newest session activity of the workspace', () => {
    const sessions = { s1: { updatedAt: 100 }, s2: { updatedAt: 900 } }
    assert.equal(lastUsedAt(ws('a', ['s1', 's2']), sessions), 900)
  })

  it('falls back to the workspace mutation time when it has no session', () => {
    assert.equal(lastUsedAt(ws('a', [], '2026-05-01T00:00:00.000Z'), {}), Date.parse('2026-05-01T00:00:00.000Z'))
  })

  it('returns 0 for a workspace without any usable timestamp', () => {
    assert.equal(lastUsedAt({ workspaceId: 'a' }, undefined), 0)
  })
})

describe('sortByRecentUse', () => {
  const sessions = { s1: { updatedAt: 100 }, s2: { updatedAt: 300 }, s3: { updatedAt: 200 } }

  it('orders most recently used first', () => {
    const rows = [ws('a', ['s1']), ws('b', ['s2']), ws('c', ['s3'])]
    assert.deepEqual(sortByRecentUse(rows, sessions).map((row) => row.workspaceId), ['b', 'c', 'a'])
  })

  it('keeps host order among never-used rows', () => {
    const rows = [ws('x', [], '1970-01-01T00:00:00.000Z'), ws('y', [], '1970-01-01T00:00:00.000Z')]
    assert.deepEqual(sortByRecentUse(rows, {}).map((row) => row.workspaceId), ['x', 'y'])
  })
})

describe('orderProjectsByRecentUse', () => {
  const sessions = { s1: { updatedAt: 100 }, s2: { updatedAt: 300 } }

  it('does not drag an idle current workspace above a more recently used one', () => {
    const rows = [ws('old', ['s1']), ws('new', ['s2'])]
    assert.deepEqual(orderProjectsByRecentUse(rows, 'old', sessions).map((row) => row.workspaceId), ['new', 'old'])
  })

  it('still leads with the current workspace when usage ties', () => {
    const rows = [ws('a'), ws('b')]
    assert.deepEqual(orderProjectsByRecentUse(rows, 'b', {}).map((row) => row.workspaceId), ['b', 'a'])
  })
})

describe('pickerModel recent order', () => {
  it('lists projects by recent use and leaves day rows in their own order', () => {
    const items = [
      ws('p1', ['s1']),
      ws('p2', ['s2']),
      { workspaceId: 'd', title: '2026-09-09', path: '/ws/days/2026-09-09', sessionIds: [], updatedAt: '2026-09-09T00:00:00.000Z' },
    ]
    const model = pickerModel({ items, sessionsById: { s1: { updatedAt: 100 }, s2: { updatedAt: 400 } } })
    assert.deepEqual(model.rows.map((row) => row.workspaceId), ['p2', 'p1'])
  })
})
