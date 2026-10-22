/**
 * Compose the authenticated loopback Web URL that the system browser opens.
 *
 * The desktop shell serves the page from its private dsh-app:// scheme, so a
 * relative `window.open('/?session=…')` never reaches a browser. This module
 * pairs the real loopback port with the launch token that
 * `connection.authenticatedUrl` owns; the token exchange redirects to the app
 * root and preserves the fragment, so `#session=` survives.
 *
 * Merged from the standalone dsh-open-in-browser plugin so the header button
 * and the session-ID popover share one implementation.
 */

/**
 * @param {{ authenticatedUrl?: (base: string) => string } | undefined} connection
 * @param {{ port?: number, protocol?: string } | undefined} webServer
 * @param {string | undefined} sessionId
 * @returns {string}
 */
export function buildWebUrl(connection, webServer, sessionId) {
  const port = webServer?.port
  if (typeof port !== 'number' || typeof connection?.authenticatedUrl !== 'function') {
    throw new Error('Web server is not ready')
  }
  const protocol = typeof webServer.protocol === 'string' ? webServer.protocol : 'http:'
  const url = new URL(connection.authenticatedUrl(`${protocol}//127.0.0.1:${String(port)}/`))
  const id = typeof sessionId === 'string' ? sessionId.trim() : ''
  if (id !== '') url.hash = `session=${encodeURIComponent(id)}`
  return url.href
}

/**
 * The `open-web` endpoint: one loopback RPC, one URL.
 * @param {{ connection?: unknown, webServer?: unknown }} ctx
 */
export function createOpenWebHandler(ctx) {
  return (payload) => {
    try {
      return {
        ok: true,
        value: { url: buildWebUrl(ctx.connection, ctx.webServer, payload?.sessionId) },
      }
    } catch (error) {
      return { ok: false, error: { code: 'unavailable', message: String(error?.message || error) } }
    }
  }
}
