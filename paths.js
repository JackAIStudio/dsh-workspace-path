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

/**
 * Default view is projects only. A non-empty query searches both kinds so a
 * date can be typed without opening the day list. `view: 'days'` is the extra step.
 * @param {{ items?: readonly object[], query?: string, home?: string, view?: 'projects' | 'days', currentId?: string, now?: Date }} opts
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
    rows: pinCurrentWorkspace(projects.map(mark('project')), opts.currentId),
    dayCount: sortedDays.length,
    projectCount: projects.length,
    today,
  }
}
