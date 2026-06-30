# Lesson 3 - The three skill types, and skill chaining

> Module 3: Claude Skills Deep Dive · power track · ~25 min · Builds on Lesson 2

---

## What you'll build

A two-skill chain for Verdal's seasonal campaign work. First a brand voice skill, then a campaign planning skill that calls the brand voice skill automatically. By the end, one prompt generates a full campaign brief that is already written in Verdal's voice, with no manual copy-paste between tools.

---

## Why it matters

Most Claude users write long, repeat prompts every time they start a new task. The brand brief, the tone rules, the ICP details, all typed again from memory. Skills fix that by storing the instruction once and calling it whenever it's needed.

Chaining takes this further. Instead of running skill A, copying its output, then pasting into skill B, you wire B to call A automatically. Claude handles the handoff. You get a compounding system where complex work happens from a single prompt.

---

## Step by step

### The skill taxonomy

Every marketing skill fits one of three types. Knowing the type tells you what the skill file should contain and when to call it.

**Brand skills** carry identity rules. They describe voice, tone, visual identity, and design guidelines. They do not generate campaign content on their own. They exist to be called by other skills so every output stays on-brand.

Examples: `verdal-brand-voice`, `verdal-design-system`

**Function skills** do the actual marketing work. They produce a deliverable: a campaign brief, a carousel, a landing page, a press release. A function skill almost always calls a brand skill so the output matches the brand.

Examples: `campaign-planner`, `social-carousel`, `email-nurture`

**Specialty skills** handle domain-specific rules that sit outside branding and outside any single deliverable type. Seasonal constraints, channel-specific rules, compliance requirements, or audience segment logic.

Examples: `verdal-seasonal-retail`, `b2b-linkedin-rules`

---

### The skills/ folder layout

Inside your working folder `verdal-marketing/`, create a `skills/` subfolder. Each skill lives in its own subfolder with a single file called `SKILL.md`.

```
verdal-marketing/
  context/
    brand.md
    icp.md
    strategy.md
  skills/
    verdal-brand-voice/
      SKILL.md
    verdal-design/
      SKILL.md
    campaign-planner/
      SKILL.md
  templates/
  projects/
  CLAUDE.md
```

The `SKILL.md` file contains:
- A short frontmatter block (name, version, type, reads)
- The actual instructions Claude follows when the skill is called

Claude does not discover skills automatically. You tell it about them through `CLAUDE.md`.

---

### CLAUDE.md as the navigation file

`CLAUDE.md` sits at the root of `verdal-marketing/`. It tells Claude two things: how the folder is structured, and when to call which skill.

Without `CLAUDE.md`, Claude has no map. It might generate content without reading context files, or invent brand rules it cannot know. With `CLAUDE.md`, every skill call starts from the same foundation.

A minimal `CLAUDE.md` for Verdal looks like this:

```
# Verdal Marketing OS

## Folder structure
- context/ - brand context, ICP, strategy. Read these before generating any output.
- skills/ - reusable instruction sets. Call by name when the task matches.
- templates/ - design templates referenced by skills.
- projects/ - live campaign files and briefs.

## When to call which skill
- Any content task (copy, email, social): call verdal-brand-voice first.
- Campaign planning: call campaign-planner. It will call verdal-brand-voice internally.
- Visual output or slide decks: call verdal-design.

## Rules
- Never invent brand context. Read context/ first.
- Write all output to projects/ unless told otherwise.
- Date format: DD-MM-YYYY.
```

Keep it short. `CLAUDE.md` is a map, not a rulebook.

---

### How chaining works

Skill chaining means one skill explicitly calls another skill inside its own instructions. Claude reads the calling skill's `SKILL.md`, follows the steps, and when it hits the line that says "call verdal-brand-voice," it reads and applies that skill before continuing.

No plugin, no tool. It is plain English in the skill file: "Before writing any copy, call the verdal-brand-voice skill and apply its rules to all output."

This matters because:
- You stop re-writing tone rules in every prompt
- Brand consistency becomes structural, not aspirational
- When you update the brand voice skill, every function skill picks up the change automatically

---

### Building the Verdal chain

**Step 1: Create the brand voice skill**

Inside `verdal-marketing/skills/verdal-brand-voice/`, create `SKILL.md`:

