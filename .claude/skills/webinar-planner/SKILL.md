---
name: webinar-planner
description: Plan a webinar end-to-end including topic, abstract, speaker brief, registration page, promotion sequence, day-of run-of-show, and post-webinar follow-up. Use when the user asks to plan a webinar, virtual event, online workshop, "we need a webinar on X", host a webinar, online masterclass, or any live virtual event with promotion and follow-up. Reads ICP, services, and brand voice from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/services/
  - knowledge/learnings.md
writes:
  - output/webinar/
---

# webinar-planner

Plans a webinar as a campaign, not a one-off. Treats the live event as one moment in a multi-week arc: pre-event demand, live execution, post-event nurture.

## When to use

- "Plan a webinar on <topic>"
- "We need a virtual event for <audience>"
- "Build a workshop on X"
- "Host a webinar with <partner or guest>"
- "Promote and run a masterclass"

## Inputs needed

- **Topic and angle** (required)
- **Audience persona** from `knowledge/icp/personas.md`
- **Goal**: pipeline gen, brand awareness, customer education, partner co-marketing, recruiting
- **Format**: solo talk, panel, fireside, workshop, customer story
- **Length**: 30, 45, 60 minutes (default 45)
- **Date and time** (DD-MM-YYYY, timezone)
- **Speakers**: name, role, company, prep notes
- **Registration platform**: Zoom, Webex, Hopin, Restream, etc.

## Process

1. **Load context.** Read brand voice, primary persona, positioning, learnings (especially any prior webinar retros).

2. **Validate the topic.** Pressure-test:
   - Is the title outcome-led? "How to <achieve outcome> in <timeframe>" beats "Introduction to X"
   - Is it specific enough that a busy person blocks 45 minutes?
   - Does it match a real pain in `knowledge/icp/personas.md`?

   If the title fails, propose 3 alternatives.

3. **Build the full webinar pack** in `output/webinar/<DD-MM-YYYY>-<slug>/`:

   ```
   output/webinar/25-04-2026-ai-marketing-stack/
   ├── README.md                    # the master plan
   ├── abstract.md                  # public-facing description
   ├── speaker-brief.md             # what speakers need to prepare
   ├── registration-page.md         # landing page copy
   ├── promotion-sequence/          # all promo assets
   │   ├── linkedin-posts.md        # 5-7 posts across 3 weeks
   │   ├── email-invites.md         # 3-email invite sequence
   │   ├── partner-co-marketing.md  # if partner involved
   │   └── ad-creative.md           # paid ads if budget
   ├── day-of/
   │   ├── run-of-show.md           # minute-by-minute timing
   │   ├── speaker-prep-checklist.md
   │   ├── poll-questions.md        # 3-5 audience polls
   │   └── chat-moderation-script.md
   └── follow-up/
       ├── attendee-email.md        # within 24 hours
       ├── no-show-email.md         # different message
       ├── nurture-sequence.md      # 3-email follow-up over 14 days
       └── recap-blog-post.md       # SEO content from the recording
   ```

4. **README.md (master plan)**:

   ```
   # Webinar: <Title>

   **Date**: DD-MM-YYYY HH:MM <TZ>
   **Format**: <solo|panel|fireside|workshop>
   **Length**: <minutes>
   **Speakers**: <names + roles>
   **Audience persona**: <from knowledge/icp/>
   **Goal**: <pipeline|awareness|education|co-marketing|recruiting>

   ## Success metrics
   - Registrations target: <number>
   - Attendance rate target: <%>
   - Conversion target: <metric, e.g. demo bookings, MQLs>
   - On-demand views target: <14-day post-event>

   ## Timeline
   | Days out | Activity | Owner |
   |---|---|---|
   | -28 | Topic locked, speaker confirmed, page live | |
   | -21 | Promo wave 1 (LinkedIn, email) | |
   | -14 | Promo wave 2 + paid ads if budget | |
   | -7  | Promo wave 3 + partner push | |
   | -3  | Final push, reminder email 1 | |
   | -1  | Reminder email 2, speaker rehearsal | |
   |  0  | Live | |
   | +1  | Attendee + no-show emails | |
   | +3  | Nurture email 1, recap blog live | |
   | +7  | Nurture email 2, on-demand promo | |
   | +14 | Nurture email 3, retro | |
   ```

5. **Promotion sequence rules**:
   - 7-10 LinkedIn posts across 3 weeks (use `/linkedin-post` for each)
   - 3 invite emails (initial, mid, last-call) (use `/email-nurture` patterns)
   - 2 reminder emails (day before, day of)
   - Partner co-marketing if applicable: dedicated assets they can paste into their channels
   - Paid ads only if there's budget (use `/ad-campaign-writer`)

6. **Day-of run-of-show** (minute by minute):

   ```
   00:00-00:02  Pre-roll: hold music + countdown timer
   00:02-00:05  Welcome + housekeeping (chat, Q&A, recording)
   00:05-00:10  Speaker intros + agenda
   00:10-00:30  Main content block 1
   00:30-00:32  Poll #1 + reaction
   00:32-00:55  Main content block 2
   00:55-00:58  Poll #2
   00:58-01:15  Q&A
   01:15-01:18  Recap + CTA + on-demand link
   01:18-01:20  Close
   ```

7. **Follow-up sequence**:
   - Attendee email (24h): thank you + recording + single CTA (book demo, download resource)
   - No-show email (24h): different copy, lead with "you missed this" + recording
   - Nurture day +3: deeper resource related to webinar topic
   - Nurture day +7: customer story or case study related to topic
   - Nurture day +14: direct ask (demo, trial, sales call)

8. **Self-check**:
   - Title is outcome-led, specific
   - Promotion has at least 3 channels
   - Day-of has poll questions and Q&A buffer
   - Follow-up differentiates attendees vs no-shows
   - All copy reads in brand voice
   - Recap blog leverages the recording for SEO

9. **Save** all files. Print the folder tree at the end.

## Rules

- A webinar is a campaign, not an event. If you produce only the day-of plan, you've done 10% of the work.
- Differentiate attendee vs no-show messaging. Treating them the same wastes the no-show segment.
- Always plan the recap content. The recording is reusable for 90+ days as on-demand content, blog post, social clips.
- Never overpromise. The title must match the actual content. Bait-and-switch destroys trust and kills future registration rates.
- Check `knowledge/learnings.md` for prior webinar retros. Apply what worked, drop what didn't.
