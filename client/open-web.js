    // 「在浏览器打开」：桌面壳的页面来自 dsh-app://，相对路径交给系统只会
    // 把 App 自己唤起来。这里向宿主要一条带 launch token 的 loopback 地址，
    // 再交给 window.open —— 桌面壳会把它转给 shell.openExternal。
    const OPEN_WEB_CHANNEL = '/dsh-workspace-path'

    /** Ask the host for the authenticated Web URL of one session. */
    function requestWebUrl(connection, sessionId) {
      const rpc = connection?.rpc
      if (!rpc || typeof rpc.call !== 'function') {
        return Promise.reject(new Error('connection.rpc is unavailable'))
      }
      return Promise.resolve(rpc.call(OPEN_WEB_CHANNEL, 'open-web', { sessionId }))
        .then((result) => {
          if (!result || result.ok !== true) {
            throw new Error(result?.error?.message || 'Unable to compose the Web URL')
          }
          const url = result.value?.url
          if (typeof url !== 'string' || url === '') throw new Error('The Web URL is empty')
          return url
        })
    }

    /** Open the Web GUI in the system browser; resolves to an error message or ''. */
    function openWebInBrowser(connection, sessionId) {
      return requestWebUrl(connection, sessionId)
        .then((url) => { window.open(url, '_blank'); return '' })
        .catch((error) => String(error?.message || error))
    }

    function IconWeb({ size = 13 }) {
      return h('svg', { viewBox: '0 0 16 16', width: size, height: size, fill: 'none', 'aria-hidden': 'true' }, [
        h('path', { key: 'arrow', d: 'M9.5 2.5h4v4M13.5 2.5L7.5 8.5', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { key: 'frame', d: 'M12.5 9.5v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      ])
    }

    /** Session-header 「Web」 button, sitting next to the Git / dev pair. */
    function OpenInBrowserButton({ sessionId, sessions, connection }) {
      const t = locale()
      const [state, setState] = React.useState('idle')
      const timer = React.useRef(null)
      const sesSnap = useSnapshot(sessions?.list)
      const targetId = sessionId || sesSnap?.current
      const busy = state === 'busy'

      React.useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

      const onClick = (event) => {
        event?.preventDefault?.()
        event?.stopPropagation?.()
        if (busy) return
        const settle = (next, delay) => {
          setState(next)
          if (timer.current) clearTimeout(timer.current)
          timer.current = setTimeout(() => setState('idle'), delay)
        }
        setState('busy')
        openWebInBrowser(connection, targetId).then((error) => {
          if (error !== '') console.error('[dsh-workspace-path] open in browser:', error)
          settle(error === '' ? 'done' : 'error', error === '' ? 1200 : 1800)
        })
      }

      return h('div', { className: 'dsh-wspath-web' },
        h('button', {
          type: 'button',
          className: 'dsh-wspath-web-btn',
          'data-state': state,
          title: t.openWebTip,
          'aria-label': t.openWebTip,
          onClick,
        }, [h(IconWeb, { key: 'icon', size: 13 }), h('span', { key: 'label' }, state === 'error' ? t.openWebFailed : t.openWeb)]))
    }

    /** Register the header 「Web」 button; one line from client/apply.js. */
    function mountOpenInBrowser(ctx) {
      ctx.slots.inject('conversation.session.header.utilities', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.session.header.utilities',
            id: 'dsh-workspace-path-web',
            order: 60,
          }, (props) => h(OpenInBrowserButton, {
            sessionId: props?.sessionId,
            sessions: ctx.sessions,
            connection: ctx.connection,
          }))
        } catch (error) {
          console.error('[dsh-workspace-path] failed to register the Web button:', error)
          dispose = undefined
        }
        return () => { if (dispose) dispose() }
      })
    }
