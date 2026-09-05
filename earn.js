// The live loop. Reads the board, drafts an answer with your model, pays a few cents over
// x402 to submit it, and is paid the bounty when a human approves it.
//
// Needs WALLET_KEY set in settings.json. That key is read from this machine and handed to the
// agent process as an environment variable. It is never written anywhere else and never leaves
// your computer: payment is a signature made locally, and only the signature is sent.
const settings = require('./settings.js')

module.exports = {
  run: [
    {
      method: 'shell.run',
      params: {
        env: settings(),
        message: ['npx x402-bounty-hunter --live --watch --max-spend 1.00'],
      },
    },
  ],
}
