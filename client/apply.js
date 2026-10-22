    const inject = ['slots', 'workspaces', 'sessions', 'connection']
    function apply(ctx) {
      // 侧栏筛选菜单要能打开工作区中心的「按天」页，用一个共享把手把两边连起来。
      const hubRef = { current: null }
      let uiWorkspace
      if (typeof ctx.inject === 'function') {
        ctx.inject(['uiWorkspace'], (sub) => {
          uiWorkspace = sub.uiWorkspace
          return () => { uiWorkspace = undefined }
        })
      }
      // Better Sidebar 服务（可选）：晚到也行，Git 按钮通过 getter 取最新值。
      let betterSidebar
      if (typeof ctx.inject === 'function') {
        ctx.inject(['betterSidebar'], (sub) => {
          betterSidebar = sub.betterSidebar
          return () => { betterSidebar = undefined }
        })
      }
      const startSession = (workspaceId) => {
        const owner = (uiWorkspace && typeof uiWorkspace.startSession === 'function') ? uiWorkspace : ctx.workspaces
        if (owner && typeof owner.startSession === 'function') owner.startSession(workspaceId)
      }
      const flowSource = {
        getSnapshot: () => (typeof ctx.slots.entries === 'function' ? ctx.slots.entries('conversation.hero.workspace.directoryFlow').length > 0 : false),
        subscribe: (listener) => (typeof ctx.slots.subscribe === 'function' ? ctx.slots.subscribe('conversation.hero.workspace.directoryFlow', listener) : () => {}),
      }
      ctx.slots.inject('sidebar.footer.action', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'sidebar.footer.action', id: 'dsh-workspace-path' }, (props) =>
            h(PathButton, { wide: props?.wide, workspaces: ctx.workspaces, sessions: ctx.sessions, uiWorkspace, getUiWorkspace: () => uiWorkspace, connection: ctx.connection, startSession, controllerRef: hubRef }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.session.header.actions', () => {
        let disposeWs, disposeSid
        try {
          disposeWs = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-path-badge', order: -20 }, (props) =>
            h(WorkspaceHeaderBadge, { sessionId: props?.sessionId, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
          disposeSid = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-session-id-badge', order: -19 }, (props) =>
            h(SessionIdBadge, { sessionId: props?.sessionId, sessions: ctx.sessions, connection: ctx.connection }))
        } catch { disposeWs = undefined; disposeSid = undefined }
        return () => { if (disposeWs) disposeWs(); if (disposeSid) disposeSid() }
      })
      // 会话头部右上角：大号 Git + 启动命令按钮（utilities 槽，order 升序排列）。
      ctx.slots.inject('conversation.session.header.utilities', () => {
        let dispose
        try {
          dispose = ctx.slots.register({ name: 'conversation.session.header.utilities', id: 'dsh-workspace-path-dev', order: 40 }, (props) =>
            h(SessionDevActions, {
              sessionId: props?.sessionId,
              workspaces: ctx.workspaces,
              sessions: ctx.sessions,
              connection: ctx.connection,
              getBetterSidebar: () => betterSidebar,
            }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.hero.workspace', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.hero.workspace',
            id: 'dsh-workspace-path-hero',
            priority: -10,
          }, (props) => h(HeroWorkspacePicker, {
            ...props,
            workspaces: ctx.workspaces,
            sessions: ctx.sessions,
            uiWorkspace,
            getUiWorkspace: () => uiWorkspace,
            connection: ctx.connection,
            getBetterSidebar: () => betterSidebar,
          }))
        } catch (e) {
          console.error('[dsh-workspace-path] failed to register conversation.hero.workspace:', e)
          dispose = undefined
        }
        return () => { if (dispose) dispose() }
      })
      // 顶栏「Web」：用系统默认浏览器打开同一套 Harness 界面（合并自
      // dsh-open-in-browser；鉴权 URL 与会话 ID 浮层共用 open-web.js）。
      mountOpenInBrowser(ctx)
      // 官方左侧列表的「默认只看项目」筛层：DOM 适配 + 区头入口。
      ctx.effect(() => mountSidebarFilter(ctx, hubRef), 'dsh-workspace-path: sidebar filter')
    }
    module.exports.apply = apply
    module.exports.inject = inject
