    function findSessionWorkspace(wsSnap, sesSnap, sessionId) {
      if (!sessionId) return null
      const items = wsSnap?.items || []
      const bySes = items.find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(sessionId))
      if (bySes) return bySes
      const cwd = sesSnap?.byId?.[sessionId]?.cwd
      return cwd ? (items.find((it) => it.path === cwd) || null) : null
    }

    function WorkspaceHeaderBadge({ sessionId, workspaces, sessions, connection, startSession }) {
      const t = locale()
      const [copied, setCopied] = React.useState(false)
      const copiedTimer = React.useRef(null), wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription), home = host?.home
      const targetId = sessionId || sesSnap?.current, ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      const display = ws ? (abbreviateHomePath(ws.path, home) || ws.path) : ''

      if (!ws) return null

      const onCopy = async (e) => {
        if (e) e.stopPropagation()
        if (!ws.path) return
        const ok = await writeClipboard(ws.path)
        if (ok) {
          setCopied(true)
          if (copiedTimer.current) clearTimeout(copiedTimer.current)
          copiedTimer.current = setTimeout(() => setCopied(false), 1500)
        }
      }

      const onNewSession = async (e) => {
        if (e) e.stopPropagation()
        if (ws.workspaceId && typeof startSession === 'function') startSession(ws.workspaceId)
        else if (ws.path && workspaces?.create) {
          try { const res = await workspaces.create({ path: ws.path }); if (res?.workspaceId && typeof startSession === 'function') startSession(res.workspaceId) } catch {}
        }
      }

      const copyTip = copied ? t.copied : `${t.copyBtn}\n${ws.path}`
      const newSesTip = `${t.newSessionInWs}\n${ws.title || ws.path}`
      const wsTip = `${t.current}: ${ws.title || ws.path}\n${ws.path}\n(点击亦可复制路径)`

      return h('div', { className: 'dsh-wspath-hgroup' },
        h('button', {
          type: 'button',
          className: 'dsh-wspath-hbtn' + (copied ? ' is-copied' : ''),
          title: wsTip,
          'aria-label': wsTip,
          onClick: onCopy,
        },
          h('span', { className: 'dsh-wspath-hicon' }, h(IconFolder, { size: 13 })),
          h('span', { className: 'dsh-wspath-hname' }, ws.title || ws.path),
        ),
       h('span', { className: 'dsh-wspath-hsep' }),
       h('div', { className: 'dsh-wspath-hactions' },
          h(DevActionButtons, { connection, wsPath: ws.path, size: 12 }),
         h('button', {
            type: 'button',
            className: 'dsh-wspath-haction-btn' + (copied ? ' is-copied' : ''),
            title: copyTip,
            'aria-label': t.copyBtn,
            onClick: onCopy,
          }, h(copied ? IconCheck : IconCopy, { size: 12 })),
          h('button', {
            type: 'button',
            className: 'dsh-wspath-haction-btn',
            title: newSesTip,
            'aria-label': t.newSessionInWs,
            onClick: onNewSession,
          }, h(IconPlus, { size: 12 })),
        ),
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
