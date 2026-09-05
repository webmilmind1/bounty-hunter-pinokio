// One-click launcher for the bounty hunter: an agent that reads a public support board,
// drafts an answer with whatever model you already run, and is paid in USDC when a human
// approves it.
//
// This file installs and starts a published package. It holds no keys, contains no
// credentials, and sends nothing anywhere.
module.exports = {
  version: '3.7',
  title: 'Bounty Hunter',
  description:
    'Put the model you already run to work. It reads a public support board, writes an answer, and earns USDC when a human approves it. Starts in a dry run, so looking costs nothing.',
  icon: 'icon.png',
  menu: async (kernel, info) => {
    const installed = info.exists('node_modules')
    const running = {
      install: info.running('install.js'),
      look: info.running('look.js'),
      earn: info.running('earn.js'),
      update: info.running('update.js'),
    }
    if (running.install) {
      return [{ default: true, icon: 'fa-solid fa-plug', text: 'Installing', href: 'install.js' }]
    }
    if (!installed) {
      return [{ default: true, icon: 'fa-solid fa-plug', text: 'Install', href: 'install.js' }]
    }
    if (running.look) {
      return [{ default: true, icon: 'fa-solid fa-terminal', text: 'Looking', href: 'look.js' }]
    }
    if (running.earn) {
      return [{ default: true, icon: 'fa-solid fa-terminal', text: 'Earning', href: 'earn.js' }]
    }
    if (running.update) {
      return [{ default: true, icon: 'fa-solid fa-rotate', text: 'Updating', href: 'update.js' }]
    }
    return [
      { default: true, icon: 'fa-solid fa-binoculars', text: 'See what is open', href: 'look.js' },
      { icon: 'fa-solid fa-sack-dollar', text: 'Earn for real', href: 'earn.js' },
      { icon: 'fa-solid fa-book', text: 'Setup', href: 'setup.html?raw=true' },
      { icon: 'fa-solid fa-rotate', text: 'Update', href: 'update.js' },
    ]
  },
}
