---
name: content-writer
description: Write marketing content in the user's brand voice. Use when the user asks to write a LinkedIn post, blog article, email, ad copy, landing page section, social post, newsletter, or any short-to-medium form marketing content. Reads brand voice and ICP from knowledge/ so the output sounds like the company, not like generic AI.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/content-library/
writes:
  - output/content-writer/
---

# content-writer

Writes marketing content in the company's voice for the company's ICP.

## When to use

- "Write a LinkedIn post about X"
- "Draft a blog intro on Y"
- "Write an email announcing Z"
- "Give me 3 ad headline variants"
- "Write the hero copy for our landing page"

## Inputs needed

- **Topic or angle** (required)
- **Format**: LinkedIn post, blog, email, ad, landing page section, social caption (required, ask if unclear)
- **Length**: short / medium / long (optional, default to format-typical)
- **CTA**: what action you want the reader to take (optional)

## Process

1. **Load context**:
   - Read `knowledge/brand/voice.md`. If missing, stop and say: "I need your brand voice. Run `/onboard --brand` or paste 3+ past pieces into `uploads/` and rerun."
   - Read `knowledge/icp/personas.md`. If missing, ask the user to describe the audience in one line.
   - Read `knowledge/markets/positioning.md` if the topic relates to product or service.
   - Skim `knowledge/content-library/` for 2-3 past pieces on similar topics. Mirror their structure.

2. **Clarify if needed.** One question max. Examples: "Long-form blog or short LinkedIn?" "Aimed at CMOs or content marketers?"

3. **Draft.** Follow voice rules from `knowledge/brand/voice.md` precisely. Specifically:
   - Use the brand's preferred sentence length pattern
   - Use the brand's POV (we / you / they)
   - Use phrases from the "uses" list, avoid phrases from the "avoids" list

4. **Self-check before showing**:
   - No em dashes (use commas or hyphens)
   - No emojis unless the user asked
   - No generic AI phrases ("In today's fast-paced world", "leverage", "unlock", "game-changer", "in conclusion")
   - Specific numbers and examples where possible
   - One clear CTA at the end if format requires it

5. **Save**: write to `output/content-writer/<DD-MM-YYYY>-<format>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: linkedin-post
   topic: <topic>
   audience: <persona>
   created: DD-MM-YYYY
   ---
   ```

6. **Show the user** the draft inline, then point them to the file. Offer 2 alternative angles if they want variants.

## Format-specific defaults

| Format | Length | Structure |
|---|---|---|
| LinkedIn post | 80-200 words | Hook (1 line), body (3-5 short paragraphs), CTA or question |
| Blog intro | 100-150 words | Problem hook, why-now, what-this-post-covers |
| Blog (full) | 800-1500 words | H1, intro, 3-5 H2 sections, conclusion with CTA |
| Email | 80-150 words | Subject line, 1-line hook, body, single CTA |
| Ad headline | 5-10 words each | Generate 5 variants |
| Landing hero | 1 H1 + 1 sub | H1 outcome, sub explains how |

## Rules

- Match `knowledge/brand/voice.md` exactly. If the brand uses contractions, use them. If not, don't.
- Never invent product capabilities. Only describe features documented in `knowledge/services/`.
- If the user's request conflicts with brand voice (e.g. they ask for emojis but the brand avoids them), flag it and ask.
