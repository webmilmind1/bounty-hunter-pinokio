// Pulls the latest published agent. Your settings.json is not touched.
module.exports = {
  run: [
    {
      method: 'shell.run',
      params: { message: ['npm install x402-bounty-hunter@latest algosdk'] },
    },
  ],
}
