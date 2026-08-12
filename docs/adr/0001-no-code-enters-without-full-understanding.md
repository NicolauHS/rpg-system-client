# ADR-0001: No code enters this codebase without full understanding of its functionality

- Status: Accepted
- Date: 2026-08-12
- Proposer: Nícolas H. Soares

## Context

Inevitably, our modern landscape requires the use of tools such as coding agents. The problem is not with its use, but with the lack of critical thinking in accepting its generated code.

## Options that were considered

- **Accept code without review.**
- **Review every generated code**
- **Not use any generated code whatsoever**

## Decision

For the record: AI generated code will be kept to a minimum and reserved only for very small implementations and micro-edits that are better described as chores rather than learning. This project is not to be developed hastily and without consideration.

Review all code that enters this repository, except for libraries or frameworks that are too big to fully grasp and are widely used and tested by other developers. Not understanding what something does is counterproductive to the purpose of this project, since one of it's main purposes is learning.

## Advantages

- Full understanding of the codebase.

## Costs

- A bit more time between iterations dedicated to understanding whatever code snippet just entered the repository.

## When to reassess

Never.
