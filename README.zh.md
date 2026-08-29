# dsh-workspace-path

侧栏底下一颗文件夹图标（和「今天」、手机远程同一排）：打开已登记工作区列表，单击一行复制该工作区的**绝对路径**，方便贴到另一个会话里让 agent 去看那个目录。

本机且 Host 能打开路径时，行右侧会用系统文件管理器打开该目录：macOS 是访达，Windows 是资源管理器。走 DSH 的 `host.openPath`，**不**打开 Harness 侧栏，也**不**调用其它插件。

面板顶部可按标题、路径筛选工作区。数据走 `ctx.workspaces`，不抠官方省略号菜单。

## 安装

```sh
# 开发机
dsh plugin --profile web add link:$HOME/Documents/dshspace/plugins/dsh-workspace-path

# 新电脑（仓库推送之后）
dsh plugin --profile web add github:JackAIStudio/dsh-workspace-path
```

装完需要重启 `dsh web` 才生效。**不要自己重启正在跑的进程**；告诉用户。
