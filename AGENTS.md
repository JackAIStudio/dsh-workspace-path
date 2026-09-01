# dsh-workspace-path 仓库与 Agent 维护规范（AGENTS.md）

> 本文件是本插件的**代码架构与维护硬性规范**。
> 所有 AI Agent 与人类贡献者在修改、重构或新增功能时，**必须严格遵守以下规则**。

---

## 1. 零单文件膨胀原则（Strict File Size Limits）

1. **单文件行数上限**：
   - 任何单个源码文件严禁超过 **300 行**。
   - 现有较大文件（如 `client.js`）后续迭代时**必须拆分成独立子模块，禁止在单文件末尾堆砌代码**。
2. **前后端模块职责划分建议**：
   - **后端入口 (`index.js`)**：保持极简（< 80 行），仅负责 Cordis RPC 通道与权限拦截。
   - **跨平台路径与系统调用 (`paths.js`)**：专职负责工作区路径计算、OS 文件管理器打开（Reveal）与终端唤起（Terminal）。
   - **前端入口 (`client.js`)**：仅做侧栏 Slot 注册与数据监听（< 100 行）。
   - **前端子组件 (`client/components/`)**：
     - `PathPanel.js`：侧栏主展示面板（路径文字、折叠、缩略显示）。
     - `ActionButtons.js`：复制绝对路径、系统文件管理器定位、终端打开等动作按钮组与反馈提示。

---

## 2. 运行宿主与跨平台铁律

本插件作为侧栏系统级小组件，必须在 macOS、Windows、Linux（含云主机）无缝运行：

1. **跨平台 OS 调用**：
   - 打开文件管理器（Reveal）：macOS 走 `open -R`，Windows 走 `explorer /select,`，Linux 走 `xdg-open`。
   - 打开终端（Terminal）：macOS 走 `open -a Terminal`，Windows 走 `cmd /K`，Linux 走 `x-terminal-emulator`。
   - 在无桌面环境的 Linux/云端时，必须安全捕获异常，不得导致后端进程崩溃。
2. **路径安全**：
   - 统一走 `node:path`，严格防范命令注入与路径穿越漏洞。

---

## 3. 原生 ESM 与修改后自检

1. **零构建原生 ESM**：所有模块引用必须显式带 `.js` 扩展名。
2. **修改后门禁自检**：
   修改任何代码后，必须在插件根目录下运行以下命令：
   ```bash
   node --test test/*.test.js
   find . -name "*.js" -not -path "*/.*" -not -path "*/node_modules/*" -exec node --check {} +
   ```
