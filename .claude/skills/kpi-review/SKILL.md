---
name: kpi-review
description: Review marketing KPIs and produce an executive summary with insights, anomalies, and recommended actions. Use when the user asks for a KPI review, monthly metrics review, marketing dashboard review, "review last month's numbers", quarterly review, performance review, or wants to analyze marketing data. Reads kpis.md and any uploaded data files.
reads:
  - knowledge/kpis.md
  - knowledge/learnings.md
  - knowledge/icp/personas.md
writes:
  - output/kpi-review/
  - knowledge/kpis.md (appends snapshot)
---

# kpi-review

Acts as the user's data strategist. Reads KPIs, spots anomalies, recommends actions. Moves from analysis to actions: every review ends with three concrete next steps, not just observations.

## When to use

- "Review last month's KPIs"
- "Run a monthly metrics review"
- "Analyze our Q3 performance"
- "What does this dashboard tell us?"
- "Review our marketing numbers"

## Inputs needed

- **Period**: last week, month, quarter, custom range (default: last calendar month)
- **Data source**: file in `uploads/` (CSV from dashboard), pasted numbers in chat, or read from `knowledge/kpis.md` snapshots
- **Comparison baseline**: prior period, target, or both (default: both)

## Process

1. **Load context.** If `knowledge/kpis.md` does not exist, stop and say: "I need KPI context to run this review. Run `/onboard --kpis` first to define your metrics and targets." Otherwise read it to know which metrics matter and what the targets are. Read `knowledge/learnings.md` for context on prior anomalies and what was tried.

2. **Read the data.** If a CSV or report is in `uploads/`, parse it. If the user pasted numbers, work from chat. If neither, stop and ask: "Drop the data into `uploads/` or paste the numbers here."

3. **Build the review in this format**:

   ```
   # KPI review: <period> (DD-MM-YYYY)

   ## TL;DR (read this if nothing else)
   - **What's working**: <one sentence>
   - **What's broken**: <one sentence>
   - **What to do this week**: <one sentence>

   ## Metrics snapshot
   | Metric | Period | Prior | Target | Delta vs prior | Delta vs target |
   |---|---|---|---|---|---|
   | MRR | $X | $Y | $Z | +12% | -3% |
   | Pipeline | ... | ... | ... | ... | ... |

   ## What changed and why
   For each metric that moved >10% or missed target by >10%:
   - **<Metric> moved <up/down> <X%>**
     - Probable cause(s): list 2-3 hypotheses, ranked by likelihood
     - What to verify: specific question to investigate
     - Confidence: high / medium / low

   ## Anomalies
   List metrics that look weird:
   - Numbers that don't fit the pattern
   - Cohorts that diverge from average
   - Channels that suddenly outperform or underperform
   - Anything where the user should look at the raw data

   ## Recommended actions
   Three actions, ranked. Each must include:
   - **What to do**
   - **Why** (which insight it addresses)
   - **Effort**: low / medium / high
   - **Expected impact**: which metric, by how much, by when

   1. ...
   2. ...
   3. ...

   ## Open questions
   Things you cannot answer from the data. The user should investigate or pull more data.

   ## What I don't know
   Be explicit about gaps. "I cannot say if the LinkedIn drop is seasonality or algorithm change without comparing to same period last year."
   ```

4. **Append to `knowledge/kpis.md`**: add a snapshot at the bottom of the file:
   ```
   ## Snapshot DD-MM-YYYY
   - MRR: $X
   - Pipeline: $Y
   - <metric>: <value>
   ```
   This builds a longitudinal record over time.

5. **Self-check**:
   - TL;DR is readable in 10 seconds
   - Three actions are concrete (verbs, not "consider")
   - Confidence levels are explicit
   - "What I don't know" section is not empty (there is always something)

6. **Save** to `output/kpi-review/<DD-MM-YYYY>-<period>.md` with frontmatter:
   ```yaml
   ---
   format: kpi-review
   period: <period>
   start: DD-MM-YYYY
   end: DD-MM-YYYY
   created: DD-MM-YYYY
   ---
   ```

7. **Offer follow-ups**:
   - Run `/retro` if a campaign just ended
   - Remind the user: "Set a calendar reminder to run `/kpi-review` again on [first of next month]."
   - Update `knowledge/kpis.md` if any targets need to change

## Rules

- Never invent numbers. If the data is incomplete, say so.
- Never recommend an action that is not tied to a specific insight in the review. No generic best practices.
- Confidence levels are required. "MRR dropped because of X" without a confidence label is not a finding.
- The "What I don't know" section is mandatory. If you skip it, you are pretending to know more than you do.
