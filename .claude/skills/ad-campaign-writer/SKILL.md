---
name: ad-campaign-writer
description: Write paid ad copy for LinkedIn, Google, Meta, and YouTube. Produces multiple variants (headline, description, CTA, creative direction) per platform. Use when the user asks for ad copy, ad variants, "write LinkedIn ads", Google ads, Meta ads, paid social copy, ad headlines, or wants creative for a paid campaign. Reads brand voice, ICP, and positioning from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/services/
writes:
  - output/ad-campaign/
---

# ad-campaign-writer

Writes ads across paid channels. Each channel has different limits, conventions, and audience expectations. This skill knows them.

## When to use

- "Write LinkedIn ads for our launch"
- "Give me 5 Google headline variants"
- "Draft Meta ads targeting <persona>"
- "Write YouTube pre-roll script"
- "Build paid creative for <campaign>"

## Channels this skill handles

| Channel | Format | Specs |
|---|---|---|
| **LinkedIn Sponsored Content** | Single image, carousel, video, document | 150 char intro, 70 char headline, 1200x627 image |
| **LinkedIn Message Ads** | InMail | 60 char subject, 500 word body, 1 CTA |
| **Google Search Ads** | Responsive | 15 headlines (30 char), 4 descriptions (90 char) |
| **Google Display** | Responsive display | 5 short headlines, 5 long, 5 descriptions |
| **Meta (FB/IG) feed** | Image, carousel, video | 125 char primary text, 40 char headline, 30 char desc |
| **Meta Reels/Stories** | Vertical video script | 15-30 sec script |
| **YouTube pre-roll** | Skippable ad | 5 sec hook, 30 sec full script |
| **YouTube Shorts** | Vertical | 30-60 sec script |

## Inputs needed

- **Channel(s)** (one or many)
- **Campaign objective**: awareness, demand gen, retargeting, conversion
- **Audience**: persona from `knowledge/icp/personas.md` or specify
- **Offer**: ebook, demo, trial, webinar, content download
- **Landing page URL or topic**
- **Compliance constraints**: regulated industry? Claims to avoid?
- **Number of variants**: default 5 per channel for testing

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, the relevant `knowledge/icp/personas.md` entry, `knowledge/markets/positioning.md`, and the relevant `knowledge/services/<service>.md`.

2. **Identify the angle.** Each ad has one job. Pick from:
   - **Pain agitation** (you have problem X)
   - **Outcome focus** (achieve outcome Y)
   - **Social proof** (X companies use this)
   - **FOMO/scarcity** (limited spots, ending soon)
   - **Curiosity/contrarian** (everyone does X. Here's why we don't.)
   - **How-to** (learn how to X in Y minutes)

   Generate one ad per angle for testing.

3. **Write per channel.** Examples below.

### LinkedIn Sponsored Content (single image)
```
Variant 1 (pain agitation):
  Intro (≤150 char): <hook calling out the pain, specific>
  Headline (≤70 char): <outcome promise>
  Description (≤100 char): <one supporting line>
  CTA: <Download | Register | Get demo>
  Visual brief: <what the image should show, brand-aligned>

Variant 2 (outcome focus):
  ...

Variant 3 (social proof):
  ...
```

### Google Search Ads (responsive)
```
Headlines (15, each ≤30 char):
  1. <Brand + benefit>
  2. <Keyword + outcome>
  3. <Number + result>
  ...

Descriptions (4, each ≤90 char):
  1. <expanded value prop + CTA>
  ...

Final URL: <landing page>
Display path: /<keyword>/<benefit>
```

### Meta feed
```
Variant 1:
  Primary text (≤125 char): <hook + 1-line value prop>
  Headline (≤40 char): <CTA-led>
  Description (≤30 char): <urgency or proof>
  CTA button: <Learn more | Sign up | Get offer>
  Visual brief: <description of image/video>
```

4. **Voice rules**:
   - Match `knowledge/brand/voice.md`
   - Active voice, present tense
   - Specific numbers ("47% faster" not "much faster")
   - No buzzwords ("revolutionary", "best-in-class", "synergy")
   - No claims you cannot back up

5. **Self-check**:
   - Each variant has a different angle (no near-duplicates)
   - Character limits respected per platform
   - CTA matches landing page action
   - No prohibited claims (regulated industries: check)
   - Voice matches `knowledge/brand/voice.md`

6. **Save** to `output/ad-campaign/<DD-MM-YYYY>-<campaign-slug>/`:
   ```
   output/ad-campaign/25-04-2026-q2-launch/
   ├── README.md (testing plan, KPIs, expected CTR/CPL)
   ├── linkedin-sponsored.md
   ├── linkedin-inmail.md
   ├── google-search.md
   ├── google-display.md
   ├── meta-feed.md
   ├── meta-reels.md
   ├── youtube-preroll.md
   └── youtube-shorts.md
   ```

7. **README.md template**:
   ```
   # <Campaign> ad creative

   **Objective**: <objective>
   **Audience**: <persona>
   **Offer**: <offer>
   **Landing page**: <URL>

   ## Channel mix and budget split
   | Channel | Variants | Test budget | Hypothesis |
   |---|---|---|---|

   ## Test plan
   - Run all variants for X days
   - Kill any below Y CTR
   - Scale top 2 to Z budget

   ## Expected benchmarks
   - LinkedIn: 0.5-1.5% CTR, $X CPL
   - Google search: 3-6% CTR, $X CPC
   - Meta: 1-2% CTR, $X CPL
   ```

## Rules

- Always produce multiple variants. One ad per angle is the minimum testable unit.
- Always specify the visual brief, not the actual image. Designers handle visuals.
- Never make claims that contradict `knowledge/services/`. If the user wants a claim that is not documented, flag it.
- For regulated industries (healthcare, finance, education), include a note: "Confirm copy with legal before publishing."
- Character limits are hard limits. Cut ruthlessly.
