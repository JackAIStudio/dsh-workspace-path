window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }, React = require('react'), ReactDOM = require('react-dom'), h = React.createElement
    const css = '.dsh-wspath{position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center}.dsh-wspath-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 120ms ease,color 120ms ease}.dsh-wspath-btn:hover,.dsh-wspath-btn.is-open{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsh-wspath-panel{box-sizing:border-box;z-index:80;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));max-height:min(440px,calc(100vh - 24px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}.dsh-wspath-search-row{display:flex;align-items:center;gap:6px;margin:0 4px 6px}.dsh-wspath-search-row input{flex:1;min-width:0;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}.dsh-wspath-search-row input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}.dsh-wspath-add-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-secondary);cursor:pointer}.dsh-wspath-add-btn:hover,.dsh-wspath-add-btn.is-active{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsh-wspath-new-box{box-sizing:border-box;display:flex;gap:6px;margin:0 4px 6px;padding:6px;border-radius:8px;background:var(--dsw-alias-interactive-bg-hover)}.dsh-wspath-new-box input{flex:1;min-width:0;height:28px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:inherit;font:inherit;font-size:12px}.dsh-wspath-new-box button{appearance:none;flex:none;height:28px;padding:0 8px;border:none;border-radius:6px;background:var(--dsw-alias-brand-primary);color:#fff;font-size:12px;cursor:pointer}.dsh-wspath-new-box button:disabled{opacity:.5;cursor:default}.dsh-wspath-list{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;overflow:auto}.dsh-wspath-empty{padding:12px 8px;font-size:13px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-row{box-sizing:border-box;width:100%;display:flex;align-items:center;gap:2px;padding:2px;border-radius:8px}.dsh-wspath-row.is-current,.dsh-wspath-row:hover{background:var(--dsw-alias-interactive-bg-hover)}.dsh-wspath-item{appearance:none;box-sizing:border-box;min-width:0;flex:1;display:flex;flex-direction:column;gap:2px;margin:0;padding:6px 8px;border:none;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}.dsh-wspath-item:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--dsw-alias-brand-primary)}.dsh-wspath-title{display:flex;align-items:center;gap:6px;min-width:0}.dsh-wspath-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:500}.dsh-wspath-badge{flex:none;padding:0 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-1));font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-path{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary)}.dsh-wspath-actions{display:flex;align-items:center;gap:2px;flex:none}.dsh-wspath-icon-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}.dsh-wspath-icon-btn:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.dsh-wspath-status{flex:none;padding:6px 8px 2px;font-size:12px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-status.is-error{color:var(--dsw-alias-state-error-primary)}.dsh-wspath-hbadge{position:relative;display:inline-flex;align-items:center;flex:none}.dsh-wspath-hbtn{appearance:none;display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 8px;border:none;border-radius:12px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;line-height:24px;cursor:pointer;transition:background-color 120ms ease,color 120ms ease;max-width:180px}.dsh-wspath-hbtn:hover,.dsh-wspath-hbtn.is-open{background:var(--dsw-alias-interactive-bg-pressed, var(--dsw-alias-border-l2));color:var(--dsw-alias-label-primary)}.dsh-wspath-hicon{flex:none;color:inherit;display:inline-flex;align-items:center}.dsh-wspath-hname{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1}.dsh-wspath-hchev{flex:none;color:var(--dsw-alias-label-tertiary);transition:transform 150ms ease}.dsh-wspath-hbtn.is-open .dsh-wspath-hchev{transform:rotate(180deg)}.dsh-wspath-hmenu{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(320px,calc(100vw - 16px));padding:6px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}.dsh-wspath-hmenu-head{padding:4px 8px 6px}.dsh-wspath-hmenu-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}.dsh-wspath-hmenu-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsh-wspath-hmenu-path{margin-top:3px;font-size:11px;color:var(--dsw-alias-label-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.dsh-wspath-hmenu-divider{height:1px;background:var(--dsw-alias-border-l2);margin:4px 0}.dsh-wspath-hmenu-list{display:flex;flex-direction:column;gap:2px}.dsh-wspath-hmenu-item{appearance:none;display:flex;align-items:center;gap:8px;width:100%;height:30px;padding:0 8px;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;text-align:left;transition:background-color 100ms ease,color 100ms ease}.dsh-wspath-hmenu-item:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsh-wspath-hmenu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;flex:none;color:var(--dsw-alias-label-tertiary)}.dsh-wspath-hmenu-item:hover .dsh-wspath-hmenu-icon{color:var(--dsw-alias-label-primary)}.dsh-wspath-hmenu-status{padding:4px 8px;font-size:11px;border-radius:6px;color:var(--dsw-alias-state-success-primary, #10b981);background:rgba(16,185,129,0.1);margin-top:2px;text-align:center}.dsh-wspath-sid-badge{position:relative;display:inline-flex;align-items:center;flex:none;margin-left:4px}.dsh-wspath-sid-btn{appearance:none;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2, rgba(128,128,128,0.22));border-radius:12px;background:var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.06));color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;line-height:22px;cursor:pointer;transition:all 120ms ease;user-select:none}.dsh-wspath-sid-btn:hover,.dsh-wspath-sid-btn.is-open{background:var(--dsw-alias-interactive-bg-pressed, rgba(128,128,128,0.15));border-color:#2563eb;color:#2563eb}.dsh-wspath-sid-icon{font-weight:700;font-size:11px;color:var(--dsw-alias-label-tertiary,#888);margin-right:1px}.dsh-wspath-sid-popover{box-sizing:border-box;z-index:100;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}.dsh-wspath-sid-head{padding:2px 4px 6px}.dsh-wspath-sid-title{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}.dsh-wspath-sid-titletxt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsh-wspath-sid-label{margin-top:6px;font-size:11px;color:var(--dsw-alias-label-tertiary,#888)}.dsh-wspath-sid-codebox{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:4px;padding:4px 8px;border-radius:6px;background:var(--dsw-alias-bg-layer-1, rgba(128,128,128,0.08));border:1px solid var(--dsw-alias-border-l2)}.dsh-wspath-sid-code{font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;color:var(--dsw-alias-label-primary);user-select:all;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsh-wspath-sid-copybtn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:none;border-radius:4px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;flex-shrink:0}.dsh-wspath-sid-copybtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:#2563eb}'
    if (typeof document !== 'undefined') {
      const id = 'dsh-workspace-path/ui.css'
      let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(id) + ']')
      if (!tag) { tag = document.createElement('style'); tag.dataset.plugin = 'dsh-workspace-path'; tag.dataset.pluginCss = id; document.head.appendChild(tag) }
      tag.textContent = css
    }
    const copy = {
      zh: { trigger: '工作区中心 (点击切换)', search: '搜索工作区 (点击直达)...', empty: '暂无工作区', noMatches: '无匹配工作区', current: '当前工作区', copied: '已复制路径', copyFailed: '复制失败', copyBtn: '复制绝对路径', terminal: '在终端打开', openMac: '在访达中显示', openWindows: '在资源管理器中显示', openGeneric: '在文件管理器中显示', newSubdir: '在当前工作区下新建子目录', createBtn: '创建并进入', creating: '创建中...', promptName: '子目录名称 (如 feature-1)', newSessionInWs: '在此工作区新建会话', clickActionHint: '点击查看快捷操作', sessionTitle: '当前会话', sessionIdTitle: '会话唯一标识 (Session ID)', copySessionId: '复制会话 ID', copiedSessionId: '已复制会话 ID', openInNewWindow: '在新独立窗口中打开' },
      en: { trigger: 'Workspace Hub (Click to Switch)', search: 'Search workspaces (Click to enter)...', empty: 'No workspaces', noMatches: 'No matching workspaces', current: 'Current workspace', copied: 'Path copied', copyFailed: 'Copy failed', copyBtn: 'Copy absolute path', terminal: 'Open in Terminal', openMac: 'Show in Finder', openWindows: 'Show in File Explorer', openGeneric: 'Show in file manager', newSubdir: 'New subdir in current workspace', createBtn: 'Create & Enter', creating: 'Creating...', promptName: 'Subdirectory name (e.g. feature-1)', newSessionInWs: 'New session here', clickActionHint: 'Click for actions', sessionTitle: 'Current Session', sessionIdTitle: 'Session Identifier (Session ID)', copySessionId: 'Copy Session ID', copiedSessionId: 'Session ID Copied', openInNewWindow: 'Open in New Window' },
    }
    const locale = () => (typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')) ? copy.en : copy.zh
    function abbreviateHomePath(path, home) {
      if (!path) return ''
      if (!home || home === '/' || home === '\\' || /^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return path
      const p = path.replace(/\\/g, '/'), h = home.replace(/\\/g, '/').replace(/\/+$/, '')
      return (!h || h === '/') ? path : (p === h ? '~' : (p.startsWith(h + '/') ? '~' + p.slice(h.length) : path))
    }
    function filterWorkspaces(rows, query, home) {
      const q = String(query || '').trim().toLowerCase()
      if (!q) return rows
      return rows.filter((it) => String(it.title || '').toLowerCase().includes(q) || String(it.path || '').toLowerCase().includes(q) || abbreviateHomePath(it.path || '', home).toLowerCase().includes(q))
    }
    function listCopyableWorkspaces(items, curId) {
      const rows = (items || []).filter((it) => typeof it.path === 'string' && it.path !== '')
      if (!curId) return rows
      const cur = rows.find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(curId))
      return cur ? [cur].concat(rows.filter((it) => it.workspaceId !== cur.workspaceId)) : rows
    }
    function hostRevealLabel(t, home) {
      return (typeof home === 'string' && home.startsWith('/Users/')) ? t.openMac : ((typeof home === 'string' && (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\'))) ? t.openWindows : t.openGeneric)
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
    function findSessionWorkspace(wsSnap, sesSnap, sessionId) {
      if (!sessionId) return null
      const items = wsSnap?.items || []
      const bySes = items.find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(sessionId))
      if (bySes) return bySes
      const cwd = sesSnap?.byId?.[sessionId]?.cwd
      return cwd ? (items.find((it) => it.path === cwd) || null) : null
    }
    const IconFolder = ({ size = 18 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M2.5 4.75A1.25 1.25 0 0 1 3.75 3.5h2.2L7.2 5h5.05A1.25 1.25 0 0 1 13.5 6.25v5.5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75z', stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { d: 'M6 9.2h4M6 11h2.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })), IconCopy = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('rect', { x: 5, y: 5, width: 8, height: 9, rx: 1.5, stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { d: 'M3.5 11H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2h6.5a1 1 0 0 1 1 1v.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' })), IconTerminal = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M3 4.5l4 3.5-4 3.5M8 11.5h5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' })), IconOpen = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M6.5 3.5H4.25A1.75 1.75 0 0 0 2.5 5.25v6.5A1.75 1.75 0 0 0 4.25 13.5h6.5a1.75 1.75 0 0 0 1.75-1.75V9.5M9 3.5h3.5V7M12.5 3.5 8 8', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' })), IconPlus = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M8 3.5v9M3.5 8h9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' })), IconChevronDown = ({ size = 12, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className }, h('path', { d: 'M4 6l4 4 4-4', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })), IconChat = ({ size = 13 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M2.5 3.5A1.5 1.5 0 0 1 4 2h8a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 12 11H5.5L2.8 13.7A.5.5 0 0 1 2 13.3V3.5z', stroke: 'currentColor', strokeWidth: 1.25, strokeLinejoin: 'round' }))
    function PathPanel(props) {
      const { t, rows, query, onQuery, inputRef, currentId, home, canOpen, onSelect, onCopy, onOpen, onTerminal, onCreateSubdir, showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, status, error, revealLabel } = props
      return h(React.Fragment, null,
        h('div', { className: 'dsh-wspath-search-row' },
          h('input', { ref: inputRef, type: 'search', value: query, placeholder: t.search, 'aria-label': t.search, onChange: (e) => onQuery(e.target.value) }),
          h('button', { type: 'button', className: 'dsh-wspath-add-btn' + (showNewBox ? ' is-active' : ''), title: t.newSubdir, 'aria-label': t.newSubdir, onClick: () => setShowNewBox((v) => !v) }, h(IconPlus)),
        ),
        showNewBox ? h('form', { className: 'dsh-wspath-new-box', onSubmit: (e) => { e.preventDefault(); onCreateSubdir() } },
          h('input', { type: 'text', autoFocus: true, value: newSubdir, placeholder: t.promptName, onChange: (e) => setNewSubdir(e.target.value) }),
          h('button', { type: 'submit', disabled: creatingSubdir || !newSubdir.trim() }, creatingSubdir ? t.creating : t.createBtn),
        ) : null,
        rows.length === 0 ? h('p', { className: 'dsh-wspath-empty' }, query ? t.noMatches : t.empty) : h('div', { className: 'dsh-wspath-list' },
          rows.map((ws) => {
            const isCur = ws.workspaceId === currentId, display = abbreviateHomePath(ws.path, home)
            return h('div', { key: ws.workspaceId, className: 'dsh-wspath-row' + (isCur ? ' is-current' : '') },
              h('button', { type: 'button', className: 'dsh-wspath-item', title: ws.path + ' (点击切换)', onClick: () => onSelect(ws) },
                h('span', { className: 'dsh-wspath-title' }, h('span', { className: 'dsh-wspath-name' }, ws.title || ws.path), isCur ? h('span', { className: 'dsh-wspath-badge' }, t.current) : null),
                h('span', { className: 'dsh-wspath-path' }, display),
              ),
              h('div', { className: 'dsh-wspath-actions' },
                h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.copyBtn, onClick: (e) => { e.stopPropagation(); onCopy(ws) } }, h(IconCopy)),
                canOpen ? h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: t.terminal, onClick: (e) => { e.stopPropagation(); onTerminal(ws) } }, h(IconTerminal)) : null,
                canOpen ? h('button', { type: 'button', className: 'dsh-wspath-icon-btn', title: revealLabel, onClick: (e) => { e.stopPropagation(); onOpen(ws) } }, h(IconOpen)) : null,
              ),
            )
          }),
        ),
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : '') }, status) : null,
      )
    }
    function PathButton(props) {
      const { wide, workspaces, connection, startSession } = props
      const t = locale(), inputRef = React.useRef(null), buttonRef = React.useRef(null), copiedTimer = React.useRef(null)
      const [open, setOpen] = React.useState(false), [query, setQuery] = React.useState(''), [status, setStatus] = React.useState(''), [error, setError] = React.useState(false)
      const [showNewBox, setShowNewBox] = React.useState(false), [newSubdir, setNewSubdir] = React.useState(''), [creatingSubdir, setCreatingSubdir] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const wsSnap = useSnapshot(workspaces?.list), host = useSnapshot(connection?.hostDescription)
      const items = wsSnap?.items || [], currentId = wsSnap?.current, home = host?.home
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const currentWs = items.find((it) => it.workspaceId === currentId)
      const ordered = listCopyableWorkspaces(items, currentId), rows = filterWorkspaces(ordered, query, home)
      const place = React.useCallback(() => {
        const btn = buttonRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = wide === false ? r.right + 8 : r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), bottom: window.innerHeight - r.top + 8, width: w })
      }, [wide])
      usePopover(open, setOpen, place, buttonRef, '.dsh-wspath-panel')
      const flash = (msg, isErr = false) => {
        setError(isErr); setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => setStatus(''), 1500)
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
      const panel = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel', style: { position: 'fixed', left: coords.left + 'px', bottom: coords.bottom + 'px', width: coords.width + 'px' } },
              h(PathPanel, { t, rows, query, onQuery: setQuery, inputRef, currentId: currentWs?.workspaceId, currentWorkspace: currentWs, home, canOpen, onSelect, onCopy, onOpen, onTerminal, onCreateSubdir, showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, status, error, revealLabel: hostRevealLabel(t, home) }),
            ), document.body) : null
      return h('div', { className: wide === false ? 'dsh-wspath' : 'dsh-wspath dsh-wspath-wide' },
        h('button', { ref: buttonRef, type: 'button', className: 'dsh-wspath-btn' + (open ? ' is-open' : ''), title: t.trigger, 'aria-label': t.trigger, onClick: () => { setOpen((v) => !v); setStatus('') } }, h(IconFolder, { size: 18 })),
        panel,
      )
    }
    function WorkspaceHeaderBadge({ sessionId, workspaces, sessions, connection, startSession }) {
      const t = locale(), badgeRef = React.useRef(null)
      const [open, setOpen] = React.useState(false), [coords, setCoords] = React.useState(null), [status, setStatus] = React.useState('')
      const copiedTimer = React.useRef(null), wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription), home = host?.home
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const targetId = sessionId || sesSnap?.current, ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      if (!ws) return null
      const display = abbreviateHomePath(ws.path, home) || ws.path, revealLabel = hostRevealLabel(t, home)
      const place = React.useCallback(() => {
        const btn = badgeRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(320, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [])
      usePopover(open, setOpen, place, badgeRef, '.dsh-wspath-hmenu')
      const flash = (msg) => { setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => { setStatus(''); setOpen(false) }, 1200)
      }
      const onCopy = async () => { if (ws.path) { const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed) } }
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
      if (!targetId) return null
      const title = sesSnap?.byId?.[targetId]?.displayTitle || sesSnap?.byId?.[targetId]?.title || ''
      const shortId = targetId.startsWith('session-') ? targetId.slice(8, 16) : targetId.slice(0, 8)
      const place = React.useCallback(() => {
        const btn = badgeRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), top: r.bottom + 6, width: w })
      }, [])
      usePopover(open, setOpen, place, badgeRef, '.dsh-wspath-sid-popover')
      const onEnter = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setOpen(true) }
      const onLeave = () => { hoverTimer.current = setTimeout(() => setOpen(false), 160) }
      const flash = (msg) => { setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => { setStatus('') }, 1500)
      }
      const onCopyId = async () => { const ok = await writeClipboard(targetId); flash(ok ? t.copiedSessionId : t.copyFailed) }
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
    }
    module.exports.apply = apply
    module.exports.inject = inject
    return module.exports
  },
})
