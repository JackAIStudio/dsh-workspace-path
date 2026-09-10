window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }, React = require('react'), ReactDOM = require('react-dom'), h = React.createElement
    const css = ".dsh-wspath{position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center}\n.dsh-wspath-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 120ms ease,color 120ms ease}\n.dsh-wspath-btn:hover,.dsh-wspath-btn.is-open{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-panel{box-sizing:border-box;z-index:80;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));max-height:min(440px,calc(100vh - 24px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-panel.is-hero{z-index:120}\n.dsh-wspath-search-row{display:flex;align-items:center;gap:6px;margin:0 4px 6px}\n.dsh-wspath-search-row input{flex:1;min-width:0;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}\n.dsh-wspath-search-row input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}\n.dsh-wspath-add-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-secondary);cursor:pointer}\n.dsh-wspath-add-btn:hover,.dsh-wspath-add-btn.is-active{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-new-box{box-sizing:border-box;display:flex;gap:6px;margin:0 4px 6px;padding:6px;border-radius:8px;background:var(--dsw-alias-interactive-bg-hover)}\n.dsh-wspath-new-box input{flex:1;min-width:0;height:28px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:inherit;font:inherit;font-size:12px}\n.dsh-wspath-new-box button{appearance:none;flex:none;height:28px;padding:0 8px;border:none;border-radius:6px;background:var(--dsw-alias-brand-primary);color:#fff;font-size:12px;cursor:pointer}\n.dsh-wspath-new-box button:disabled{opacity:.5;cursor:default}\n.dsh-wspath-list{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;overflow:auto}\n.dsh-wspath-empty{padding:12px 8px;font-size:13px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-section{flex:none;padding:6px 8px 2px;font-size:11px;font-weight:600;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-back,.dsh-wspath-days-btn{appearance:none;display:flex;align-items:center;gap:6px;width:100%;height:32px;margin:0;padding:0 8px;border:none;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left}\n.dsh-wspath-days-btn{justify-content:space-between;margin-top:4px;flex:none}\n.dsh-wspath-back:hover,.dsh-wspath-days-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-row{box-sizing:border-box;width:100%;display:flex;align-items:center;gap:2px;padding:2px;border-radius:8px}\n.dsh-wspath-row.is-current,.dsh-wspath-row:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.dsh-wspath-item{appearance:none;box-sizing:border-box;min-width:0;flex:1;display:flex;flex-direction:column;gap:2px;margin:0;padding:6px 8px;border:none;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}\n.dsh-wspath-item:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--dsw-alias-brand-primary)}\n.dsh-wspath-title{display:flex;align-items:center;gap:6px;min-width:0}\n.dsh-wspath-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:500}\n.dsh-wspath-badge,.dsh-wspath-kind{flex:none;padding:0 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-1));font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-kind{font-size:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-path{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-actions{display:flex;align-items:center;gap:2px;flex:none}\n.dsh-wspath-icon-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}\n.dsh-wspath-icon-btn:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-status{flex:none;padding:6px 8px 2px;font-size:12px;color:var(--dsw-alias-label-secondary)}\n.dsh-wspath-status.is-error{color:var(--dsw-alias-state-error-primary)}\n.dsh-wspath-hbadge{position:relative;display:inline-flex;align-items:center;flex:none}\n.dsh-wspath-hbtn{appearance:none;display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 8px;border:none;border-radius:12px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;line-height:24px;cursor:pointer;transition:background-color 120ms ease,color 120ms ease;max-width:180px}\n.dsh-wspath-hbtn:hover,.dsh-wspath-hbtn.is-open{background:var(--dsw-alias-interactive-bg-pressed, var(--dsw-alias-border-l2));color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hicon{flex:none;color:inherit;display:inline-flex;align-items:center}\n.dsh-wspath-hname{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1}\n.dsh-wspath-hchev{flex:none;color:var(--dsw-alias-label-tertiary);transition:transform 150ms ease}\n.dsh-wspath-hbtn.is-open .dsh-wspath-hchev{transform:rotate(180deg)}\n.dsh-wspath-hmenu{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(320px,calc(100vw - 16px));padding:6px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-head{padding:4px 8px 6px}\n.dsh-wspath-hmenu-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-hmenu-path{margin-top:3px;font-size:11px;color:var(--dsw-alias-label-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}\n.dsh-wspath-hmenu-divider{height:1px;background:var(--dsw-alias-border-l2);margin:4px 0}\n.dsh-wspath-hmenu-list{display:flex;flex-direction:column;gap:2px}\n.dsh-wspath-hmenu-item{appearance:none;display:flex;align-items:center;gap:8px;width:100%;height:30px;padding:0 8px;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left;transition:background-color 100ms ease,color 100ms ease}\n.dsh-wspath-hmenu-item:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;flex:none;color:var(--dsw-alias-label-tertiary)}\n.dsh-wspath-hmenu-item:hover .dsh-wspath-hmenu-icon{color:var(--dsw-alias-label-primary)}\n.dsh-wspath-hmenu-status{padding:4px 8px;font-size:11px;border-radius:6px;color:var(--dsw-alias-state-success-primary, #10b981);background:rgba(16,185,129,0.1);margin-top:2px;text-align:center}\n.dsh-wspath-sid-badge{position:relative;display:inline-flex;align-items:center;flex:none;margin-left:4px}\n.dsh-wspath-sid-btn{appearance:none;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;line-height:22px;cursor:pointer;transition:all 120ms ease;user-select:none}\n.dsh-wspath-sid-btn:hover,.dsh-wspath-sid-btn.is-open{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.15));border-color:#2563eb;color:#2563eb}\n.dsh-wspath-sid-icon{font-weight:700;font-size:11px;color:var(--dsw-alias-label-tertiary,#888);margin-right:1px}\n.dsh-wspath-sid-popover{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sid-head{padding:2px 4px 6px}\n.dsh-wspath-sid-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}\n.dsh-wspath-sid-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-sid-label{margin-top:6px;font-size:11px;color:var(--dsw-alias-label-tertiary,#888)}\n.dsh-wspath-sid-codebox{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:4px;padding:4px 8px;border-radius:6px;background:var(--dsw-alias-bg-layer-1, rgba(128,128,128,0.08));border:1px solid var(--dsw-alias-border-l2)}\n.dsh-wspath-sid-code{font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;color:var(--dsw-alias-label-primary);user-select:all;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dsh-wspath-sid-copybtn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;flex-shrink:0}\n.dsh-wspath-sid-copybtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:#2563eb}\n"
    if (typeof document !== 'undefined') {
      const id = 'dsh-workspace-path/ui.css'
      let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(id) + ']')
      if (!tag) {
        tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-workspace-path'
        tag.dataset.pluginCss = id
        document.head.appendChild(tag)
      }
      tag.textContent = css
    }
