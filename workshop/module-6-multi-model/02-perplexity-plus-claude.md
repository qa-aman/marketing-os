# Lesson 2 - Perplexity plus Claude: research to a polished artifact

> Module 6: Multi-Model Workflows · no-code track · ~20 min · Builds on Lesson 1

---

## What you'll build

A competitor-positioning artifact for Verdal: a structured visual output showing how Verdal sits relative to The Sill, Bloomscape, and Leon and George. You will gather the raw market and competitor data in Perplexity, then hand it to Claude to produce an interactive HTML artifact you can share with a stakeholder in one click.

---

## Why it matters

Most marketers use Claude like a smarter search engine. They paste a question in, get an answer out, and accept that the answer might be six months stale. Perplexity fixes the data problem. It searches the live web, cites its sources, and exports them cleanly. Claude fixes the output problem. It takes that sourced research and turns it into something worth sharing.

Neither tool alone does both jobs well. Perplexity's Claude integration uses a smaller context window tuned for retrieval, not structured output. Claude's training data has a cutoff and no citations. Together, the gap closes.

This is also different from the AI-search spot-check you did in Module 1. That was a quick "does anyone online see me?" check. This is structured deep research: you set a scope, Perplexity works through it systematically, and you export sources you can verify and reuse.

---

## Set up first

You need a Perplexity account (free works for standard searches; Pro unlocks Deep Research and longer outputs) and a claude.ai account with access to Projects.

Full setup steps for both tools are in [`../connectors-setup.md`](../connectors-setup.md).

---

## Step by step

### 1. Run the Perplexity research