```
---
name: verdal-brand-voice
version: 1.0
type: brand
reads: context/brand.md
---

# Verdal brand voice skill

Read context/brand.md before applying these rules.

Voice: warm, expert, plain. Write like a knowledgeable friend who loves plants,
not a retailer trying to upsell. Use short sentences. Avoid Latin plant names
unless the audience segment is expert-level (check context/icp.md).

Tone modifiers by channel:
- Email: personal, slightly conversational
- Social: concise, sensory, one clear idea per post
- Long-form: patient, layered, practical tips first then product mention

Never use: "unlock your plant's potential", "elevate", "curated", "bespoke".

Apply these rules to every piece of copy produced in the same session.
```

**Step 2: Create the campaign planner skill with a chain call**

Inside `verdal-marketing/skills/campaign-planner/`, create `SKILL.md`:

```
---
name: campaign-planner
version: 1.0
type: function
reads: context/brand.md, context/icp.md, context/strategy.md
calls: verdal-brand-voice
---

# Campaign planner skill

## Step 1 - Load context
Read context/brand.md, context/icp.md, and context/strategy.md.

## Step 2 - Apply brand voice
Call the verdal-brand-voice skill. All copy in this brief must follow those rules.

## Step 3 - Build the campaign brief
Produce a campaign brief with these sections:

1. Campaign goal (one sentence, specific metric)
2. Audience segment (pull from icp.md, match to the campaign's stated goal)
3. Key message (one line, in Verdal's voice)
4. Channel plan (which channels, what content type per channel, cadence)
5. Timeline (DD-MM-YYYY start and end, key milestones)
6. Budget outline (rough allocation by channel as percentages)
7. Success metrics (2-3 specific KPIs)

## Step 4 - Save output
Write the brief to projects/<campaign-slug>-brief-<DD-MM-YYYY>.md.
```

**Step 3: Update CLAUDE.md**

Add one line under the skill routing section:

```
- Campaign brief: call campaign-planner. It loads context and brand voice automatically.
```

---

## The prompt

Once both skills are in place, this single prompt runs the full chain:

```
Run the campaign-planner skill. Campaign: Verdal spring repotting season.
Goal: drive 20% uplift in repotting mix sales through March and April.
Primary channel: email + Instagram. Budget: roughly £8,000.
```

Claude will:
1. Read `CLAUDE.md` to understand the project structure
2. Open `campaign-planner/SKILL.md`
3. Read the three context files
4. Call `verdal-brand-voice` and apply its rules
5. Write the campaign brief to `projects/`

---

## What good looks like

The output file in `projects/` has:
- A goal with a number ("20% uplift in repotting mix SKUs, March-April 2026")
- An audience segment pulled from the ICP file, not invented
- Copy written in Verdal's voice (warm, plain, no retail cliches)
- A channel plan that distinguishes email content from Instagram content
- Dates in DD-MM-YYYY format
- A clear filename like `spring-repotting-brief-30-06-2026.md`

If Claude wrote generic plant brand copy, it did not call the brand voice skill. Check that `CLAUDE.md` has the routing instruction and the skill file has the `calls:` line in frontmatter.

---

## Your turn

1. Create the `verdal-brand-voice` skill file using the template above. Adjust the "never use" list to match your actual brand.
2. Create the `campaign-planner` skill file. Add one more section to the brief structure that matters for your work (competitor context, creative direction, whatever is missing).
3. Update `CLAUDE.md` with the skill routing instructions.
4. Run the prompt with a real campaign you are planning. Check that the output reads in your brand's voice without any manual edits.

---

## Common mistakes

**Skills with no `reads:` frontmatter.** The skill runs but invents context. Every skill that touches brand or audience must read from `context/`.

**CLAUDE.md that is too long.** If `CLAUDE.md` runs past a single screen, Claude starts treating it as low-priority background text. Keep it under 30 lines. Details belong in individual skill files.

**Forgetting the `calls:` instruction inside the function skill.** Adding `calls: verdal-brand-voice` in the frontmatter is helpful documentation, but the actual trigger is the plain English instruction in the skill body: "Call the verdal-brand-voice skill." Both matter.

**Updating the brand voice but not testing downstream skills.** When you change `verdal-brand-voice`, run the campaign planner once to confirm the new rules carry through. A five-minute test catches drift before it gets into live copy.

**One giant skill file.** If a skill file runs past 200 lines, split it. Brand voice stays in the brand skill. Structural rules stay in the function skill. Domain constraints go in a specialty skill. Smaller files are easier to update and debug.

---

## What you just learned

Three skill types handle all marketing work. Brand skills hold identity rules, function skills produce deliverables, and specialty skills carry domain constraints. Chaining connects them so complex tasks run from one prompt, with `CLAUDE.md` as the map that makes it all navigable.

Next: [Lesson 4 - A design-system skill](04-design-system-skill.md)
