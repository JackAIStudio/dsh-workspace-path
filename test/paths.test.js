import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { abbreviateHomePath, filterWorkspaces, hostFileManagerKind, listCopyableWorkspaces } from '../paths.js'

describe('abbreviateHomePath', () => {
  it('returns empty for missing path', () => {
    assert.equal(abbreviateHomePath(''), '')
  })

  it('leaves path unchanged without a usable home', () => {
    assert.equal(abbreviateHomePath('/Users/jkw/src', ''), '/Users/jkw/src')
    assert.equal(abbreviateHomePath('/Users/jkw/src', '/'), '/Users/jkw/src')
    assert.equal(abbreviateHomePath('/Users/jkw/src', undefined), '/Users/jkw/src')
  })

  it('abbreviates POSIX home and descendants', () => {
    assert.equal(abbreviateHomePath('/Users/jkw', '/Users/jkw'), '~')
    assert.equal(
      abbreviateHomePath('/Users/jkw/Documents/dshspace/days/2026-08-29', '/Users/jkw'),
      '~/Documents/dshspace/days/2026-08-29',
    )
  })

  it('does not treat a prefix sibling as home', () => {
    assert.equal(abbreviateHomePath('/Users/jkw2/src', '/Users/jkw'), '/Users/jkw2/src')
  })

  it('does not abbreviate Windows homes', () => {
    assert.equal(abbreviateHomePath('C:\\Users\\jkw\\src', 'C:\\Users\\jkw'), 'C:\\Users\\jkw\\src')
    assert.equal(abbreviateHomePath('\\\\nas\\share\\a', '\\\\nas\\share'), '\\\\nas\\share\\a')
  })
})

describe('hostFileManagerKind', () => {
  it('maps POSIX /Users homes to Finder', () => {
    assert.equal(hostFileManagerKind('/Users/jkw'), 'mac')
  })

  it('maps Windows homes to Explorer', () => {
    assert.equal(hostFileManagerKind('C:\\Users\\jkw'), 'windows')
    assert.equal(hostFileManagerKind('\\\\nas\\share'), 'windows')
  })

  it('falls back for Linux / unknown homes', () => {
    assert.equal(hostFileManagerKind('/home/jkw'), 'generic')
    assert.equal(hostFileManagerKind(undefined), 'generic')
  })
})

describe('listCopyableWorkspaces', () => {
  const a = { workspaceId: 'a', path: '/tmp/a', sessionIds: ['s1'] }
  const b = { workspaceId: 'b', path: '/tmp/b', sessionIds: ['s2'] }
  const ghost = { workspaceId: 'g', path: '', sessionIds: [] }

  it('drops workspaces without a path', () => {
    assert.deepEqual(listCopyableWorkspaces([a, ghost, b]), [a, b])
  })

  it('pins the workspace that owns the current session', () => {
    assert.deepEqual(listCopyableWorkspaces([a, b], 's2'), [b, a])
  })

  it('keeps host order when the current session is ungrouped', () => {
    assert.deepEqual(listCopyableWorkspaces([a, b], 's9'), [a, b])
  })
})

describe('filterWorkspaces', () => {
  const day = { workspaceId: 'd', title: '2026-08-29', path: '/Users/jkw/Documents/dshspace/days/2026-08-29' }
  const plugin = { workspaceId: 'p', title: '插件试验', path: '/Users/jkw/Documents/dshspace/plugins' }

  it('returns all rows for a blank query', () => {
    assert.deepEqual(filterWorkspaces([day, plugin], '  '), [day, plugin])
  })

  it('matches title, basename, path, and ~ abbreviation', () => {
    assert.deepEqual(filterWorkspaces([day, plugin], '08-29'), [day])
    assert.deepEqual(filterWorkspaces([day, plugin], '插件'), [plugin])
    assert.deepEqual(filterWorkspaces([day, plugin], 'dshspace/plugins'), [plugin])
    assert.deepEqual(
      filterWorkspaces([day, plugin], '~/documents/dshspace/days', '/Users/jkw'),
      [day],
    )
  })

  it('is case-insensitive', () => {
    assert.deepEqual(filterWorkspaces([day, plugin], 'PLUGINS'), [plugin])
  })
})
