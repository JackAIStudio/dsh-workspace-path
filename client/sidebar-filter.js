    // Official sidebar workspace filter: projects first by default.
    //
    // The stock list renders one group per registered Workspace, and day folders
    // (days/YYYY-MM-DD) accumulate until they crowd out real projects. This layer
    // hides dated groups while always keeping today's folder and the folder of the
    // open session. It is presentation only: workspace.json, directories and
    // session membership are untouched, and choosing "all" restores the list.
    const SF_MODE_KEY = 'dsh.wspath.sidebar-filter'
    const SF_HIDDEN = 'dsh-wspath-sf-hidden'

    function sfCopy() {
      const en = typeof document !== 'undefined' && String(document.documentElement.lang).toLowerCase().startsWith('en')
      return en
        ? { projects: 'Projects', all: 'All', filter: 'Filter workspaces', onlyProjects: 'Projects only', showAll: 'All workspaces', hidden: '{n} day workspaces hidden', none: 'No day workspaces hidden', hiddenShort: '{n} day folders hidden', noneShort: 'No day folders', allShort: 'Showing all, incl. {n} day folders', byDay: 'Open day workspaces' }
        : { projects: '项目', all: '全部', filter: '筛选工作区', onlyProjects: '只看项目', showAll: '全部工作区', hidden: '已收起 {n} 个按天工作区', none: '没有收起按天工作区', hiddenShort: '已收起 {n} 个按天目录', noneShort: '没有按天目录', allShort: '显示全部，含 {n} 个按天目录', byDay: '查看按天工作区' }
    }

    function readSidebarFilterMode() {
      try { return localStorage.getItem(SF_MODE_KEY) === 'all' ? 'all' : 'projects' } catch { return 'projects' }
    }

    function writeSidebarFilterMode(mode) {
      try { localStorage.setItem(SF_MODE_KEY, mode === 'all' ? 'all' : 'projects') } catch {}
    }

    function sfQueryLabel(labels) {
      for (const label of labels) {
        const node = document.querySelector('button[aria-label=' + JSON.stringify(label) + ']')
        if (node) return node
      }
      return null
    }

    function sfViewOptionsButton() { return sfQueryLabel(['视图选项', 'View options']) }
    function sfSearchExpanded() { return Boolean(sfQueryLabel(['清除搜索', 'Clear search'])) }

    // The sidebar tree, found from the official view-options button so a look-alike
    // list in a side panel can never be filtered by accident.
    function sfFindTree(anchor) {
      let node = anchor
      while (node && node !== document.body) {
        const tree = node.querySelector?.(':scope div[role="tree"]')
        if (tree) return tree
        node = node.parentElement
      }
      return null
    }

    // Footer slot: one quiet status row under the tree. The section header is a
    // fixed 36px strip that already holds search, view options and add; a new
    // control there pushes those official buttons out of the clipped header, so
    // the filter lives where it can also explain the shortened list.
    function sfEnsureSlot() {
      const anchor = sfViewOptionsButton()
      if (!anchor) return { slot: null, tree: null }
      const tree = sfFindTree(anchor)
      const treeBody = tree?.parentElement
      const listArea = treeBody?.parentElement
      const root = listArea?.parentElement
      if (!tree || !treeBody || !listArea || !root) return { slot: null, tree }
      // 固定在区头与列表之间：随内容滚动会看不见，贴底又会被输入区挡住。
      let slot = root.querySelector(':scope > .dsh-wspath-sf-slot')
      if (!slot) {
        slot = document.createElement('div')
        slot.className = 'dsh-wspath-sf-slot'
        root.insertBefore(slot, listArea)
      }
      // 搜索时官方用扁平结果替换整棵树，筛选不参与，提示行也一并收起。
      slot.classList.toggle('is-searching', sfSearchExpanded())
      return { slot, tree }
    }

    function sfSessionOwners(items) {
      const owner = new Map()
      for (const ws of items ?? []) {
        for (const id of ws?.sessionIds ?? []) owner.set(id, ws.workspaceId)
      }
      return owner
    }

    // Grouped modes hide the group container (its sessions go with it); the flat
    // mode has no groups, so its session rows are hidden instead. Only classes
    // change, so the stock store and drag state stay authoritative.
    function sfApply(tree, model, owner, applied) {
      if (!tree) return
      for (const el of [...applied]) if (!el.isConnected) applied.delete(el)
      const mark = (el, hide) => {
        if (!el) return
        if (hide) {
          if (el.classList.contains(SF_HIDDEN)) return
          el.classList.add(SF_HIDDEN)
          applied.add(el)
        } else if (el.classList.contains(SF_HIDDEN)) {
          el.classList.remove(SF_HIDDEN)
          applied.delete(el)
        }
      }
      for (const row of tree.querySelectorAll('[data-row-key^="workspace:"]')) {
        const id = (row.getAttribute('data-row-key') || '').slice('workspace:'.length)
        mark(row.parentElement, model.hidden.has(id))
      }
      for (const row of tree.querySelectorAll('[data-row-key^="session:"]')) {
        const id = (row.getAttribute('data-row-key') || '').slice('session:'.length)
        const workspaceId = owner.get(id)
        mark(row, workspaceId !== undefined && model.hidden.has(workspaceId))
      }
    }

    function SidebarFilterButton({ ctx, hubRef }) {
      const t = sfCopy()
      const wsSnap = useSnapshot(ctx.workspaces?.list)
      const sesSnap = useSnapshot(ctx.sessions?.list)
      const [mode, setMode] = React.useState(readSidebarFilterMode)
      const [slot, setSlot] = React.useState(null)
      const [open, setOpen] = React.useState(false)
      const [coords, setCoords] = React.useState(null)
      const buttonRef = React.useRef(null)
      const slotRef = React.useRef(null)
      const treeRef = React.useRef(null)
      const appliedRef = React.useRef(new Set())
      const stateRef = React.useRef({})

      const items = wsSnap?.items || []
      const currentId = currentWorkspaceId(items, sesSnap?.byId)
      const model = sidebarFilterModel(items, { mode, currentId })
      stateRef.current = { model, items }

      const sync = React.useCallback(() => {
        const found = sfEnsureSlot()
        if (found.slot && found.slot !== slotRef.current) {
          slotRef.current = found.slot
          setSlot(found.slot)
        }
        if (found.tree) treeRef.current = found.tree
        sfApply(treeRef.current, stateRef.current.model, sfSessionOwners(stateRef.current.items), appliedRef.current)
      }, [])

      React.useEffect(() => {
        let frame = 0
        let disposed = false
        const schedule = () => {
          if (frame || disposed) return
          frame = requestAnimationFrame(() => {
            frame = 0
            if (disposed) return
            if (slotRef.current && !slotRef.current.isConnected) {
              slotRef.current = null
              treeRef.current = null
              setSlot(null)
            }
            sync()
          })
        }
        const observer = new MutationObserver((records) => {
          for (const record of records) {
            if (record.target instanceof Element && record.target.closest?.('.dsh-wspath-sf-slot')) return
            const tree = treeRef.current
            if (tree) {
              if (record.target instanceof Node && (record.target === tree || tree.contains(record.target))) return schedule()
              for (const node of record.removedNodes) {
                if (node instanceof Element && (node === tree || node.contains(tree))) return schedule()
              }
            }
            for (const node of record.addedNodes) {
              if (!(node instanceof Element)) continue
              if (node.matches?.('div[role="tree"]') || node.querySelector?.('div[role="tree"]')) return schedule()
            }
          }
        })
        observer.observe(document.body, { childList: true, subtree: true })
        schedule()
        return () => {
          disposed = true
          observer.disconnect()
          if (frame) cancelAnimationFrame(frame)
        }
      }, [sync])

      // Data changes (session switch, new day folder, filter flip) re-apply at once.
      React.useEffect(() => { sync() }, [sync, model, items])

      const place = React.useCallback(() => {
        const button = buttonRef.current
        if (!button) return
        const rect = button.getBoundingClientRect()
        const width = Math.min(236, window.innerWidth - 16)
        const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8))
        // 靠近窗口底部时向上弹，避免被输入区与底部面板遮住。
        const menuHeight = 200
        const below = rect.bottom + 6
        const top = below + menuHeight > window.innerHeight - 12
          ? Math.max(12, rect.top - menuHeight - 6)
          : below
        setCoords({ left, top, width })
      }, [])
      usePopover(open, setOpen, place, buttonRef, '.dsh-wspath-sf-menu')

      const pick = (next) => {
        setMode(next)
        writeSidebarFilterMode(next)
        setOpen(false)
      }
      const openDays = () => {
        setOpen(false)
        const hub = hubRef?.current
        if (hub && typeof hub.openDays === 'function') hub.openDays()
      }

      const hiddenText = model.hiddenCount > 0 ? t.hidden.replace('{n}', String(model.hiddenCount)) : t.none
      const label = `${t.filter}：${mode === 'projects' ? t.onlyProjects : t.showAll}`
      const shortHint = mode === 'projects'
        ? (model.hiddenCount > 0 ? t.hiddenShort.replace('{n}', String(model.hiddenCount)) : t.noneShort)
        : t.allShort.replace('{n}', String(model.dayCount))

      const button = h('button', {
        ref: buttonRef,
        type: 'button',
        className: 'dsh-wspath-sf-btn' + (mode === 'projects' ? ' is-projects' : ' is-all'),
        title: `${label}\n${hiddenText}`,
        'aria-label': label,
        'aria-haspopup': 'menu',
        'aria-expanded': open ? 'true' : 'false',
        onClick: () => setOpen((v) => !v),
      },
        h('span', { className: 'dsh-wspath-sf-lead' },
          h(IconFilter, { size: 12 }),
          h('span', { className: 'dsh-wspath-sf-text' }, mode === 'projects' ? t.projects : t.all),
          mode === 'projects' && model.projectCount > 0 ? h('span', { className: 'dsh-wspath-sf-count' }, String(model.projectCount)) : null,
        ),
        h('span', { className: 'dsh-wspath-sf-hint' }, shortHint),
      )

      const menu = open && coords && typeof document !== 'undefined'
        ? ReactDOM.createPortal(h('div', {
            className: 'dsh-wspath-sf-menu',
            role: 'menu',
            'aria-label': t.filter,
            style: { position: 'fixed', left: coords.left + 'px', top: coords.top + 'px', width: coords.width + 'px' },
          },
          h('div', { className: 'dsh-wspath-sf-menu-title' }, t.filter),
          h('button', {
            type: 'button', role: 'menuitemradio', 'aria-checked': mode === 'projects' ? 'true' : 'false',
            className: 'dsh-wspath-sf-item' + (mode === 'projects' ? ' is-checked' : ''),
            onClick: () => pick('projects'),
          },
            h('span', { className: 'dsh-wspath-sf-check' }, mode === 'projects' ? h(IconCheck, { size: 12 }) : null),
            h('span', { className: 'dsh-wspath-sf-label' }, t.onlyProjects),
            model.dayCount > 0 ? h('span', { className: 'dsh-wspath-sf-count' }, String(model.dayCount)) : null,
          ),
          h('div', { className: 'dsh-wspath-sf-note' }, hiddenText),
          h('button', {
            type: 'button', role: 'menuitemradio', 'aria-checked': mode === 'all' ? 'true' : 'false',
            className: 'dsh-wspath-sf-item' + (mode === 'all' ? ' is-checked' : ''),
            onClick: () => pick('all'),
          },
            h('span', { className: 'dsh-wspath-sf-check' }, mode === 'all' ? h(IconCheck, { size: 12 }) : null),
            h('span', { className: 'dsh-wspath-sf-label' }, t.showAll),
          ),
          h('div', { className: 'dsh-wspath-sf-sep' }),
          h('button', { type: 'button', role: 'menuitem', className: 'dsh-wspath-sf-item', onClick: openDays },
            h('span', { className: 'dsh-wspath-sf-check' }, h(IconFolder, { size: 12 })),
            h('span', { className: 'dsh-wspath-sf-label' }, t.byDay),
          ),
        ), document.body)
        : null

      return h(React.Fragment, null,
        slot ? ReactDOM.createPortal(button, slot) : null,
        menu,
      )
    }

    function mountSidebarFilter(ctx, hubRef) {
      if (typeof document === 'undefined' || !document.body) return () => {}
      const host = document.createElement('div')
      host.className = 'dsh-wspath-sf-mount'
      document.body.appendChild(host)
      let root
      try { root = ReactDOM.createRoot(host) } catch { root = null }
      if (!root) {
        host.remove()
        return () => {}
      }
      root.render(h(SidebarFilterButton, { ctx, hubRef }))
      return () => {
        try { root.unmount() } catch {}
        host.remove()
        for (const el of document.querySelectorAll('.' + SF_HIDDEN)) el.classList.remove(SF_HIDDEN)
        const slot = document.querySelector('.dsh-wspath-sf-slot')
        if (slot) slot.remove()
      }
    }
