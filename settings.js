// Reads settings.json from this folder. Plain Node, no magic: if the file is missing or
// malformed the agent simply starts with nothing set, which is a dry run.
const fs = require('fs')
const path = require('path')

module.exports = function settings() {
  try {
    const raw = fs.readFileSync(path.resolve(__dirname, 'settings.json'), 'utf8')
    const parsed = JSON.parse(raw)
    // Only pass through keys with a value, so an empty field never shadows a real default.
    return Object.fromEntries(Object.entries(parsed).filter(([, v]) => v !== '' && v != null))
  } catch {
    return {}
  }
}