Open [perplexity.ai](https://perplexity.ai) and start a new search.

**Choose your focus mode.** The focus selector sits above the search bar.

- **Pro Search** - general web, good for company-level facts (funding, positioning, pricing pages)
- **Deep Research** - Perplexity runs multiple search passes and synthesizes a longer report; use this for market overviews
- **Academic** - peer-reviewed sources; useful if you are writing about health or consumer psychology claims
- **Social** - Reddit, Quora, YouTube, LinkedIn; useful for real-customer language and unfiltered opinions

For this exercise, run two searches:

**Search 1 - market overview (Deep Research mode):**

```
What is the current size and growth outlook of the premium indoor houseplant care market in the US? Include key consumer trends, main customer segments, and any notable recent market entrants. Cite your sources.
```

**Search 2 - competitor snapshot (Pro Search mode):**

```
Compare The Sill, Bloomscape, and Leon and George on: target customer, product range, pricing tier, brand positioning, and any recent marketing campaigns or press coverage. Cite your sources.
```

Wait for both to complete. Perplexity shows its sources in a panel on the right.

### 2. Export your sources

For each search result, click the sources panel and open the links you trust. For each page you want to keep, use your browser's print function and save as PDF. Aim for 3-5 source PDFs total, not every citation.

If Perplexity offers a "Download" or "Export" option on your result, use that too - it captures the synthesized text with source attributions in one file.

### 3. Set up a Claude Project

Go to [claude.ai](https://claude.ai), open Projects, and create a new project. Name it something like "Verdal competitive research."

In the project's **Custom instructions** field, paste the following:

```
You are a marketing strategist for Verdal, a premium indoor plant care brand. Voice: warm, expert, plain - no jargon. Competitors are The Sill, Bloomscape, and Leon and George.

When I type "artifact", generate an interactive HTML artifact. Default layout: clean white background, Verdal brand color #2D5016 (dark green) for headers and accents, sans-serif font, responsive grid. Include a source attribution footer.

When I type "thinking on", switch to extended thinking mode for the next task only.
```

### 4. Upload your research files

Inside the project (not in a chat), upload your exported PDFs using the **Add to project** button. Files added at the project level are available in every chat you open inside it - you do not have to re-upload each session.

### 5. Trigger the artifact

Open a new chat inside the project. Type:

```
thinking on

artifact

Using the uploaded research files, build a competitor-positioning artifact for Verdal. Include:
1. A positioning map showing Verdal vs The Sill, Bloomscape, and Leon and George on two axes: price point (low to high) and brand warmth (transactional to relationship-led).
2. A summary table: competitor, target customer, core differentiator, weakest point, Verdal opportunity.
3. A "where Verdal wins" section: 3 concrete positioning angles backed by evidence from the sources.

Cite sources in a footer. Output as an interactive HTML artifact.
```

Claude will think through the strategic framing before generating. You will see a thinking indicator, then the artifact panel opens on the right.

### 6. Iterate inside the same chat

Do not start a new chat to make changes. Type corrections directly:

```
Move Bloomscape further right on the warmth axis - their Instagram presence is more relationship-led than the table suggests. Update the artifact in place.
```

Claude edits the artifact and the panel refreshes.

### 7. Share or export

When the artifact looks right, click **Share** in the artifact panel to get a public link. Or copy the HTML source to paste into a Notion page, a stakeholder email, or a Figma frame for further design work.

---

## The prompt

Full prompt for Step 5, ready to copy:

```
thinking on

artifact

Using the uploaded research files, build a competitor-positioning artifact for Verdal. Include:
1. A positioning map showing Verdal vs The Sill, Bloomscape, and Leon and George on two axes: price point (low to high) and brand warmth (transactional to relationship-led).
2. A summary table: competitor, target customer, core differentiator, weakest point, Verdal opportunity.
3. A "where Verdal wins" section: 3 concrete positioning angles backed by evidence from the sources.

Cite sources in a footer. Output as an interactive HTML artifact.
```

---

## What good looks like

The artifact opens in Claude's side panel as a rendered HTML page, not raw code. You can see the positioning map, the table, and the "where Verdal wins" section without doing anything extra.

The positioning map places all four brands in distinct quadrants. Verdal sits in the high-price, high-warmth quadrant - differentiated, not crowded.

The "where Verdal wins" section references specific evidence from the uploaded sources, not generic marketing claims. You can click through to the source PDFs to verify any claim before showing the artifact to a stakeholder.

The extended thinking step means Claude reasoned through the positioning before committing to it. The output should feel argued, not generated.

---

## Your turn

Repeat the workflow on a different research question for Verdal: audience persona language. Use Social focus mode in Perplexity to search for "indoor plant care enthusiast" across Reddit and Quora. Export the most useful threads as PDFs. Upload them to the same Claude Project. Then run:

```
artifact

Using the social research files, build a persona language guide for Verdal's primary customer. Include: top 5 phrases they use to describe plant problems, top 5 aspirations they express, vocabulary to use and vocabulary to avoid, and 3 example opening lines for a social post that would land with this audience.
```

Compare the language Claude surfaces to how Verdal currently writes on its product pages. The gap is your next content brief.

---

## Common mistakes

**Skipping source export.** If you only copy-paste Perplexity's summary text into Claude, you lose the citations. Upload the actual source PDFs so Claude can reference them and you can fact-check the artifact before sharing it.

**Starting a new chat for every change.** The Project remembers your uploads and custom instructions, but a new chat session starts fresh reasoning. Iterate in one chat so Claude can update the artifact with context from earlier in the conversation.

**Turning on extended thinking for everything.** Extended thinking is slower and uses more of your token budget. Reserve it for tasks that need strategic reasoning - positioning, audience analysis, pitch crafting. Turn it off for table formatting, copy edits, or adding a logo color.

**Uploading too many files.** More than 8-10 PDFs and the context fills up. Be selective: pick the 3-5 sources that contain the highest-quality evidence, not every link Perplexity surfaced.

**Treating the artifact as final without checking claims.** Claude synthesizes what is in the uploaded files. If a source had an error, the artifact inherits it. Read the "where Verdal wins" section against the source PDFs before you share with anyone.

---

## What you just learned

Perplexity handles live, sourced research; Claude handles synthesis, structure, and shareable output - and keeping the handoff clean between the two is the whole skill.

---

## You finished the whole course

Here is what you covered across six modules:

- **Module 1 - Cowork Foundations:** Set up your workspace, taught Claude your brand, built templates and projects, connected live data, built interactive artifacts, packaged a skill, ran browser-use research, and scheduled your first automated task.
- **Module 2 - The Content Engine:** Built a repeatable content system, from briefs to finished drafts to a publishing calendar.
- **Module 3 - Claude Skills Deep Dive:** Went inside the skill format, customized prompts, and created reusable workflows that non-technical teammates can run.
- **Module 4 - MCP and Connected Tools:** Connected Claude to your real tools, pulled live data from external sources, and made your workflows dynamic instead of static.
- **Module 5 - Your AI Marketing Team:** Built a multi-agent setup where specialized agents handle research, writing, and review in sequence.
- **Module 6 - Multi-Model Workflows:** Learned to route each job to the model that wins it, and combined Perplexity's live research with Claude's artifact generation into a single pipeline.

The real win is not any single lesson. It is combining these layers into a marketing system that runs on its own: a workspace that knows your brand, skills that handle routine output, connected tools that pull fresh data, and scheduled jobs that run while you sleep. That is the system this course was building toward.

The next step is to rebuild every module on your own brand. You have the Verdal examples as reference. Replace the brand context, swap in your competitors, and run each workflow again. By the time you finish, you will have a working marketing OS built around your actual business.

Return to the [course overview](../README.md) any time you need to re-run a module or share the course with a teammate.
