---
name: email-nurture
description: Write multi-email nurture sequences for lead-gen, onboarding, re-engagement, sales, and lifecycle marketing. Use when the user asks for an email sequence, drip campaign, nurture flow, onboarding emails, re-engagement campaign, "write 5 emails for X", welcome series, or any multi-step email program. Reads brand voice and ICP from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/services/
  - knowledge/markets/positioning.md
writes:
  - output/email-nurture/
---

# email-nurture

Writes coordinated email sequences. Different from one-off emails (use `/content-writer` for those). Sequences have a narrative arc across emails.

## When to use

- "Write a 5-email nurture for our ebook download leads"
- "Draft an onboarding email series for new signups"
- "Build a re-engagement campaign for dormant users"
- "Write a sales sequence for trial conversions"
- "Welcome series for new newsletter subscribers"

## Sequence types this skill handles

| Type | Length | Cadence | Goal |
|---|---|---|---|
| **Lead nurture** (post download) | 4-6 emails | day 0, 2, 5, 9, 14 | Qualify, educate, convert to demo |
| **Onboarding** (post signup) | 5-7 emails | day 0, 1, 3, 7, 14, 30 | Activate, drive first value |
| **Re-engagement** (dormant) | 3 emails | day 0, 4, 10 | Revive or sunset |
| **Sales sequence** (trial conversion) | 4-5 emails | day 0, 3, 7, 12, 14 | Convert to paid |
| **Welcome series** (newsletter) | 3 emails | day 0, 3, 7 | Set expectations, drive engagement |
| **Win-back** (churned) | 3 emails | day 0, 7, 21 | Resurrect lapsed customers |

## Inputs needed

- **Sequence type** (from table above)
- **Trigger event**: what causes someone to enter this sequence (download, signup, X days inactive, trial start)
- **Conversion goal**: book demo, upgrade, complete onboarding step, reply, click CTA
- **Audience persona**: from `knowledge/icp/personas.md`
- **Length and cadence**: default per type, override if needed
- **Sender identity**: founder, AE, generic company, or rotation

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, `knowledge/icp/personas.md`. Stop if voice is missing.

2. **Plan the arc.** Each email has a job. Show the user the plan first:

   ```
   Email 1 (Day 0): Welcome + set expectations
   Email 2 (Day 2): Insight that validates their problem
   Email 3 (Day 5): Case study showing the outcome they want
   Email 4 (Day 9): Soft sell with low-friction CTA
   Email 5 (Day 14): Direct ask with deadline
   ```

   Wait for user to confirm before drafting.

3. **Write each email** with this structure:

   ```
   ---
   email: 1 of 5
   day: 0
   trigger: <event>
   sender: <name|company>
   ---

   Subject: <under 50 chars, no clickbait, no all caps>
   Preview text: <30-90 chars, complements subject, never repeats it>

   <Body: 80-150 words, conversational, one idea, one CTA>

   <Sign-off>
   <Sender name and role>

   P.S. <optional, but high-performing. One line. Reinforce the CTA.>
   ```

4. **Voice rules**:
   - Match `knowledge/brand/voice.md`
   - Conversational, like writing to one person
   - Second-person ("you"), not third-person
   - One CTA per email. If you have two, the second should be a soft "or just reply"
   - No "Hope this email finds you well"
   - No "I just wanted to reach out"
   - No "Circling back" unless this is intentionally a follow-up

5. **Subject line rules**:
   - 30-50 chars (most clients truncate at 60)
   - No emojis unless `knowledge/brand/voice.md` says they are part of the voice
   - Curiosity, specificity, or self-interest. Pick one.
   - Lowercase or sentence case (matches conversational tone)
   - Test variants: provide 2 alt subject lines per email

6. **Self-check** for the full sequence:
   - Each email earns its place (no filler emails to hit a number)
   - The CTA escalates over time (low-friction first, direct ask last)
   - No two emails repeat the same hook
   - The arc has narrative tension (problem -> agitate -> solution -> proof -> ask)
   - Total reading time across the sequence under 5 minutes

7. **Save** to `output/email-nurture/<DD-MM-YYYY>-<sequence-name>/`:
   ```
   output/email-nurture/25-04-2026-trial-conversion/
   ├── README.md          (sequence overview, cadence, goals, A/B test ideas)
   ├── email-1-day-0.md
   ├── email-2-day-3.md
   ├── email-3-day-7.md
   ├── email-4-day-12.md
   └── email-5-day-14.md
   ```

8. **README.md template**:
   ```
   # <Sequence name>

   **Type**: <type>
   **Trigger**: <event>
   **Audience**: <persona>
   **Goal**: <conversion goal>
   **Length**: N emails
   **Total window**: N days

   ## Cadence
   | # | Day | Subject | Job | CTA |
   |---|---|---|---|---|
   | 1 | 0 | ... | ... | ... |

   ## A/B test ideas
   - Test subject line A vs B on Email 1
   - Test PS variant on Email 4
   - Test send time (Tue vs Thu)

   ## Success metrics
   - Email 1 open rate target: >40%
   - Sequence reply rate target: >2%
   - Conversion to <goal> target: <%>
   ```

## Rules

- Never write emails that don't have a clear job. Each email earns its place.
- One CTA per email. Two CTAs = no CTA.
- Subject lines must reflect what's actually inside. No clickbait.
- If the user is sending from a real person (founder, AE), include a check: "Confirm this matches how <Name> writes before sending."
- Every sequence ends with a clear off-ramp: either a clear ask or "we'll stop emailing you about this."
