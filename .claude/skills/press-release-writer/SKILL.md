---
name: press-release-writer
description: Write press releases for product launches, funding announcements, partnerships, executive hires, and milestones. Use when the user asks for a press release, media release, news announcement, PR for X, launch announcement, funding announcement, or "write a press release". Follows AP style. Reads brand voice and positioning from knowledge/.
reads:
  - knowledge/company.md
  - knowledge/brand/voice.md
  - knowledge/markets/positioning.md
  - knowledge/services/
writes:
  - output/press-release/
---

# press-release-writer

Writes press releases in AP style. Optimized for journalists who scan, not read. Different from a blog post: the lede must answer who/what/when/where/why in one paragraph.

## When to use

- "Write a press release for our Series B"
- "Draft a media release announcing the partnership with X"
- "Write the launch announcement for <product>"
- "We need a press release for the new CMO hire"

## Release types this skill handles

- Product launch
- Funding round
- Partnership / integration
- Executive hire or appointment
- Customer milestone (Xth customer, $Y ARR, etc.)
- Acquisition (buyer side or sell side)
- Award or certification

## Inputs needed (ask if missing)

- **Type** of release (from list above)
- **Headline news** (the one sentence)
- **Date and dateline city**
- **Key facts**: numbers, names, titles, dates
- **Quote 1** (executive at company): name, title, full quote
- **Quote 2** (external: investor, partner, customer, board): name, title, organization, full quote
- **Boilerplate**: pull from `knowledge/company.md`. If missing, draft one.
- **Press contact**: name, email

If quotes are missing, ask. Never invent.

## Process

1. **Load context.** Read `knowledge/company.md`, `knowledge/brand/voice.md`, `knowledge/markets/positioning.md`.

2. **Write the release in AP-style structure**:

   ```
   FOR IMMEDIATE RELEASE

   <Headline: 60-80 chars, sentence case, news-led not benefit-led>
   <Subheadline: 100-130 chars, adds the "why this matters">

   <DATELINE CITY, DD-MM-YYYY> -- <Lede paragraph: 30-50 words. Who, what, when, where, why. The single most important sentence in the release.>

   <Paragraph 2: 50-80 words. The context. Why now? What problem does this solve? Include one supporting stat if available.>

   <Quote 1: from company executive. Full attribution: "Quote," said <Name>, <Title> at <Company>. "Continued quote." 40-60 words total.>

   <Paragraph 4: 50-80 words. Specifics. Product details, deal terms, timeline. Most likely paragraph to be cut by editors, so make it skippable.>

   <Quote 2: from external party. Same attribution format. 30-50 words.>

   <Paragraph 6: 30-50 words. What's next. Availability, rollout plan, how to learn more.>

   ###

   About <Company>
   <Boilerplate from knowledge/company.md, 50-80 words. Name, what they do, founded, HQ, notable customers or scale, website.>

   Press contact:
   <Name>
   <Title>
   <Email>
   <Phone if provided>
   ```

3. **Style rules**:
   - AP style: spell out numbers under 10, use figures for 10+
   - Dates: spell out month, e.g. "April 25, 2026" (override Aman's DD-MM-YYYY only inside the release body, since AP requires this format; use DD-MM-YYYY for filename and dateline)
   - Titles capitalized only before names ("Chief Executive Officer Jane Doe" but "Jane Doe, chief executive officer")
   - No exclamation points
   - No marketing language in the body ("revolutionary", "industry-leading", "best-in-class")
   - Past tense for the news ("announced today")
   - Active voice

4. **Self-check**:
   - Headline answers the news in one line
   - Lede answers who/what/when/where/why
   - Two quotes minimum, both attributed
   - Boilerplate present
   - Press contact present
   - No first-person voice anywhere except inside quotes
   - Length: 400-600 words

5. **Save** to `output/press-release/<DD-MM-YYYY>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: press-release
   type: <launch|funding|partnership|hire|milestone|acquisition|award>
   headline: <full headline>
   embargo: <none|until DD-MM-YYYY HH:MM TZ>
   created: DD-MM-YYYY
   ---
   ```

6. **Offer companion assets**:
   - Email pitch to journalists (3 sentences + the release attached)
   - LinkedIn announcement post
   - Internal Slack message
   - Customer email if relevant

## Rules

- Never invent quotes. If the user does not have a quote yet, leave a placeholder: `[QUOTE NEEDED FROM <Name>, <Title>]` and tell the user.
- Never embargo without confirming the embargo time and timezone explicitly.
- For funding announcements, confirm the round size, lead investor, and use of funds with the user before drafting. These are factual claims that cannot be wrong.
- For executive hires, confirm the start date, prior role, and reporting line.
