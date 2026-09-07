window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }, React = require('react'), ReactDOM = require('react-dom'), h = React.createElement

    const css = '.dsh-wspath{position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center}.dsh-wspath-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 120ms ease,color 120ms ease}.dsh-wspath-btn:hover,.dsh-wspath-btn.is-open{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsh-wspath-panel{box-sizing:border-box;z-index:80;display:flex;flex-direction:column;width:min(340px,calc(100vw - 16px));max-height:min(440px,calc(100vh - 24px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}.dsh-wspath-search-row{display:flex;align-items:center;gap:6px;margin:0 4px 6px}.dsh-wspath-search-row input{flex:1;min-width:0;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}.dsh-wspath-search-row input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}.dsh-wspath-add-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-secondary);cursor:pointer}.dsh-wspath-add-btn:hover,.dsh-wspath-add-btn.is-active{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsh-wspath-new-box{box-sizing:border-box;display:flex;gap:6px;margin:0 4px 6px;padding:6px;border-radius:8px;background:var(--dsw-alias-interactive-bg-hover)}.dsh-wspath-new-box input{flex:1;min-width:0;height:28px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:inherit;font:inherit;font-size:12px}.dsh-wspath-new-box button{appearance:none;flex:none;height:28px;padding:0 8px;border:none;border-radius:6px;background:var(--dsw-alias-brand-primary);color:#fff;font-size:12px;cursor:pointer}.dsh-wspath-new-box button:disabled{opacity:.5;cursor:default}.dsh-wspath-list{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;overflow:auto}.dsh-wspath-empty{padding:12px 8px;font-size:13px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-row{box-sizing:border-box;width:100%;display:flex;align-items:center;gap:2px;padding:2px;border-radius:8px}.dsh-wspath-row.is-current,.dsh-wspath-row:hover{background:var(--dsw-alias-interactive-bg-hover)}.dsh-wspath-item{appearance:none;box-sizing:border-box;min-width:0;flex:1;display:flex;flex-direction:column;gap:2px;margin:0;padding:6px 8px;border:none;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}.dsh-wspath-item:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--dsw-alias-brand-primary)}.dsh-wspath-title{display:flex;align-items:center;gap:6px;min-width:0}.dsh-wspath-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:500}.dsh-wspath-badge{flex:none;padding:0 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-1));font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-path{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary)}.dsh-wspath-actions{display:flex;align-items:center;gap:2px;flex:none}.dsh-wspath-icon-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:none;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}.dsh-wspath-icon-btn:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.dsh-wspath-status{flex:none;padding:6px 8px 2px;font-size:12px;color:var(--dsw-alias-label-secondary)}.dsh-wspath-status.is-error{color:var(--dsw-alias-state-error-primary)}'

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

    const copy = {
      zh: { trigger: '工作区中心 (点击切换)', search: '搜索工作区 (点击直达)...', empty: '暂无工作区', noMatches: '无匹配工作区', current: '当前', copied: '已复制路径', copyFailed: '复制失败', copyBtn: '复制路径', terminal: '在终端打开', openMac: '在访达中显示', openWindows: '在资源管理器中显示', openGeneric: '在文件管理器中显示', newSubdir: '在当前工作区下新建子目录', createBtn: '创建并进入', creating: '创建中...', promptName: '子目录名称 (如 feature-1)' },
      en: { trigger: 'Workspace Hub (Click to Switch)', search: 'Search workspaces (Click to enter)...', empty: 'No workspaces', noMatches: 'No matching workspaces', current: 'Current', copied: 'Path copied', copyFailed: 'Copy failed', copyBtn: 'Copy path', terminal: 'Open in Terminal', openMac: 'Show in Finder', openWindows: 'Show in File Explorer', openGeneric: 'Show in file manager', newSubdir: 'New subdir in current workspace', createBtn: 'Create & Enter', creating: 'Creating...', promptName: 'Subdirectory name (e.g. feature-1)' },
    }

    const locale = () => (typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')) ? copy.en : copy.zh

    function abbreviateHomePath(path, home) {
      if (!path) return ''
      if (!home || home === '/' || home === '\\' || /^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return path
      const p = path.replace(/\\/g, '/'), h = home.replace(/\\/g, '/').replace(/\/+$/, '')
      if (!h || h === '/') return path
      return p === h ? '~' : (p.startsWith(h + '/') ? '~' + p.slice(h.length) : path)
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
      if (typeof home === 'string' && home.startsWith('/Users/')) return t.openMac
      if (typeof home === 'string' && (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\'))) return t.openWindows
      return t.openGeneric
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

    const IconFolder = ({ size = 18 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M2.5 4.75A1.25 1.25 0 0 1 3.75 3.5h2.2L7.2 5h5.05A1.25 1.25 0 0 1 13.5 6.25v5.5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75z', stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { d: 'M6 9.2h4M6 11h2.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' }))
    const IconCopy = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('rect', { x: 5, y: 5, width: 8, height: 9, rx: 1.5, stroke: 'currentColor', strokeWidth: 1.25 }), h('path', { d: 'M3.5 11H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2h6.5a1 1 0 0 1 1 1v.5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round' }))
    const IconTerminal = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M3 4.5l4 3.5-4 3.5M8 11.5h5', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconOpen = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M6.5 3.5H4.25A1.75 1.75 0 0 0 2.5 5.25v6.5A1.75 1.75 0 0 0 4.25 13.5h6.5a1.75 1.75 0 0 0 1.75-1.75V9.5M9 3.5h3.5V7M12.5 3.5 8 8', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }))
    const IconPlus = ({ size = 14 }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none' }, h('path', { d: 'M8 3.5v9M3.5 8h9', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }))

    function PathPanel(props) {
      const { t, rows, query, onQuery, inputRef, currentId, currentWorkspace, home, canOpen,
              onSelect, onCopy, onOpen, onTerminal, onCreateSubdir,
              showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, status, error, revealLabel } = props

      return h(React.Fragment, null,
        h('div', { className: 'dsh-wspath-search-row' },
          h('input', {
            ref: inputRef,
            type: 'search',
            value: query,
            placeholder: t.search,
            onChange: (e) => onQuery(e.target.value),
            onKeyDown: (e) => {
              if (e.key === 'Escape') { e.stopPropagation(); onQuery('') }
              if (e.key === 'Enter' && rows.length > 0) { e.preventDefault(); onSelect(rows[0]) }
            },
          }),
          currentWorkspace ? h('button', {
            type: 'button',
            className: 'dsh-wspath-add-btn' + (showNewBox ? ' is-active' : ''),
            title: t.newSubdir,
            onClick: () => setShowNewBox((v) => !v),
          }, h(IconPlus)) : null,
        ),
        showNewBox ? h('form', {
          className: 'dsh-wspath-new-box',
          onSubmit: (e) => { e.preventDefault(); onCreateSubdir() },
        },
          h('input', {
            type: 'text',
            autoFocus: true,
            value: newSubdir,
            placeholder: t.promptName,
            onChange: (e) => setNewSubdir(e.target.value),
          }),
          h('button', { type: 'submit', disabled: creatingSubdir || !newSubdir.trim() },
            creatingSubdir ? t.creating : t.createBtn),
        ) : null,
        rows.length === 0
          ? h('p', { className: 'dsh-wspath-empty' }, query ? t.noMatches : t.empty)
          : h('div', { className: 'dsh-wspath-list' },
              rows.map((ws) => {
                const isCur = ws.workspaceId === currentId
                const display = abbreviateHomePath(ws.path, home)
                return h('div', { key: ws.workspaceId, className: 'dsh-wspath-row' + (isCur ? ' is-current' : '') },
                  h('button', {
                    type: 'button',
                    className: 'dsh-wspath-item',
                    title: ws.path + ' (点击切换)',
                    onClick: () => onSelect(ws),
                  },
                    h('span', { className: 'dsh-wspath-title' },
                      h('span', { className: 'dsh-wspath-name' }, ws.title || ws.path),
                      isCur ? h('span', { className: 'dsh-wspath-badge' }, t.current) : null,
                    ),
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
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : ''), role: 'status' }, status) : null,
      )
    }

    function PathButton({ wide, workspaces, sessions, connection, startSession }) {
      const t = locale(), buttonRef = React.useRef(null), inputRef = React.useRef(null)
      const [open, setOpen] = React.useState(false), [coords, setCoords] = React.useState(null)
      const [query, setQuery] = React.useState(''), [showNewBox, setShowNewBox] = React.useState(false)
      const [newSubdir, setNewSubdir] = React.useState(''), [creatingSubdir, setCreatingSubdir] = React.useState(false)
      const [status, setStatus] = React.useState(''), [error, setError] = React.useState(false)
      const copiedTimer = React.useRef(null)

      const wsSnap = useSnapshot(workspaces?.list), sesSnap = useSnapshot(sessions?.list)
      const host = useSnapshot(connection?.hostDescription), currentSessionId = sesSnap?.current, home = host?.home
      const rows = filterWorkspaces(listCopyableWorkspaces(wsSnap?.items, currentSessionId), query, home)
      const currentWs = (wsSnap?.items || []).find((it) => Array.isArray(it.sessionIds) && it.sessionIds.includes(currentSessionId))
      const canOpen = Boolean(connection?.isLoopback === true && (host ? host.canOpenPath === true : true))

      const place = React.useCallback(() => {
        const btn = buttonRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 16)
        let l = r.left
        if (l + w > window.innerWidth - 8) l = Math.max(8, window.innerWidth - w - 8)
        setCoords({ left: Math.max(8, l), bottom: Math.max(8, window.innerHeight - r.top + 8), width: w })
      }, [])

      React.useEffect(() => {
        if (!open) return undefined
        place()
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        const onPtr = (e) => { if (!buttonRef.current?.contains(e.target) && !e.target.closest?.('.dsh-wspath-panel')) setOpen(false) }
        window.addEventListener('resize', place)
        document.addEventListener('keydown', onKey)
        document.addEventListener('pointerdown', onPtr)
        return () => {
          window.removeEventListener('resize', place)
          document.removeEventListener('keydown', onKey)
          document.removeEventListener('pointerdown', onPtr)
        }
      }, [open, place])

      React.useEffect(() => {
        if (open) window.requestAnimationFrame(() => inputRef.current?.focus())
        else { setQuery(''); setShowNewBox(false); setNewSubdir('') }
      }, [open])

      const flash = (msg, isErr = false) => {
        setError(isErr)
        setStatus(msg)
        if (copiedTimer.current) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => setStatus(''), 1500)
      }

      const onSelect = (ws) => {
        setOpen(false)
        if (typeof startSession === 'function') startSession(ws.workspaceId)
      }

      const onCopy = async (ws) => {
        const ok = await writeClipboard(ws.path)
        flash(ok ? t.copied : t.copyFailed, !ok)
      }

      const onOpen = (ws) => canOpen && connection.rpc.call('/dsh-workspace-path', 'reveal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true))
      const onTerminal = (ws) => canOpen && connection.rpc.call('/dsh-workspace-path', 'terminal', { path: ws.path }).then((r) => { if (!r.ok) flash(r.error?.message, true) }).catch((e) => flash(e?.message, true))

      const onCreateSubdir = async () => {
        const name = newSubdir.trim()
        if (!name || !currentWs?.path || creatingSubdir) return
        setCreatingSubdir(true)
        try {
          const childPath = await workspaces.createChildDirectory(currentWs.path, name)
          const newWs = await workspaces.create({ path: childPath })
          setOpen(false)
          if (typeof startSession === 'function') startSession(newWs.workspaceId)
        } catch (e) {
          flash(e?.message || 'Create failed', true)
        } finally {
          setCreatingSubdir(false)
        }
      }

      const panel = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', {
              className: 'dsh-wspath-panel',
              style: { position: 'fixed', left: coords.left + 'px', bottom: coords.bottom + 'px', width: coords.width + 'px' },
            },
              h(PathPanel, {
                t, rows, query, onQuery: setQuery, inputRef, currentId: currentWs?.workspaceId, currentWorkspace: currentWs,
                home, canOpen, onSelect, onCopy, onOpen, onTerminal, onCreateSubdir,
                showNewBox, setShowNewBox, newSubdir, setNewSubdir, creatingSubdir, status, error,
                revealLabel: hostRevealLabel(t, home),
              }),
            ),
            document.body,
          )
        : null

      return h('div', { className: wide === false ? 'dsh-wspath' : 'dsh-wspath dsh-wspath-wide' },
        h('button', {
          ref: buttonRef,
          type: 'button',
          className: 'dsh-wspath-btn' + (open ? ' is-open' : ''),
          title: t.trigger,
          'aria-label': t.trigger,
          onClick: () => { setOpen((v) => !v); setStatus('') },
        }, h(IconFolder, { size: 18 })),
        panel,
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
        const owner = (uiWorkspace && typeof uiWorkspace.startSession === 'function')
          ? uiWorkspace
          : ctx.workspaces
        if (owner && typeof owner.startSession === 'function') owner.startSession(workspaceId)
      }
      ctx.slots.inject('sidebar.footer.action', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'sidebar.footer.action', id: 'dsh-workspace-path' }, (props) =>
            h(PathButton, {
              wide: props?.wide,
              workspaces: ctx.workspaces,
              sessions: ctx.sessions,
              connection: ctx.connection,
              startSession,
            }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
    }

    module.exports.apply = apply
    module.exports.inject = inject
    return module.exports
  },
})
