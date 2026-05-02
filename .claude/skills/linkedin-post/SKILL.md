---
name: linkedin-post
description: Write a high-performing LinkedIn post in the user's brand voice. Use when the user asks for a LinkedIn post, LinkedIn update, LinkedIn content, "post for LinkedIn", thought-leadership post, founder post, or short professional social content. Reads brand voice and ICP from knowledge/ so output sounds like the company, not generic AI.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/content-library/
writes:
  - output/linkedin-post/
---

# linkedin-post

Writes LinkedIn posts that get read, saved, and reshared. Tuned for B2B feeds where attention is short and the audience is busy.

## When to use

- "Write a LinkedIn post about X"
- "Draft a founder post on Y"
- "Give me 3 LinkedIn variants for our launch"
- "Turn this article into a LinkedIn post"

## Inputs needed

- **Topic, angle, or source material** (required)
- **Goal**: drive traffic, build authority, generate leads, recruit, announce (default: build authority)
- **Author voice**: founder, CMO, generic company (default: company)
- **CTA**: comment, click link, DM, none (optional)

## Process

1. **Load context.** Read `knowledge/brand/voice.md`. If missing, stop and tell the user to run `/onboard --brand`.
2. **Read 3-5 high-performing past posts** from `knowledge/content-library/` if they exist. Mirror cadence and rhythm, not topic.
3. **Pick a structure.** Choose the structure that fits the angle:

   | Structure | When to use |
   |---|---|
   | **Hook + story + lesson + CTA** | Personal insight, founder voice |
   | **Contrarian take + 3 reasons + CTA** | Challenging conventional wisdom |
   | **Problem + framework + example + CTA** | Teaching a method |
   | **Number + list + payoff + CTA** | Listicle ("5 things I learned...") |
   | **Question + answer + invitation** | Community engagement |

4. **Write the hook.** First line decides everything. Rules:
   - Under 12 words
   - Specific, not generic
   - Curiosity, contrarian, or numbered
   - No "Excited to share", no "I'm thrilled", no questions that can be answered yes/no without thinking

5. **Write the body.** 3-7 short paragraphs. One idea per paragraph. Use line breaks generously. Bullets only if the structure is a list. Avoid emojis unless `knowledge/brand/voice.md` says they are part of the voice.

6. **Close with CTA.** One line. Make the action obvious and low-cost (comment, save, share). No "DM me to learn more" unless the goal is sales.

7. **Self-check** before showing:
   - Hook under 12 words
   - No em dashes
   - No corporate phrases ("leverage", "unlock", "game-changer", "in today's fast-paced world")
   - 80-220 words total (LinkedIn cuts off around 210 words on mobile)
   - Voice matches `knowledge/brand/voice.md`
   - One clear takeaway

8. **Save** to `output/linkedin-post/<DD-MM-YYYY>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: linkedin-post
   topic: <topic>
   author: <founder|cmo|company>
   goal: <goal>
   words: <count>
   created: DD-MM-YYYY
   ---
   ```

9. **Offer 2 variants** of the hook unless the user only wanted one. Hooks are the highest-leverage edit point.

## Format guardrails

- 80-220 words total
- First line = hook (the only line guaranteed to be seen before "see more")
- Lines 2-3 must earn the click
- No more than 2 hashtags, end of post, lowercase, niche-specific (skip generic ones like #marketing)
- Tag people only if the user explicitly named them

## Rules

- Never invent stats, customer quotes, or product capabilities. Pull from `knowledge/services/` and `knowledge/content-library/case-studies/` only.
- If the user wants to share a competitor opinion, flag risk and ask before publishing.