/**
 * Display-only POSIX home abbreviation. Windows drive / UNC homes stay verbatim.
 * A missing, empty, or filesystem-root home leaves `path` unchanged.
 * @param {string} path
 * @param {string | undefined} home
 */
function abbreviateHomePath(path, home) {
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
function hostFileManagerKind(home) {
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
function listCopyableWorkspaces(items, currentSessionId) {
  const rows = (items ?? []).filter((item) => typeof item.path === 'string' && item.path !== '')
  if (currentSessionId === undefined || currentSessionId === '') return rows
  const current = rows.find((item) => Array.isArray(item.sessionIds) && item.sessionIds.includes(currentSessionId))
  if (current === undefined) return rows
  return [current, ...rows.filter((item) => item.workspaceId !== current.workspaceId)]
}

/** Last path segment, accepting both separators. */
function workspaceBasename(path) {
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
function filterWorkspaces(rows, query, home) {
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
function dateStampFromText(text) {
  const raw = String(text ?? '').trim()
  const match = raw.match(/^(?:\([^)]*\)\s*)?(\d{4}-\d{1,2}-\d{1,2})$/)
  return match ? normalizeDayStamp(match[1]) : ''
}

/** @param {string} stamp */
function normalizeDayStamp(stamp) {
  const match = String(stamp ?? '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (!match) return ''
  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
}

/** @param {Date} [now] */
function todayStamp(now = new Date()) {
  return normalizeDayStamp(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
function isDayWorkspace(item) {
  if (dateStampFromText(item?.title)) return true
  if (dateStampFromText(workspaceBasename(item?.path))) return true
  const norm = String(item?.path ?? '').replace(/\\/g, '/')
  return /\/days\/\d{4}-\d{1,2}-\d{1,2}\/?$/.test(norm)
}

/** @param {{ title?: string, path?: string } | null | undefined} item */
function dayStampOf(item) {
  return dateStampFromText(item?.title) || dateStampFromText(workspaceBasename(item?.path))
}

/**
 * @param {readonly { title?: string, path?: string }[]} items
 * @returns {{ projects: typeof items, days: typeof items }}
 */
function splitWorkspaces(items) {
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
function sortDayWorkspaces(days, today = todayStamp()) {
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
function pinCurrentWorkspace(rows, currentId) {
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
function pickerModel(opts = {}) {
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

    const copy = {
      zh: { trigger: '工作区中心 (点击切换)', search: '搜索项目 (也可搜日期)...', empty: '暂无项目工作区', emptyDays: '暂无按天工作区', noMatches: '无匹配工作区', current: '当前工作区', copied: '已复制路径', copyFailed: '复制失败', copyBtn: '复制绝对路径', terminal: '在终端打开', openMac: '在访达中显示', openWindows: '在资源管理器中显示', openGeneric: '在文件管理器中显示', newSubdir: '在当前工作区下新建子目录', createBtn: '创建并进入', creating: '创建中...', promptName: '子目录名称 (如 feature-1)', newSessionInWs: '在此工作区新建会话', clickActionHint: '点击查看快捷操作', sessionTitle: '当前会话', sessionIdTitle: '会话唯一标识 (Session ID)', copySessionId: '复制会话 ID', copiedSessionId: '已复制会话 ID', openInNewWindow: '在新独立窗口中打开', daysEntry: '按天工作区', daysBack: '返回项目', today: '今天', dayKind: '按天', projects: '项目', addWorkspace: '添加工作区…' },
      en: { trigger: 'Workspace Hub (Click to Switch)', search: 'Search projects (dates too)...', empty: 'No project workspaces', emptyDays: 'No day workspaces', noMatches: 'No matching workspaces', current: 'Current workspace', copied: 'Path copied', copyFailed: 'Copy failed', copyBtn: 'Copy absolute path', terminal: 'Open in Terminal', openMac: 'Show in Finder', openWindows: 'Show in File Explorer', openGeneric: 'Show in file manager', newSubdir: 'New subdir in current workspace', createBtn: 'Create & Enter', creating: 'Creating...', promptName: 'Subdirectory name (e.g. feature-1)', newSessionInWs: 'New session here', clickActionHint: 'Click for actions', sessionTitle: 'Current Session', sessionIdTitle: 'Session Identifier (Session ID)', copySessionId: 'Copy Session ID', copiedSessionId: 'Session ID Copied', openInNewWindow: 'Open in New Window', daysEntry: 'Day workspaces', daysBack: 'Back to projects', today: 'Today', dayKind: 'Day', projects: 'Projects', addWorkspace: 'Add workspace…' },
    }
    const locale = () => (typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')) ? copy.en : copy.zh
    function hostRevealLabel(t, home) {
      const kind = hostFileManagerKind(home)
      return kind === 'mac' ? t.openMac : (kind === 'windows' ? t.openWindows : t.openGeneric)
    }
    async function writeClipboard(text) {
      try { if (navigator?.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true } } catch {}
      return false
    }
    function useSnapshot(store) {
      const [, bump] = React.useState(0)
      React.useEffect(() => store?.subscribe?.(() => bump((n) => n + 1)), [store])
      return store?.getSnapshot?.()
    }
    function usePopover(open, setOpen, place, triggerRef, panelClass) {
      React.useEffect(() => {
        if (!open) return undefined
        place()
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        const onPtr = (e) => { if (!triggerRef.current?.contains(e.target) && !e.target.closest?.(panelClass)) setOpen(false) }
        window.addEventListener('resize', place)
        document.addEventListener('keydown', onKey)
        document.addEventListener('pointerdown', onPtr)
        return () => { window.removeEventListener('resize', place); document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPtr) }
      }, [open, place])
    }
    function usePanelReset(open, extras) {
      const [query, setQuery] = React.useState(''), [view, setView] = React.useState('projects')
      const [status, setStatus] = React.useState(''), [error, setError] = React.useState(false)
      React.useEffect(() => {
        if (open) return undefined
        setQuery(''); setView('projects'); setStatus(''); setError(false)
        extras?.()
      }, [open])
      return { query, setQuery, view, setView, status, setStatus, error, setError }
    }
    const svg = (size, children) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, children)
    const IconFolder = ({ size = 18 }) => svg(size, [h('path', { key: 'a', d: 'M2.5 4.75A1.25 1.25 0 0 1 3.75 3.5h2.2L7.2 5h5.05A1.25 1.25 0 0 1 13.5 6.25v5.5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75z', stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { key: 'b', d: 'M6 9.2h4M6 11h2.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })])
    const IconCopy = ({ size = 14 }) => svg(size, [h('rect', { key: 'a', x: 5, y: 5, width: 8, height: 9, rx: 1.5, stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { key: 'b', d: 'M3.5 11H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2h6.5a1 1 0 0 1 1 1v.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })])
    const IconTerminal = ({ size = 14 }) => svg(size, h('path', { d: 'M3 4.5l4 3.5-4 3.5M8 11.5h5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconOpen = ({ size = 14 }) => svg(size, h('path', { d: 'M6.5 3.5H4.25A1.75 1.75 0 0 0 2.5 5.25v6.5A1.75 1.75 0 0 0 4.25 13.5h6.5a1.75 1.75 0 0 0 1.75-1.75V9.5M9 3.5h3.5V7M12.5 3.5 8 8', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconPlus = ({ size = 14 }) => svg(size, h('path', { d: 'M8 3.5v9M3.5 8h9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }))
    const IconChevronDown = ({ size = 12, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className }, h('path', { d: 'M4 6l4 4 4-4', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconChevronLeft = ({ size = 12 }) => svg(size, h('path', { d: 'M10 4L6 8l4 4', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconChat = ({ size = 13 }) => svg(size, h('path', { d: 'M2.5 3.5A1.5 1.5 0 0 1 4 2h8a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 12 11H5.5L2.8 13.7A.5.5 0 0 1 2 13.3V3.5z', stroke: 'currentColor', strokeWidth: 1.25, strokeLinejoin: 'round' }))

    function WorkspaceRow({ t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel }) {
      const isCur = ws.workspaceId === currentId, display = abbreviateHomePath(ws.path, home)
      const badges = []
      if (ws.isToday) badges.push(h('span', { key: 'today', className: 'dsh-wspath-badge' }, t.today))
      if (isCur) badges.push(h('span', { key: 'cur', className: 'dsh-wspath-badge' }, t.current))
      if (ws.kind === 'day' && !ws.isToday) badges.push(h('span', { key: 'kind', className: 'dsh-wspath-kind' }, t.dayKind))
      return h('div', { className: 'dsh-wspath-row' + (isCur ? ' is-current' : '') },
        h('button', { type: 'button', className: 'dsh-wspath-item', title: ws.path, onClick: () => onSelect(ws) },
          h('span', { className: 'dsh-wspath-title' }, h('span', { className: 'dsh-wspath-name' }, ws.title || ws.path), badges),
          variant === 'hub' ? h('span', { className: 'dsh-wspath-path' }, display) : null,
        ),
        variant === 'hub' ? h('div', { className: 'dsh-wspath-actions' },
          h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.copyBtn, onClick: (e) => { e.stopPropagation(); onCopy(ws) } }, h(IconCopy)),
          canOpen ? h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.terminal, onClick: (e) => { e.stopPropagation(); onTerminal(ws) } }, h(IconTerminal)) : null,
          canOpen ? h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: revealLabel, onClick: (e) => { e.stopPropagation(); onOpen(ws) } }, h(IconOpen)) : null,
        ) : null,
      )
    }

    function PathPanel(props) {
      const { t, model, query, onQuery, inputRef, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, onCreateSubdir, showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, onAddWorkspace, canAddWorkspace, status, error, revealLabel, onOpenDays, onBack } = props
      const rows = model.rows, searching = model.searching, view = model.view
      const projectRows = searching ? rows.filter((ws) => ws.kind === 'project') : (view === 'projects' ? rows : [])
      const dayRows = searching ? rows.filter((ws) => ws.kind === 'day') : (view === 'days' ? rows : [])
      const emptyText = query ? t.noMatches : (view === 'days' ? t.emptyDays : t.empty)
      const renderGroup = (label, list) => list.length === 0 ? null : h(React.Fragment, null,
        searching ? h('div', { className: 'dsh-wspath-section' }, label) : null,
        list.map((ws) => h(WorkspaceRow, { key: ws.workspaceId, t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel })),
      )
      const plusTitle = variant === 'picker' ? t.addWorkspace : t.newSubdir
      const plusClick = variant === 'picker' ? onAddWorkspace : () => setShowNewBox((v) => !v)
      const showPlus = variant === 'hub' || (variant === 'picker' && canAddWorkspace)
      return h(React.Fragment, null,
        h('div', { className: 'dsh-wspath-search-row' },
          h('input', { ref: inputRef, type: 'search', value: query, placeholder: t.search, 'aria-label': t.search, onChange: (e) => onQuery(e.target.value), onKeyDown: (e) => { if (e.key === 'Enter' && rows[0]) { e.preventDefault(); onSelect(rows[0]) } } }),
          showPlus ? h('button', { type: 'button', className: 'dsh-wspath-add-btn' + (showNewBox ? ' is-active' : ''), title: plusTitle, 'aria-label': plusTitle, onClick: plusClick }, h(IconPlus)) : null,
        ),
        view === 'days' ? h('button', { type: 'button', className: 'dsh-wspath-back', onClick: onBack }, h(IconChevronLeft), t.daysBack) : null,
        variant === 'hub' && showNewBox ? h('form', { className: 'dsh-wspath-new-box', onSubmit: (e) => { e.preventDefault(); onCreateSubdir() } },
          h('input', { type: 'text', autoFocus: true, value: newSubdir, placeholder: t.promptName, onChange: (e) => setNewSubdir(e.target.value) }),
          h('button', { type: 'submit', disabled: creatingSubdir || !newSubdir.trim() }, creatingSubdir ? t.creating : t.createBtn),
        ) : null,
        rows.length === 0 ? h('p', { className: 'dsh-wspath-empty' }, emptyText) : h('div', { className: 'dsh-wspath-list' },
          view === 'days' ? renderGroup(t.daysEntry, dayRows) : h(React.Fragment, null, renderGroup(t.projects, projectRows), renderGroup(t.daysEntry, dayRows)),
        ),
        view === 'projects' && !searching && model.dayCount > 0 ? h('button', { type: 'button', className: 'dsh-wspath-days-btn', onClick: onOpenDays }, h('span', null, t.daysEntry), h('span', null, String(model.dayCount))) : null,
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : '') }, status) : null,
      )
    }

    function PathButton(props) {
      const { wide, workspaces, connection, startSession } = props
      const t = locale(), inputRef = React.useRef(null), buttonRef = React.useRef(null), copiedTimer = React.useRef(null)
      const [open, setOpen] = React.useState(false)
      const [showNewBox, setShowNewBox] = React.useState(false), [newSubdir, setNewSubdir] = React.useState(''), [creatingSubdir, setCreatingSubdir] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const panel = usePanelReset(open, () => { setShowNewBox(false); setNewSubdir('') })
      const wsSnap = useSnapshot(workspaces?.list), host = useSnapshot(connection?.hostDescription)
      const items = wsSnap?.items || [], currentId = wsSnap?.current, home = host?.home
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const currentWs = items.find((it) => it.workspaceId === currentId)
      const model = pickerModel({ items, query: panel.query, home, view: panel.view, currentId })
      const place = React.useCallback(() => {
        const btn = buttonRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = wide === false ? r.right + 8 : r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), bottom: window.innerHeight - r.top + 8, width: w })
      }, [wide])
      usePopover(open, setOpen, place, buttonRef, '.dsh-wspath-panel')
      React.useEffect(() => { if (open) inputRef.current?.focus() }, [open])
      const flash = (msg, isErr = false) => {
        panel.setError(isErr); panel.setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => panel.setStatus(''), 1500)
      }
      const onSelect = (ws) => { setOpen(false); if (typeof startSession === 'function') startSession(ws.workspaceId) }
      const onCopy = async (ws) => { const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed, !ok) }
      const onOpen = (ws) => canOpen && connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true))
      const onTerminal = (ws) => canOpen && connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true))
      const onCreateSubdir = async () => {
        const name = newSubdir.trim()
        if (!name || !currentWs?.path || creatingSubdir) return
        setCreatingSubdir(true)
        try {
          const childPath = await workspaces.createChildDirectory(currentWs.path, name)
          const newWs = await workspaces.create({ path: childPath })
          setOpen(false)
          if (typeof startSession === 'function') startSession(newWs.workspaceId)
        } catch (e) { flash(e?.message || 'Create failed', true) } finally { setCreatingSubdir(false) }
      }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel', style: { position: 'fixed', left: coords.left + 'px', bottom: coords.bottom + 'px', width: coords.width + 'px' } },
              h(PathPanel, { t, model, query: panel.query, onQuery: panel.setQuery, inputRef, currentId: currentWs?.workspaceId, home, variant: 'hub', canOpen, onSelect, onCopy, onOpen, onTerminal, onCreateSubdir, showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, status: panel.status, error: panel.error, revealLabel: hostRevealLabel(t, home), onOpenDays: () => { panel.setQuery(''); panel.setView('days') }, onBack: () => { panel.setQuery(''); panel.setView('projects') } }),
            ), document.body) : null
      return h('div', { className: wide === false ? 'dsh-wspath' : 'dsh-wspath dsh-wspath-wide' },
        h('button', { ref: buttonRef, type: 'button', className: 'dsh-wspath-btn' + (open ? ' is-open' : ''), title: t.trigger, 'aria-label': t.trigger, onClick: () => { setOpen((v) => !v); panel.setStatus('') } }, h(IconFolder, { size: 18 })),
        node,
      )
    }

    function HeroWorkspacePicker(props) {
      const { open, anchorRef, selectedId, onPick, onClose, useWorkspaces, createWorkspace, useDirectoryFlow, renderSlot } = props
      const t = locale(), inputRef = React.useRef(null)
      const [coords, setCoords] = React.useState(null)
      const [flowOpen, setFlowOpen] = React.useState(false), [pickingFolder, setPickingFolder] = React.useState(false)
      const panel = usePanelReset(open)
      const snap = typeof useWorkspaces === 'function' ? useWorkspaces((state) => state) : null
      const items = snap?.items || []
      const flowAvailable = typeof useDirectoryFlow === 'function' ? useDirectoryFlow((occupied) => occupied) : false
      const model = pickerModel({ items, query: panel.query, view: panel.view, currentId: selectedId })
      const place = React.useCallback(() => {
        const btn = anchorRef?.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [anchorRef])
      usePopover(open, (next) => { if (!next) onClose?.() }, place, anchorRef || { current: null }, '.dsh-wspath-panel')
      React.useEffect(() => { if (open) inputRef.current?.focus() }, [open])
      const adoptDirectory = (path) => Promise.resolve(createWorkspace({ path })).then((workspace) => {
        setFlowOpen(false)
        if (workspace?.workspaceId) onPick(workspace.workspaceId)
      }).catch((reason) => {
        setFlowOpen(false)
        panel.setError(true)
        panel.setStatus(reason instanceof Error ? reason.message : String(reason))
      })
      const openDirectoryFlow = React.useCallback(() => {
        onClose?.(); panel.setError(false); panel.setStatus(''); setFlowOpen(true)
      }, [onClose])
      const emptyReady = (snap?.phase === 'ready' || snap?.phase === undefined) && items.length === 0 && flowAvailable
      React.useEffect(() => { if (open && emptyReady && !flowOpen && !pickingFolder) openDirectoryFlow() }, [open, emptyReady, flowOpen, pickingFolder, openDirectoryFlow])
      const flowOwner = {
        open: flowOpen, busy: pickingFolder,
        onPicked: (path) => { setPickingFolder(true); adoptDirectory(path).finally(() => setPickingFolder(false)) },
        onCancel: () => setFlowOpen(false),
        onError: (message) => { setFlowOpen(false); panel.setError(true); panel.setStatus(message) },
      }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel is-hero', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
              h(PathPanel, { t, model, query: panel.query, onQuery: panel.setQuery, inputRef, currentId: selectedId, variant: 'picker', onSelect: (ws) => onPick(ws.workspaceId), canAddWorkspace: flowAvailable && !flowOpen && !pickingFolder, onAddWorkspace: openDirectoryFlow, status: panel.status, error: panel.error, onOpenDays: () => { panel.setQuery(''); panel.setView('days') }, onBack: () => { panel.setQuery(''); panel.setView('projects') } }),
            ), document.body) : null
      return h(React.Fragment, null, node, typeof renderSlot === 'function' ? renderSlot('conversation.hero.workspace.directoryFlow', flowOwner) : null)
    }

    function findSessionWorkspace(wsSnap, sesSnap, sessionId) {
      if (!sessionId) return null
      const items = wsSnap?.items || []
      const bySes = items.find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(sessionId))
      if (bySes) return bySes
      const cwd = sesSnap?.byId?.[sessionId]?.cwd
      return cwd ? (items.find((it) => it.path === cwd) || null) : null
    }

    function WorkspaceHeaderBadge({ sessionId, workspaces, sessions, connection, startSession }) {
      const t = locale(), badgeRef = React.useRef(null)
      const [open, setOpen] = React.useState(false), [coords, setCoords] = React.useState(null), [status, setStatus] = React.useState('')
      const copiedTimer = React.useRef(null), wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription), home = host?.home
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const targetId = sessionId || sesSnap?.current, ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      const display = ws ? (abbreviateHomePath(ws.path, home) || ws.path) : ''
      const revealLabel = hostRevealLabel(t, home)
      const place = React.useCallback(() => {
        const btn = badgeRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(320, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [])
      usePopover(open, setOpen, place, badgeRef, '.dsh-wspath-hmenu')
      if (!ws) return null
      const flash = (msg) => { setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => { setStatus(''); setOpen(false) }, 1200)
      }
      const onCopy = async () => { if (ws.path) flash((await writeClipboard(ws.path)) ? t.copied : t.copyFailed) }
      const onOpenFolder = () => { if (canOpen && ws.path) { connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }); setOpen(false) } }
      const onOpenTerminal = () => { if (canOpen && ws.path) { connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }); setOpen(false) } }
      const onNewSession = async () => { setOpen(false)
        if (ws.workspaceId && typeof startSession === 'function') startSession(ws.workspaceId)
        else if (ws.path && workspaces?.create) {
          try { const res = await workspaces.create({ path: ws.path }); if (res?.workspaceId && typeof startSession === 'function') startSession(res.workspaceId) } catch {}
        }
      }
      const menu = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-hmenu', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
              h('div', { className: 'dsh-wspath-hmenu-head' },
                h('div', { className: 'dsh-wspath-hmenu-title' }, h(IconFolder, { size: 14 }), h('span', { className: 'dsh-wspath-hmenu-titletxt' }, ws.title || ws.path)),
                h('div', { className: 'dsh-wspath-hmenu-path', title: ws.path }, display),
              ),
              status ? h('div', { className: 'dsh-wspath-hmenu-status' }, status) : null,
              h('div', { className: 'dsh-wspath-hmenu-divider' }),
              h('div', { className: 'dsh-wspath-hmenu-list' },
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onCopy },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconCopy, { size: 14 })), h('span', null, t.copyBtn)),
                canOpen ? h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onOpenFolder },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconOpen, { size: 14 })), h('span', null, revealLabel)) : null,
                canOpen ? h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onOpenTerminal },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconTerminal, { size: 14 })), h('span', null, t.terminal)) : null,
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onNewSession },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconPlus, { size: 14 })), h('span', null, t.newSessionInWs)),
              ),
            ), document.body) : null
      const tip = `${t.current}: ${ws.title || ws.path}\n${ws.path}\n${t.clickActionHint}`
      return h('div', { className: 'dsh-wspath-hbadge' },
        h('button', { ref: badgeRef, type: 'button', className: 'dsh-wspath-hbtn' + (open ? ' is-open' : ''), title: tip, 'aria-label': tip, onClick: () => setOpen((v) => !v) },
          h('span', { className: 'dsh-wspath-hicon' }, h(IconFolder, { size: 13 })),
          h('span', { className: 'dsh-wspath-hname' }, ws.title || ws.path),
          h(IconChevronDown, { size: 10, className: 'dsh-wspath-hchev' }),
        ),
        menu,
      )
    }

    function SessionIdBadge({ sessionId, sessions }) {
      const t = locale(), badgeRef = React.useRef(null)
      const [open, setOpen] = React.useState(false), [coords, setCoords] = React.useState(null), [status, setStatus] = React.useState('')
      const hoverTimer = React.useRef(null), copiedTimer = React.useRef(null), sesSnap = useSnapshot(sessions?.list)
      const targetId = sessionId || sesSnap?.current
      const title = targetId ? (sesSnap?.byId?.[targetId]?.displayTitle || sesSnap?.byId?.[targetId]?.title || '') : ''
      const shortId = targetId ? (targetId.startsWith('session-') ? targetId.slice(8, 16) : targetId.slice(0, 8)) : ''
      const place = React.useCallback(() => {
        const btn = badgeRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [])
      usePopover(open, setOpen, place, badgeRef, '.dsh-wspath-sid-popover')
      if (!targetId) return null
      const onEnter = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setOpen(true) }
      const onLeave = () => { hoverTimer.current = setTimeout(() => setOpen(false), 160) }
      const flash = (msg) => { setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => { setStatus('') }, 1500)
      }
      const onCopyId = async () => { flash((await writeClipboard(targetId)) ? t.copiedSessionId : t.copyFailed) }
      const onNewWindow = () => { setOpen(false); window.open(`/?session=${encodeURIComponent(targetId)}`, '_blank') }
      const popover = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-sid-popover', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' }, onMouseEnter: onEnter, onMouseLeave: onLeave },
              h('div', { className: 'dsh-wspath-sid-head' },
                h('div', { className: 'dsh-wspath-sid-title' }, h(IconChat, { size: 14 }), h('span', { className: 'dsh-wspath-sid-titletxt' }, title || t.sessionTitle)),
                h('div', { className: 'dsh-wspath-sid-label' }, t.sessionIdTitle),
                h('div', { className: 'dsh-wspath-sid-codebox' },
                  h('span', { className: 'dsh-wspath-sid-code' }, targetId),
                  h('button', { type: 'button', className: 'dsh-wspath-sid-copybtn', title: t.copySessionId, onClick: onCopyId }, h(IconCopy, { size: 13 })),
                ),
              ),
              status ? h('div', { className: 'dsh-wspath-hmenu-status' }, status) : null,
              h('div', { className: 'dsh-wspath-hmenu-divider' }),
              h('div', { className: 'dsh-wspath-hmenu-list' },
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onCopyId },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconCopy, { size: 14 })), h('span', null, status || t.copySessionId)),
                h('button', { type: 'button', className: 'dsh-wspath-hmenu-item', onClick: onNewWindow },
                  h('span', { className: 'dsh-wspath-hmenu-icon' }, h(IconOpen, { size: 14 })), h('span', null, t.openInNewWindow)),
              ),
            ), document.body) : null
      return h('div', { className: 'dsh-wspath-sid-badge', onMouseEnter: onEnter, onMouseLeave: onLeave },
        h('button', {
          ref: badgeRef, type: 'button', className: 'dsh-wspath-sid-btn' + (open ? ' is-open' : ''),
          title: `${title || '会话'}\nID: ${targetId}\n(悬停查看详情，点击复制)`, 'aria-label': '会话 ID', onClick: onCopyId,
        }, h('span', { className: 'dsh-wspath-sid-icon' }, '#'), h('span', { className: 'dsh-wspath-sid-hash' }, shortId)),
        popover,
      )
    }

    const inject = ['slots', 'workspaces', 'sessions', 'connection']
    function apply(ctx) {
      let uiWorkspace
      if (typeof ctx.inject === 'function') {
        ctx.inject(['uiWorkspace'], (sub) => {
          uiWorkspace = sub.uiWorkspace
          return () => { uiWorkspace = undefined }
        })
      }
      const startSession = (workspaceId) => {
        const owner = (uiWorkspace && typeof uiWorkspace.startSession === 'function') ? uiWorkspace : ctx.workspaces
        if (owner && typeof owner.startSession === 'function') owner.startSession(workspaceId)
      }
      const flowSource = {
        getSnapshot: () => (typeof ctx.slots.entries === 'function' ? ctx.slots.entries('conversation.hero.workspace.directoryFlow').length > 0 : false),
        subscribe: (listener) => (typeof ctx.slots.subscribe === 'function' ? ctx.slots.subscribe('conversation.hero.workspace.directoryFlow', listener) : () => {}),
      }
      ctx.slots.inject('sidebar.footer.action', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'sidebar.footer.action', id: 'dsh-workspace-path' }, (props) =>
            h(PathButton, { wide: props?.wide, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.session.header.actions', () => {
        let disposeWs, disposeSid
        try {
          disposeWs = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-path-badge', order: -20 }, (props) =>
            h(WorkspaceHeaderBadge, { sessionId: props?.sessionId, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
          disposeSid = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-session-id-badge', order: -19 }, (props) =>
            h(SessionIdBadge, { sessionId: props?.sessionId, sessions: ctx.sessions }))
        } catch { disposeWs = undefined; disposeSid = undefined }
        return () => { if (disposeWs) disposeWs(); if (disposeSid) disposeSid() }
      })
      ctx.slots.inject('conversation.hero.workspace', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.hero.workspace',
            id: 'dsh-workspace-path-hero',
            children: { 'conversation.hero.workspace.directoryFlow': { kind: 'single', scope: 'root' } },
            inject: () => ({
              createWorkspace: (input) => ctx.workspaces.create(input),
              hooks: { directoryFlow: flowSource },
            }),
          }, (props) => h(HeroWorkspacePicker, props))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
    }
    module.exports.apply = apply
    module.exports.inject = inject

    return module.exports
  },
})
