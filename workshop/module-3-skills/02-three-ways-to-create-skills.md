# Lesson 2 - Three ways to create a skill

> Module 3: Claude Skills Deep Dive · power track · ~25 min · Builds on Lesson 1

---

## What you'll build

Three working skills for the Verdal indoor plant care brand, each built a different way:

1. A branded deck skill extended from the official PowerPoint-building skill
2. A packaged lead-magnet skill pulled from the Module 1 workflow you already built
3. A fresh monthly newsletter skill wired to an MCP tool

---

## Why it matters

You can spend an afternoon building a great workflow inside a project and then lose it the moment you need it somewhere else. Skills fix that. They live at your account level, not inside one project, so the same workflow is available in any chat, any project, and across Claude Code and the web app.

The three methods here cover the real range: starting from what Anthropic already built, rescuing context you already wrote, and building something new that needs live data from a tool.

---

## Set up first

Before this lesson you need the skill-creator skill active in your Claude account. Go to Settings > Capabilities, find skill-creator in the official Anthropic skills list, and turn it on. This skill handles all the zip-file formatting so you do not have to.

If you have not set up MCP connections yet, see [../connectors-setup.md](../connectors-setup.md) before Method 3.

---

## Step by step

### Method 1 - Extend an official skill

The fastest way to build a branded skill is to inherit an Anthropic skill and layer your brand on top. You pick a parent skill, attach your brand assets, and ask Claude to generate a new skill that wraps both.

For Verdal, the goal is a deck skill that always applies the brand's deep green and cream palette, uses Forma DJR for headings, and opens every slide deck with a plant-care insight rather than a generic intro slide.

**How to do it:**

1. Open a new Claude chat.
2. Attach your Verdal brand kit (colors, fonts, any existing slide template as a .pptx or PDF).
3. Run the prompt below.
4. Download the zip file Claude returns.
5. Go to Settings > Capabilities > Add skill, upload the zip.
6. Test it in a new chat: upload a product brief and ask for a "Verdal branded presentation."

```
You have access to skill-creator.

Read the official PowerPoint-building skill. Then create a new skill called "verdal-deck" that extends it.

The new skill should:
- Inherit the full PowerPoint-building workflow from the parent skill
- Override the visual guidelines using the attached brand kit (extract the hex codes, fonts, and logo usage rules)
- Open every deck with a "plant insight" slide: one surprising fact about indoor plant care that connects to the presentation topic
- Include in the skill description: "trigger this skill when the user asks for a Verdal presentation, deck, slides, or branded document"
- Include two usage examples in the skill body

Use skill-creator to output a properly formatted zip file.
```

The description field is what Claude uses to decide when to trigger the skill. Make it specific. "Verdal presentation" is more reliable than "presentation."

---

### Method 2 - Package an existing workflow

If you did Module 1, you built a lead-magnet workflow inside a project: a prompt sequence, a tone guide, and an output template. Right now that workflow is locked inside that project. Packaging it as a skill makes it available everywhere.

The prompt below tells Claude to read your existing instructions and reformat them as a portable skill. No rewriting required.

**How to do it:**

1. Open the project where you built the Module 1 lead-magnet workflow.
2. Run the prompt below. Claude will read the project's custom instructions and your template file.
3. Download the zip. Upload it in Settings > Capabilities.
4. Test in any new chat (no project needed): type "create a Verdal lead magnet on repotting" and the skill should trigger.

```
You have access to skill-creator.

Read the custom instructions in this project and the file [paste your template filename here].

Create a new skill called "verdal-lead-magnet" that packages this workflow. The skill should:
- Include the full prompt sequence from the custom instructions
- Embed the output template so Claude uses it every time
- Set the trigger description to: "trigger this skill when the user asks for a Verdal lead magnet, content upgrade, free guide, or downloadable"
- Include a worked example showing input (topic + target reader) and expected output format

Use skill-creator to output a properly formatted zip file.
```

This method works for any workflow you have already refined: email sequences, campaign briefs, social calendar prompts. If it took you more than one session to get the output right, it is worth packaging.

---

### Method 3 - Build from scratch and combine with MCP

Some workflows need live data. A monthly plant-care newsletter should pull current seasonal context, not rely on whatever Claude remembers from training. That means wiring a skill to an MCP tool.

The key rule here: tell Claude to study the MCP server's available tools and pick only the ones the workflow actually needs. Loading a full MCP server inside a skill bloats the context and makes Claude slower.

For Verdal, this skill pulls the current month and season, then drafts a newsletter issue with care tips calibrated to what plant owners are dealing with right now.

**How to do it:**

