# Playwright MCP Agents

Agentic browser automation on **Playwright MCP** â€” Planner, Generator and Healer loops that produce reviewable Playwright specs.

[![Playwright Tests](https://github.com/Avinash258/PlaywrightMCPAgents/actions/workflows/playwright.yml/badge.svg)](https://github.com/Avinash258/PlaywrightMCPAgents/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Avinash258/PlaywrightMCPAgents?include_prereleases)](https://github.com/Avinash258/PlaywrightMCPAgents/releases)

> Flagship public sample for the AIQA direction Â· **[Demo walkthrough](docs/DEMO.md)** Â· [Portfolio](https://avinash258.github.io/portfolio/)

## Why this repo

Most â€œAI + Playwrightâ€ starters stop at a prompt. This kit shows a **reviewable pipeline**:

```text
Requirement â†’ Planner â†’ Generator â†’ Playwright MCP run â†’ Healer â†’ Human review
```

Public proof uses **SauceDemo** cart scenarios (plan + generated TypeScript spec checked in).

## Quick start

```bash
git clone https://github.com/Avinash258/PlaywrightMCPAgents.git
cd PlaywrightMCPAgents
npm ci
npx playwright install --with-deps chromium
npm test
npm run test:cart
```

## Demo (start here)

Full walkthrough with paths and mermaid flow: **[docs/DEMO.md](docs/DEMO.md)**

| Stage | Path |
|---|---|
| Planner agent | `.github/agents/playwright-test-planner.agent.md` |
| Generated plan | `specs/cart-page-test-plan.md` |
| Generator agent | `.github/agents/playwright-test-generator.agent.md` |
| Generated spec | `tests/cart-functionality/view-cart-multiple-items.spec.ts` |
| Healer agent | `.github/agents/playwright-test-healer.agent.md` |

## Stack

- Playwright (JavaScript / TypeScript specs)
- Playwright Test MCP server (`npx playwright run-test-mcp-server`)
- GitHub agent definitions under `.github/agents/`

## What is *not* in this public repo

Enterprise packaging â€” shared fixtures library, RAG knowledge, Playtest no-code, evaluation scorecards â€” lives in private **AIQA** / **DeepEVL**. Overview: [portfolio platforms](https://avinash258.github.io/portfolio/#platforms).

## Roadmap

- [x] Documented demo: plan â†’ generated cart spec
- [x] CI on `main` + Dependabot
- [ ] Short demo video linked from README
- [ ] TypeScript-first package layout
- [ ] Sample healed-failure PR diff

## Related

- [playwright-sharded-ci](https://github.com/Avinash258/playwright-sharded-ci) â€” reusable GitHub Action for shard + merge reports
- [playwright-otel-reporter](https://github.com/Avinash258/playwright-otel-reporter) â€” Playwright reporter that emits OpenTelemetry-style spans
- [PlaywrightMCPAgent](https://github.com/Avinash258/PlaywrightMCPAgent) â€” companion sandbox

## License

MIT â€” see [LICENSE](LICENSE).

## Author

**Avinash Sharma** â€” QA Automation Architect / Lead SDET  
[GitHub](https://github.com/Avinash258) Â· [LinkedIn](https://www.linkedin.com/in/p-avinash-sharma-8b0203b9/) Â· [Portfolio](https://avinash258.github.io/portfolio/)
