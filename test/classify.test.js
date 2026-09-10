import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  dateStampFromText,
  dayStampOf,
  isDayWorkspace,
  pickerModel,
  sortDayWorkspaces,
  splitWorkspaces,
  todayStamp,
} from '../paths.js'

const day = (id, title, path) => ({ workspaceId: id, title, path })
const now = new Date(2026, 8, 9) // 2026-09-09 local

describe('dateStampFromText', () => {
  it('accepts padded and unpadded dates, plus a parenthetical prefix', () => {
    assert.equal(dateStampFromText('2026-09-09'), '2026-09-09')
    assert.equal(dateStampFromText('2026-8-26'), '2026-08-26')
    assert.equal(dateStampFromText('(老) 2026-08-29'), '2026-08-29')
    assert.equal(dateStampFromText('(old)2026-08-29'), '2026-08-29')
  })

  it('rejects project names and extra suffix text', () => {
    assert.equal(dateStampFromText('JackDSH'), '')
    assert.equal(dateStampFromText('2026-09-09 草稿'), '')
    assert.equal(dateStampFromText('.dsh'), '')
  })
})

describe('isDayWorkspace', () => {
  it('classifies by title, basename, or a days/ path', () => {
    assert.equal(isDayWorkspace(day('a', '2026-09-09', '/tmp/scratch')), true)
    assert.equal(isDayWorkspace(day('b', '(老) 2026-08-29', '/tmp/old')), true)
    assert.equal(isDayWorkspace(day('c', 'notes', '/Users/x/Documents/dshspace/days/2026-09-07')), true)
    assert.equal(isDayWorkspace(day('d', 'legacy', 'C:\\Users\\x\\dshspace\\days\\2026-09-07')), true)
    assert.equal(isDayWorkspace(day('e', 'JackDSH', '/Users/x/Documents/dshspace/JackDSH')), false)
    assert.equal(isDayWorkspace(day('f', '.dsh', '/Users/x/.dsh')), false)
    assert.equal(isDayWorkspace(day('g', 'skills', '/Users/x/Documents/dshspace/skills')), false)
  })
})

describe('splitWorkspaces / sortDayWorkspaces', () => {
  const items = [
    day('p1', 'JackDSH', '/ws/JackDSH'),
    day('d1', '2026-09-07', '/ws/days/2026-09-07'),
    day('p2', 'JackAICutWeb', '/ws/JackAICutWeb'),
    day('d2', '2026-09-09', '/ws/days/2026-09-09'),
    day('d3', '(老) 2026-08-29', '/ws/old/2026-08-29'),
  ]

  it('splits projects from day folders without reordering projects', () => {
    const { projects, days } = splitWorkspaces(items)
    assert.deepEqual(projects.map((item) => item.workspaceId), ['p1', 'p2'])
    assert.deepEqual(days.map((item) => item.workspaceId), ['d1', 'd2', 'd3'])
  })

  it('puts today first, then newer dates', () => {
    const { days } = splitWorkspaces(items)
    const sorted = sortDayWorkspaces(days, todayStamp(now))
    assert.deepEqual(sorted.map((item) => item.workspaceId), ['d2', 'd1', 'd3'])
    assert.equal(dayStampOf(sorted[0]), '2026-09-09')
  })
})

describe('pickerModel', () => {
  const items = [
    day('p1', 'JackDSH', '/ws/JackDSH'),
    day('d1', '2026-09-07', '/ws/days/2026-09-07'),
    day('p2', 'JackAICutWeb', '/ws/JackAICutWeb'),
    day('d2', '2026-09-09', '/ws/days/2026-09-09'),
    { workspaceId: 'ghost', title: 'ghost', path: '' },
  ]

  it('default view lists only projects, dropping pathless rows', () => {
    const model = pickerModel({ items, now, currentId: 'p2' })
    assert.equal(model.view, 'projects')
    assert.equal(model.searching, false)
    assert.deepEqual(model.rows.map((item) => item.workspaceId), ['p2', 'p1'])
    assert.equal(model.dayCount, 2)
    assert.equal(model.rows.every((item) => item.kind === 'project'), true)
  })

  it('does not pin a day workspace into the project list', () => {
    const model = pickerModel({ items, now, currentId: 'd2' })
    assert.deepEqual(model.rows.map((item) => item.workspaceId), ['p1', 'p2'])
  })

  it('searches both kinds from the project view', () => {
    const byName = pickerModel({ items, now, query: 'jack' })
    assert.deepEqual(byName.rows.map((item) => item.workspaceId), ['p1', 'p2'])
    const byDate = pickerModel({ items, now, query: '09-07' })
    assert.deepEqual(byDate.rows.map((item) => item.workspaceId), ['d1'])
    assert.equal(byDate.rows[0].kind, 'day')
  })

  it('days view is newest-first with today flagged', () => {
    const model = pickerModel({ items, now, view: 'days' })
    assert.deepEqual(model.rows.map((item) => item.workspaceId), ['d2', 'd1'])
    assert.equal(model.rows[0].isToday, true)
    assert.equal(model.rows[1].isToday, false)
  })
})
