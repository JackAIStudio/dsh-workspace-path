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

    // Git 按钮默认动作（全局偏好）：'sidebar' 打开 Better Sidebar 的「文件变动」页，
    // 'terminal' 保持旧行为（外部终端跑 git status）。右键菜单里可随时切换。
    const GIT_ACTION_KEY = 'dsh.git-action'
    function getGitAction() {
      if (typeof localStorage === 'undefined') return 'sidebar'
      return localStorage.getItem(GIT_ACTION_KEY) === 'terminal' ? 'terminal' : 'sidebar'
    }
    function setGitAction(action) {
      if (typeof localStorage === 'undefined') return
      try { localStorage.setItem(GIT_ACTION_KEY, action === 'terminal' ? 'terminal' : 'sidebar') } catch {}
    }

    /**
     * 在 Better Sidebar 打开当前会话的「文件变动」页。
     * 服务缺失、tab 被禁用或抛错时返回 false，调用方回退外部终端。
     */
    function openChangesPage(getBetterSidebar, sessionId) {
      const sb = typeof getBetterSidebar === 'function' ? getBetterSidebar() : undefined
      if (!sb || typeof sb.openTab !== 'function') return false
      if (typeof sb.isTabEnabled === 'function' && sb.isTabEnabled('git') === false) return false
      // Without a seat session the service's openTab is a strict no-op, which
      // would swallow the click (the caller would hear "opened" while nothing
      // appeared). Fall back to the external terminal in that case.
      if (sessionId === undefined) {
        const seat = typeof sb.getSnapshot === 'function' ? sb.getSnapshot()?.sessionId : undefined
        if (seat === undefined) return false
      }
      try {
        sb.openTab({ type: 'git' }, sessionId ? { sessionId } : undefined)
        return true
      } catch { return false }
    }

    function DevCmdConfigModal(props) {
      const { open, onClose, wsPath, onSave, error } = props
      const [cmd, setCmd] = React.useState('')
      const [busy, setBusy] = React.useState(false)

      React.useEffect(() => {
        if (open) { setCmd(getWsDevCmd(wsPath) || 'npm run dev'); setBusy(false) }
      }, [open, wsPath])

      if (!open || typeof document === 'undefined') return null

      const presets = ['npm run dev', 'pnpm dev', 'yarn start', 'cargo run', 'python main.py']

      const handleSubmit = async (e) => {
        if (e) e.preventDefault()
        const trimmed = cmd.trim()
        setWsDevCmd(wsPath, trimmed)
        if (!trimmed || !onSave) { onClose(); return }
        setBusy(true)
        const res = await onSave(trimmed)
        setBusy(false)
        // 启动失败时保持对话框打开并展示原因，不再静默关闭。
        if (res && res.ok === false) return
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
              error ? h('div', { className: 'dsh-dev-modal-error' }, error) : null,
              h('div', { className: 'dsh-dev-modal-foot' },
                h('button', { type: 'button', className: 'dsh-dev-modal-btn is-cancel', onClick: onClose }, '取消'),
                h('button', { type: 'submit', className: 'dsh-dev-modal-btn is-primary', disabled: busy }, busy ? '启动中…' : '保存并启动'),
              ),
            ),
          ),
        ),
        document.body,
      )
    }

    /** Git 按钮右键菜单：列出两种动作，点击项 = 设为默认并立即执行。 */
    function DevGitMenu({ open, anchorRef, current, onPick, onClose }) {
      const [coords, setCoords] = React.useState(null)
      const place = React.useCallback(() => {
        const btn = anchorRef.current
        if (!btn) return
        const r = btn.getBoundingClientRect(), w = Math.min(260, window.innerWidth - 16)
        let l = r.right - w
        if (l < 8) l = 8
        setCoords({ left: l, top: r.bottom + 6, width: w })
      }, [anchorRef])
      usePopover(open, (next) => { if (!next && typeof onClose === 'function') onClose() }, place, anchorRef, '.dsh-dev-menu')
      if (!open || !coords || typeof document === 'undefined') return null
      const item = (value, label) => h('button', {
        type: 'button',
        className: 'dsh-wspath-hmenu-item' + (current === value ? ' is-active' : ''),
        onClick: () => onPick(value),
      },
        h('span', { className: 'dsh-wspath-hmenu-icon' }, current === value ? h(IconCheck, { size: 13 }) : null),
        h('span', null, label),
      )
      return ReactDOM.createPortal(
        h('div', { className: 'dsh-wspath-hmenu dsh-dev-menu', style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' } },
          h('div', { className: 'dsh-wspath-hmenu-head' },
            h('div', { className: 'dsh-wspath-hmenu-title' }, 'Git 按钮默认动作'),
            h('div', { className: 'dsh-wspath-sid-label' }, '点击即设为默认并执行'),
          ),
          h('div', { className: 'dsh-wspath-hmenu-list' },
            item('sidebar', '打开「文件变动」页'),
            item('terminal', '在外部终端运行 git status'),
          ),
        ), document.body)
    }

    function DevActionButtons(props) {
      const { connection, wsPath, size = 13, showBorder = false, sessionId, getBetterSidebar, variant = 'row', big = false } = props
      const [modalOpen, setModalOpen] = React.useState(false)
      const [modalError, setModalError] = React.useState('')
      const [menuOpen, setMenuOpen] = React.useState(false)
      const [gitAction, setGitActionState] = React.useState(getGitAction)
      const gitBtnRef = React.useRef(null)

      if (!wsPath) return null

      // 宿主调用失败（通道 4xx/5xx、脚本被系统拒绝等）必须变成可见错误，不能静默吞掉。
      const launch = async (cmd) => {
        try {
          const res = await runWorkspaceCommand(connection, wsPath, cmd)
          return res && typeof res === 'object' ? res : { ok: false, error: { message: '宿主连接不可用，请刷新页面后重试' } }
        } catch (err) {
          return { ok: false, error: { message: String(err?.message || err) } }
        }
      }

      const openModal = (message) => { setModalError(message || ''); setModalOpen(true) }

      // header 位置按偏好动作执行；工作区列表行保持旧行为（外部终端 git status）。
      const runGitAction = (action) => {
        if (action !== 'terminal' && openChangesPage(getBetterSidebar, sessionId)) return
        launch('git status')
      }

      const onGitClick = (e) => {
        if (e) e.stopPropagation()
        setMenuOpen(false)
        recordWorkspaceUse(wsPath)
        runGitAction(variant === 'header' ? gitAction : 'terminal')
      }

      const onGitContext = (e) => {
        if (variant !== 'header') return
        e.preventDefault()
        e.stopPropagation()
        setMenuOpen(true)
      }

      const pickGitAction = (value) => {
        setGitAction(value)
        setGitActionState(value)
        setMenuOpen(false)
        recordWorkspaceUse(wsPath)
        runGitAction(value)
      }

      const onRunDev = async (e) => {
        if (e) e.stopPropagation()
        recordWorkspaceUse(wsPath)
        const savedCmd = getWsDevCmd(wsPath)
        if (!savedCmd) { openModal(''); return }
        const res = await launch(savedCmd)
        if (res && res.ok === false) openModal(res.error?.message || '启动失败')
      }

      const onContextMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        openModal('')
      }

      const devCmd = getWsDevCmd(wsPath)
      const devTip = devCmd ? `启动: ${devCmd}\n(右键修改启动命令)` : '设置并启动项目开发命令'
      const gitTip = variant === 'header'
        ? (gitAction === 'terminal' ? '在外部终端运行 git status\n(右键切换默认动作)' : '打开「文件变动」页 (Better Sidebar)\n(右键切换默认动作)')
        : '在外部终端运行 git status'

      const btnCls = (showBorder ? 'dsh-dev-btn is-bordered' : 'dsh-dev-btn') + (big ? ' is-big' : '')

      return h('div', { className: 'dsh-dev-actions' + (big ? ' is-big' : '') },
        h('button', {
          ref: gitBtnRef,
          type: 'button',
          className: btnCls,
          title: gitTip,
          'aria-label': 'Git',
          onClick: onGitClick,
          onContextMenu: onGitContext,
        }, h(IconGit, { size })),
        h('button', {
          type: 'button',
          className: btnCls,
          title: devTip,
          'aria-label': 'Run Dev Command',
          onClick: onRunDev,
          onContextMenu: onContextMenu,
        }, h(IconRocket, { size })),
        h(DevGitMenu, { open: menuOpen, anchorRef: gitBtnRef, current: gitAction, onPick: pickGitAction, onClose: () => setMenuOpen(false) }),
        h(DevCmdConfigModal, {
          open: modalOpen,
          onClose: () => setModalOpen(false),
          wsPath,
          error: modalError,
          onSave: async (newCmd) => {
            if (!newCmd) return undefined
            recordWorkspaceUse(wsPath)
            const res = await launch(newCmd)
            setModalError(res && res.ok === false ? (res.error?.message || '启动失败') : '')
            return res
          },
        }),
      )
    }

    /** 会话头部右上角的 Git + 启动命令按钮（跟随当前会话的工作区，28px 大号样式）。 */
    function SessionDevActions({ sessionId, workspaces, sessions, connection, getBetterSidebar }) {
      const sesSnap = useSnapshot(sessions?.list), wsSnap = useSnapshot(workspaces?.list)
      const targetId = sessionId || sesSnap?.current
      const ws = findSessionWorkspace(wsSnap, sesSnap, targetId)
      if (!ws || !ws.path) return null
      return h(DevActionButtons, {
        connection, wsPath: ws.path, sessionId: targetId, getBetterSidebar,
        size: 16, variant: 'header', big: true,
      })
    }
