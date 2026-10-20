    // 与官方「添加工作区」同一条路：先由 DSH 的目录选择器选目录（原生选择框
    // 自带「新建文件夹」，内置浏览对话框也有），再登记为工作区并打开新会话。
    // 插件只提供触发点，不自己拼目录创建 UI。
    async function pickAndAddWorkspace({ uiWorkspace, getUiWorkspace, workspaces, startSession }) {
      // uiWorkspace 由 ctx.inject 晚到，组件首次渲染时可能还是 undefined；
      // 这里以 getter 为准，取点击当下最新的服务。
      const ui = (typeof getUiWorkspace === 'function' ? getUiWorkspace() : undefined) || uiWorkspace
      if (typeof ui?.pickDirectory !== 'function') {
        throw new Error(locale().pickerUnavailable)
      }
      const pickedPath = await ui.pickDirectory()
      if (!pickedPath) return null
      if (typeof workspaces?.create !== 'function') throw new Error(locale().pickerUnavailable)
      const created = await workspaces.create({ path: pickedPath })
      const workspaceId = created?.workspaceId ?? created?.workspace?.workspaceId
      if (!workspaceId) return null
      if (typeof startSession === 'function') startSession(workspaceId)
      return { workspaceId, path: pickedPath }
    }
