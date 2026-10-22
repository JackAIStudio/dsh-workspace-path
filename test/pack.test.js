import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'

const src = readFileSync(new URL('../client.js', import.meta.url), 'utf8')

describe('packed client.js', () => {
  it('inlines picker classification and both picker surfaces', () => {
    assert.match(src, /function pickerModel/)
    assert.match(src, /function isDayWorkspace/)
    assert.match(src, /variant: 'hub'/)
    assert.match(src, /variant: 'picker'/)
    assert.match(src, /conversation\.hero\.workspace/)
    assert.match(src, /dsh-workspace-path-hero/)
  })

  it('keeps portaled popups exempt from the click-outside close (regression: 保存并启动 无效)', () => {
    // 面板内的 pointerdown 关闭逻辑必须放过 Portal 浮层（启动命令对话框 / Hero 打开方式菜单 / 会话 ID 气泡 / Git 默认动作菜单），
    // 否则点“保存并启动”会先关掉面板并卸载对话框，click 永远到不了按钮。
    assert.match(src, /const PORTAL_SURFACES = '\.dsh-dev-modal-overlay, \.dsh-hero-app-menu, \.dsh-wspath-sid-popover, \.dsh-dev-menu'/)
    assert.match(src, /if \(e\.target\.closest\?\.\(PORTAL_SURFACES\)\) return/)
    assert.match(src, /dsh-dev-modal-error/)
  })

  it('ships the right-corner dev pair, the git-action menu and the git-summary probe', () => {
    assert.match(src, /conversation\.session\.header\.utilities/)
    assert.match(src, /function SessionDevActions/)
    assert.match(src, /function DevGitMenu/)
    assert.match(src, /git-summary/)
    assert.match(src, /function gitStatusLabel/)
  })

  it('ships workspace usage tracking for quick actions', () => {
    assert.match(src, /function recordWorkspaceUse/)
    assert.match(src, /function useWorkspaceUsageSnapshot/)
    assert.match(src, /dsh\.ws-usage/)
  })

  it('ships the official-sidebar workspace filter', () => {
    assert.match(src, /function sidebarFilterModel/)
    assert.match(src, /function currentWorkspaceId/)
    assert.match(src, /function SidebarFilterButton/)
    assert.match(src, /function mountSidebarFilter/)
    assert.match(src, /dsh-wspath-sf-hidden/)
    assert.match(src, /dsh\.wspath\.sidebar-filter/)
  })
})
