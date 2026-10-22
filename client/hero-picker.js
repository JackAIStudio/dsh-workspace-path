    /**
     * The official new-page workspace picker: rows can act on their workspace
     * exactly like the Hub's rows (copy / Git / dev command / terminal / reveal).
     * The row actions are the same components; only the carrier differs.
     */
    function HeroWorkspacePicker(props) {
      const { open, anchorRef, selectedId, onPick, onClose, workspaces, sessions, uiWorkspace, getUiWorkspace, connection, useWorkspaces, getBetterSidebar } = props
      const t = locale(), inputRef = React.useRef(null)
      const [coords, setCoords] = React.useState(null)
      const panel = usePanelReset(open)
      const wsSnap = useSnapshot(workspaces?.list)
      const sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription)
      const home = host?.homeDirectory || host?.home
      const snap = typeof useWorkspaces === 'function' ? useWorkspaces((state) => state) : wsSnap
      const items = snap?.items || wsSnap?.items || []
      const usageMap = useWorkspaceUsageSnapshot(open)
      const model = pickerModel({ items, query: panel.query, view: panel.view, currentId: selectedId, sessionsById: sesSnap?.byId, usageMap })
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
      const handleSelect = (ws) => {
        recordWorkspaceUse(ws)
        if (typeof onPick === 'function') onPick(ws.workspaceId)
        if (typeof onClose === 'function') onClose()
      }
      const canPickDir = typeof (getUiWorkspace?.() ?? uiWorkspace)?.pickDirectory === 'function' && typeof workspaces?.create === 'function'
      const [adding, setAdding] = React.useState(false)
      const handleAddWorkspace = async () => {
        if (!canPickDir || adding) return
        setAdding(true)
        try {
          const added = await pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession: (workspaceId) => handleSelect({ workspaceId }) })
          if (added) onClose?.()
        } catch (err) {
          panel.setError(true)
          panel.setStatus(err instanceof Error ? err.message : String(err))
        } finally { setAdding(false) }
      }
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))
      const flash = (message, isError = false) => {
        panel.setError(isError)
        panel.setStatus(message)
      }
      const onCopy = async (ws) => { recordWorkspaceUse(ws); const ok = await writeClipboard(ws.path); flash(ok ? t.copied : t.copyFailed, !ok) }
      const onOpen = (ws) => { recordWorkspaceUse(ws); connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const onTerminal = (ws) => { recordWorkspaceUse(ws); connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true)) }
      const node = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', { className: 'dsh-wspath-panel is-hero', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
              h(PathPanel, {
                t,
                model,
                query: panel.query,
                onQuery: panel.setQuery,
                inputRef,
                currentId: selectedId,
                home,
                variant: 'picker',
                actions: true,
                onSelect: handleSelect,
                onCopy,
                onOpen,
                onTerminal,
                canOpen,
                revealLabel: hostRevealLabel(t, home),
                canAddWorkspace: canPickDir,
                onAddWorkspace: handleAddWorkspace,
                adding,
                status: panel.status,
                error: panel.error,
                onOpenDays: () => { panel.setQuery(''); panel.setView('days') },
                onBack: () => { panel.setQuery(''); panel.setView('projects') },
                connection,
              }),
            ), document.body) : null
      return h(React.Fragment, null,
        h(HeroWorkspaceTools, { selectedId, workspaces, sessions, connection, useWorkspaces, getBetterSidebar }),
        node,
      )
    }
