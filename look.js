// A dry run. Reads the public board and shows what is open and what it pays. Signs nothing,
// spends nothing, and needs no wallet: the agent makes a throwaway address in memory just to
// ask the board what it would be eligible for.
const settings = require('./settings.js')

module.exports = {
  run: [
    {
      method: 'shell.run',
      params: {
        env: settings(),
        message: ['npx x402-bounty-hunter'],
      },
    },
  ],
}
