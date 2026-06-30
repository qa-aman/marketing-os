# Lesson 6 - Skills and plugins

> Use case 6 of 8 · ~30 min · Builds on Lesson 5

## What you'll build

An 8-page PDF lead magnet for Verdal, built from a folder of research materials. Then a reusable, brand-agnostic skill called "Lead Magnet PDF Builder" that recreates the same output for any brand, any time, with no re-explaining.

## Why it matters

The workflows you repeat most often are exactly the ones worth packaging. Every time you rebuild a lead magnet from scratch, you lose time re-explaining format, tone, structure, and approval steps. A skill captures that process once. After that, Claude reproduces the same quality on demand by running the skill, not by reading a wall of instructions you typed again.

## Connect this first

Before you start, add two things from Customize:

- The **skill-creator skill** (Customize > Claude Skills), which you need to build your own skill
- The **official marketing plugin** (Connectors panel > Browse Plugins), for the pre-built skills near the end of this lesson

Steps and tips are in [connectors-setup.md](../connectors-setup.md#module-1-tools). Add them, then continue.

## Step by step

1. **Add the skill-creator skill first.** In Claude Cowork, open Customize > Claude Skills. Browse the skills library and install "Skill Creator." This is the tool Claude uses to build new skills - you need it before you can package anything.

2. **Set up your research folder.** Inside your `verdal-marketing/` working folder, create a subfolder called `research/`. Drop in your source materials: competitive comparisons, customer FAQs, survey data, best-practice docs, anything relevant to the lead magnet topic.

3. **Point Cowork at the folder.** In your project settings, add `verdal-marketing/` as a connected folder. Cowork will scan the contents automatically. You do not need to attach every file to the chat - Claude reads from the folder directly.

4. **Set project instructions.** In project settings, paste a short brief covering who Verdal is, the folder structure (`context/` for brand, `templates/` for formats, `projects/` for active work, `research/` for source materials), and the voice: warm, expert, plain.

5. **Ask for the lead magnet with outline approval first.** Use the first prompt below. Claude will propose a structure and wait for your sign-off before writing a single word of the full document. Review the outline, adjust if needed, then approve.

6. **Review and refine the output.** Claude will produce the 8-page PDF lead magnet with layout, a scorecard, a self-assessment section, and a final action plan, saved to your folder. Refine any section by asking for specific changes.

7. **Package the workflow as a reusable skill.** Once you are happy with the output, use the second prompt below. Tell Claude to extract the exact workflow it just ran and package it as a brand-agnostic skill named "Lead Magnet PDF Builder" using the skill-creator skill.

8. **Save the skill.** Claude will build the skill file and present a one-click Save Skill option. Click it. The skill is now installed in your library. Next campaign, drop in new materials, run the skill, done.

9. **Install the official marketing plugin.** Open the Connectors panel in Cowork, browse plugins, and search for "marketing." Install the official marketing plugin. It ships several pre-built skills - brand review, campaign plan, competitive brief - available as slash commands.

10. **Use a plugin skill via slash command.** Type `/` in the chat to see your installed skills. Select a plugin skill, fill in the interactive input panel it presents, and run it. No prompt writing needed.

This workshop repository ships its own marketing skills library in `.claude/skills/`. Skills like `campaign-brief`, `case-study-writer`, `linkedin-post`, and `content-writer` are already installed and run the same way - type `/campaign-brief` and Cowork picks them up. They are universal and brand-agnostic, so they work for Verdal or any other brand you bring in.

## The prompt

**Prompt 1 - build the lead magnet:**

```
I have dropped source materials into verdal-marketing/research/. Scan that folder now.

Using only what you find there, create an 8-page PDF lead magnet on indoor plant care for a home plant enthusiast audience. Verdal's brand voice is warm, expert, and plain - no jargon, no hype.

Before you write anything, propose a full outline: title, section names, what each section covers, and how the scorecard and self-assessment fit in. Wait for my approval before writing the full document.

Once approved, build the complete lead magnet with clean layout and typography, a scorecard, a self-assessment section, and a final action plan. Save the finished file to verdal-marketing/projects/.
```

**Prompt 2 - package the skill:**

```
Extract the exact workflow you just ran to produce that lead magnet and package it as a reusable skill.

Name the skill: Lead Magnet PDF Builder

Make it fully brand-agnostic. It should work for any brand, not just Verdal. The skill should:
- Scan a research/ folder the user points it at
- Propose an outline and wait for approval before writing
- Produce an 8-page PDF lead magnet with layout, scorecard, self-assessment, and action plan
- Save output to the user's projects/ folder

Use the skill-creator skill to build it. Show me the skill file when done so I can review it, then prompt me to save it.
```

## What good looks like

- A finished 8-page lead magnet with clean layout and typography, saved to `verdal-marketing/projects/`
- A scorecard readers can fill in, a self-assessment section, and a concrete action plan at the end
- An outline approval step that happened before any full draft was written
- A new "Lead Magnet PDF Builder" skill installed in your library, ready to rerun for any brand
- Official marketing plugin installed, with brand review, campaign plan, and competitive brief available as slash commands

## Your turn

1. Follow the steps above using Verdal's materials. Build the lead magnet, get outline approval, then package the skill.
2. Think of one workflow you run repeatedly for your own brand or clients. Write down the steps. Then ask Claude to package that workflow as its own skill, following the same packaging prompt above.
3. Browse the plugins panel and install one official skill or plugin you would actually use in your next campaign.

## Common mistakes

- **Not making the skill brand-agnostic.** If you forget to say "brand-agnostic" in the packaging prompt, the skill bakes in Verdal's name and voice and becomes useless for anything else.
- **Skipping outline approval.** If you let Claude skip straight to the full draft, a structural problem on page 1 means rewriting everything. The outline step costs two minutes and saves an hour.
- **Not installing skill-creator first.** Claude cannot build or package skills without it. Install it before you try to package anything.
- **Expecting a perfect first output.** The first draft will be close but not final. Plan to refine one or two sections before saving. One round of targeted feedback is faster than trying to write a perfect prompt upfront.

## What you just learned

You can capture any repeatable workflow as a skill and reproduce it at consistent quality across campaigns and brands.

Next: [Lesson 7 - Browser use](07-browser-use.md), where Cowork goes out and uses real websites for you.
