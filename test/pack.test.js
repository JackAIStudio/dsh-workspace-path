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

  it('wires the new-page hero tools to the repo actions and Better Sidebar', () => {
    // The Hero Git button used to fall back to an external terminal because it
    // received neither the native session nor the Better Sidebar service.
    assert.match(src, /const sessionId = mainSessionId\(sesSnap\)/)
    assert.match(src, /sessionId, getBetterSidebar, variant: 'header',/)
    assert.match(src, /actions: true,/)
    assert.match(src, /getBetterSidebar: \(\) => betterSidebar/)
    // The carrier is its own module so hero-tools.js stays well under the
    // 300-line source budget.
    assert.match(src, /function HeroWorkspacePicker/)
    // A seat-less open would be swallowed by the service (strict no-op), so the
    // Hero Git button must fall back instead of claiming success.
    assert.match(src, /if \(sessionId === undefined\) \{\s*const seat = typeof sb\.getSnapshot/)
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
