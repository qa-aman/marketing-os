---
name: thought-leadership-writer
description: Write long-form thought leadership articles, opinion pieces, industry POV essays, and CEO/founder bylines. Use when the user asks for a long-form article, executive byline, opinion piece, industry POV, manifesto, "explain our point of view on X", or wants to publish an authority-building piece (1200-2500 words). Reads brand voice and positioning from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/markets/positioning.md
  - knowledge/markets/competitors.md
  - knowledge/icp/personas.md
  - knowledge/content-library/
writes:
  - output/thought-leadership/
---

# thought-leadership-writer

Writes long-form opinion pieces that establish authority. Different from blog posts: takes a clear stance, defends it with reasoning, names what others get wrong.

## When to use

- "Write a thought leadership piece on X"
- "Draft an opinion article about Y"
- "We need a POV piece on the future of Z"
- "Write a CEO byline for <publication>"

## Inputs needed

- **Thesis** (required): what is the one-sentence claim this piece defends? If the user does not have one, help them sharpen one before writing.
- **Audience**: industry insiders, prospects, peers, press (default: prospects)
- **Length**: 1200, 1800, or 2500 words (default: 1800)
- **Author voice**: founder, CEO, CMO, company POV (default: company)
- **Publication target**: own blog, LinkedIn article, Substack, trade pub (affects formatting)

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, `knowledge/markets/positioning.md`, `knowledge/markets/competitors.md`. Stop if voice is missing.
2. **Pressure-test the thesis.** Before writing, check:
   - Is it specific? "AI will change marketing" fails. "AI is breaking the SEO content model and here is what replaces it" passes.
   - Is it contestable? If everyone agrees, it is not thought leadership.
   - Does it align with `knowledge/markets/positioning.md`? It should reinforce, not contradict.

   If the thesis fails any check, propose 2-3 sharper versions before writing.

3. **Outline the piece.** Use this structure unless the user asks for something else:

   ```
   1. Hook (150-200 words)
      - The unexpected observation, stat, or moment that prompted this
   2. Conventional wisdom (200-300 words)
      - What everyone believes, with charity (steelman it, do not strawman)
   3. Why conventional wisdom is wrong (300-500 words)
      - The cracks. Specific examples, not generalizations.
   4. The new model (400-600 words)
      - The author's POV. Define terms. Show how it works.
   5. What this means for the reader (200-400 words)
      - Concrete actions, not abstract implications
   6. Close (100-150 words)
      - The line you want quoted
   ```

4. **Write.** Apply voice from `knowledge/brand/voice.md`. Use specific examples, named companies, real numbers. Cite anything statistical with the source link.

5. **Self-check**:
   - Thesis appears in the first 200 words
   - At least 3 specific examples (named companies, products, or cases)
   - At least 1 contrarian claim defended with reasoning
   - No filler ("In today's rapidly evolving landscape...")
   - No em dashes
   - Voice matches `knowledge/brand/voice.md`

6. **Save** to `output/thought-leadership/<DD-MM-YYYY>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: thought-leadership
   thesis: <one-sentence claim>
   author: <name or role>
   target: <publication>
   words: <count>
   created: DD-MM-YYYY
   ---
   ```

7. **Offer follow-on assets** the user can derive from this piece:
   - 1 LinkedIn post (use `/linkedin-post`)
   - 1 Substack note
   - 5-tweet thread
   - 3 quote graphics (suggest pull quotes)

## Rules

- A thought leadership piece must take a position someone reasonable could disagree with. If your draft offends no one, it is not thought leadership.
- Never invent quotes, stats, or examples. If the user wants a stat, say "the user should add a real source here" rather than fabricating.
- Pieces in voice of a named executive must include a check-in: "Confirm this is what <Name> actually believes before publishing."
