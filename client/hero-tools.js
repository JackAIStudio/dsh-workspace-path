    const APP_NAMES = {
      finder: '访达',
      explorer: '文件资源管理器',
      filemanager: '文件管理器',
      cursor: 'Cursor',
      vscode: 'VS Code',
      vscodeinsiders: 'VS Code Insiders',
      windsurf: 'Windsurf',
      zed: 'Zed',
      xcode: 'Xcode',
      androidstudio: 'Android Studio',
      intellij: 'IntelliJ IDEA',
      pycharm: 'PyCharm',
      webstorm: 'WebStorm',
      sublimetext: 'Sublime Text',
      terminal: '终端',
      iterm: 'iTerm2',
      warp: 'Warp',
      ghostty: 'Ghostty',
    }

    function AppIcon({ appId, size = 14 }) {
      const [failed, setFailed] = React.useState(false)
      if (failed || !appId) {
        if (appId === 'terminal' || appId === 'iterm' || appId === 'warp' || appId === 'ghostty') return h(IconTerminal, { size })
        if (appId === 'finder' || appId === 'explorer' || appId === 'filemanager') return h(IconFolder, { size })
        return h(IconOpen, { size })
      }
      return h('img', {
        src: `/open-in-app/icon/${appId}`,
        alt: '', className: 'dsh-hero-app-icon', draggable: false,
        onError: () => setFailed(true),
      })
    }

    function HeroWorkspaceTools(props) {
      const { selectedId, workspaces, connection, useWorkspaces } = props
      const t = locale()
      const [copied, setCopied] = React.useState(false)
      const copiedTimer = React.useRef(null)
      const [menuOpen, setMenuOpen] = React.useState(false)
      const [menuCoords, setMenuCoords] = React.useState(null)
      const splitBtnRef = React.useRef(null)
      const [apps, setApps] = React.useState([])
      const [choice, setChoice] = React.useState('')

      const wsSnap = useSnapshot(workspaces?.list)
      const snap = typeof useWorkspaces === 'function' ? useWorkspaces((s) => s) : wsSnap
      const items = snap?.items || wsSnap?.items || []
      const currentWs = (selectedId ? items.find((it) => it.workspaceId === selectedId) : null) ||
                        items.find((it) => it.isCurrent) ||
                        items[0]

      React.useEffect(() => {
        let mounted = true
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('dsh.open-in-app.choice') : ''
        if (saved) setChoice(saved)

        fetch('/open-in-app/apps')
          .then((res) => (res.ok ? res.json() : {}))
          .then((data) => {
            if (!mounted) return
            const raw = Array.isArray(data) ? data : (data?.apps || [])
            const valid = raw.filter((id) => typeof id === 'string')
            const finalApps = valid.length > 0 ? valid : ['finder', 'terminal']
            setApps(finalApps)
            if (!saved && finalApps.length > 0) {
              setChoice(finalApps.includes('terminal') ? 'terminal' : finalApps[0])
            }
          })
          .catch(() => {
            if (!mounted) return
            setApps(['finder', 'terminal'])
            if (!saved) setChoice('terminal')
          })
        return () => { mounted = false }
      }, [])

      const currentApp = (choice && apps.includes(choice)) ? choice : (apps[0] || 'terminal')
      const currentAppName = APP_NAMES[currentApp] || currentApp

      const onCopy = async (e) => {
        if (e) e.stopPropagation()
        if (!currentWs?.path) return
        const ok = await writeClipboard(currentWs.path)
        if (ok) {
          setCopied(true)
          if (copiedTimer.current) clearTimeout(copiedTimer.current)
          copiedTimer.current = setTimeout(() => setCopied(false), 1500)
        }
      }

      const launchApp = async (appId) => {
        if (!currentWs?.path) return
        try {
          const res = await fetch('/open-in-app/open', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ app: appId, path: currentWs.path }),
          })
          if (!res.ok) throw new Error('HTTP ' + res.status)
        } catch {
          if (appId === 'finder' || appId === 'explorer' || appId === 'filemanager') {
            connection?.rpc?.call('/dsh-workspace-path', 'reveal', { path: currentWs.path })
          } else {
            connection?.rpc?.call('/dsh-workspace-path', 'terminal', { path: currentWs.path })
          }
        }
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('dsh.open-in-app.choice', appId)
        }
        setChoice(appId)
        setMenuOpen(false)
      }

      const placeMenu = React.useCallback(() => {
        const btn = splitBtnRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect()
        setMenuCoords({ left: Math.max(8, r.left), top: r.bottom + 6 })
      }, [])

      usePopover(menuOpen, setMenuOpen, placeMenu, splitBtnRef, '.dsh-hero-app-menu')

      if (!currentWs?.path) return null

      const copyTip = copied ? t.copied : `${t.copyBtn}\n${currentWs.path}`
      const openTip = `${currentAppName} 打开\n${currentWs.path}`

      const menu = menuOpen && menuCoords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(
            h('div', {
              className: 'dsh-hero-app-menu',
              style: { position: 'fixed', left: menuCoords.left + 'px', top: menuCoords.top + 'px' },
            },
              apps.map((appId) => {
                const isCur = appId === currentApp
                return h('button', {
                  key: appId,
                  type: 'button',
                  className: 'dsh-hero-app-item' + (isCur ? ' is-selected' : ''),
                  onClick: () => launchApp(appId),
                },
                  h(AppIcon, { appId }),
                  h('span', { className: 'dsh-hero-app-label' }, APP_NAMES[appId] || appId),
                  isCur ? h('span', { className: 'dsh-hero-app-badge' }, '(默认)') : null,
                )
              }),
            ),
            document.body,
          )
        : null

      return h('div', { className: 'dsh-hero-tools' },
        h('span', { className: 'dsh-hero-tools-sep' }),
        h('button', {
          type: 'button',
          className: 'dsh-hero-tool-btn' + (copied ? ' is-copied' : ''),
          title: copyTip,
          'aria-label': t.copyBtn,
          onClick: onCopy,
        },
          h(copied ? IconCheck : IconCopy, { size: 13 }),
        ),
        apps.length > 0 ? h('div', { ref: splitBtnRef, className: 'dsh-hero-split-btn' + (menuOpen ? ' is-open' : '') },
          h('button', {
            type: 'button',
            className: 'dsh-hero-split-main',
            title: openTip,
            'aria-label': openTip,
            onClick: () => launchApp(currentApp),
          },
            h(AppIcon, { appId: currentApp }),
          ),
          h('span', { className: 'dsh-hero-split-sep' }),
          h('button', {
            type: 'button',
            className: 'dsh-hero-split-arrow',
            title: '选择打开方式',
            'aria-label': '选择打开方式',
            onClick: () => setMenuOpen((v) => !v),
          },
            h(IconChevronDown, { size: 10 }),
          ),
        ) : null,
        menu,
      )
    }
