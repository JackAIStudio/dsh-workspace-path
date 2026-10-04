    // Common Dev & Git Action Tools
    const IconGit = ({ size = 13, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className },
      h('path', { d: 'M14.6 6.8l-5.4-5.4a1.6 1.6 0 0 0-2.3 0L5.7 2.6l2.1 2.1c.4-.2.9-.2 1.3 0 .7.4 1 1.2.7 2l2 2c.7-.2 1.6.1 2 .7.6.7.5 1.7-.1 2.3-.6.6-1.6.7-2.3.1-.5-.4-.7-1.2-.5-1.9l-1.9-1.9v3.7c.3.2.6.5.7.9.4.8 0 1.7-.8 2.1-.8.4-1.7 0-2.1-.8-.4-.8 0-1.7.8-2.1.3-.2.6-.2.9-.2V6.6c-.3 0-.6-.1-.9-.3-.5-.4-.7-1.1-.5-1.7L5.5 2.4 1.4 6.5a1.6 1.6 0 0 0 0 2.3l5.4 5.4a1.6 1.6 0 0 0 2.3 0l5.5-5.5a1.6 1.6 0 0 0 0-2.3z', fill: '#f05032' }),
    )

    const IconRocket = ({ size = 13, className = '' }) => h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', className },
      h('path', { d: 'M9.5 1.5c2.5.5 5 3 5 5 0 2.5-2 4.5-4 5.5l-1.5 2.5-1.5-1.5 1-1.5c-1-2-1-3-1-3s-1 0-3-1l-1.5 1-1.5-1.5 2.5-1.5c1-2 3-4 5.5-4z', stroke: '#10b981', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('circle', { cx: '10.5', cy: '5.5', r: '1.2', fill: '#10b981' }),
      h('path', { d: 'M3 13s.5-1.5 2-2', stroke: '#f59e0b', strokeWidth: 1.25, strokeLinecap: 'round' }),
    )

    function getWsDevCmd(wsPath) {
      if (!wsPath || typeof localStorage === 'undefined') return ''
      return localStorage.getItem('dsh.ws-dev-cmd:' + wsPath) || ''
    }

    function setWsDevCmd(wsPath, cmd) {
      if (!wsPath || typeof localStorage === 'undefined') return
      if (cmd) localStorage.setItem('dsh.ws-dev-cmd:' + wsPath, cmd)
      else localStorage.removeItem('dsh.ws-dev-cmd:' + wsPath)
    }

    function runWorkspaceCommand(connection, path, cmd) {
      if (!connection?.rpc || !path || !cmd) return Promise.resolve(false)
      return connection.rpc.call('/dsh-workspace-path', 'run-command', { path, cmd })
    }

    function DevCmdConfigModal(props) {
      const { open, onClose, wsPath, onSave } = props
      const [cmd, setCmd] = React.useState('')

      React.useEffect(() => {
        if (open) setCmd(getWsDevCmd(wsPath) || 'npm run dev')
      }, [open, wsPath])

      if (!open || typeof document === 'undefined') return null

      const presets = ['npm run dev', 'pnpm dev', 'yarn start', 'cargo run', 'python main.py']

      const handleSubmit = (e) => {
        if (e) e.preventDefault()
        const trimmed = cmd.trim()
        setWsDevCmd(wsPath, trimmed)
        onSave?.(trimmed)
        onClose()
      }

      return ReactDOM.createPortal(
        h('div', { className: 'dsh-dev-modal-overlay', onClick: onClose },
          h('div', { className: 'dsh-dev-modal', onClick: (e) => e.stopPropagation() },
            h('div', { className: 'dsh-dev-modal-head' },
              h('div', { className: 'dsh-dev-modal-title' }, '设置项目启动命令'),
              h('button', { type: 'button', className: 'dsh-dev-modal-close', onClick: onClose }, '×'),
            ),
            h('form', { onSubmit: handleSubmit, className: 'dsh-dev-modal-form' },
              h('div', { className: 'dsh-dev-modal-path' }, wsPath),
              h('input', {
                type: 'text',
                className: 'dsh-dev-modal-input',
                autoFocus: true,
                value: cmd,
                placeholder: '例如: npm run dev 或 pnpm dev',
                onChange: (e) => setCmd(e.target.value),
              }),
              h('div', { className: 'dsh-dev-modal-presets' },
                h('span', { className: 'dsh-dev-modal-preset-label' }, '常用预设:'),
                presets.map((p) => h('button', {
                  key: p,
                  type: 'button',
                  className: 'dsh-dev-modal-preset-btn',
                  onClick: () => setCmd(p),
                }, p)),
              ),
              h('div', { className: 'dsh-dev-modal-foot' },
                h('button', { type: 'button', className: 'dsh-dev-modal-btn is-cancel', onClick: onClose }, '取消'),
                h('button', { type: 'submit', className: 'dsh-dev-modal-btn is-primary' }, '保存并启动'),
              ),
            ),
          ),
        ),
        document.body,
      )
    }

    function DevActionButtons(props) {
      const { connection, wsPath, size = 13, showBorder = false } = props
      const [modalOpen, setModalOpen] = React.useState(false)

      if (!wsPath) return null

      const onGitStatus = (e) => {
        if (e) e.stopPropagation()
        runWorkspaceCommand(connection, wsPath, 'git status')
      }

      const onRunDev = (e) => {
        if (e) e.stopPropagation()
        const savedCmd = getWsDevCmd(wsPath)
        if (!savedCmd) {
          setModalOpen(true)
          return
        }
        runWorkspaceCommand(connection, wsPath, savedCmd)
      }

      const onContextMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setModalOpen(true)
      }

      const devCmd = getWsDevCmd(wsPath)
      const devTip = devCmd ? `启动: ${devCmd}\n(右键修改启动命令)` : '设置并启动项目开发命令'
      const gitTip = '在外部终端运行 git status'

      const btnCls = showBorder ? 'dsh-dev-btn is-bordered' : 'dsh-dev-btn'

      return h('div', { className: 'dsh-dev-actions' },
        h('button', {
          type: 'button',
          className: btnCls,
          title: gitTip,
          'aria-label': 'Git Status',
          onClick: onGitStatus,
        }, h(IconGit, { size })),
        h('button', {
          type: 'button',
          className: btnCls,
          title: devTip,
          'aria-label': 'Run Dev Command',
          onClick: onRunDev,
          onContextMenu: onContextMenu,
        }, h(IconRocket, { size })),
        h(DevCmdConfigModal, {
          open: modalOpen,
          onClose: () => setModalOpen(false),
          wsPath,
          onSave: (newCmd) => {
            if (newCmd) runWorkspaceCommand(connection, wsPath, newCmd)
          },
        }),
      )
    }
