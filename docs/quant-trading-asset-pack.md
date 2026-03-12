# Quant Trading Portfolio Asset Pack

This document defines the recommended supporting assets for the
**AI-Orchestrated Quantitative Trading System (ai-trader)** project entry in the portfolio.

Goal: show that this was not a toy strategy script, but a real system involving:
- live broker integration,
- execution lifecycle complexity,
- operator-facing observability,
- AI-assisted multi-agent engineering.

---

## 1. Asset set overview

Recommended final asset set:

1. **Architecture diagram**
2. **Live dashboard screenshot**
3. **OpenClaw multi-agent workflow diagram or screenshot**

Optional:
4. **QuantBeacon v2 architecture preview**

Do **not** upload raw terminal dumps or unedited logs as portfolio assets.

---

## 2. Asset 1 — Architecture diagram

### Filename
- `public/assets/quant-trading/architecture-overview.png`

### Title
- `Architecture Overview`

### Purpose
Show the system as a full platform rather than a single script.

### Include these blocks
- Research / Candidate Pipeline
- Execution Runtime
- OMS / Order State Machine
- Broker Truth / Reconcile
- IBKR
- Operator Dashboard / Recovery
- OpenClaw Multi-Agent Workflow

### Visual message
The viewer should immediately understand:
- research and execution are separated,
- broker truth matters,
- runtime and recovery are real system concerns,
- AI agents were used as part of the engineering workflow.

### Short caption
> Architecture of a broker-connected quantitative trading platform with separated research, execution, reconciliation, and AI-assisted engineering workflows.

---

## 3. Asset 2 — Live dashboard screenshot

### Filename
- `public/assets/quant-trading/live-dashboard.png`

### Title
- `Live Operator Dashboard`

### Purpose
Prove this was a real operator-facing trading system, not just a backtest.

### Best screenshot content
Capture a clean dashboard state that shows most of these sections:
- account overview,
- current holdings,
- pending orders,
- entry/exit lifecycle,
- recent fills / commissions,
- health indicators.

### Keep visible if reasonable
- equity/cash/positions counts,
- lifecycle states,
- commissions/slippage style fields,
- operator status blocks.

### Consider hiding or blurring if needed
- full account id,
- exact large balances if you prefer,
- any sensitive identifiers.

### Short caption
> Operator-facing live dashboard showing account health, positions, pending orders, fills, and order lifecycle state.

---

## 4. Asset 3 — OpenClaw multi-agent workflow

### Filename
- `public/assets/quant-trading/openclaw-multi-agent.png`

### Title
- `AI Collaboration Workflow`

### Purpose
Differentiate the project from a normal solo engineering story.

### Include these nodes
- Master / Operator
- trade-planner
- trade-developer
- auditor / specialist agents
- OpenClaw orchestration layer
- ai-trader / QuantBeacon repos

### Visual message
The viewer should understand that AI was used as:
- planner,
- developer,
- auditor,
- workflow amplifier,

not just as a code autocomplete tool.

### Short caption
> Multi-agent engineering workflow orchestrated through OpenClaw for planning, implementation, auditing, and architectural iteration.

---

## 5. Optional asset — QuantBeacon v2 direction

### Filename
- `public/assets/quant-trading/quantbeacon-v2.png`

### Title
- `QuantBeacon Successor Architecture`

### Purpose
Show architectural maturity: not only building the system, but recognizing legacy limits and designing the next-generation replacement.

### Include these ideas
- broker-truth-first runtime,
- event-driven symbol actors,
- portfolio coordinator,
- lane isolation,
- migration from legacy `ai-trader` to `QuantBeacon`.

### Short caption
> Early architecture direction for QuantBeacon, the cleaner event-driven successor to the legacy trading runtime.

---

## 6. Portfolio placement recommendation

### Featured card
Use the flagship card to convey:
- live broker integration,
- AI-assisted multi-agent engineering,
- system architecture depth.

### Project detail page
Recommended order on detail page:
1. Overview
2. Architecture image
3. Live dashboard image
4. AI collaboration workflow image
5. Features / contributions / outcomes
6. Optional QuantBeacon image

---

## 7. Writing guidance for captions

Good captions are:
- short,
- concrete,
- system-oriented.

Avoid:
- giant walls of ops text,
- raw runtime dumps,
- unexplained jargon.

Good example:
> Broker-truth-first execution dashboard used to track positions, pending orders, fills, and recovery state in a live-like IBKR environment.

Bad example:
> Here is a terminal dump showing many logs and some runtime outputs.

---

## 8. Redaction guidance

Before publishing screenshots, consider hiding:
- account ids,
- sensitive balances,
- exact order ids,
- anything that reveals private infrastructure details.

Try to preserve the structure of the UI even if some values are blurred.

---

## 9. Suggested next step

Create the following files under:
- `public/assets/quant-trading/`

Recommended target files:
- `architecture-overview.png`
- `live-dashboard.png`
- `openclaw-multi-agent.png`
- `quantbeacon-v2.png` (optional)

Once these exist, the portfolio project entry can be upgraded from text-only to a strong case-study style presentation.
