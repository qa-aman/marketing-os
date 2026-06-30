# Lesson 4 - Run a full multi-agent campaign with a Notion task board

> Module 5: Your AI Marketing Team · power track · ~30 min · Builds on Lesson 3

---

## What you'll build

A working spring repotting campaign for Verdal, produced end-to-end by your five-agent team. You give the lead agent one campaign brief. It routes every task, the specialist agents execute, and each result lands on a shared Notion board. By the end, you have a full campaign package: market research, campaign strategy, three content pieces, ad creatives, and a landing page brief.

---

## Why it matters

Most marketers run AI as a solo tool. One prompt, one output, done. The problem is that complex campaigns need five or six separate workflows: research, positioning, copy, design direction, distribution. Doing those in a single conversation means context drift and mediocre output as the model loses the thread.

Multi-agent orchestration solves this by giving each task to a focused agent. The lead agent acts as your campaign director. It reads the brief, breaks it into specialist tasks, delegates, and assembles the results. You supervise through the Notion board without touching the terminal between steps.

This is how you go from "Claude helps me write things" to "Claude runs the campaign."

---

## Set up first

You need the Notion MCP connector active before running this lesson. Follow the steps in [../connectors-setup.md](../connectors-setup.md) to authenticate and verify the connection. Then create a Kanban board in Notion with four columns: `Pending`, `In Progress`, `Done`, and `Needs Review`. Name it **Verdal Campaign Board**.

Once connected, Claude can read tasks from the board, execute them, and update their status. You will not need to copy-paste outputs manually.

---

## Step by step

### 1. Confirm your agents are ready

Open Claude Code in your `verdal-marketing/` folder. Run `/agents` and check that you have at least these five agents set up from Lesson 3:

- **Lead agent** (campaign director, can call all other agents)
- **Market researcher** (ICP analysis, competitor scan, trend pull)
- **Campaign strategist** (positioning, messaging hierarchy, channel plan)
- **Content creator** (blog, email, social copy)
- **Creative designer** (visual direction, carousel briefs, ad specs)

If any are missing, go back to Lesson 3 and build them before continuing.

### 2. Add the campaign brief to your Notion board

Create a new card in the `Pending` column of your Verdal Campaign Board. Title it **Spring Repotting Season - Full Campaign**. Paste the campaign brief below into the card description:

> **Campaign:** Spring repotting season push for Verdal
> **Date range:** 01-03 to 31-05
> **Primary persona:** Plant-proud Priya (urban professional, collects 5+ plants, cares about doing things right)
> **Goal:** Drive 200 new email subscribers and 80 landing page conversions
> **Budget signal:** Mid-range; premium product, not mass market
> **Deliverables needed:** Market research summary, campaign strategy doc, one blog post, one email sequence (3 emails), Instagram carousel brief, one landing page brief
> **Voice:** Warm, expert, plain. Never preachy. Treat the reader as already capable.

Set the card priority to **High**.

### 3. Point the lead agent at the board

In Claude Code, @-tag the lead agent and paste this single prompt (the full prompt is in the next section). The lead agent will pull the pending card from Notion, parse the brief, build a task plan, and start routing.

### 4. Watch the board update

As each specialist agent completes a task, the lead agent marks that card `Done` in Notion and moves the next task to `In Progress`. You can follow progress in the Notion board without switching context. Interrupting is fine: if you see the campaign strategist heading in the wrong direction, add a comment to the active card and the lead agent will pick it up on its next check.

### 5. Review the outputs

When all cards move to `Done`, the lead agent posts a summary in the Claude Code chat with file paths for every deliverable. Files are saved under `verdal-marketing/projects/spring-repotting-2025/`. Open them, check them against the brief, and move anything that needs a revision to the `Needs Review` column.

---

## The prompt

Paste this exactly into Claude Code, with the lead agent @-tagged:

```
@lead-agent

Scan our Verdal Campaign Board in Notion. Find the card titled "Spring Repotting Season - Full Campaign" in the Pending column.

Read the brief on that card and run the full campaign end to end. Here is how I want you to route it:

1. @market-researcher - Run a spring repotting trend and competitor analysis for the Verdal ICP (Plant-proud Priya). Pull what The Sill, Bloomscape, and Leon and George are doing this season. Summarise positioning gaps we can own. Save to projects/spring-repotting-2025/01-research.md and mark the Notion task done.

2. @campaign-strategist - Read 01-research.md. Write a campaign strategy covering: core message, three supporting proof points, channel plan (Instagram, email, blog), and one campaign tagline. Save to projects/spring-repotting-2025/02-strategy.md and mark done.

3. @content-creator - Read 02-strategy.md and context/brand-voice.md. Write:
   - One 800-word blog post targeting "how to repot indoor plants" (include the Verdal angle naturally, no hard sell)
   - A 3-email welcome sequence for new subscribers acquired through the campaign (email 1: welcome + repotting guide tease, email 2: the guide + product mention, email 3: social proof + soft offer)
   Save to projects/spring-repotting-2025/03-content/ and mark done.

4. @creative-designer - Read 02-strategy.md and context/brand-visual.md. Write a creative brief for a 6-slide Instagram carousel (topic: the 5 signs your plant needs repotting). Include: slide-by-slide copy, visual direction per slide, colour and font notes, and one CTA slide. Save to projects/spring-repotting-2025/04-creative-brief.md and mark done.

5. After all four tasks complete, write a landing page brief for the repotting guide lead magnet. Cover: headline, subheadline, three benefit bullets, form fields, and hero image direction. Save to projects/spring-repotting-2025/05-landing-page-brief.md.

When everything is done, post a summary in this chat with the file path for each deliverable. Update the main campaign card in Notion to Done.

Follow the voice in context/brand-voice.md throughout. Do not invent ICP details not in context/icp/.
```

---

## What good looks like

After a clean run, you should have these files in `verdal-marketing/projects/spring-repotting-2025/`:

| File | What it contains |
|---|---|
| `01-research.md` | Competitor positioning map, 3 gaps Verdal can own, seasonal trend notes |
| `02-strategy.md` | Core message, 3 proof points, channel plan, one tagline |
| `03-content/blog-repotting.md` | 800-word blog post, warm expert voice, no hard sell |
| `03-content/email-sequence.md` | 3 emails, each under 250 words, with subject lines |
| `04-creative-brief.md` | 6-slide carousel brief with copy and visual direction per slide |
| `05-landing-page-brief.md` | Headline, bullets, form spec, hero image direction |

The Notion board should show all six task cards in `Done`. The campaign card should also be `Done`.

If any file is missing or a card is still `In Progress`, the lead agent either hit a context file gap or the Notion connector dropped. Check the Claude Code chat for error messages before re-running.

---

## Your turn

Adapt this for your own brand and season. Swap in your Notion board name and your campaign brief. The routing logic in the prompt is reusable: research first, strategy second, content and creative in parallel after strategy is locked, landing page last.

Three things to try once the Verdal run works:

1. **Add a fifth deliverable mid-run.** While agents are executing, add a new card to your Notion board (for example, a LinkedIn post series). Watch whether the lead agent picks it up or whether you need to add it to the prompt manually.

2. **Stress-test the voice.** Open `03-content/blog-repotting.md` and check whether it sounds like Verdal or like generic plant content. If it drifts, tighten `context/brand-voice.md` with one more concrete example and re-run just the content step.

3. **Split the content task.** The content creator is doing two things: blog and email. Split them into separate Notion cards and re-run to see if output quality improves when the task is narrower.

---

## Common mistakes

**Not reading context files before running.** The prompt tells each agent which context files to read. If those files do not exist or are thin, output quality drops sharply. Run `/onboard` first if your context folder is empty.

**Running all agents in parallel too early.** The routing order matters. The campaign strategist needs the research output. The content creator needs the strategy. If you trigger everything at once, later agents will hallucinate positioning instead of deriving it from the prior step.

**Ignoring the Notion board during the run.** The board is your control surface. If an agent marks something `Done` but the output looks off, move it back to `Needs Review` and add a comment. The lead agent checks comment fields on its next pass.

**Over-specifying in the campaign brief.** Give the strategist a direction and a gap to fill, not a pre-written message. If you hand the lead agent a fully formed strategy in the brief, the strategist becomes a formatter, not a thinker.

**Letting the lead agent skip saving files.** The prompt explicitly says "save to" for every step. Without that instruction, agents sometimes post output in chat only and file paths never make it to the Notion card. Always include the save path in each task instruction.

---

## What you just learned

A single orchestration prompt can run a full campaign end-to-end, routing each task to the right specialist agent, updating a Notion board as it goes, and assembling deliverables without you touching the terminal between steps.

Next: [Lesson 5 - Remote control](05-remote-control-mobile.md)
