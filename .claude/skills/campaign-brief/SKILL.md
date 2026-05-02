---
name: campaign-brief
description: Plan a marketing campaign end-to-end. Produces a campaign brief with goal, audience, message, channels, assets, timeline, budget, and success metrics. Use when the user asks to plan a campaign, brief a campaign, "we need a campaign for X", launch plan, GTM plan, marketing plan for <product>, demand gen plan, or any multi-channel marketing initiative. Reads ICP, services, and KPIs from knowledge/.
reads:
  - knowledge/icp/personas.md
  - knowledge/services/
  - knowledge/markets/positioning.md
  - knowledge/markets/competitors.md
  - knowledge/kpis.md
  - knowledge/learnings.md
writes:
  - output/campaign-brief/
---

# campaign-brief

Produces a campaign brief that an empowered team can execute without needing a follow-up meeting. Stripped of bloat: every section is decision-ready, not theater.

## When to use

- "Plan a campaign for our Q3 launch"
- "Build a GTM plan for <product>"
- "Brief a demand gen campaign targeting CMOs"
- "Write the launch plan for the integration with X"
- "We need a marketing plan for <event/feature/audience>"

## Inputs needed

Walk the user through these one at a time. Do not skip.

1. **Campaign goal**: pick one. Awareness, demand gen, expansion, retention, recruitment.
2. **Primary KPI**: the one number that defines success. With a target.
3. **Audience**: which persona from `knowledge/icp/personas.md`. If multiple, force-rank.
4. **Window**: start date, end date (DD-MM-YYYY).
5. **Budget**: total, or "no paid budget".
6. **Constraints**: legal, brand, channel restrictions, dependencies on other teams.
7. **What's already decided**: any creative, channel, or partner choices the user has already locked in.

## Process

1. **Load context.** Read all `reads:` files. If `knowledge/icp/personas.md` is missing, stop and run `/onboard --icp`.

2. **Check `knowledge/learnings.md`** for any relevant past campaign retros. Reference them in the brief.

3. **Generate the brief in this format**:

   ```
   # <Campaign name>

   **Goal**: <one sentence, single-objective>
   **Primary KPI**: <metric> -> target <number> by <DD-MM-YYYY>
   **Window**: DD-MM-YYYY to DD-MM-YYYY
   **Budget**: $<amount> or <none>
   **Owner**: <person, ask the user>
   **Status**: draft

   ## Audience
   - **Primary persona**: <from knowledge/icp/>
   - **Top 3 pains we are speaking to**:
     1. ...
     2. ...
     3. ...
   - **Where they are**: channels, communities, publications

   ## Message
   - **Core message** (one sentence the audience should remember):
   - **Proof points** (3 max):
     1. ...
     2. ...
     3. ...
   - **What we are NOT saying**: explicit anti-messages to avoid scope creep

   ## Strategy
   - **Why now** (timing rationale):
   - **Differentiation vs <competitor>** (how this plays where we win):
   - **What we learned from <past campaign>** (from knowledge/learnings.md):

   ## Channel mix
   | Channel | Role | Asset count | Spend | Owner |
   |---|---|---|---|---|
   | LinkedIn organic | Awareness | 8 posts | $0 | <name> |
   | LinkedIn ads | Demand | 3 ad sets | $X | <name> |
   | Email nurture | Conversion | 5-email sequence | $0 | <name> |
   | ... | | | | |

   ## Assets needed
   Group by team. Be specific.
   - **Content**: 1 pillar article (1800w), 8 LinkedIn posts, 3 quote graphics
   - **Design**: 1 landing page hero image, 3 ad creatives, 1 email header
   - **Video**: 1 explainer (60s)
   - **Sales enablement**: 1 one-pager, 1 deck update
   - **Web**: 1 landing page

   ## Timeline
   Working backward from launch date.
   | Week | Milestone | Owner |
   |---|---|---|
   | -4 | Brief approved, assets briefed | |
   | -3 | First drafts in review | |
   | -2 | Final assets, landing page live | |
   | -1 | Soft launch, internal alignment | |
   | 0 | Launch | |
   | +1 | First metrics review | |
   | +4 | Campaign retro | |

   ## Success metrics
   - **Primary**: <KPI> = <target>
   - **Secondary**:
     - <metric> = <target>
     - <metric> = <target>
   - **Leading indicators** (visible by week 1):
     - <metric>
   - **Lagging indicators** (visible by week 4):
     - <metric>

   ## Risks and mitigations
   - **Risk**: <what could go wrong>
     **Mitigation**: <what we do about it>

   ## Open questions
   - List anything you do not have an answer to. Do not invent.

   ## Approvals
   - [ ] Marketing lead
   - [ ] Product
   - [ ] Sales
   - [ ] Legal (if applicable)
   ```

4. **Self-check**:
   - Single primary KPI (not three)
   - Specific persona, not "marketers"
   - Working-backward timeline, not aspirational
   - Concrete assets list with counts
   - References at least one prior learning if `knowledge/learnings.md` exists

5. **Save** to `output/campaign-brief/<DD-MM-YYYY>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: campaign-brief
   campaign: <name>
   goal: <awareness|demand|expansion|retention|recruitment>
   start: DD-MM-YYYY
   end: DD-MM-YYYY
   primary-kpi: <metric>
   target: <number>
   budget: <amount or none>
   created: DD-MM-YYYY
   ---
   ```

6. **Offer next actions**:
   - Generate the asset list as individual skill calls (`/linkedin-post` x 8, `/landing-page-writer` x 1, etc.)
   - Build the launch deck (`/ppt-maker`)
   - Remind the user: "Set a calendar reminder to run `/retro` on [launch date + 28 days] to capture learnings."

## Rules

- One primary KPI. If the user names three, force them to rank and pick one.
- Never copy a previous campaign brief without reading `knowledge/learnings.md` first. Past failures should change current plans.
- If budget is zero, do not propose paid channels. Reallocate to organic.
- Timeline must be working backward from launch. If the user gives a launch date, derive milestones from it. If not, ask.
