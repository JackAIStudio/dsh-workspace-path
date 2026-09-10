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
