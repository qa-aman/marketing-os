# Lesson 3 - Routing rules: how the lead decides who does what

> Module 5: Your AI Marketing Team - power track - ~20 min - Builds on Lesson 2

---

## What you'll build

A routing block inside your project's `CLAUDE.md` file. It maps task types to the right agent or skill, defines when to use an agent versus a single skill directly, and sets the dependency order for multi-step jobs. By the end, one prompt like "launch a spring campaign for Verdal" will trigger a sequenced run across multiple agents with no manual handoff.

---

## Why it matters

Without routing rules, the team lead (main Claude) guesses. It might call the content agent when you need research first. It might run tasks in parallel when one depends on another's output. Routing rules eliminate the guesswork. They are explicit logic, written once, that make the whole team feel automatic.

Think of it like an org chart with a process layer baked in: not just who does what, but in which order, and under which conditions.

---

## Step by step

**1. Understand what goes in CLAUDE.md**

`CLAUDE.md` is the project memory file that Claude Code reads at the start of every session. It sets workspace-wide context for all agents. This is where you add routing rules - explicit instructions for when the lead should call which agent or skill.

Official reference: https://code.claude.com/docs/en/memory

**2. Open your CLAUDE.md**

In your `verdal-marketing/` folder, open `CLAUDE.md`. You should already have brand context and folder structure here from Lesson 2. You are adding a new section at the bottom: `## Agent routing rules`.

**3. Map your task types**

Before writing the routing block, list the task types you actually run. For Verdal, that looks like:

- Competitor or audience research
- Campaign brief creation
- Instagram carousel design
- Long-form blog or SEO article
- Performance data review
- Full multi-step campaign launch

Match each task type to the agent or skill that owns it. If a task is simple and contained (single output, no synthesis), a skill alone is enough. If it requires context from other tasks, external tools, or multi-step synthesis, it needs a dedicated agent.

**4. Write the routing block**

Paste the routing block (see "The prompt" section below) into `CLAUDE.md`. Adjust agent names to match what you created in Lesson 2.

**5. Define dependency order for multi-step tasks**

For any task that chains multiple agents, state the sequence explicitly. "Campaign launch" for Verdal always runs: research first, then brief, then creative. If you leave this implicit, the lead may run them out of order or in parallel when it should not.

**6. Save and test**

Save `CLAUDE.md`. Open a new Claude Code session (so it reads the updated file) and run: "Launch a summer campaign for Verdal's plant misting range." Watch the lead follow the routing sequence.

---

## The prompt

Paste this block at the bottom of your `verdal-marketing/CLAUDE.md`. Replace agent names if yours differ.

```
## Agent routing rules

These rules tell you (main Claude) when to call an agent versus a skill directly.
Always follow this table before deciding how to handle a request.

### Task-to-agent map

| Task type | Route to | Notes |
|---|---|---|
| Competitor research, audience trends, market sizing | @data-analyst agent | Uses web connector. Run this first when brief is missing. |
| Campaign brief creation | @campaign-strategist agent | Requires research output as input. Do not run without it. |
| Instagram carousel (copy + image structure) | @creative-designer agent using carousel skill | Pass brand context from context/brand-voice.md |
| Blog post or SEO article | @content-creator agent | Attach keyword brief if available from @data-analyst |
| Performance data review, GA4 dashboard | @data-analyst agent | Call analytics skill. Output to projects/reports/ |
| Landing page copy | content-creator skill directly | No agent needed for single-page copy. |
| Single social caption (no image) | social-copy skill directly | No agent needed. |
| Press release or announcement | content-creator skill directly | Load context/brand-voice.md first. |

### When to use an agent vs. a skill directly

- Use an **agent** when the task requires external tools (web, GA4), multi-step synthesis, or
  output from another agent as input.
- Use a **skill directly** when the task is single-output, self-contained, and needs no external
  data beyond what is in the context/ folder.

### Dependency order for multi-step campaigns

For any request that includes the words "campaign", "launch", or "full package", always sequence:
1. @data-analyst - market and competitor research
2. @campaign-strategist - brief using research output
3. @creative-designer - carousel or visual assets using brief
4. @content-creator - blog or landing page copy using brief

Do not run steps 2, 3, or 4 in parallel. Each depends on the prior step's output.
Save all deliverables to projects/<campaign-name>/ before summarizing.

### Verdal-specific triggers

- "carousel" or "Instagram" -> @creative-designer agent, carousel skill
- "competitor" or "research" -> @data-analyst agent, web connector
- "brief" or "strategy" -> @campaign-strategist agent (run research first if brief is missing)
- "blog" or "article" or "SEO" -> @content-creator agent
- "report" or "dashboard" or "GA4" -> @data-analyst agent, analytics skill
- "launch" or "full campaign" -> run full dependency sequence above
```

---

## What good looks like

- One prompt triggers the right sequence with no follow-up questions from Claude.
- Research runs before the brief. The brief runs before creative. No step starts without its dependency.
- Simple tasks (single caption, one landing page section) go straight to a skill, not through an agent, which keeps the context window clean.
- All deliverables land in `projects/<campaign-name>/` with consistent naming.
- If a dependency is missing (no research output found), the lead says so and asks before proceeding, rather than inventing context.

---

## Your turn

1. Open `verdal-marketing/CLAUDE.md` and paste the routing block above, adjusted for your agent names.
2. Add at least one Verdal-specific trigger phrase that reflects a task type you run regularly.
3. Start a new session and run: "Research top competitor positioning for indoor plant care brands and draft a campaign brief for Verdal's new misting range."
4. Watch the sequence. Did @data-analyst run first? Did the brief reference the research output?
5. If the order was wrong, check whether your dependency rules are specific enough. Vague triggers produce vague routing.

---

## Common mistakes

**Writing triggers that are too broad.** "Write content" could mean a caption, a blog, or a campaign brief. The routing table will not resolve this. Use task-specific language: "blog post", "Instagram carousel", "campaign brief".

**Skipping the dependency order.** If you do not state that research must precede the brief, Claude may run both in parallel. Explicit sequence statements are not optional for multi-step tasks.

**Routing everything through agents.** Agents cost more context and take longer. A single social caption does not need a dedicated agent. Use skill-direct routing for contained, single-output tasks.

**Forgetting to start a new session after editing.** Claude Code reads `CLAUDE.md` at session start. Edits made mid-session will not take effect until you open a fresh one.

**Mixing context into routing rules.** Routing rules describe who does what and when. Brand voice, persona details, and product context belong in `context/`. Keep the two separate.

---

## What you just learned

Routing rules in `CLAUDE.md` are what turn a collection of agents into a team that operates predictably - mapping task types to agents or skills, setting dependency order, and eliminating guesswork from every run.

Next: [Lesson 4 - Run a full campaign](04-run-a-campaign.md)
