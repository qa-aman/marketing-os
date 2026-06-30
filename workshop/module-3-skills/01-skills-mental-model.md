# Lesson 1 - The mental model: skills vs projects vs MCP

> Module 3: Claude Skills Deep Dive · power track · ~15 min · Builds on Module 2

---

## What you'll build

A clear mental model of how the Claude ecosystem fits together, plus a one-page cheat sheet you save to your `verdal-marketing/context/` folder. By the end of this lesson you'll know exactly where a skill lives, what it contains, how it differs from a project and an MCP connector, and when building one is worth the effort.

---

## Why it matters

Most people use Claude as a chat tool. They write long instructions in every conversation, copy-paste the same brief twice a week, and wonder why the output quality varies. Skills are what fix that.

A skill packages your workflow, your format standards, and your brand rules into something Claude can pick up and use in any chat, without you re-explaining yourself. For Verdal, that means your email nurture sequence, your product care-guide format, and your Instagram caption style can each live as a skill, ready whenever you need them.

The problem is that most explanations of skills confuse them with projects and MCP connectors. This lesson draws clean lines between all three.

---

## Step by step

### The four-part Claude ecosystem

Think of Claude in four layers:

**The brain.** Claude the model. It reads, reasons, and writes. It does not remember anything between conversations unless you give it context.

**Instructions (skills).** Packaged workflow instructions that tell Claude how to do a specific type of task, what format to follow, what voice to use, and which tools to call. A skill lives at the account level, not inside any single project. It travels with you.

**Tools (MCP connectors).** Integrations that let Claude reach outside the conversation and take action: read from a Notion database, pull keyword data from Ahrefs, write a file to Google Drive. MCP stands for Model Context Protocol. Think of MCP as the hands; the skill tells those hands what to do and in what order.

**The workspace (projects).** A project is a context container: custom instructions, uploaded files, and MCP connections scoped to one working area. When you are inside your Verdal project, Claude has your brand voice and product catalog in context. When you close the project, that context is gone.

---

### What a skill actually is

A skill is a file, specifically a `SKILL.md` file, with two parts:

**Frontmatter (the header block).** Three fields matter most:

- `name:` - the short identifier, e.g. `verdal-care-guide`
- `description:` - the trigger. This is the most important field. Claude reads descriptions to decide whether to activate a skill for a given task. Write a sharp, task-specific description and Claude will find the right skill. Write a vague one and it will not.
- `reads:` - which knowledge files to load at runtime (optional but useful for a Marketing OS setup)

**Body.** The actual workflow instructions: what Claude should do step by step, what the output format looks like, what voice rules to follow, and which tools to call if any.

A set of these files, packaged correctly, is what gets installed as a skill. In Claude Code you work with the raw `SKILL.md`. In the Claude web app you install a zip file via Settings > Capabilities.

---

### The description is the trigger

This deserves its own paragraph because people get it wrong.

Claude does not activate a skill because you said its name. It activates a skill because the task context matches the skill's description. If your description says "use when creating care guides for indoor plants," Claude will activate it when someone asks about plant care content - and ignore it when you ask for an Instagram caption.

Write descriptions as task-context statements, not as names. "Verdal care guide writer" is a name. "Use when writing care guides, plant care instructions, or how-to content for Verdal's indoor plant range" is a trigger.

---

### Skills vs projects vs MCP: the clean comparison

| | Skill | Project | MCP connector |
|---|---|---|---|
| **What it is** | Packaged workflow instructions | Context container | External tool integration |
| **Where it lives** | Account level (available everywhere) | Inside that project only | Attached to a skill or project |
| **What it gives Claude** | How to do a task | Background context about a brand or initiative | Ability to read/write external data |
| **Persists across chats?** | Yes | Only while inside the project | Only when enabled |
| **Needs coding to set up?** | No | No | Sometimes (depends on the connector) |
| **Verdal example** | `verdal-care-guide` skill | Verdal brand project with voice, ICP, product catalog | Notion MCP to pull live plant inventory |

The key distinction: a project gives Claude what it needs to know; a skill gives Claude how to act; MCP gives Claude what it can reach.

You can combine all three. A Verdal project can have brand context loaded, a `verdal-care-guide` skill active, and a Notion MCP connector pulling live product data. That is the full stack.

---

### When to make a skill (and when not to bother)

Run this three-question test before building anything:

1. Do you repeat the same instructions across three or more chats?
2. Would you need to train a new team member to do this task correctly?
3. Does quality or format consistency matter every time?

If two or more answers are yes, build the skill. If only one is yes, a saved prompt or a project instruction block is probably enough.

For Verdal, strong skill candidates:
- Writing care guides (same format every time, brand voice required, repeated weekly)
- Drafting email nurture sequences (format rules, ICP context, consistent CTA structure)
- Creating Instagram captions (tone rules, hashtag guidelines, character limit)

Weak skill candidates:
- One-off research requests
- Tasks you only do once per campaign
- Tasks where the brief changes completely each time

One practical constraint: skills load context tokens every time they activate. If you install ten skills and they all trigger on every task, you are burning token budget on instructions Claude does not need. Install skills for your most repeated workflows. Leave the rest as saved prompts.

---

## The prompt

Open Claude Code in your `verdal-marketing/` project. Run this:

```
List all installed skills available in this workspace. For each one, tell me:
- The skill name
- What the description says (the trigger)
- One example of a task it would activate for
```

If no skills are installed yet, Claude will tell you. That is fine. The goal is to see how Claude reads and reports on skill descriptions, which is exactly the mechanism you are designing around.

---

## What good looks like

A clear response where Claude names each skill, quotes or paraphrases its description accurately, and gives a plausible example task. If a description is vague (e.g. "helps with content"), Claude's example task will be vague too. That is the signal: sharpen the description.

If you have no skills installed yet, Claude should say something like "No skills are currently active in this workspace" - clear, not an error.

---

## Your turn

1. Save the table from the "Skills vs projects vs MCP" section above as a plain text or markdown file at `verdal-marketing/context/skills-mental-model.md`. This is your cheat sheet.

2. Look at any saved prompt or project instruction you use regularly for Verdal. Ask yourself: does it pass the three-question test? If yes, it is a skill candidate for Module 3, Lesson 2.

---

## Common mistakes

**Writing the description as a name, not a trigger.** "Verdal email writer" will not reliably activate. "Use when drafting marketing emails, welcome sequences, or campaign newsletters for Verdal's plant care audience" will.

**Installing too many skills at once.** More is not better. Claude has to evaluate every installed skill's description for every task. A crowded skill list leads to wrong activations or missed activations. Start with two or three.

**Putting brand context inside the skill file.** Skills are reusable and brand-agnostic by design. Brand voice, ICP details, and product names live in your `context/` folder or project instructions. The skill reads those files at runtime. This keeps the skill portable across brands.

**Confusing a project with a skill.** A project is where you work. A skill is what you bring to the work. You can open a new chat with zero project context and still use a skill - that is the point.

---

## What you just learned

Skills are reusable instruction sets, triggered by their description, portable across any chat or project, and distinct from both the project workspace and MCP tool connectors.

Next: [Lesson 2 - Three ways to create a skill](02-three-ways-to-create-skills.md)
