---
name: content-repurposer
description: Take one piece of long-form content (blog post, podcast, talk, article, newsletter) and turn it into a multi-channel asset pack. Use when the user says "repurpose this", "turn this into LinkedIn/Twitter/etc", "atomize this", "break this down for social", "create derivative content from X", "make a content pack from this", or wants to maximize output from one input. Orchestrates linkedin-post, content-writer, and other skills.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/content-library/
writes:
  - output/repurposed/
---

# content-repurposer

Orchestrator skill. One source piece becomes a coordinated asset pack across channels. Each output is fully native to its channel, not a copy-paste.

## When to use

- "Repurpose this blog post"
- "Turn this article into LinkedIn / Twitter / email"
- "Atomize my podcast episode"
- "Make a content pack from this newsletter"
- "Break this talk into social posts"

## Inputs needed

- **Source**: file path, URL, or pasted text
- **Source type**: blog, podcast transcript, conference talk, newsletter, video script, internal doc
- **Channels to produce for**: pick from list (default: all)
- **Author voice**: founder, CMO, company (default: company)

## Channels this skill produces

| Output | Format | Length | Skill it calls |
|---|---|---|---|
| LinkedIn post | text | 80-220 words | linkedin-post |
| LinkedIn carousel outline | slide-by-slide | 6-10 slides | inline |
| Twitter/X thread | numbered tweets | 7-12 tweets | inline |
| Substack note | text | 3-5 sentences | inline |
| Email teaser | subject + body | 80-150 words | content-writer |
| Reddit version (relevant subs) | text + subreddit suggestions | 200-400 words | inline |
| Quote graphic suggestions | pull quotes | 3-5 quotes | inline |
| YouTube short script | spoken | 45-60 seconds | inline |
| SEO snippet variant | optimized intro | 150 words | inline |

## Process

1. **Load source.** If it's a file, read it. If it's a URL, use WebFetch. If pasted, use the chat content. Confirm with the user: "I read X. Source has N words and covers <main themes>. Proceed?"

2. **Extract the spine.** Identify:
   - **The one sentence** (the thesis or core insight)
   - **3-5 supporting points** (the substructure)
   - **The killer line** (the most quotable sentence)
   - **The data points** (numbers, examples)
   - **The contrarian angle** (what the source disagrees with)

   Show this to the user before producing assets. Get confirmation.

3. **Produce each channel asset.** For each one, follow channel-specific best practices below. Each must be:
   - **Native to the channel** (not a copy-paste with different word count)
   - **Stand-alone valuable** (works without the source)
   - **Linked back to the source** if appropriate (CTA at the end)

4. **Save** all outputs as separate files in `output/repurposed/<DD-MM-YYYY>-<source-slug>/`:
   ```
   output/repurposed/25-04-2026-thoughts-on-ai-pm/
   ├── linkedin-post.md
   ├── linkedin-carousel.md
   ├── twitter-thread.md
   ├── substack-note.md
   ├── email-teaser.md
   ├── reddit-post.md
   ├── quote-graphics.md
   ├── youtube-short.md
   └── README.md (index of what's in here, with notes)
   ```

5. **Generate the README.md** for the folder summarizing:
   - Source link or path
   - Spine (one sentence + 3 points)
   - Where each asset is meant to be published
   - Suggested publishing sequence and cadence

## Channel-specific rules

### LinkedIn carousel
- Slide 1: hook (8-12 words, big text)
- Slide 2: setup (the problem or context)
- Slides 3-7: one point per slide
- Last slide: CTA + tag line
- Output: structured outline ready for design ("Slide 3: Title 'X', body bullets, visual: graph showing Y")

### Twitter/X thread
- Tweet 1: hook only, no thread emoji
- Tweets 2-N: one idea per tweet, max 280 chars each
- No "1/", use natural numbering only if it adds clarity
- Last tweet: payoff and CTA (link, follow, save)

### Substack note
- 3-5 sentences max
- One contrarian or counterintuitive claim
- Link to full piece at the end

### Reddit
- Suggest 2-3 specific subreddits
- Adapt voice: less promotional, more conversational
- Lead with value, not the link
- Include "(I wrote about this in more depth here)" only at the end
- Flag any community rules to check (no self-promo, etc.)

### YouTube short
- 45-60 seconds spoken (~120-150 words)
- Hook in 3 seconds
- One insight, one example, one takeaway
- Visual cue suggestions in [brackets]

### Quote graphics
- 3-5 pull quotes
- Each under 140 chars
- Each works without context
- Specify which is best for which platform (LinkedIn carousel cover vs Instagram quote vs Twitter image)

## Rules

- Never paraphrase the source word for word. Each asset must add framing or context appropriate to its channel.
- Never produce identical content with different word counts. A 220-word LinkedIn post is structurally different from a 220-word Substack note.
- The source's killer line should appear in at least one derivative, often the LinkedIn post or a quote graphic.
- If the source has no killer line, flag it: "I cannot find a quotable line. Want me to write one or skip the quote graphics?"
