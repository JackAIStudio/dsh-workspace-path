    const copy = {
      zh: { trigger: '工作区中心 (点击切换)', search: '搜索项目 (也可搜日期)...', empty: '暂无项目工作区', emptyDays: '暂无按天工作区', noMatches: '无匹配工作区', current: '当前工作区', copied: '已复制路径', copyFailed: '复制失败', copyBtn: '复制绝对路径', terminal: '在终端打开', openMac: '在访达中显示', openWindows: '在资源管理器中显示', openGeneric: '在文件管理器中显示', newSessionInWs: '在此工作区新建会话', clickActionHint: '点击查看快捷操作', sessionTitle: '当前会话', sessionIdTitle: '会话唯一标识 (Session ID)', copySessionId: '复制会话 ID', copiedSessionId: '已复制会话 ID', openInNewWindow: '在系统浏览器中打开', daysEntry: '按天工作区', daysBack: '返回项目', today: '今天', dayKind: '按天', projects: '项目', addWorkspace: '添加工作区…', pickerUnavailable: '当前宿主没有可用的目录选择器', gitClean: '工作区干净', gitDirty: '{n} 个未提交改动', gitUnknown: 'git 状态未知', openWeb: 'Web', openWebTip: '在系统默认浏览器中打开当前会话的 Harness 界面', openWebFailed: '失败' },
      en: { trigger: 'Workspace Hub (Click to Switch)', search: 'Search projects (dates too)...', empty: 'No project workspaces', emptyDays: 'No day workspaces', noMatches: 'No matching workspaces', current: 'Current workspace', copied: 'Path copied', copyFailed: 'Copy failed', copyBtn: 'Copy absolute path', terminal: 'Open in Terminal', openMac: 'Show in Finder', openWindows: 'Show in File Explorer', openGeneric: 'Show in file manager', newSessionInWs: 'New session here', clickActionHint: 'Click for actions', sessionTitle: 'Current Session', sessionIdTitle: 'Session Identifier (Session ID)', copySessionId: 'Copy Session ID', copiedSessionId: 'Session ID Copied', openInNewWindow: 'Open in system browser', daysEntry: 'Day workspaces', daysBack: 'Back to projects', today: 'Today', dayKind: 'Day', projects: 'Projects', addWorkspace: 'Add workspace…', pickerUnavailable: 'No directory picker is available on this host', gitClean: 'Clean working tree', gitDirty: '{n} uncommitted change(s)', gitUnknown: 'git status unavailable', openWeb: 'Web', openWebTip: 'Open this session in the system default browser', openWebFailed: 'Failed' },
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
    // 本插件通过 Portal 挂到 body 的浮层：它们不在触发器的 DOM 子树里。
    // 点它们内部不算“点外部”，否则 pointerdown 会先关掉面板、把浮层一起卸载，
    // 目标按钮永远收不到 click（保存并启动无效、Hero 打开方式菜单点不动都源于此）。
    const PORTAL_SURFACES = '.dsh-dev-modal-overlay, .dsh-hero-app-menu, .dsh-wspath-sid-popover, .dsh-dev-menu'
    // 工作区列表的 git 概览：开面板时批量拉取（5s 缓存），失败静默，绝不阻塞列表渲染。
    const GIT_SUMMARY_TTL = 5000
    const gitSummaryCache = new Map()
    async function fetchGitSummaries(connection, paths) {
      const now = Date.now(), result = {}, stale = []
      for (const p of paths) {
        const hit = gitSummaryCache.get(p)
        if (hit !== undefined && now - hit.at < GIT_SUMMARY_TTL) { if (hit.info) result[p] = hit.info; continue }
        stale.push(p)
      }
      if (stale.length === 0 || typeof connection?.rpc?.call !== 'function') return result
      let res
      try { res = await connection.rpc.call('/dsh-workspace-path', 'git-summary', { paths: stale }) } catch { return result }
      if (!res || res.ok === false) return result
      const summaries = (res.value && res.value.summaries) || {}
      for (const p of stale) {
        const info = summaries[p] || null
        gitSummaryCache.set(p, { at: Date.now(), info })
        if (info) result[p] = info
      }
      return result
    }
    function gitTooltip(t, info) {
      if (!info || info.isRepo !== true) return ''
      if (info.changed === -1) return t.gitUnknown
      if (info.changed > 0) return t.gitDirty.replace('{n}', String(info.changed))
      return t.gitClean
    }
    function usePopover(open, setOpen, place, triggerRef, panelClass) {
      React.useEffect(() => {
        if (!open) return undefined
        place()
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        const onPtr = (e) => {
          if (triggerRef.current?.contains(e.target)) return
          if (e.target.closest?.(panelClass)) return
          if (e.target.closest?.(PORTAL_SURFACES)) return
          setOpen(false)
        }
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
    const IconCheck = ({ size = 13 }) => svg(size, h('path', { d: 'M3 8.5l3.5 3.5 6.5-7', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconSpinner = ({ size = 14 }) => svg(size, h('circle', { cx: 8, cy: 8, r: 5.2, stroke: 'currentColor', strokeWidth: 1.4, strokeDasharray: '9 7', strokeLinecap: 'round' }))
    const IconFilter = ({ size = 12 }) => svg(size, h('path', { d: 'M2.5 4h11M4.5 8h7M6.5 12h3', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' }))

    function WorkspaceRow({ t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel, connection, gitInfo, actions }) {
      const isCur = ws.workspaceId === currentId, display = abbreviateHomePath(ws.path, home)
      const badges = []
      if (ws.isToday) badges.push(h('span', { key: 'today', className: 'dsh-wspath-badge' }, t.today))
      if (isCur) badges.push(h('span', { key: 'cur', className: 'dsh-wspath-badge' }, t.current))
      if (ws.kind === 'day' && !ws.isToday) badges.push(h('span', { key: 'kind', className: 'dsh-wspath-kind' }, t.dayKind))
      const gitLabel = gitStatusLabel(gitInfo)
      if (gitLabel) badges.push(h('span', { key: 'git', className: 'dsh-wspath-git' + (isGitDirty(gitInfo) ? ' is-dirty' : ''), title: gitTooltip(t, gitInfo) }, gitLabel))
      // `variant` names the carrier; `actions` decides whether the row can act on
      // it. The Hero picker asks for them too, so a project row behaves the same
      // in both places (Git / dev command / reveal).
      const rowActions = canOpen && actions !== false
      return h('div', { className: 'dsh-wspath-row' + (isCur ? ' is-current' : '') },
        h('button', { type: 'button', className: 'dsh-wspath-item', title: ws.path, onClick: () => onSelect(ws) },
          h('span', { className: 'dsh-wspath-title' }, h('span', { className: 'dsh-wspath-name' }, ws.title || ws.path), badges),
          variant === 'hub' || ws.kind === 'project' ? h('span', { className: 'dsh-wspath-path' }, display) : null,
        ),
       rowActions ? h('div', { className: 'dsh-wspath-actions' },
         h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.copyBtn, onClick: (e) => { e.stopPropagation(); onCopy(ws) } }, h(IconCopy)),
          ws.path ? h(DevActionButtons, { connection, wsPath: ws.path, size: 12 }) : null,
          h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.terminal, onClick: (e) => { e.stopPropagation(); onTerminal(ws) } }, h(IconTerminal)),
          h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: revealLabel, onClick: (e) => { e.stopPropagation(); onOpen(ws) } }, h(IconOpen)),
        ) : null,
      )
    }

    function PathPanel(props) {
      const { t, model, query, onQuery, inputRef, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, onAddWorkspace, canAddWorkspace, adding, status, error, revealLabel, onOpenDays, onBack, connection, actions } = props
      const rows = model.rows, searching = model.searching, view = model.view
      const [gitMap, setGitMap] = React.useState(null)
      // 打开工作区中心时拉一次 git 概览（只查项目行；按天目录不查）。查询在后台跑，
      // 结果回来前列表照常显示，行只是暂时没有 git 标记。
      React.useEffect(() => {
        if (actions === false || !canOpen || typeof connection?.rpc?.call !== 'function') return undefined
        const paths = []
        for (const ws of model.rows) {
          if (ws.kind === 'project' && typeof ws.path === 'string' && ws.path !== '') paths.push(ws.path)
        }
        if (paths.length === 0) return undefined
        let alive = true
        fetchGitSummaries(connection, paths).then((map) => { if (alive) setGitMap(map) }).catch(() => {})
        return () => { alive = false }
      }, [actions, canOpen, connection])
      const projectRows = searching ? rows.filter((ws) => ws.kind === 'project') : (view === 'projects' ? rows : [])
      const dayRows = searching ? rows.filter((ws) => ws.kind === 'day') : (view === 'days' ? rows : [])
      const emptyText = query ? t.noMatches : (view === 'days' ? t.emptyDays : t.empty)
      const renderGroup = (label, list) => list.length === 0 ? null : h(React.Fragment, null,
        searching ? h('div', { className: 'dsh-wspath-section' }, label) : null,
        list.map((ws) => h(WorkspaceRow, { key: ws.workspaceId, t, ws, currentId, home, variant, onSelect, onCopy, onOpen, onTerminal, canOpen, revealLabel, connection, actions, gitInfo: gitMap ? gitMap[ws.path] : undefined })),
      )
      // 两处「＋」都走官方那条路：打开目录选择器（原生选择框自带新建文件夹）→ 采纳并打开。
      const plusTitle = t.addWorkspace
      const plusClick = onAddWorkspace
      const showPlus = variant === 'hub' || (variant === 'picker' && canAddWorkspace)
      return h(React.Fragment, null,
        h('div', { className: 'dsh-wspath-search-row' },
          h('input', { ref: inputRef, type: 'search', value: query, placeholder: t.search, 'aria-label': t.search, onChange: (e) => onQuery(e.target.value), onKeyDown: (e) => { if (e.key === 'Enter' && rows[0]) { e.preventDefault(); onSelect(rows[0]) } } }),
          showPlus ? h('button', { type: 'button', className: 'dsh-wspath-add-btn', title: plusTitle, 'aria-label': plusTitle, disabled: Boolean(adding) || !canAddWorkspace, onClick: plusClick }, adding ? h(IconSpinner) : h(IconPlus)) : null,
        ),
        view === 'days' ? h('button', { type: 'button', className: 'dsh-wspath-back', onClick: onBack }, h(IconChevronLeft), t.daysBack) : null,
        rows.length === 0 ? h('p', { className: 'dsh-wspath-empty' }, emptyText) : h('div', { className: 'dsh-wspath-list' },
          view === 'days' ? renderGroup(t.daysEntry, dayRows) : h(React.Fragment, null, renderGroup(t.projects, projectRows), renderGroup(t.daysEntry, dayRows)),
        ),
        view === 'projects' && !searching && model.dayCount > 0 ? h('button', { type: 'button', className: 'dsh-wspath-days-btn', onClick: onOpenDays }, h('span', null, t.daysEntry), h('span', null, String(model.dayCount))) : null,
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : '') }, status) : null,
      )
    }

    function PathButton(props) {
      const { wide, workspaces, sessions, uiWorkspace, getUiWorkspace, connection, startSession, controllerRef } = props
      const t = locale(), inputRef = React.useRef(null), buttonRef = React.useRef(null), copiedTimer = React.useRef(null)
      const [open, setOpen] = React.useState(false)
      const [adding, setAdding] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const panel = usePanelReset(open)
      const wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list), host = useSnapshot(connection?.hostDescription)
      const items = wsSnap?.items || [], currentId = wsSnap?.current, home = host?.home
      const sessionsById = sesSnap?.byId
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const currentWs = items.find((it) => it.workspaceId === currentId)
      const usageMap = useWorkspaceUsageSnapshot(open)
      const model = pickerModel({ items, query: panel.query, home, view: panel.view, currentId, sessionsById, usageMap })
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
      const onSelect = (ws) => { recordWorkspaceUse(ws); setOpen(false); if (typeof startSession === 'function') startSession(ws.workspaceId) }
      const onCopy = async (ws) => { recordWorkspaceUse(ws); const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed, !ok) }
      const onOpen = (ws) => { recordWorkspaceUse(ws); if (canOpen) connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onTerminal = (ws) => { recordWorkspaceUse(ws); if (canOpen) connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onAddWorkspace = async () => {
        if (adding) return
        setAdding(true)
        try {
          const added = await pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession })
          if (added) setOpen(false)
        } catch (e) { flash(e?.message || String(e), true) } finally { setAdding(false) }
      }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel', style: { position: 'fixed', left: coords.left + 'px', bottom: coords.bottom + 'px', width: coords.width + 'px' } },
              h(PathPanel, { t, model, query: panel.query, onQuery: panel.setQuery, inputRef, currentId: currentWs?.workspaceId, home, variant: 'hub', canOpen, onSelect, onCopy, onOpen, onTerminal, canAddWorkspace: typeof (getUiWorkspace?.() ?? uiWorkspace)?.pickDirectory === 'function' && typeof workspaces?.create === 'function', onAddWorkspace, adding, status: panel.status, error: panel.error, revealLabel: hostRevealLabel(t, home), onOpenDays: () => { panel.setQuery(''); panel.setView('days') }, onBack: () => { panel.setQuery(''); panel.setView('projects') }, connection }),
            ), document.body) : null
      // 侧栏筛选菜单里的「查看按天工作区」：从外部打开面板的第二页。
      React.useEffect(() => {
        if (!controllerRef) return undefined
        controllerRef.current = {
          openDays: () => { panel.setQuery(''); panel.setView('days'); setOpen(true) },
        }
        return () => {
          if (controllerRef.current?.openDays) controllerRef.current = null
        }
      }, [controllerRef, panel.setQuery, panel.setView])
      return h('div', { className: wide === false ? 'dsh-wspath' : 'dsh-wspath dsh-wspath-wide' },
        h('button', { ref: buttonRef, type: 'button', className: 'dsh-wspath-btn' + (open ? ' is-open' : ''), title: t.trigger, 'aria-label': t.trigger, onClick: () => { setOpen((v) => !v); panel.setStatus('') } }, h(IconFolder, { size: 18 })),
        node,
      )
    }
