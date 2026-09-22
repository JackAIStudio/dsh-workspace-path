import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'

const execFileAsync = promisify(execFile)

export const name = 'dsh-workspace-path'
export const inject = ['connection', 'webServer']

export function apply(ctx) {
  ctx.inject(['connection', 'webServer'], () => {
    // Stock dsh 0.1.5-rc.2 registers the channel from the connection plugin's
    // own fiber. That fiber does not inject webServer, so rpc.handle throws
    // "cannot get property webServer without inject", the route never mounts,
    // and the SPA fallback answers the POST with HTTP 405.
    // Dev dsh was patched so rpc.handle re-injects webServer; JackDSH ships
    // the stock package. Register from this injected context, which already
    // has both services, and keep rpc.handle for hosts where that patch is
    // already in the connection package.
    const channel = '/dsh-workspace-path'
    const handler = async (endpoint, payload) => {
      try {
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
