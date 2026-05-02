---
name: pr-pitch-writer
description: Write personalized pitch emails to journalists, podcasters, newsletter writers, and analysts. Different from press releases (use /press-release-writer for those). Use when the user asks to pitch a journalist, pitch a reporter, "get coverage in X", media outreach, podcast pitch, analyst briefing request, or wants to land a story. Reads brand voice and positioning from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/markets/positioning.md
  - knowledge/services/
  - knowledge/content-library/case-studies/
writes:
  - output/pr-pitch/
---

# pr-pitch-writer

Writes pitch emails that journalists actually read. Different from press releases: pitches are personal, short, and earn the click.

## When to use

- "Pitch this story to <journalist>"
- "Write an email to a reporter at <publication>"
- "Get me on <podcast>"
- "Pitch <analyst> for a briefing"
- "Outreach to newsletter writer X"

## Outreach types this skill handles

| Type | Goal | Length | Hook style |
|---|---|---|---|
| **News pitch** (timely story) | Coverage in 1-2 weeks | 80-120 words | News value + exclusive offer |
| **Trend pitch** (you're the expert) | Quoted source for trend piece | 100-150 words | Data + POV |
| **Podcast pitch** | Booking | 100-180 words | Specific to host's recent episode |
| **Newsletter pitch** | Mention or feature | 60-100 words | Match their format |
| **Analyst briefing request** | Briefing slot | 100-150 words | New release + customer proof |
| **Customer story pitch** | Profile of a customer | 150-200 words | Outcome + access to interview |

## Inputs needed

- **Recipient**: name, publication, beat, recent piece they wrote (paste URL or summary)
- **Pitch type** (from table)
- **Story or angle**: what's newsworthy or interesting?
- **Proof**: data, customer, exclusive, expert availability
- **Why this person** (mandatory): why are they the right journalist/host for this?
- **What you're asking for**: 15-min interview, embargoed access, comment, podcast booking

## Process

1. **Load context.** Read `knowledge/brand/voice.md` (still applies), `knowledge/markets/positioning.md`, and any case studies that support the pitch.

2. **Research the recipient.** If the user provided a recent piece they wrote, read it (WebFetch). Otherwise, ask for one. The single biggest reason pitches fail: no evidence the sender knows what the journalist covers.

3. **Identify the angle from THEIR perspective.** Reframe:
   - Why does THEIR audience care? (not "why is this exciting for us")
   - What's the tension, controversy, or surprise?
   - What's the data or access we can offer that they can't get elsewhere?

4. **Write the pitch** with this structure:

   ```
   Subject: <under 60 chars, specific, not "Quick question" or "Following up">

   Hi <First name>,

   <Line 1: specific reference to their recent work. Not flattery, but engagement. "Your piece on <topic> argued <X>; this story extends that.">

   <Line 2: the hook. The single most interesting fact. Often a number, exclusive, or contrarian claim.>

   <Line 3-4: the offer. What you can give them: data, customer, expert, embargo. Make it concrete.>

   <Line 5: the ask. Specific. "15-min call this week?" not "Let me know if interested.">

   <Sign-off>
   <Sender name + role + company>
   <P.S.: optional, 1 line. Often the strongest hook moved here.>
   ```

5. **Subject line rules**:
   - Specific noun, not generic verb
   - Numbers if available ("47% of marketers..." beats "New marketing data")
   - No "Quick question", "Following up", "Touching base"
   - No clickbait (the email must deliver what the subject promised)

6. **Length and pacing**:
   - 80-180 words total. Journalists scan, not read.
   - 5-7 sentences max
   - One paragraph is OK if the pitch is tight enough

7. **Voice rules**:
   - Conversational, not corporate
   - Match the journalist's beat. Tech reporter: tighter, faster. Trade pub: more context.
   - No jargon unless they use it
   - No marketing language ("revolutionary", "best-in-class", "unlock")
   - No em dashes
   - First person, present tense

8. **Self-check**:
   - First line proves you know their work
   - Hook in the first 30 words
   - Specific ask, not vague
   - One CTA
   - No attachments (mention them, but offer to send)
   - Subject line under 60 chars

9. **Save** to `output/pr-pitch/<DD-MM-YYYY>-<recipient-slug>.md` with frontmatter:
   ```yaml
   ---
   format: pr-pitch
   recipient: <name>
   publication: <publication>
   pitch-type: <type>
   ask: <specific ask>
   created: DD-MM-YYYY
   sent: <pending|DD-MM-YYYY>
   ---
   ```

10. **Offer companion assets**:
    - Press release (if news pitch) via `/press-release-writer`
    - Background brief (1-pager) the journalist can use
    - 3 follow-up email templates (if no response after 4, 9, 14 days)
    - Talking points if a call is booked

## Pitch tracker

Maintain `output/pr-pitch/_tracker.md` (create if not exists):

```
# PR pitch tracker

| Date sent | Recipient | Pub | Pitch | Status | Follow-up |
|---|---|---|---|---|---|
| DD-MM-YYYY | <name> | <pub> | <slug> | sent | day +4 |
```

Update this every time a pitch goes out.

## Rules

- One pitch, one recipient. Never BCC. Never "Hi all".
- Specific reference to their work in line 1, or don't send.
- Never overstate. If you say "exclusive", it must actually be exclusive.
- Never attach files in a cold pitch. Offer them.
- If the journalist doesn't reply, follow up at day 4 and day 9. After that, drop it.
- Keep the pitch tracker current. Tracking response rate is how this gets better over time.