1. Confirm your MCP connection is active (see connectors-setup.md). For this example, a web-search MCP is enough to pull seasonal context.
2. Run the prompt below in a new chat.
3. Download the zip. Upload it in Settings > Capabilities.
4. Test with: "draft the Verdal newsletter for this month."

```
You have access to skill-creator.

Create a new skill called "verdal-newsletter" from scratch. This skill should:

Workflow:
1. Identify the current month and Northern Hemisphere season
2. Use web search to find 2-3 current topics plant owners are searching about this season (e.g. "overwintering houseplants", "repotting season", "grow lights in winter")
3. Draft a 600-800 word newsletter issue with:
   - A warm subject line (no puns, no em dashes)
   - A seasonal opening paragraph connecting the month to plant care
   - Two care tips with a brief explanation of the why behind each tip
   - A "plant of the month" feature: one species to highlight with a care note
   - A soft CTA linking to verdal.com/shop (do not fabricate a URL; leave as placeholder)

Voice: warm, expert, plain. Write like a knowledgeable friend, not a brand account.

MCP tools: study the available web-search tools and select only what is needed for step 2. Do not load tools for steps that do not require live data.

Trigger description: "trigger this skill when the user asks for the Verdal newsletter, monthly email, plant care email, or subscriber email"

Backup plan: if the MCP tool call fails, skip step 2 and draft the newsletter using general seasonal knowledge for the current month.

Use skill-creator to output a properly formatted zip file.
```

Note the backup plan instruction. Skills are static files. When an MCP tool changes its function names or goes offline, the skill breaks silently. A backup plan keeps the skill useful while you fix it.

---

## The prompt

One strong all-purpose prompt you can adapt for any of the three methods:

```
You have access to skill-creator.

[Choose one:]
- "Read the official [parent skill name] skill. Create a new skill called "[your-skill-name]" that extends it and overrides [what you are changing]."
- "Read the custom instructions and [template file] in this project. Package them as a portable skill called "[your-skill-name]"."
- "Build a new skill called "[your-skill-name]" from scratch using the workflow steps below."

Skill details:
- Name: [your-skill-name]
- Trigger description: trigger this skill when the user asks for [specific phrases]
- Workflow: [paste your steps]
- MCP tools needed: [list only the tools this workflow actually uses, or "none"]
- Backup plan: if a tool call fails, [fallback behavior]
- Usage example: [one worked example of input and expected output]

Use skill-creator to output a properly formatted zip file.
```

---

## What good looks like

- The zip file downloads without errors.
- After uploading in Settings > Capabilities, the skill appears in your list with the name you gave it.
- In a new chat (no project context), typing the trigger phrase causes Claude to use the skill's workflow, not just answer generically.
- The output matches your template or format spec without you restating it.
- When you test the MCP-wired skill, Claude calls the tool once for the step that needs it and skips the call for steps that do not.

---

## Your turn

Pick one workflow you run at least once a week. Write down:

1. What triggers it (what do you type or say to start it)?
2. What files or context does it need?
3. What does the output look like?

Then use the prompt template above to package it. Upload the zip. Test it cold in a new chat with no project context. If the output is off, the most common fix is sharpening the trigger description in your prompt and regenerating.

---

## Common mistakes

**Vague trigger descriptions.** If the description says "use this for content tasks," Claude will not reliably trigger it because too many things match. Use specific phrases the way a real user would actually type them.

**Loading too many MCP tools.** Telling Claude to "use the Notion MCP" without specifying which tools loads everything from the server into the skill's context. This adds token cost and can confuse the workflow. Name the specific tools or tell Claude to study the list and select only what is needed.

**Trigger reliability is not guaranteed.** Claude triggers skills by matching context, not keywords. In busy projects with many skills active, it will sometimes miss. The workaround: add a line in your account-level custom instructions that says "for Verdal newsletter and lead-magnet tasks, always consider whether a relevant skill is available." Inside project custom instructions, list which tasks map to which skills explicitly.

**Token cost on Pro plan adds up.** Every skill active in a session is partially loaded into context. On the Pro plan, activating ten skills and running long sessions will burn through your limit faster. Create skills only for workflows you repeat at least 3-4 times a week. For one-off tasks, a well-written prompt is cheaper.

**Skills break when MCP tools drift.** Anthropic and MCP server authors rename or remove tool functions when they ship updates. A skill that calls `notion.getDatabase` will fail silently if the tool is later renamed to `notion.query_database`. Check your MCP-wired skills once a month. Always include a backup plan for when a tool call returns an error.

---

## What you just learned

Skills can be extended from official Anthropic starters, rescued from existing project instructions, or built fresh and paired with MCP tools - and the skill-creator handles the formatting in all three cases.

Next: [Lesson 3 - Skill types and chaining](03-skill-types-and-chaining.md)
