import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'

const execFileAsync = promisify(execFile)

export const name = 'dsh-workspace-path'
export const inject = ['connection']

export function apply(ctx) {
  ctx.connection.rpc.handle('/dsh-workspace-path', async (endpoint, payload) => {
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
  }, { authority: 'loopback' })
}
