import { dayStampOf, splitWorkspaces, todayStamp } from './paths.js'

/**
 * Workspace that owns the session currently shown in the main view, or `''`.
 * Ownership comes from `sessionIds`; a session without recorded membership
 * falls back to its `cwd`, so a freshly created folder still resolves.
 * @param {readonly { workspaceId?: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {Record<string, { id?: string, retainedBy?: Record<string, number>, cwd?: string }>} [sessionsById]
 */
export function currentWorkspaceId(items, sessionsById) {
  const list = items ?? []
  const byId = sessionsById ?? {}
  const current = Object.values(byId).find((row) => ((row?.retainedBy?.mainView) ?? 0) > 0)
  if (current === undefined || current === null) return ''
  const owned = list.find((item) => Array.isArray(item.sessionIds) && current.id !== undefined && item.sessionIds.includes(current.id))
  if (owned !== undefined) return owned.workspaceId ?? ''
  if (typeof current.cwd === 'string' && current.cwd !== '') {
    const byPath = list.find((item) => item.path === current.cwd)
    if (byPath !== undefined) return byPath.workspaceId ?? ''
  }
  return ''
}

/**
 * Which day workspaces the official sidebar should hide right now.
 *
 * `mode: 'projects'` hides dated folders except today's and the workspace of
 * the open session, so the list never loses the row the user is looking at.
 * `mode: 'all'` hides nothing. The id set is what the DOM adapter toggles; the
 * counts drive the filter entry and its menu copy.
 * @param {readonly { workspaceId?: string, title?: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {{ mode?: 'projects' | 'all', currentId?: string, now?: Date }} [opts]
 */
export function sidebarFilterModel(items, opts = {}) {
  const all = (items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  const { projects, days } = splitWorkspaces(all)
  const today = todayStamp(opts.now)
  const mode = opts.mode === 'all' ? 'all' : 'projects'
  const currentId = typeof opts.currentId === 'string' ? opts.currentId : ''
  const hidden = new Set()
  if (mode === 'projects') {
    for (const day of days) {
      if (day.workspaceId === currentId) continue
      if (dayStampOf(day) === today) continue
      hidden.add(day.workspaceId)
    }
  }
  return {
    mode,
    today,
    hidden,
    hiddenCount: hidden.size,
    dayCount: days.length,
    projectCount: projects.length,
    currentId,
  }
}
