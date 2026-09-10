import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const css = readFileSync(join(root, 'client/ui.css'), 'utf8')
const paths = readFileSync(join(root, 'paths.js'), 'utf8').replace(/^export /gm, '')
const ui = readFileSync(join(root, 'client/ui.js'), 'utf8')
const badges = readFileSync(join(root, 'client/badges.js'), 'utf8')
const apply = readFileSync(join(root, 'client/apply.js'), 'utf8')

const out = `window.__ModuleLoader__.load({
  id: 'dsh-workspace-path',
  factory: (require) => {
    const module = { exports: {} }, React = require('react'), ReactDOM = require('react-dom'), h = React.createElement
    const css = ${JSON.stringify(css)}
    if (typeof document !== 'undefined') {
      const id = 'dsh-workspace-path/ui.css'
      let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(id) + ']')
      if (!tag) {
        tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-workspace-path'
        tag.dataset.pluginCss = id
        document.head.appendChild(tag)
      }
      tag.textContent = css
    }
${paths}
${ui}
${badges}
${apply}
    return module.exports
  },
})
`
writeFileSync(join(root, 'client.js'), out)
console.log(`packed client.js (${out.split('\n').length} lines)`)
