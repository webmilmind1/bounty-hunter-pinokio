// Installs the published agent into a local folder. Nothing else runs here, nothing is
// downloaded from anywhere but the public package registry, and no credentials are involved.
module.exports = {
  run: [
    {
      method: 'shell.run',
      params: {
        message: ['npm install x402-bounty-hunter@latest algosdk'],
      },
    },
    {
      // Your settings file, created from the template on first install only. Everything you
      // put in it stays on this machine.
      method: 'fs.copy',
      params: {
        src: 'settings.example.json',
        dest: 'settings.json',
      },
    },
  ],
}
