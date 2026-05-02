---
name: skill-template
description: Template for adding a new skill to marketing-os. Copy this folder, rename, edit. Trigger words go here in the description so the skill auto-activates when the user asks for it.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
writes:
  - output/<skill-name>/
---

# <skill-name>

One-line summary of what this skill does.

## When to use

List 3-5 user phrases that should trigger this skill. The Skill tool matches against `description` above, so put the strongest triggers there too.

## Inputs needed from the user

- What the user must provide
- What is optional

## Process

1. **Load context.** Read every file listed in `reads:` above. If any are missing, stop and tell the user to run `/onboard --<section>`.
2. **Clarify if needed.** Ask the user 1-2 questions max. Do not over-interview.
3. **Generate.** Write the deliverable to `output/<skill-name>/<DD-MM-YYYY>-<slug>.<ext>`.
4. **Self-review.** Before showing the user, check:
   - Voice matches `knowledge/brand/voice.md`
   - No em dashes, no emojis (unless user asked)
   - Specific over vague
   - Length appropriate for the format

## Output format

Specify exactly what the deliverable looks like. Include a short example if helpful.

## Rules

- Never hardcode brand context. Always read from `knowledge/`.
- Write to `output/`, never to `knowledge/` or `templates/`.
- Use DD-MM-YYYY in filenames.
