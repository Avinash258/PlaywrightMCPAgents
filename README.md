# Playwright MCP Agents

Agentic browser automation experiments on **Playwright MCP** â€” Planner / Generator / Healer style loops that produce reviewable Playwright specs.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Playwright](https://img.shields.io/badge/Playwright-MCP-45ba4b)

> Flagship public sample for the AIQA direction Â· [Portfolio](https://avinash258.github.io/Protfolio/) Â· companion sandbox: [PlaywrightMCPAgent](https://github.com/Avinash258/PlaywrightMCPAgent)

## Overview

This repository is a **Playwright + MCP agent workspace**: specs and tests driven through the Model Context Protocol so LLM agents act on a real browser, not a guessed DOM.

It is intentionally lean (agent scaffold + specs/tests). The fuller enterprise platform (fixtures library, reporters, RAG, Playtest, evaluation scorecards) lives in the private **AIQA** / **DeepEVL** work â€” summarised on the [portfolio](https://avinash258.github.io/Protfolio/#platforms).

**Target flow (product vision):**

```text
Requirement â†’ Planner â†’ Generator â†’ Playwright MCP run â†’ Failure analysis â†’ Healer â†’ Human review / PR
```

## What is in this repo today

| Path | Purpose |
|---|---|
| `specs/` | Agent / scenario definitions |
| `tests/` | Playwright executable suites |
| `playwright.config.js` | Playwright project config |
| `.github/` | Workflow / CI stubs |

## Stack

- Playwright (JavaScript)
- Playwright MCP
- Node.js

## Getting started

```bash
git clone https://github.com/Avinash258/PlaywrightMCPAgents.git
cd PlaywrightMCPAgents
npm install
npx playwright install
npx playwright test
```

Configure any LLM / MCP provider keys in a local `.env` (never commit secrets).

## Roadmap

- [ ] Documented example: requirement â†’ generated spec â†’ healed failure
- [ ] Demo GIF / short video of an agent loop
- [ ] TypeScript migration and shared fixture package
- [ ] CI badge with green status on main

## Related

- [PlaywrightMCPAgent](https://github.com/Avinash258/PlaywrightMCPAgent) â€” smaller companion sandbox
- [eyPOC](https://github.com/Avinash258/eyPOC) â€” Playtest / unified QA platform
- [AIQA / DeepEVL overview](https://avinash258.github.io/Protfolio/#platforms) â€” private platforms

## License

MIT â€” see [LICENSE](LICENSE).

## Author

**Avinash Sharma** â€” QA Automation Architect / Lead SDET  
[GitHub](https://github.com/Avinash258) Â· [LinkedIn](https://www.linkedin.com/in/p-avinash-sharma-8b0203b9/) Â· [Portfolio](https://avinash258.github.io/Protfolio/)
