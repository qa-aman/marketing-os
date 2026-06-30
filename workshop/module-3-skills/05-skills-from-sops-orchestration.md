# Lesson 5 - Skills from SOPs, then multi-skill orchestration

> Module 3: Claude Skills Deep Dive · power track · ~25 min · Builds on Lesson 4

## What you'll build

A `monthly-newsletter` skill built directly from Verdal's written SOP and two past newsletter examples. Then you'll run one prompt and watch Claude call three skills in sequence, newsletter plus carousel plus brand-voice check, without you specifying the split. At the end you'll see how parallel subagents work and get a preview of Agent Teams.

## Why it matters

Most marketers build one skill at a time and trigger each one manually. That works, but it misses the real leverage point: Claude can read a task, decide which skills apply, and coordinate them on its own. Once you wire up that pattern, a single prompt can deliver a newsletter draft, three carousel captions, and a brand-voice audit in one go.

The same principle applies to SOPs. If your team already has a documented process for something, you don't need to rewrite it as a skill from scratch. You feed the SOP to the Skill Creator and Claude extracts the logic for you.

## Step by step

### 1. Prepare your source material

You need two things before opening Claude Code: the SOP and at least one reference example.

For Verdal, create two files in `verdal-marketing/context/`:

- `newsletter-sop.md` - your written process (structure, word counts, tone notes, CTA rules)
- `newsletter-example-01.md` - a past newsletter that hit your quality bar

The more specific the SOP, the better. Vague SOPs produce vague skills. If your SOP says "write a warm intro," replace it with "open with a single seasonal observation in under 40 words, no product mention."

### 2. Confirm Skill Creator is installed

The Skill Creator is an official Anthropic tool but it is not bundled with Claude Code. You install it once. In Claude Code, open the MCP panel and add the Skill Creator server from the official repo. After install, restart Claude Code and verify the `/skill-creator` command appears in your slash command list.

If it does not appear, check that the MCP server started correctly under Settings > MCP Servers.

### 3. Build the newsletter skill from your SOP

Open Claude Code with `verdal-marketing/` as the project folder. Then run:

```
/skill-creator

I want to build a monthly-newsletter skill for Verdal.

Source material:
- SOP: context/newsletter-sop.md
- Reference example: context/newsletter-example-01.md
- Brand voice: context/brand-voice.md

The skill should:
- Read the SOP to understand structure and rules
- Read the reference example to pick up tone and formatting patterns
- Accept a single input: the month and a focal theme (e.g. "July - repotting season")
- Output a ready-to-send newsletter draft saved to projects/newsletter/

Name the skill: monthly-newsletter
```

Claude will read both source files, extract the structural logic from the SOP, and infer tone patterns from the example. It writes the skill file to `.claude/skills/monthly-newsletter/SKILL.md` and any reference files it needs alongside it.

After it finishes, open the skill file and read through the `reads:` frontmatter. Confirm it lists `brand-voice.md` and both source files. If something is missing, tell Claude to add it.

### 4. Test the skill in isolation

Before orchestrating, confirm the skill works on its own.

```
/monthly-newsletter

Month: July
Theme: repotting season - what to do when roots outgrow the pot
```

Review the output against your SOP checklist. Does the intro match the reference example's tone? Is the CTA in the right place? Fix anything by editing `SKILL.md` directly or by asking Claude to revise the skill with specific feedback.

Do not move to orchestration until this single-skill output meets your bar.

### 5. Set up the other skills

Orchestration needs at least two more skills in place. If you completed Lessons 2-4, you likely have `carousel-writer` and `brand-voice` skills already. If not, create stub versions now using the same Skill Creator process.

For `brand-voice`, the skill only needs to read `context/brand-voice.md` and flag any line in a draft that breaks Verdal's voice rules. It does not generate content.

### 6. Run multi-skill orchestration on one prompt

This is the core pattern. You give Claude one task. Claude reads it, decides which skills apply, and calls them in order.

```
Verdal July content package.

Deliverables:
1. Monthly newsletter draft - theme: repotting season
2. Three carousel captions based on the newsletter's three main tips
3. Brand-voice audit of both drafts with flagged lines and suggested fixes

Save everything to projects/july-content-package/.

Use the relevant skills. I don't need to see intermediate steps - just the final files.
```

Claude will:
- Identify that `monthly-newsletter`, `carousel-writer`, and `brand-voice` skills exist
- Call them in a logical order (newsletter first, carousel from newsletter content, then voice audit of both)
- Save outputs to the folder you named

