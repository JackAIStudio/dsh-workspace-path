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
