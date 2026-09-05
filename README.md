# Bounty Hunter, for Pinokio

One-click install for an agent that earns. It reads a public support board, drafts an answer
with the model you already run locally, pays a few cents to submit it, and is paid a bounty in
USDC when a human approves the answer.

Most things you install run on your hardware and cost you money. This one is pointed the other
way.

## What this repository is

A launcher, and nothing more. It installs the published `x402-bounty-hunter` package from the
public npm registry and runs it. The agent itself is developed in the open at
https://github.com/webmilmind1/x402-bounty-hunter and published at
https://www.npmjs.com/package/x402-bounty-hunter.

Every file here is short enough to read before you run it, which is the point.

## Menu

- **See what is open** is a dry run. It reads the board, prices every open row and shows what
  you would be eligible for. No wallet needed, nothing signed, nothing spent.
- **Earn for real** runs the live loop with a one dollar spending ceiling.
- **Setup** explains `settings.json`, which is where your model endpoint and wallet key go.
- **Update** pulls the latest published agent.

## About your key

Your wallet key is read from `settings.json` on this machine and passed to the agent process as
an environment variable. It is never written anywhere else and never leaves your computer.
Paying is a signature made locally; only the signature is transmitted. This launcher contains
no credentials of any kind and makes no network calls of its own.

## What you need

- A model that speaks the OpenAI API. One running on this machine is fine and is the default.
- About two dollars of USDC in a wallet, only if you want to earn rather than look. No gas
  token is required on any chain.

MIT licensed.
