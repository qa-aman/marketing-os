---
name: competitor-analyst
description: Analyze competitors and produce a positioning matrix, messaging comparison, and differentiation map. Use when the user asks for competitive analysis, competitor research, "how do we compare to X", positioning vs competitors, market landscape, "analyze our competition", or wants to update competitor docs. Writes to knowledge/markets/competitors.md.
reads:
  - knowledge/markets/competitors.md
  - knowledge/markets/positioning.md
  - knowledge/services/
  - knowledge/icp/personas.md
writes:
  - knowledge/markets/competitors.md
  - output/competitor-analysis/
---

# competitor-analyst

Builds an evidence-based competitor map. Writes to `knowledge/markets/competitors.md` so positioning and content skills get sharper.

## When to use

- "Analyze our competition"
- "Build a competitor matrix"
- "How do we compare to X?"
- "Update our competitive positioning"
- "Where do we win and lose vs <competitor>?"

## Inputs needed

- **Competitors to analyze** (3-7 max)
- **Source URLs**: each competitor's homepage, pricing page, comparison pages, recent funding announcements
- **Lens**: positioning, messaging, pricing, features, GTM, content
- **Use case**: sales battle cards, marketing positioning, product roadmap input

## Process

1. **Load context.** Read `knowledge/markets/positioning.md` (so you know our position), `knowledge/icp/personas.md` (so you compare on what matters to the buyer), and any existing `knowledge/markets/competitors.md`.

2. **Pull competitor data.** For each competitor:
   - Use WebFetch on homepage to capture their headline, sub, and primary CTA
   - Use WebFetch on pricing page if public
   - Use WebFetch on any "vs <our brand>" comparison page they have published
   - Search recent news (funding, leadership, launches) via WebSearch

   If WebFetch fails or pages are gated, ask the user to paste content.

3. **Build the comparison matrix.** Use this structure:

   ```
   # Competitor analysis (DD-MM-YYYY)

   ## Quick comparison
   | | <Us> | <Competitor 1> | <Competitor 2> | <Competitor 3> |
   |---|---|---|---|---|
   | **Tagline** | | | | |
   | **Primary persona** | | | | |
   | **Stage / size** | | | | |
   | **Pricing model** | | | | |
   | **Free tier** | | | | |
   | **Key differentiator** | | | | |
   | **Strongest channel** | | | | |
   | **Weakness** | | | | |

   ## Positioning map
   Plot competitors on two axes (pick the two that matter most for your category):
   - Axis 1: <e.g. ease of use vs power>
   - Axis 2: <e.g. SMB vs enterprise>

   Describe where each sits and where the gaps are.

   ## Per-competitor deep dive

   ### <Competitor 1>
   - **What they do well**: 3 specific things
   - **Where they're weak**: 3 specific things
   - **How they message**: 3 examples of their language vs ours
   - **Their ideal customer**: who they're winning
   - **Our angle when competing**: what to lead with vs them
   - **Our risk**: where they could beat us
   - **Recent moves**: funding, launches, hires (last 6 months)
   - **Sources**: URLs and dates

   <repeat per competitor>

   ## Messaging comparison
   For each competitor, paste their:
   - H1 from homepage
   - Sub-headline
   - Primary CTA copy
   - One feature description

   Then compare to ours. Identify:
   - Where we sound the same (a problem)
   - Where we say less than them (a gap)
   - Where we say more (good if true, bad if puffery)

   ## Where we win
   List 3-5 specific advantages, each with evidence:
   - Advantage: <claim>
   - Evidence: <source>
   - When to use it: <sales scenario or content angle>

   ## Where we lose
   Be honest. List 3-5 disadvantages:
   - Disadvantage: <claim>
   - Workaround: <how to handle it in sales conversations>
   - Roadmap implication: <what to build/communicate to close the gap>

   ## Battle card (one per major competitor)
   - **30-second pitch when up against them**
   - **Top 3 trap-setting questions** (questions to ask the prospect that surface our advantages)
   - **Top 3 objections** they will raise about us, with responses
   - **Pricing posture**: when to discount, when to hold

   ## Open questions and gaps
   What we couldn't verify. The user should investigate.

   ## Sources
   - List every URL with date accessed
   ```

4. **Update `knowledge/markets/competitors.md`** with the executive summary (top quick comparison + per-competitor advantages/disadvantages). Keep it tight (under 500 lines) so other skills can load it cheaply.

5. **Save the full analysis** to `output/competitor-analysis/<DD-MM-YYYY>-comparison.md`.

6. **Self-check**:
   - Every claim has a source (URL or interview)
   - Compared on what the buyer cares about, not on what's easy to compare
   - "Where we lose" is not empty (if it is, you're flattering yourself)
   - Battle card is short enough that a sales rep can use it on a call

7. **Offer follow-ups**:
   - Update `knowledge/markets/positioning.md` if the analysis surfaced positioning gaps
   - Run `/landing-page-writer` for a new homepage that addresses competitor weak spots
   - Run `/thought-leadership-writer` for a POV piece that establishes the angle

## Rules

- Never compare on features alone. The buyer compares on outcomes. Tie features to outcomes.
- Always include "where we lose". If you can't find weaknesses in your own product vs competitors, you're not looking hard enough.
- Pricing comparisons must reference the date scraped. Pricing changes frequently.
- Comparison pages from the competitor (their "vs you" page) are a goldmine. Read theirs before writing yours.
- Do not produce sales battle cards without confirming with the user that sales reps will actually use them. Otherwise it's dead documentation.
