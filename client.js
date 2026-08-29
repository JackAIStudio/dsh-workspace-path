window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }
    const React = require('react')
    const ReactDOM = require('react-dom')
    const h = React.createElement

    const css = [
      '.dsh-wspath{position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center}',
      '[class*="_footArea"]:has(.dsh-wspath-wide){flex-direction:row;align-items:center;gap:4px}',
      '[class*="_footArea"]:has(.dsh-wspath-wide) [class*="_settingsArea"]{flex:1 1 auto;width:auto;min-width:0}',
      '[class*="_footArea"]:has(.dsh-wspath-wide) [class*="_footerActions"]{order:2;flex:none;width:auto;align-items:center;justify-content:flex-end}',
      '.dsh-wspath-btn{appearance:none;position:relative;flex:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;border-radius:50%;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background-color 120ms ease,color 120ms ease,box-shadow 120ms ease}',
      '.dsh-wspath-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}',
      '.dsh-wspath-btn:active{background:var(--dsw-alias-interactive-bg-active)}',
      '.dsh-wspath-btn:focus-visible{outline:none;box-shadow:0 0 0 2px var(--dsw-alias-bg-layer-2),0 0 0 4px var(--dsw-alias-brand-primary)}',
      '.dsh-wspath-btn.is-open{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}',
      '.dsh-wspath-btn svg{display:block;flex:none}',
      '.dsh-wspath-panel{box-sizing:border-box;z-index:80;display:flex;flex-direction:column;width:min(320px,calc(100vw - 16px));max-height:min(420px,calc(100vh - 24px));padding:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv2);color:var(--dsw-alias-label-primary)}',
      '.dsh-wspath-head{flex:none;padding:4px 8px 6px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}',
      '.dsh-wspath-search{flex:none;margin:0 4px 6px}',
      '.dsh-wspath-search input{box-sizing:border-box;width:100%;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;line-height:20px}',
      '.dsh-wspath-search input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}',
      '.dsh-wspath-search input::placeholder{color:var(--dsw-alias-label-tertiary)}',
      '.dsh-wspath-list{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;overflow:auto}',
      '.dsh-wspath-empty{padding:12px 8px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}',
      '.dsh-wspath-row{box-sizing:border-box;width:100%;display:flex;align-items:center;gap:4px;padding:2px;border-radius:8px}',
      '.dsh-wspath-row.is-current,.dsh-wspath-row:hover{background:var(--dsw-alias-interactive-bg-hover)}',
      '.dsh-wspath-copy{appearance:none;box-sizing:border-box;min-width:0;flex:1;display:flex;align-items:center;margin:0;padding:6px 8px;border:none;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}',
      '.dsh-wspath-copy:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--dsw-alias-brand-primary)}',
      '.dsh-wspath-main{min-width:0;flex:1;display:flex;flex-direction:column;gap:2px}',
      '.dsh-wspath-title{display:flex;align-items:center;gap:6px;min-width:0}',
      '.dsh-wspath-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:20px;color:var(--dsw-alias-label-primary)}',
      '.dsh-wspath-badge{flex:none;padding:0 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-active, var(--dsw-alias-bg-layer-1));font-size:11px;line-height:18px;color:var(--dsw-alias-label-secondary)}',
      '.dsh-wspath-path{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:17px;color:var(--dsw-alias-label-tertiary)}',
      '.dsh-wspath-open{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:none;border-radius:8px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}',
      '.dsh-wspath-open:hover,.dsh-wspath-open:focus-visible{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);outline:none}',
      '.dsh-wspath-status{flex:none;padding:6px 8px 2px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}',
      '.dsh-wspath-status.is-error{color:var(--dsw-alias-state-error-primary)}',
      '@media (prefers-reduced-motion: reduce){.dsh-wspath-btn{transition:none}}',
    ].join('')

    if (typeof document !== 'undefined') {
      const id = 'dsh-workspace-path/ui.css'
      let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(id) + ']')
      if (tag === null) {
        tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-workspace-path'
        tag.dataset.pluginCss = id
        document.head.appendChild(tag)
      }
      tag.textContent = css
    }

    const copy = {
      zh: {
        trigger: '复制工作区路径',
        title: '复制工作区路径',
        empty: '暂无工作区',
        search: '搜索工作区',
        noMatches: '无匹配工作区',
        current: '当前',
        copied: '已复制',
        copyFailed: '无法写入剪贴板',
        openMac: '在访达中显示',
        openWindows: '在资源管理器中显示',
        openGeneric: '在系统文件管理器中显示',
        openFailed: '无法打开系统文件管理器',
      },
      en: {
        trigger: 'Copy workspace path',
        title: 'Copy workspace path',
        empty: 'No workspaces',
        search: 'Search workspaces',
        noMatches: 'No matching workspaces',
        current: 'Current',
        copied: 'Copied',
        copyFailed: 'Couldn’t copy to the clipboard',
        openMac: 'Show in Finder',
        openWindows: 'Show in File Explorer',
        openGeneric: 'Show in file manager',
        openFailed: 'Couldn’t open the system file manager',
      },
    }

    function locale() {
      const lang = typeof document !== 'undefined' ? document.documentElement.lang : ''
      return String(lang).toLowerCase().startsWith('en') ? copy.en : copy.zh
    }

    /** Keep in sync with paths.js */
    function abbreviateHomePath(path, home) {
      if (typeof path !== 'string' || path === '') return ''
      if (typeof home !== 'string' || home === '' || home === '/' || home === '\\') return path
      if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return path
      const normPath = path.replace(/\\/g, '/')
      const normHome = home.replace(/\\/g, '/').replace(/\/+$/, '')
      if (normHome === '' || normHome === '/') return path
      if (normPath === normHome) return '~'
      if (normPath.startsWith(normHome + '/')) return '~' + normPath.slice(normHome.length)
      return path
    }

    /** Keep in sync with paths.js */
    function listCopyableWorkspaces(items, currentSessionId) {
      const rows = (items || []).filter((item) => typeof item.path === 'string' && item.path !== '')
      if (currentSessionId === undefined || currentSessionId === '') return rows
      const current = rows.find((item) => Array.isArray(item.sessionIds) && item.sessionIds.includes(currentSessionId))
      if (current === undefined) return rows
      return [current].concat(rows.filter((item) => item.workspaceId !== current.workspaceId))
    }

    /** Keep in sync with paths.js — Host OS, not the DSH sidebar. */
    function hostFileManagerKind(home) {
      if (typeof home !== 'string' || home === '') return 'generic'
      if (/^[A-Za-z]:[\\/]/.test(home) || home.startsWith('\\\\')) return 'windows'
      if (home === '/Users' || home.startsWith('/Users/')) return 'mac'
      return 'generic'
    }

    function workspaceBasename(path) {
      if (typeof path !== 'string' || path === '') return ''
      const trimmed = path.replace(/[/\\]+$/, '')
      const parts = trimmed.split(/[/\\]/)
      const base = parts[parts.length - 1]
      return base !== undefined && base !== '' ? base : trimmed
    }

    function filterWorkspaces(rows, query, home) {
      const needle = String(query || '').trim().toLowerCase()
      if (needle === '') return rows
      return rows.filter((item) => {
        const title = String(item.title || '').toLowerCase()
        const path = String(item.path || '').toLowerCase()
        const base = workspaceBasename(item.path).toLowerCase()
        const short = abbreviateHomePath(item.path || '', home).toLowerCase()
        return title.indexOf(needle) !== -1 || path.indexOf(needle) !== -1 || base.indexOf(needle) !== -1 || short.indexOf(needle) !== -1
      })
    }

    function openLabel(t, home) {
      const kind = hostFileManagerKind(home)
      if (kind === 'mac') return t.openMac
      if (kind === 'windows') return t.openWindows
      return t.openGeneric
    }

    async function writeClipboard(text) {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(text)
          return true
        } catch {
          /* fall through */
        }
      }
      if (typeof document === 'undefined' || typeof document.execCommand !== 'function') return false
      const area = document.createElement('textarea')
      area.value = text
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.left = '-9999px'
      document.body.appendChild(area)
      area.select()
      try {
        return document.execCommand('copy')
      } catch {
        return false
      } finally {
        area.remove()
      }
    }

    function useSnapshot(store) {
      const [, bump] = React.useState(0)
      React.useEffect(() => {
        if (!store || typeof store.subscribe !== 'function') return undefined
        return store.subscribe(() => bump((n) => n + 1))
      }, [store])
      return store && typeof store.getSnapshot === 'function' ? store.getSnapshot() : undefined
    }

    function IconFolder({ size = 18 }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        'aria-hidden': 'true',
      },
        h('path', {
          d: 'M2.5 4.75A1.25 1.25 0 0 1 3.75 3.5h2.2L7.2 5h5.05A1.25 1.25 0 0 1 13.5 6.25v5.5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75z',
          stroke: 'currentColor',
          strokeWidth: 1.25,
        }),
        h('path', {
          d: 'M6 9.2h4M6 11h2.5',
          stroke: 'currentColor',
          strokeWidth: 1.25,
          strokeLinecap: 'round',
        }))
    }

    function IconOpen({ size = 14 }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        'aria-hidden': 'true',
      },
        h('path', {
          d: 'M6.5 3.5H4.25A1.75 1.75 0 0 0 2.5 5.25v6.5A1.75 1.75 0 0 0 4.25 13.5h6.5a1.75 1.75 0 0 0 1.75-1.75V9.5',
          stroke: 'currentColor',
          strokeWidth: 1.25,
          strokeLinecap: 'round',
        }),
        h('path', {
          d: 'M9 3.5h3.5V7M12.5 3.5 8 8',
          stroke: 'currentColor',
          strokeWidth: 1.25,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }))
    }

    function PathPanel({ t, rows, total, query, onQuery, inputRef, currentId, home, canOpen, onCopy, onOpen, copiedId, status, error, revealLabel }) {
      const empty = total === 0 ? t.empty : t.noMatches
      return h(React.Fragment, null,
        total > 0 ? h('div', { className: 'dsh-wspath-search' },
          h('input', {
            ref: inputRef,
            type: 'search',
            value: query,
            placeholder: t.search,
            'aria-label': t.search,
            autoComplete: 'off',
            spellCheck: 'false',
            onChange: (event) => onQuery(event.target.value),
            onKeyDown: (event) => {
              if (event.key !== 'Escape') return
              if (!event.currentTarget.value) return
              event.preventDefault()
              event.stopPropagation()
              onQuery('')
            },
          }),
        ) : null,
        rows.length === 0
          ? h('p', { className: 'dsh-wspath-empty' }, empty)
          : h('div', { className: 'dsh-wspath-list' },
          rows.map((workspace) => {
            const current = workspace.workspaceId === currentId
            const copied = copiedId === workspace.workspaceId
            const displayPath = abbreviateHomePath(workspace.path, home)
            return h('div', {
              key: workspace.workspaceId,
              className: 'dsh-wspath-row' + (current ? ' is-current' : ''),
            },
              h('button', {
                type: 'button',
                className: 'dsh-wspath-copy',
                title: workspace.path,
                onClick: () => { void onCopy(workspace) },
              },
                h('span', { className: 'dsh-wspath-main' },
                  h('span', { className: 'dsh-wspath-title' },
                    h('span', { className: 'dsh-wspath-name' }, workspace.title || workspace.path),
                    current ? h('span', { className: 'dsh-wspath-badge' }, t.current) : null,
                    copied ? h('span', { className: 'dsh-wspath-badge' }, t.copied) : null,
                  ),
                  h('span', { className: 'dsh-wspath-path' }, displayPath),
                ),
              ),
              canOpen ? h('button', {
                type: 'button',
                className: 'dsh-wspath-open',
                'aria-label': revealLabel,
                title: revealLabel,
                onClick: () => { void onOpen(workspace) },
              }, h(IconOpen)) : null,
            )
          }),
        ),
        status ? h('div', { className: 'dsh-wspath-status' + (error ? ' is-error' : ''), role: error ? 'alert' : 'status' }, status) : null,
      )
    }

    function PathButton({ wide, workspaces, sessions, connection }) {
      const t = locale()
      const buttonRef = React.useRef(null)
      const panelRef = React.useRef(null)
      const inputRef = React.useRef(null)
      const [open, setOpen] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const [query, setQuery] = React.useState('')
      const [copiedId, setCopiedId] = React.useState('')
      const [status, setStatus] = React.useState('')
      const [error, setError] = React.useState(false)
      const copiedTimer = React.useRef(null)

      const workspaceSnap = useSnapshot(workspaces && workspaces.list)
      const sessionSnap = useSnapshot(sessions && sessions.list)
      const host = useSnapshot(connection && connection.hostDescription)
      const items = workspaceSnap && Array.isArray(workspaceSnap.items) ? workspaceSnap.items : []
      const currentSessionId = sessionSnap && sessionSnap.current
      const home = host && typeof host.home === 'string' ? host.home : undefined
      const rows = listCopyableWorkspaces(items, currentSessionId)
      const visible = filterWorkspaces(rows, query, home)
      const currentWorkspace = rows.find((item) => Array.isArray(item.sessionIds) && item.sessionIds.includes(currentSessionId))
      const currentId = currentWorkspace ? currentWorkspace.workspaceId : undefined
      const canOpen = Boolean(
        connection && connection.isLoopback === true
        && host && host.canOpenPath === true
        && workspaces && typeof workspaces.openPath === 'function',
      )

      const place = React.useCallback(() => {
        const button = buttonRef.current
        if (button === null) return
        const rect = button.getBoundingClientRect()
        const width = Math.min(320, window.innerWidth - 16)
        let left = rect.left
        if (left + width > window.innerWidth - 8) left = Math.max(8, window.innerWidth - width - 8)
        if (left < 8) left = 8
        const bottom = Math.max(8, window.innerHeight - rect.top + 8)
        setCoords({ left, bottom, width })
      }, [])

      React.useEffect(() => {
        if (!open) return undefined
        place()
        const onScroll = () => place()
        window.addEventListener('resize', place)
        window.addEventListener('scroll', onScroll, true)
        return () => {
          window.removeEventListener('resize', place)
          window.removeEventListener('scroll', onScroll, true)
        }
      }, [open, place])

      React.useEffect(() => {
        if (!open) return undefined
        const onKey = (event) => {
          if (event.key === 'Escape') setOpen(false)
        }
        const onPointer = (event) => {
          const target = event.target
          if (!(target instanceof Node)) return
          if (buttonRef.current && buttonRef.current.contains(target)) return
          if (panelRef.current && panelRef.current.contains(target)) return
          setOpen(false)
        }
        document.addEventListener('keydown', onKey)
        document.addEventListener('pointerdown', onPointer)
        return () => {
          document.removeEventListener('keydown', onKey)
          document.removeEventListener('pointerdown', onPointer)
        }
      }, [open])

      React.useEffect(() => {
        if (!open) {
          setQuery('')
          return undefined
        }
        const id = window.requestAnimationFrame(() => {
          if (inputRef.current) inputRef.current.focus()
        })
        return () => window.cancelAnimationFrame(id)
      }, [open])

      React.useEffect(() => () => {
        if (copiedTimer.current !== null) clearTimeout(copiedTimer.current)
      }, [])

      async function onCopy(workspace) {
        const ok = await writeClipboard(workspace.path)
        if (!ok) {
          setError(true)
          setStatus(t.copyFailed)
          return
        }
        setError(false)
        setStatus(t.copied)
        setCopiedId(workspace.workspaceId)
        if (copiedTimer.current !== null) clearTimeout(copiedTimer.current)
        copiedTimer.current = setTimeout(() => {
          setCopiedId('')
          setStatus('')
        }, 1200)
      }

      async function onOpen(workspace) {
        if (!canOpen) return
        try {
          // Host OS file manager (Finder / Explorer / xdg-open). Not the DSH sidebar.
          await workspaces.openPath(workspace.path)
          setError(false)
          setStatus('')
        } catch (err) {
          setError(true)
          setStatus(err instanceof Error ? err.message : t.openFailed)
        }
      }

      const panel = open && coords !== null
        ? ReactDOM.createPortal(
          h('div', {
            ref: panelRef,
            className: 'dsh-wspath-panel',
            role: 'dialog',
            'aria-label': t.title,
            style: {
              position: 'fixed',
              left: coords.left + 'px',
              bottom: coords.bottom + 'px',
              width: coords.width + 'px',
            },
          },
            h('div', { className: 'dsh-wspath-head' }, t.title),
            h(PathPanel, {
              t,
              rows: visible,
              total: rows.length,
              query,
              onQuery: setQuery,
              inputRef,
              currentId,
              home,
              canOpen,
              onCopy,
              onOpen,
              copiedId,
              status,
              error,
              revealLabel: openLabel(t, home),
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
          'aria-expanded': open ? 'true' : 'false',
          'aria-haspopup': 'dialog',
          onClick: () => {
            setOpen((value) => !value)
            setStatus('')
            setError(false)
          },
        }, h(IconFolder, { size: 18 })),
        panel,
      )
    }

    const inject = ['slots', 'workspaces', 'sessions', 'connection']

    function apply(ctx) {
      ctx.slots.inject('sidebar.footer.action', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'sidebar.footer.action',
            id: 'dsh-workspace-path',
          }, (props) => h(PathButton, {
            wide: props && props.wide,
            workspaces: ctx.workspaces,
            sessions: ctx.sessions,
            connection: ctx.connection,
          }))
        } catch {
          dispose = undefined
        }
        return () => { if (dispose) dispose() }
      })
    }

    module.exports.apply = apply
    module.exports.inject = inject
    return module.exports
  },
})