You do not specify the sequence. Claude determines it from the task shape and the skill descriptions in each `SKILL.md`.

### 7. Parallel subagents for independent work

The newsletter-to-carousel sequence above is linear because each step depends on the previous one. But some tasks are genuinely independent. For those, Claude can spin up parallel subagents.

```
Run these three tasks in parallel and save all outputs to projects/july-review/:

1. Pull the top 5 Instagram posts from this month and summarize what made them perform (use context/july-posts.md)
2. Draft the August newsletter outline based on context/brand-calendar.md
3. Write three subject line variants for the July newsletter draft in projects/july-content-package/newsletter.md

Combine a short summary of all three outputs into projects/july-review/summary.md
```

Claude will assign each task to a separate subagent session, run them at the same time, collect the results, and write the summary. The three tasks do not depend on each other, so they can run simultaneously.

Practical note: parallel subagents use more tokens than sequential calls because each subagent loads context independently. Use them when the time saving matters and the tasks are genuinely separable.

### 8. Agent Teams - a preview

Agent Teams are a newer Claude Code feature you turn on under Settings > Beta Features > Agent Teams. They differ from subagents in one important way: agents share a task list and can review each other's output before the final answer comes back.

For example, a copywriter agent might draft the newsletter, then a brand-voice agent reviews it, then the copywriter revises based on that review. All without you intervening.

The trade-off is token cost. Agent Teams consume significantly more tokens than subagents because of the cross-review rounds. For most day-to-day marketing tasks, subagents are the right choice. Agent Teams are worth exploring for high-stakes deliverables where an automated review loop saves you a manual editing pass.

Module 5 covers Agent Teams in full, including how to set up review criteria, when the cost is justified, and how to cap token use with explicit team size limits.

## The prompt

The key prompt that triggers full orchestration - copy and adapt it:

```
[Your brand] [Month] content package.

Deliverables:
1. Monthly newsletter draft - theme: [theme]
2. Three carousel captions based on the newsletter's three main tips
3. Brand-voice audit of both drafts with flagged lines and suggested fixes

Save everything to projects/[month]-content-package/.

Use the relevant skills. I don't need to see intermediate steps - just the final files.
```

Replace the bracketed fields. The phrase "use the relevant skills" is the trigger. Claude reads it, scans your `.claude/skills/` directory, and picks the matching ones.

## What good looks like

After running the orchestration prompt, `projects/july-content-package/` should contain three files: `newsletter.md`, `carousel-captions.md`, and `brand-voice-audit.md`.

The newsletter matches the SOP structure and the tone of your reference example. The carousel captions pull directly from the newsletter's tips - they are not invented independently. The brand-voice audit lists specific lines with the rule they break and a rewrite suggestion.

If Claude invented content that was not in the newsletter, the `carousel-writer` skill description is probably too loose. Tighten it: "captions must be derived from the attached newsletter draft, not invented independently."

## Your turn

1. Write a one-page SOP for a content type you produce regularly. It does not need to be polished, just specific.
2. Find one past example of that content type that met your quality bar.
3. Use `/skill-creator` to build the skill.
4. Test it alone, then combine it with one other skill (even a simple brand-voice checker) in a single orchestration prompt.

Do not try to build five skills at once. Build one, test it, then add the next.

## Common mistakes

**SOP is too vague.** "Write in Verdal's warm tone" is not actionable. The skill will produce generic output. Rewrite vague rules as measurable ones before feeding them to Skill Creator.

**Skipping the isolation test.** If a skill produces bad output on its own, orchestration will not fix it. It will just move bad output into the next step faster. Test each skill alone first.

**Over-specifying the sequence in the orchestration prompt.** If you write "first run the newsletter skill, then the carousel skill, then the brand-voice skill," Claude follows your instructions literally. That works, but you lose the benefit of Claude reasoning about the task structure itself. State the deliverables and let Claude determine the order.

**Running parallel subagents on dependent tasks.** If task B needs task A's output, they cannot run in parallel. Claude will either wait anyway or produce incorrect output. Write tasks as parallel only when they are truly independent.

**Ignoring the token cost of Agent Teams.** Agent Teams with three agents and two review rounds can use 5-10x the tokens of a simple subagent run. Check your usage dashboard after the first test run before using them at scale.

## What you just learned

You can turn any documented process into a Claude skill, then combine skills into workflows that run from a single prompt.

Next: [Lesson 6 - Package a plugin](06-package-a-plugin.md)
