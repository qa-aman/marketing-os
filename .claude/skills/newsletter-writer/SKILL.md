---
name: newsletter-writer
description: Write recurring newsletter issues with a consistent format and POV. Different from one-off emails (use /content-writer or /email-nurture). Use when the user asks for a newsletter, weekly/monthly newsletter, "write this week's issue", recurring email, Substack issue, internal newsletter, or any periodic publication with subscribers. Reads brand voice and content library from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/content-library/
  - knowledge/learnings.md
writes:
  - output/newsletter/
---

# newsletter-writer

Writes recurring newsletter issues. Optimizes for consistent format, distinctive POV, and subscriber retention. Treats the newsletter as an asset that compounds, not a content output.

## When to use

- "Write this week's newsletter"
- "Draft the next Substack issue"
- "Build the customer newsletter"
- "Write an internal newsletter"
- "Create a recurring industry roundup"

## Newsletter types this skill handles

| Type | Audience | Cadence | Format |
|---|---|---|---|
| **Industry POV** (Substack-style) | External, subscribers | Weekly or biweekly | Long-form essay + curated links |
| **Product newsletter** | Customers | Monthly | What's new + how to use it + customer story |
| **Curated roundup** | External subscribers | Weekly | Annotated links, short |
| **Internal newsletter** | Employees | Weekly or monthly | Wins, updates, asks |
| **Sales/partner newsletter** | Channel partners or sales reps | Monthly | Enablement, wins, comp updates |
| **Investor update** | Investors and board | Monthly or quarterly | Metrics, narrative, asks |

## Inputs needed

- **Newsletter type** (from table)
- **Issue topic or theme** (or "you pick from recent material")
- **Source material**: drafts, links, data points, internal updates
- **Cadence and format consistency**: if prior issues exist, match them

## Process

1. **Load context.** Read brand voice and persona. Look in `knowledge/content-library/newsletter/` (if exists) for prior issues to match format and voice.

2. **Establish the newsletter's spine** (do this once, on the first issue, then reuse):

   Every recurring newsletter needs a consistent structure. Lock these on issue 1:
   - **Section 1**: the hook (a personal opener, observation, or one-line setup)
   - **Section 2**: the main piece (the substance, varies by issue)
   - **Section 3**: a consistent recurring segment (e.g. "What I'm watching", "3 things I read", "Customer of the week")
   - **Section 4**: CTA or close (consistent sign-off)

   If prior issues exist, lift the spine from them. Do not invent a new format every week. Subscribers want consistency.

3. **Write the issue**.

### Industry POV newsletter (Substack-style)

```
Subject: <50-60 char, specific>
Preview text: <30-90 char, complementary>

# <Issue title>

<Hook: 80-150 words. Personal observation, news reaction, or contrarian claim. Earns the read.>

## <Main piece title>
<800-1500 words. One core argument. Specific examples. POV is required.>

## <Recurring segment>
<200-400 words. Three items, links, or quick takes. Consistent across issues.>

## What I'm reading / watching / building
<3-5 annotated links. Each: title, URL, 1-line take.>

---

<Sign-off line, consistent across issues>
<Author name>

P.S. <Optional. Often a soft ask: "Reply with your take" or "Forward to a friend who'd like this">
```

### Product newsletter

```
Subject: <Specific feature or outcome>
Preview text: <Complementary>

## What's new
<3-5 features released. Each: name, what it does, who it's for, link to docs/changelog>

## How to use it
<One feature deep-dive. Step-by-step or 3-tip format. 200-300 words.>

## Customer of the month
<One customer story, 100-150 words. Outcome + quote + link to full case study.>

## What's coming
<2-3 things on the roadmap. Be careful: only commit to what you'll actually ship.>

## CTA
<One call to action: book demo, attend webinar, try new feature>
```

### Curated roundup

```
Subject: <number> <noun> on <topic>
Preview text: <Tease the most interesting one>

## <Issue title>
<Hook: 50-100 words.>

## <Section header>
- **<Title 1>**: <2-line annotation, why this matters> [Link]
- **<Title 2>**: <annotation> [Link]
- ... 5-10 items total

## <Optional second section>
<Same format, different category>

## Closing
<Sign-off + ask for forwards/replies>
```

### Internal newsletter

```
Subject: <Theme of the week>

## This week's wins
- <3-5 wins, with credit>

## What's shipping
- <Roadmap items moving this week>

## What we learned
<1-2 short retros from the team>

## Asks
- <Where the team needs help, hires, intros>

## Heads up
<Process changes, all-hands logistics, etc.>
```

4. **Voice rules**:
   - Match `knowledge/brand/voice.md`
   - First-person where appropriate (POV newsletters always)
   - Conversational, like writing to one engaged subscriber
   - Specific names, numbers, examples
   - No "Hope this finds you well"
   - Match the rhythm of prior issues if they exist (sentence length, paragraph density)

5. **Subject line rules**:
   - Distinctive enough to spot in inbox at a glance
   - 30-50 chars
   - Specific over clever
   - No clickbait

6. **Self-check**:
   - Issue follows the established spine (sections, length, voice)
   - One main argument or theme. Not a stream of consciousness.
   - Specific examples, not abstractions
   - At least one place where the reader thinks "huh, didn't know that"
   - Length matches the type's norm (POV: 1500-2500w, product: 600-900w, roundup: 400-700w, internal: 300-500w)
   - One CTA

7. **Save** to `output/newsletter/<DD-MM-YYYY>-<issue-slug>.md` with frontmatter:
   ```yaml
   ---
   format: newsletter
   type: <type>
   issue-number: <N>
   issue-title: <title>
   theme: <theme>
   words: <count>
   created: DD-MM-YYYY
   ---
   ```

8. **Offer derivative content**:
   - LinkedIn post pulling the strongest insight (use `/linkedin-post`)
   - Substack note teasing the issue
   - 3 quote graphics

## Rules

- Consistency beats novelty. Subscribers stay because they know what they're getting. Don't reinvent the format every week.
- Every issue needs a POV in the main piece. A roundup of links without commentary is replaceable.
- Track open rate and CTR per issue if data is available. Update `knowledge/learnings.md` with what works.
- Never publish without rereading. Fresh-eyes pass catches 80% of voice misses.
- Personal > corporate. Even brand newsletters perform better with a name and face attached.
