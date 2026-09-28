# Playwright MCP Agents

Agentic browser automation on **Playwright MCP** — Planner, Generator and Healer loops that produce reviewable TypeScript specs.

> Part of the public AIQA toolkit by [Avinash Sharma](https://github.com/Avinash258) · [Portfolio](https://avinash258.github.io/Protfolio/)

## Overview

This repository demonstrates how LLM agents can drive real browsers through the **Model Context Protocol (MCP)** instead of guessing at the DOM. Agents plan scenarios, generate Playwright tests, and propose fixes from failing traces — with a human review step before changes land.

## Capabilities

| Agent | Role |
|---|---|
| **Planner** | Turns requirements into a risk-weighted scenario plan |
| **Generator** | Emits Playwright TypeScript specs aligned to fixtures / POM |
| **Healer** | Analyses failing traces and proposes locator / data repairs |

## Stack

- Playwright · TypeScript / JavaScript
- Playwright MCP
- OpenAI / Azure AI (configurable)

## Getting started

```bash
npm install
npx playwright install
npm test
```

## Related repositories

- [PlaywrightMCPAgent](https://github.com/Avinash258/PlaywrightMCPAgent) — companion MCP agent workspace
- [AIQA Platform](https://avinash258.github.io/Protfolio/#platforms) — private enterprise platform (capability overview)

## Author

**Pushanshu Avinash Sharma** — QA Automation Architect / Lead SDET  
[GitHub](https://github.com/Avinash258) · [LinkedIn](https://www.linkedin.com/in/p-avinash-sharma-8b0203b9/) · [Portfolio](https://avinash258.github.io/Protfolio/)
