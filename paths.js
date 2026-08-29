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
