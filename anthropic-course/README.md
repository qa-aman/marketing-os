# Cowork for the Team - workshop plan

The goal: run a hands-on workshop that shows our marketing team everything Claude Cowork can do, so they leave able to use it for real work in their first week.

This folder holds the plan, not the finished materials yet. Three documents:

1. [COURSE-DESIGN.md](COURSE-DESIGN.md) - the full capability map and the workshop structure (what we teach, in what order, mapped to Anthropic's official Cowork course).
2. [DOCUMENTS-NEEDED.md](DOCUMENTS-NEEDED.md) - every document we need to build to run the workshop, what each is for, and its status.
3. This README - the goal, the decisions, and how to proceed.

## Decisions locked

- **Audience:** our marketing team. Non-technical. Everything stays in the Claude desktop app (Cowork). No terminal, no code.
- **Scope:** comprehensive. Not just Anthropic's one intro course - we cover the full set of Cowork capabilities so the team sees what it can really do.
- **Worked example:** the Verdal sample brand (a plant care brand). The full workshop dataset attendees load into Cowork lives in [`verdal-marketing/`](verdal-marketing/) - context files, templates, sample data, competitor notes, brand photos, and a starter newsletter. Copy that folder to each machine before the workshop. Zero setup, safe to demo, realistic.
- **Format:** live, instructor-led, hands-on, delivered as a series of **2-hour sessions**. Six content sessions plus async pre-work. Cadence (weekly or twice weekly) to be set with Aditya; it does not change the content.
- **Headline demo:** Session 1 opens with Cowork building a 12-slide on-brand strategy deck from Verdal's files. Best first-impression demo for marketers.
- **Logins:** individual Claude logins preferred for the hands-on labs. A common-ID fallback (instructor drives, practice as homework) is built in. Confirm before Session 2.
- **We start with Cowork, not Claude Code.** Claude Code is out of scope for this workshop.

## Why this is grounded in the official course

Anthropic ships an official free course, "Introduction to Claude Cowork," on Anthropic Academy. We use its module structure as our backbone so what we teach matches Anthropic's own curriculum, then we go wider on capabilities.

Official sources (validated):
- Anthropic Academy: https://anthropic.skilljar.com/
- Introduction to Claude Cowork: https://anthropic.skilljar.com/introduction-to-claude-cowork
- Get started with Claude Cowork (Help Center): https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- Anthropic learning hub: https://www.anthropic.com/learn

## How to proceed

Six phases. Each one produces the documents listed in DOCUMENTS-NEEDED.md.

1. **Agree the plan (now).** Review COURSE-DESIGN and DOCUMENTS-NEEDED. Confirm the length (recommended: one full day, or two half-days) and the capability list. Nothing else starts until this is signed off.
2. **Build the backbone.** Write the facilitator guide (run of show) and the slide outline. This is the spine everything else hangs from.
3. **Build the demos and labs.** Write a demo script for every capability (exact clicks and prompts, using Verdal, so nothing fails live) and a hands-on lab worksheet per module.
4. **Build the support docs.** Pre-workshop setup sheet, the one-page capability cheat sheet, the knowledge-check quiz, the feedback form, and the facilitator FAQ / troubleshooting sheet.
5. **Dry run.** Run every demo end to end on a clean machine with the Verdal folder. Fix anything that breaks or confuses. This is the step that stops the workshop from stalling.
6. **Deliver and iterate.** Run the workshop, collect feedback, then optionally convert it to a self-paced version (we can reuse the tutor-command pattern from the marketing workshop).

## Status

- Phase 1 (this plan): done.
- Phase 2 (backbone): Session 1 is built as the template - see [`sessions/session-1-facilitator-guide.md`](sessions/session-1-facilitator-guide.md) and [`sessions/session-1-slides.md`](sessions/session-1-slides.md). Review the format; once approved I build Sessions 2-6 the same way.

## Still open (not blocking)

- Cadence (weekly or twice weekly) - to confirm with Aditya. Does not change the content.
- Confirm each attendee has an individual Claude login for the labs, or tell me to plan for the common-ID fallback.
