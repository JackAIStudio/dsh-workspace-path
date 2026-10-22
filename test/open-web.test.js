import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { buildWebUrl, createOpenWebHandler } from '../open-web.js'

const connection = {
  authenticatedUrl: (base) => `${base}?token=launch`,
}
const webServer = { port: 3080, protocol: 'http:' }

describe('buildWebUrl', () => {
  it('composes the loopback URL with the launch token', () => {
    const url = new URL(buildWebUrl(connection, webServer, ''))
    assert.equal(url.origin, 'http://127.0.0.1:3080')
    assert.equal(url.searchParams.get('token'), 'launch')
    assert.equal(url.hash, '')
  })

  it('carries the session as a fragment the token exchange preserves', () => {
    const url = new URL(buildWebUrl(connection, webServer, 'session-abc'))
    assert.equal(url.hash, '#session=session-abc')
  })

  it('encodes a session id that needs escaping', () => {
    const url = new URL(buildWebUrl(connection, webServer, 'a b/c'))
    assert.equal(url.hash, '#session=a%20b%2Fc')
  })

  it('refuses to guess a URL when the host has no port or token', () => {
    assert.throws(() => buildWebUrl(connection, {}, 's'), /Web server is not ready/)
    assert.throws(() => buildWebUrl({}, webServer, 's'), /Web server is not ready/)
  })
})

describe('open-web RPC endpoint', () => {
  it('answers with the composed URL', () => {
    const handler = createOpenWebHandler({ connection, webServer })
    const result = handler({ sessionId: 'session-abc' })
    assert.equal(result.ok, true)
    assert.match(result.value.url, /^http:\/\/127\.0\.0\.1:3080\//)
  })

  it('reports a host without a web server instead of throwing', () => {
    const handler = createOpenWebHandler({ connection, webServer: {} })
    assert.deepEqual(handler({}), {
      ok: false,
      error: { code: 'unavailable', message: 'Web server is not ready' },
    })
  })
})
