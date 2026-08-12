# ADR-0000: Use files to record arquitechture decisions

- Status: Accepted
- Date: 2026-08-12
- Proposer: Nícolas H. Soares

## Context

Long projects require decision making constantly. Those decisions impact directly on the code architecture. Taking decisions without weighing the history of the codebase is prone to error. Misunderstanding of prior decisions leads to malinformed implementations, leaving memory as the only resource of the developer.

## Options that were considered

- **Record changes in ADRs:** Records useful things like context, tradeoffs and alternatives related to decision making that impacts the code architecture.
- **Rely solely on memory:** Prone to error, memory has a limited context.

## Decision

Record changes in ADRs, taking 15 minutes or less per decision.

## Advantages

Project now has a history of changes that is succint and can be accessed anytime by anyone working on it and new decisions can be weighed in with context.

As per the nature of this project, this can also serve as a portfolio piece on software architecture, showing that I possess skills both in good development practices and decision making.

## Costs

- ~15 minutes per decision.

## When to reassess

If no ADR has been written in the past months, reassess the approach. In late stages of development, when the architecture matures, the frequency of writing may dwindle.
