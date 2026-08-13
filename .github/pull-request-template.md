## What changed

<!-- One or two sentences. What does this PR do? -->

## Why

<!-- The reason, not the implementation. What problem is this solving?
     If it came from a playtest, say which session. -->

## How to verify

<!-- Concrete steps for reviewing-you to check this actually works.
     "Open /characters/new, create a character, refresh, confirm it persists." -->

## Decisions worth questioning

<!-- The most valuable section. Where did you make a call that could
     reasonably have gone the other way? Where are you unsure?
     If something here is architecturally significant, write an ADR
     and link it. -->

## Checklist

- [ ] CI is green
- [ ] I read my own diff top to bottom before requesting review
- [ ] No `any` types added
- [ ] `/core` has no framework imports (no Next, no DB, no req/res)
- [ ] New rule logic in `/core` has unit tests
- [ ] No secrets, no credentials, no `.env` values committed
- [ ] Migrations are additive, or the destructive change is called out above
