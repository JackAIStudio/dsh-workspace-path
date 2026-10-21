    // Workspace usage tracking (clicks on copy, dev, git, terminal, reveal, select)
    const WS_USAGE_KEY = 'dsh.ws-usage'
    const usageListeners = new Set()

    function getWorkspaceUsageMap() {
      if (typeof localStorage === 'undefined') return {}
      try {
        const raw = localStorage.getItem(WS_USAGE_KEY)
        if (!raw) return {}
        const parsed = JSON.parse(raw)
        return (parsed && typeof parsed === 'object') ? parsed : {}
      } catch {
        return {}
      }
    }

    function recordWorkspaceUse(wsOrPath, now = Date.now()) {
      if (!wsOrPath || typeof localStorage === 'undefined') return undefined
      const path = typeof wsOrPath === 'string' ? wsOrPath : wsOrPath.path
      const id = typeof wsOrPath === 'object' ? wsOrPath.workspaceId : undefined
      const map = getWorkspaceUsageMap()
      const prev = (id && map[id]) || (path && map[path]) || {}
      const next = {
        lastUsedAt: typeof now === 'number' ? now : Date.now(),
        count: (typeof prev.count === 'number' ? prev.count : 0) + 1,
      }
      if (path) map[path] = next
      if (id) map[id] = next
      try {
        localStorage.setItem(WS_USAGE_KEY, JSON.stringify(map))
      } catch {}
      for (const fn of usageListeners) {
        try { fn(map) } catch {}
      }
      return next
    }

    function subscribeWorkspaceUsage(listener) {
      if (typeof listener !== 'function') return () => {}
      usageListeners.add(listener)
      return () => usageListeners.delete(listener)
    }

    function useWorkspaceUsageSnapshot(open) {
      const [snapshot, setSnapshot] = React.useState(getWorkspaceUsageMap)
      React.useEffect(() => { if (open) setSnapshot(getWorkspaceUsageMap()) }, [open])
      return snapshot
    }
