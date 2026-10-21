/**
 * Display-only POSIX home abbreviation. Windows drive / UNC homes stay verbatim.
 * A missing, empty, or filesystem-root home leaves `path` unchanged.
 * @param {string} path
 * @param {string | undefined} home
 */
export function abbreviateHomePath(path, home) {
  if (typeof path !== 'string' || path === '') return ''
  if (typeof home !== 'string' || home === '' || home === '/' || home === '\\') return path
  if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return path
  const normPath = path.replace(/\\/g, '/')
  const normHome = home.replace(/\\/g, '/').replace(/\/+$/, '')
  if (normHome === '' || normHome === '/') return path
  if (normPath === normHome) return '~'
  if (normPath.startsWith(`${normHome}/`)) return `~${normPath.slice(normHome.length)}`
  return path
}

/**
 * Which OS file manager `host.openPath` will raise on this Host.
 * Inferred from the Host home path only (the folder opens on the Host desktop,
 * never inside the DSH sidebar).
 * @param {string | undefined} home
 * @returns {'mac' | 'windows' | 'generic'}
 */
export function hostFileManagerKind(home) {
  if (typeof home !== 'string' || home === '') return 'generic'
  if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return 'windows'
  if (home === '/Users' || home.startsWith('/Users/')) return 'mac'
  return 'generic'
}

/**
 * Workspaces that have a real directory, current session's workspace first.
 * @param {readonly { workspaceId: string, path?: string, sessionIds?: readonly string[] }[]} items
 * @param {string | undefined} currentSessionId
 */
export function listCopyableWorkspaces(items, currentSessionId) {
  const rows = (items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  if (currentSessionId === undefined || currentSessionId === '') return rows
  const current = rows.find((item) => Array.isArray(item.sessionIds) && item.sessionIds.includes(currentSessionId))
  if (current === undefined) return rows
  return [current, ...rows.filter((item) => item.workspaceId !== current.workspaceId)]
}

/** Last path segment, accepting both separators. */
export function workspaceBasename(path) {
  if (typeof path !== 'string' || path === '') return ''
  const trimmed = path.replace(/[/\\]+$/, '')
  const parts = trimmed.split(/[/\\]/)
  const base = parts[parts.length - 1]
  return base !== undefined && base !== '' ? base : trimmed
}

/**
 * Case-insensitive filter on title, absolute path, basename, and ~ display path.
 * @param {readonly { title?: string, path?: string }[]} rows
 * @param {string} query
 * @param {string | undefined} home
 */
export function filterWorkspaces(rows, query, home) {
  const needle = String(query ?? '').trim().toLowerCase()
  if (needle === '') return rows
  return rows.filter((item) => {
    const title = String(item.title ?? '').toLowerCase()
    const path = String(item.path ?? '').toLowerCase()
    const base = workspaceBasename(item.path).toLowerCase()
    const short = abbreviateHomePath(item.path ?? '', home).toLowerCase()
    return title.includes(needle) || path.includes(needle) || base.includes(needle) || short.includes(needle)
  })
}

/** @param {string | undefined} text */
export function dateStampFromText(text) {
  const raw = String(text ?? '').trim()
  const match = raw.match(/^(?:\([^)]*\)\s*)?(\d{4}-\d{1,2}-\d{1,2})$/)
  return match ? normalizeDayStamp(match[1]) : ''
}

