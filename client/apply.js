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
            h(PathButton, { wide: props?.wide, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
      ctx.slots.inject('conversation.session.header.actions', () => {
        let disposeWs, disposeSid
        try {
          disposeWs = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-path-badge', order: -20 }, (props) =>
            h(WorkspaceHeaderBadge, { sessionId: props?.sessionId, workspaces: ctx.workspaces, sessions: ctx.sessions, connection: ctx.connection, startSession }))
          disposeSid = ctx.slots.register({ name: 'conversation.session.header.actions', id: 'dsh-workspace-session-id-badge', order: -19 }, (props) =>
            h(SessionIdBadge, { sessionId: props?.sessionId, sessions: ctx.sessions }))
        } catch { disposeWs = undefined; disposeSid = undefined }
        return () => { if (disposeWs) disposeWs(); if (disposeSid) disposeSid() }
      })
      ctx.slots.inject('conversation.hero.workspace', () => {
        let dispose
        try {
          dispose = ctx.slots.register({
            name: 'conversation.hero.workspace',
            id: 'dsh-workspace-path-hero',
            children: { 'conversation.hero.workspace.directoryFlow': { kind: 'single', scope: 'root' } },
            inject: () => ({
              createWorkspace: (input) => ctx.workspaces.create(input),
              hooks: { directoryFlow: flowSource },
            }),
          }, (props) => h(HeroWorkspacePicker, props))
        } catch { dispose = undefined }
        return () => { if (dispose) dispose() }
      })
    }
    module.exports.apply = apply
    module.exports.inject = inject
