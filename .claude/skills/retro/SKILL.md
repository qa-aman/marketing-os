---
name: retro
description: Capture learnings from a campaign, launch, sprint, or initiative and append them to knowledge/learnings.md so future runs of the OS get smarter. Use when the user asks for a retro, retrospective, post-mortem, "what did we learn", "campaign wrap-up", "lessons learned", or after a campaign or launch ends. Critical feedback loop that makes the OS compound over time.
reads:
  - knowledge/kpis.md
  - knowledge/learnings.md
  - output/campaign-brief/
writes:
  - knowledge/learnings.md (appends)
  - output/retro/
---

# retro

Captures structured learnings and persists them. The OS gets smarter every time this runs.

## When to use

- "Run a retro on the Q3 launch"
- "Let's debrief the campaign"
- "Capture what we learned from <initiative>"
- "Post-mortem on the webinar"

## Inputs needed

- **What's being retro'd**: campaign name, launch, sprint, etc.
- **Time period**: DD-MM-YYYY to DD-MM-YYYY
- **Outcome**: did it hit its primary KPI? What was the target vs actual?
- **Who was involved**: marketing, sales, product, contractors, agencies

## Process

1. **Load context.** Read the relevant `output/campaign-brief/<file>.md` if a brief exists. Read `knowledge/learnings.md` so you know what we already learned and don't repeat the same insight.

2. **Run the retro structure**:

   ```
   # Retro: <Initiative> (DD-MM-YYYY)

   ## Outcome
   - **Primary KPI**: target <X>, actual <Y>, delta <%>
   - **Verdict**: hit / missed / partial

   ## What worked
   List 3-5 things. Each must be specific and reusable:
   - <Specific tactic, channel, or decision> -> <observed outcome>
   - Example: "Founder-voice LinkedIn posts pulled 4x engagement vs company-voice"

   Avoid vague statements like "the team executed well" or "messaging resonated".

   ## What didn't work
   List 3-5 things. Be honest. Each must include why:
   - <What failed> because <root cause hypothesis>
   - Example: "Webinar attendance was 22% of registrants because we sent reminders too early"

   ## What we'd do differently
   Concrete changes for next time. Verbs, not adjectives:
   - <Action> instead of <previous action>

   ## Surprises
   Things we didn't predict. These are the most valuable findings because they update our model.

   ## Decisions for the next campaign
   - **Keep**: tactics that worked and we'll repeat
   - **Drop**: tactics that didn't work and we'll stop
   - **Test**: hypotheses we want to validate

   ## Counterfactual check
   What would have happened if we had not run this campaign at all? If the answer is "roughly the same", flag it.
   ```

3. **Persist to `knowledge/learnings.md`**: append a tight summary that future skills will load:

   ```
   ## <Initiative> retro (DD-MM-YYYY)

   **Result**: <hit|missed|partial> primary KPI <X> vs target <Y>

   **Reusable insights**:
   - <Insight 1> (applies to: <campaign type, channel, audience>)
   - <Insight 2>
   - <Insight 3>

   **Stop doing**:
   - <thing>

   **Test next time**:
   - <hypothesis>
   ```

   Order: newest entries at the top. Every skill that reads `learnings.md` will see this.

4. **Cross-link**: if the retro contradicts or confirms an earlier learning, note it:
   "This contradicts the <DD-MM-YYYY> retro finding that <X>. Updated assumption: <Y>."

5. **Save the full retro** to `output/retro/<DD-MM-YYYY>-<initiative>.md`.

6. **Offer next actions**:
   - Schedule the next campaign brief with the new constraints applied (`/campaign-brief`)
   - Update `knowledge/icp/personas.md` if persona insights changed
   - Update `knowledge/markets/positioning.md` if positioning insights changed

## Rules

- Specificity is non-negotiable. "Messaging resonated" is not a learning. "Subject line with a number outperformed without by 38%" is.
- Every "what didn't work" entry must include a root cause hypothesis. "It just didn't perform" is a failure of analysis.
- Always check the counterfactual. Sometimes campaigns "succeed" because the market was already moving in that direction.
- The `knowledge/learnings.md` summary is the most-read artifact in this OS. Make it tight, scannable, and useful for future you.