/** @param {string} stamp */
export function normalizeDayStamp(stamp) {
  const match = String(stamp ?? '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (!match) return ''
  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
}

/** @param {Date} [now] */
export function todayStamp(now = new Date()) {
  return normalizeDayStamp(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
export function isDayWorkspace(item) {
  if (dateStampFromText(item?.title)) return true
  if (dateStampFromText(workspaceBasename(item?.path))) return true
  const norm = String(item?.path ?? '').replace(/\\/g, '/')
  return /\/days\/\d{4}-\d{1,2}-\d{1,2}\/?$/.test(norm)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
export function dayStampOf(item) {
  return dateStampFromText(item?.title) || dateStampFromText(workspaceBasename(item?.path))
}

/**
 * @param {readonly { title?: string, path?: string }[]} items
 * @returns {{ projects: typeof items, days: typeof items }}
 */
export function splitWorkspaces(items) {
  const projects = []
  const days = []
  for (const item of items ?? []) {
    if (isDayWorkspace(item)) days.push(item)
    else projects.push(item)
  }
  return { projects, days }
}

/**
 * Today first, then newest date first. Unparseable day rows sink.
 * @param {readonly { title?: string, path?: string }[]} days
 * @param {string} [today]
 */
export function sortDayWorkspaces(days, today = todayStamp()) {
  return [...(days ?? [])].sort((a, b) => {
    const aStamp = dayStampOf(a)
    const bStamp = dayStampOf(b)
    const aToday = aStamp === today ? 0 : 1
    const bToday = bStamp === today ? 0 : 1
    if (aToday !== bToday) return aToday - bToday
    if (aStamp && bStamp && aStamp !== bStamp) return aStamp < bStamp ? 1 : -1
    if (aStamp && !bStamp) return -1
    if (!aStamp && bStamp) return 1
    return 0
  })
}

/**
 * Pin `currentId` to the front when it is already in `rows`. Day workspaces
 * must not be injected into a project list this way.
 * @param {readonly { workspaceId?: string }[]} rows
 * @param {string | undefined} currentId
 */
export function pinCurrentWorkspace(rows, currentId) {
  if (!currentId) return [...(rows ?? [])]
  const current = (rows ?? []).find((item) => item.workspaceId === currentId)
  if (current === undefined) return [...(rows ?? [])]
  return [current, ...(rows ?? []).filter((item) => item.workspaceId !== current.workspaceId)]
}

function readUsage(usageMap, ws) {
  const val = usageMap?.[ws?.workspaceId] ?? usageMap?.[ws?.path]
  if (typeof val === 'number' && Number.isFinite(val)) return { lastUsedAt: val, count: 1 }
  if (val && typeof val === 'object') return val
  return undefined
}

/**
 * Last-used instant of one workspace: its newest session activity or manual
 * interaction (copy, dev, git, terminal, reveal, select), falling back to
 * the workspace's own mutation time for a workspace with no activity.
 * @param {{ workspaceId?: string, sessionIds?: readonly string[], updatedAt?: string }} ws
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
export function lastUsedAt(ws, sessionsById, usageMap) {
  let latest = 0
  for (const id of ws?.sessionIds ?? []) {
    const at = sessionsById?.[id]?.updatedAt
    if (typeof at === 'number' && Number.isFinite(at) && at > latest) latest = at
  }
  const explicit = readUsage(usageMap, ws)?.lastUsedAt
  if (typeof explicit === 'number' && Number.isFinite(explicit) && explicit > latest) latest = explicit
  if (latest > 0) return latest
  const touched = Date.parse(String(ws?.updatedAt ?? ''))
  return Number.isFinite(touched) ? touched : 0
}

/**
 * Cumulative usage count: explicit manual interactions plus existing session count.
 * @param {{ workspaceId?: string, sessionIds?: readonly string[] }} ws
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
export function usageCount(ws, usageMap) {
  const manual = readUsage(usageMap, ws)?.count
  const sessionCount = Array.isArray(ws?.sessionIds) ? ws.sessionIds.length : 0
  return (typeof manual === 'number' && Number.isFinite(manual) ? manual : 0) + sessionCount
}

/**
 * Most recently / frequently used first; never-used rows keep their host order.
 * The sort is stable, so equal timestamps and counts preserve the registry order.
 * @param {readonly object[]} rows
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
export function sortByRecentUse(rows, sessionsById, usageMap) {
  return (rows ?? [])
    .map((row, index) => ({
      row,
      index,
      at: lastUsedAt(row, sessionsById, usageMap),
      count: usageCount(row, usageMap),
    }))
    .sort((a, b) => (b.at - a.at) || (b.count - a.count) || (a.index - b.index))
    .map((entry) => entry.row)
}

/**
 * Project list order: most recently / frequently used first, with the current
 * workspace leading only when it ties the newest row.
 * @param {readonly object[]} rows
 * @param {string | undefined} currentId
 * @param {Record<string, { updatedAt?: number }> | undefined} sessionsById
 * @param {Record<string, { lastUsedAt?: number, count?: number } | number> | undefined} usageMap
 */
export function orderProjectsByRecentUse(rows, currentId, sessionsById, usageMap) {
  const sorted = sortByRecentUse(rows, sessionsById, usageMap)
  if (!currentId || sorted.length === 0) return sorted
  const current = sorted.find((item) => item.workspaceId === currentId)
  if (current === undefined) return sorted
  const curAt = lastUsedAt(current, sessionsById, usageMap)
  const topAt = lastUsedAt(sorted[0], sessionsById, usageMap)
  if (curAt !== topAt) return sorted
  const curCount = usageCount(current, usageMap)
  const topCount = usageCount(sorted[0], usageMap)
  if (curCount < topCount) return sorted
  return [current, ...sorted.filter((item) => item.workspaceId !== currentId)]
}

/**
 * Display label of one git summary row: '' for non-repositories, '✓' for a
 * clean tree, '● n' for n pending changes, '?' when the probe failed (-1).
 * @param {{ isRepo?: boolean, changed?: number } | null | undefined} info
 */
export function gitStatusLabel(info) {
  if (!info || info.isRepo !== true) return ''
  if (info.changed === -1) return '?'
  return info.changed > 0 ? `● ${info.changed}` : '✓'
}

/**
 * Whether a git summary row reads as "has pending changes" (an unknown probe
 * result counts as pending so the marker never claims a false clean).
 * @param {{ isRepo?: boolean, changed?: number } | null | undefined} info
 */
export function isGitDirty(info) {
  return Boolean(info && info.isRepo === true && info.changed !== 0)
}

/**
 * Default view is projects only, most recently used first. A non-empty query
 * searches both kinds so a date can be typed without opening the day list.
 * `view: 'days'` is the extra step.
 * @param {{ items?: readonly object[], query?: string, home?: string, view?: 'projects' | 'days', currentId?: string, now?: Date, sessionsById?: Record<string, { updatedAt?: number }> }} opts
 */
export function pickerModel(opts = {}) {
  const items = (opts.items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  const { projects, days } = splitWorkspaces(items)
  const today = todayStamp(opts.now)
  const sortedDays = sortDayWorkspaces(days, today)
  const view = opts.view === 'days' ? 'days' : 'projects'
  const searching = String(opts.query ?? '').trim() !== ''
  const mark = (kind) => (row) => ({ ...row, kind, isToday: dayStampOf(row) === today })
  if (view === 'days') {
    const rows = filterWorkspaces(sortedDays, opts.query, opts.home).map(mark('day'))
    return { view, searching, rows: pinCurrentWorkspace(rows, opts.currentId), dayCount: sortedDays.length, projectCount: projects.length, today }
  }
  if (searching) {
    const projectHits = filterWorkspaces(projects, opts.query, opts.home).map(mark('project'))
    const dayHits = filterWorkspaces(sortedDays, opts.query, opts.home).map(mark('day'))
    return { view, searching: true, rows: [...projectHits, ...dayHits], dayCount: sortedDays.length, projectCount: projects.length, today }
  }
  return {
    view,
    searching: false,
    rows: orderProjectsByRecentUse(projects, opts.currentId, opts.sessionsById, opts.usageMap).map(mark('project')),
    dayCount: sortedDays.length,
    projectCount: projects.length,
    today,
  }
}
