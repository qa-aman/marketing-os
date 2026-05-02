---
name: social-calendar
description: Plan a monthly content calendar across channels. Produces a week-by-week posting schedule with topics, formats, channels, and asset links. Use when the user says "content calendar", "social calendar", "plan next month's content", "what should we post", "content plan", "editorial calendar", "schedule posts for the month", or wants a structured posting plan for LinkedIn, Twitter, email, or blog. Reads brand voice, ICP, and past learnings from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/services/
  - knowledge/content-library/
  - knowledge/learnings.md
  - knowledge/kpis.md
writes:
  - output/social-calendar/
---

# social-calendar

Plans a full month of content across channels. Every post has a job tied to a business goal. No random posting.

## When to use

- "Plan next month's content"
- "Build a content calendar for Q3"
- "What should we post this month?"
- "Give me a 4-week editorial calendar"
- "Schedule our LinkedIn and email content for June"

## Inputs needed

1. **Month and year**: which month to plan (default: next calendar month)
2. **Channels**: LinkedIn organic, Twitter/X, newsletter, blog, YouTube - pick which apply
3. **Primary goal this month**: awareness, demand gen, retention, or event-driven (launch, webinar, conference)
4. **Posting cadence per channel**: how many times per week per channel (ask if not provided)
5. **Themes or constraints**: product launches, campaigns, events, or topics to avoid

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, `knowledge/icp/personas.md`, `knowledge/kpis.md`. If `knowledge/brand/voice.md` is missing, stop: "I need voice context. Run `/onboard --brand` first."

2. **Check `knowledge/learnings.md`** for past content performance data. Surface any patterns: what formats outperformed, what topics resonated, what cadence worked.

3. **Check `knowledge/content-library/`** for existing content that can be repurposed or sequenced into the month.

4. **Define the month's content pillars** (3-4 max):
   - Each pillar maps to one ICP pain or goal from `knowledge/icp/personas.md`
   - Each pillar maps to one business outcome from `knowledge/kpis.md`
   - Balance: 40% thought leadership, 40% product/proof, 20% community/culture
   - Never let one pillar dominate more than 50% of posts

5. **Build the calendar** week by week:

   ```
   # Content calendar: [Month YYYY]

   **Goal**: [primary goal]
   **Channels**: [list]
   **Cadence**: [X posts/week per channel]
   **Pillars**:
   - Pillar 1: [topic] -> speaks to [ICP pain] -> drives [metric]
   - Pillar 2: [topic] -> speaks to [ICP pain] -> drives [metric]
   - Pillar 3: [topic] -> speaks to [ICP pain] -> drives [metric]

   ---

   ## Week 1 (DD-MM to DD-MM)

   | Day | Channel | Format | Pillar | Topic/Angle | Asset needed |
   |---|---|---|---|---|---|
   | Mon | LinkedIn | Text post | P1 | [specific angle] | None - write in chat |
   | Wed | LinkedIn | Carousel | P2 | [specific angle] | 6-slide design |
   | Thu | Newsletter | Issue | P3 | [specific angle] | Full draft |
   | Fri | Twitter/X | Thread | P1 | [specific angle] | None - write in chat |

   **Week 1 theme**: [one sentence connecting the week's posts]
   **Leading into**: [what week 2 builds toward]

   ## Week 2 (DD-MM to DD-MM)
   [same format]

   ## Week 3 (DD-MM to DD-MM)
   [same format]

   ## Week 4 (DD-MM to DD-MM)
   [same format]

   ---

   ## Asset production queue
   List every asset that needs to be created, by type:
   - **Write in chat** (no design needed): [list of posts]
   - **Needs design**: [list with specs]
   - **Needs long-form draft**: [list]
   - **Needs video/audio**: [list]

   ## Skills to run for production
   - `/linkedin-post` for: [list specific posts by week/day]
   - `/newsletter-writer` for: [list issues]
   - `/content-repurposer` if: [list any anchor pieces to atomize]
   - `/thought-leadership-writer` for: [list long-form pieces]
   ```

6. **Self-check**:
   - Every post maps to a pillar, and every pillar maps to a business metric
   - No two consecutive posts on the same topic on the same channel
   - At least one proof point or customer reference per week
   - Newsletter anchors the week it falls in (other posts support it)
   - Cadence matches what was requested - do not over-schedule

7. **Save** to `output/social-calendar/<DD-MM-YYYY>-<month-slug>.md` with frontmatter:
   ```yaml
   ---
   format: social-calendar
   month: [Month YYYY]
   goal: [awareness|demand|retention|launch]
   channels: [list]
   pillars: [list]
   created: DD-MM-YYYY
   ---
   ```

8. **Offer next actions**:
   - "Run `/linkedin-post` for any post on the calendar and I'll write it now."
   - "Run `/newsletter-writer` for [month] issue [N] to draft it."
   - "Run `/content-repurposer` on [anchor piece] to generate derivative posts."
   - "Set a reminder to run `/retro` at the end of the month to capture what worked."

## Channel-specific rules

**LinkedIn organic:**
- Max 5 posts/week or engagement drops
- Vary formats: text, carousel, poll, document
- Best days: Tuesday-Thursday
- Never post twice in one day

**Twitter/X:**
- Threads outperform single tweets for B2B
- 3-5 tweets per thread is the sweet spot
- Quote-tweet your own LinkedIn posts for cross-channel reach

**Newsletter:**
- One issue per week maximum for B2B audiences
- Tuesday or Wednesday sends outperform Monday and Friday
- Issue topic should anchor the week's social content

**Blog/SEO:**
- One pillar article per month minimum
- Long-form takes 2 weeks to write, edit, publish - account for lead time
- Every blog post generates 3-5 social posts via `/content-repurposer`

## Rules

- Never plan more posts than the team can realistically produce. If cadence seems high, flag it: "This is [N] posts/week. Confirm this is achievable before I finalize."
- Never schedule a product post without a paired proof point (stat, customer quote, or case study reference).
- If `knowledge/learnings.md` has data showing a format underperforms, do not include it in the plan without flagging.
- No filler content. Every post earns its slot with a specific business reason.
