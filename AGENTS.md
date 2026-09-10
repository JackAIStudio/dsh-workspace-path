# dsh-workspace-path 仓库与 Agent 维护规范（AGENTS.md）

> 本文件是本插件的**代码架构与维护硬性规范**。
> 所有 AI Agent 与人类贡献者在修改、重构或新增功能时，**必须严格遵守以下规则**。

---

## 1. 零单文件膨胀原则（Strict File Size Limits）

1. **单文件行数上限**：
   - 任何单个**源码**文件严禁超过 **300 行**。
   - 生成物 `client.js` 除外（由 `scripts/pack-client.js` 拼接，勿手改）。
2. **前后端模块职责划分**：
   - **后端入口 (`index.js`)**：保持极简（< 80 行），仅负责 Cordis RPC 通道与权限拦截。
   - **纯函数 (`paths.js`)**：路径缩写、按天/项目分类、选择器列表模型。禁止 DOM / React。
   - **前端源码**：
     - `client/ui.css`：样式。
     - `client/ui.js`：工作区列表面板、侧栏中心、官方 Hero 选择器。
     - `client/badges.js`：会话顶栏工作区胶囊与会话 ID 芯片。
     - `client/apply.js`：Slot 注册（< 100 行）。
   - DSH 只加载 `exports["./client"]`。改前端源码后必须跑 `node scripts/pack-client.js` 再测。

---

## 2. 运行宿主与跨平台铁律

本插件作为侧栏系统级小组件，必须在 macOS、Windows、Linux（含云主机）无缝运行：

1. **跨平台 OS 调用**：
   - 打开文件管理器（Reveal）：macOS 走 `open -R`，Windows 走 `explorer /select,`，Linux 走 `xdg-open`。
   - 打开终端（Terminal）：macOS 走 `open -a Terminal`，Windows 走 `cmd /K`，Linux 走 `x-terminal-emulator`。
   - 在无桌面环境的 Linux/云端时，必须安全捕获异常，不得导致后端进程崩溃。
2. **路径安全**：
   - 统一走 `node:path`，严格防范命令注入与路径穿越漏洞。
3. **工作区分类**：
   - 按天：标题或 basename 为 `YYYY-MM-DD`（可带 `(老)` 一类前缀），或路径落在 `…/days/<日期>/`。
   - 其余为项目。默认选择器只列项目；按天走第二步。搜索框仍能命中日期。

---

## 3. 原生 ESM 与修改后自检

1. **零构建原生 ESM（宿主）**：`index.js` / `paths.js` 的模块引用必须显式带 `.js` 扩展名。
2. **前端拼接不是业务构建**：`scripts/pack-client.js` 只是把 CSS + `paths.js` + `client/*.js` 打进 ModuleLoader 工厂，禁止上 tsdown / webpack。
3. **修改后门禁自检**：
   ```bash
   node --test test/*.test.js
   find . -name "*.js" -not -path "*/.*" -not -path "*/node_modules/*" -exec node --check {} +
   ```
   `npm test` 会先 pack 再跑测试。
