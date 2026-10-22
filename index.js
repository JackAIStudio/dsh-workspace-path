import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'
import { summarizeGitRepos } from './git-summary.js'
import { createOpenWebHandler } from './open-web.js'

const execFileAsync = promisify(execFile)

export const name = 'dsh-workspace-path'
export const inject = ['connection', 'webServer']

export function apply(ctx) {
  ctx.inject(['connection', 'webServer'], () => {
    // Stock dsh 0.1.5-rc.2 registers the channel from the connection plugin's
    // fiber, which does not inject webServer; rpc.handle then throws and the
    // SPA fallback answers 405. Register from this injected context instead,
    // and keep rpc.handle for hosts whose connection package already patches it.
    const channel = '/dsh-workspace-path'
    const openWeb = createOpenWebHandler(ctx)
    const handler = async (endpoint, payload) => {
      try {
        if (endpoint === 'git-summary') {
          const summaries = await summarizeGitRepos(payload.paths)
          return { ok: true, value: { summaries } }
        }
        if (endpoint === 'open-web') return openWeb(payload)
        const targetPath = payload.path
        if (!targetPath) return { ok: false, error: { code: 'bad_request', message: 'path required' } }

        if (endpoint === 'reveal') {
          if (process.platform === 'win32') {
            await execFileAsync('explorer', ['/select,', targetPath])
          } else if (process.platform === 'darwin') {
            await execFileAsync('open', ['-R', targetPath])
          } else {
            // POSIX fallback
            const dir = path.dirname(targetPath)
            await execFileAsync('xdg-open', [dir])
          }
          return { ok: true, value: { success: true } }
        } else if (endpoint === 'terminal') {
          if (process.platform === 'win32') {
            await execFileAsync('cmd', ['/C', 'start', 'cmd', '/K', `cd /d "${targetPath}"`])
          } else if (process.platform === 'darwin') {
            await execFileAsync('open', ['-a', 'Terminal', targetPath])
          } else {
            // POSIX fallback
            await execFileAsync('x-terminal-emulator', ['-e', `cd "${targetPath}" && bash`])
          }
          return { ok: true, value: { success: true } }
        } else if (endpoint === 'run-command') {
          const cmd = String(payload.cmd || '').trim()
          if (!cmd) return { ok: false, error: { code: 'bad_request', message: 'cmd required' } }
          if (process.platform === 'darwin') {
            const shellScript = `cd ${JSON.stringify(targetPath)} && ${cmd}`
            const asScript = ['tell application "Terminal"', 'activate', `do script ${JSON.stringify(shellScript)}`, 'end tell'].join('\n')
            await execFileAsync('osascript', ['-e', asScript])
          } else if (process.platform === 'win32') {
            await execFileAsync('cmd', ['/C', 'start', 'cmd', '/K', `cd /d "${targetPath}" && ${cmd}`])
          } else {
            // POSIX fallback
            await execFileAsync('x-terminal-emulator', ['-e', `bash -c "cd '${targetPath}' && ${cmd}; exec bash"`])
          }
          return { ok: true, value: { success: true } }
        }
        return { ok: false, error: { code: 'unknown_endpoint', message: 'Unknown endpoint' } }
      } catch (err) {
        return { ok: false, error: { code: 'internal_error', message: String(err) } }
      }
    }
    const webServer = ctx.webServer
    if (webServer && !webServer.prefixes?.has(channel) && typeof ctx.connection?.register === 'function') {
      ctx.connection.register(ctx, channel, handler)
      return
    }
    ctx.connection.rpc.handle(channel, handler, { authority: 'loopback' })
  })
}
