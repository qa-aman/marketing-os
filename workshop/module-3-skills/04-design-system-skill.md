# Lesson 4 - A design-system skill: extract your look once, reuse it everywhere

> Module 3: Claude Skills Deep Dive · power track · ~25 min · Builds on Lesson 3

---

## What you'll build

A `design-system` skill folder for the Verdal brand. It holds Verdal's colors, type scale, spacing rules, and layout patterns in a format other skills can read directly. You'll then wire a `carousel` skill to call it, so every carousel Claude generates is visually on-brand with zero re-specification.

---

## Why it matters

Every time you ask Claude to produce a carousel, a deck, or a landing page, you're re-describing the same visual rules: the green, the cream, the font, the grid. That description is inconsistent, easy to forget, and invisible to anyone else using your skill library.

A design-system skill fixes this at the root. Extract once, reference everywhere. The carousel skill, the landing-page skill, and any future skill pull the same source file. Change the source file once, and every skill benefits automatically.

---

## Set up first

You need two things before the step-by-step:

**Claude Design tool.** This is the tool that does the extraction work. Open it from the Claude interface (look for Design in the left sidebar or tool switcher). It reads your logo files, color notes, and existing brand assets and outputs a structured design system. If you have not used it before, create a test project with a placeholder name to confirm it opens and accepts file uploads.

**Image generation connector (optional).** If a skill you build later needs to generate cover images or visual assets, it calls a connected image tool. The setup for that lives in [../connectors-setup.md](../connectors-setup.md). You do not need it to complete this lesson, but you will need it for the carousel skill's cover image step.

---

## Step by step

### 1. Prepare your brand inputs

Gather these files before opening Claude Design:

- Verdal logo (SVG or high-res PNG preferred)
- Any existing brand style notes - even a rough doc listing the hex codes and fonts is enough
- One or two examples of on-brand visuals if you have them (product photography, a past Instagram post, a slide)

Place them in `verdal-marketing/context/` so they're easy to locate.

### 2. Create a design system project in Claude Design

Open Claude Design. Create a new project. Name it `Verdal Design System`.

Attach your logo and any visual examples using the file upload. Paste your brand notes into the prompt field. A minimal starting prompt for Verdal:

```
Brand: Verdal - premium indoor plant care.
Voice: warm, expert, plain. Not clinical, not trendy.
Primary color: #2F6B4F (deep botanical green).
Secondary palette: cream (#F5F0E8) and terracotta (#C4673A).
Typography: prefer clean serif for headings, neutral sans-serif for body.
Layout feel: airy, generous white space, editorial.
Generate a full design system: color tokens, type scale, spacing scale, component rules (buttons, cards, badges), and layout grid.
```

Click Generate. Expect 10-15 minutes. Claude Design will extract colors, build UI component mockups, define a type scale, and produce a visual preview.

### 3. Review and adjust

When generation finishes, review each section inside Claude Design:

- **Colors** - confirm the green, cream, and terracotta are correctly identified. Adjust any swatch that looks off using the editor.
- **Typography** - check that heading and body type styles match your brand feel.
- **Components** - scan the button, card, and badge examples. If a component looks wrong, use the inline editor to correct it before exporting.

You do not need to be a designer here. The goal is: does this look like Verdal, or does something feel off? Trust your instinct, make the obvious corrections, and move on.

### 4. Export the design system as a skill folder

Find the Export option inside Claude Design (usually top-right). Select "Export as Claude skill folder."

This creates a folder containing:

- `SKILL.md` - the skill definition file
- `design-tokens.json` - machine-readable color, type, and spacing values
- `component-rules.md` - written rules for buttons, cards, grids, and other recurring elements
- `examples/` - reference images Claude can consult when generating visuals

### 5. Move the exported folder into your project

Drag the exported folder into `verdal-marketing/skills/`. Rename it `design-system` if it exported with a different name.

Your skills folder should now look like this:

```
verdal-marketing/
  skills/
    design-system/
      SKILL.md
      design-tokens.json
      component-rules.md
      examples/
    brand-voice/
      SKILL.md
```

### 6. Add a version line to the skill

Open `verdal-marketing/skills/design-system/SKILL.md` and add a version field near the top so you can track changes over time:

```
---
name: design-system
version: 1.0.0
last-updated: 30-06-2026
---
```

### 7. Wire the carousel skill to reference it

Open Claude Code desktop and switch to the `verdal-marketing/` project folder. Run the prompt below to create a carousel skill that reads from the design system.

---

## The prompt

Run this in Claude Code with the `verdal-marketing/` folder active:

```
Read skills/design-system/SKILL.md and skills/design-system/component-rules.md.

Create a new skill at skills/carousel/SKILL.md with these rules:

1. Before generating any carousel, read skills/design-system/design-tokens.json and skills/design-system/component-rules.md to load visual rules.
2. Propose three content angles for the carousel based on a brief the user provides.
3. For each slide, specify: headline (max 8 words), body copy (max 20 words), background color token from the design system, and text color token.
4. Slide 1 is always a cover slide. If an image generation tool is connected, call it to produce a cover image using the Verdal visual style. If no tool is connected, output a color-block cover using the primary green token.
5. Export each slide as a separate file named slide-01.md, slide-02.md, etc., saved to output/carousel/.
6. Never use colors, fonts, or layout rules outside what the design system defines.

Add a frontmatter block to the skill with: name, version 1.0.0, last-updated 30-06-2026, and reads: [skills/design-system/design-tokens.json, skills/design-system/component-rules.md].
```

---

## What good looks like

After running the prompt you should have:

- `verdal-marketing/skills/carousel/SKILL.md` created and readable
- The frontmatter `reads:` field listing both design-system files
- A clear rule inside the skill body that loads design-system context before generating any output
- A note about the image generation connector with a conditional fallback (color block) if no tool is connected

To verify it works, ask Claude to generate a test carousel:

```
Run the carousel skill. Brief: "Three reasons Verdal's plant food outperforms generic fertilizer. Audience: plant parents who've killed plants before. Tone: reassuring, direct."
```

Check the output in `output/carousel/`. Slide colors should match `#2F6B4F`, cream, and terracotta. No off-brand fonts or random hex codes.

---

## Your turn

Work through these steps using your own brand:

1. Gather your logo, hex codes, and any visual style notes. If you only have a PDF style guide, paste the key specs as plain text into the Claude Design prompt.
2. Create the design system project in Claude Design. Generate, review, and export.
3. Move the exported folder into your `skills/` directory. Add a version line.
4. Run the carousel skill creation prompt above, substituting your design-system path.
5. Test with one real carousel brief from a recent campaign.

If Claude Design exports tokens with names you find confusing (e.g., `color-primary-500`), rename them in `design-tokens.json` to plain names like `green-primary` before wiring other skills. Simpler token names mean simpler skill instructions later.

---

## Common mistakes

**Skipping the review step in Claude Design.** The export is only as good as what you approved. If the terracotta came out as orange and you missed it, every skill that references the design system will use the wrong color.

**Embedding color hex codes directly in the carousel skill.** This defeats the purpose. The carousel skill should only reference token names from `design-tokens.json`. If you ever update the green, you update it in one place and every skill inherits the change.

**Forgetting the `reads:` frontmatter field.** Other skills and the campaign manager agent use that field to know which files to pre-load. Without it, the skill runs blind and may skip loading the design context.

**Treating the image generation step as required.** The cover image from a connected tool is an enhancement. The carousel skill must still work without it. Always write a fallback so the skill produces usable output even when no image connector is active.

**Not versioning the design system skill.** When you update the design system (new secondary color, adjusted type scale), bump the version number and update `last-updated`. Skills library managers and teammates need that signal to know when to re-sync.

---

## What you just learned

Extract your brand's visual rules once using Claude Design, export them as a skill folder, and wire other skills to read from that single source so every output is on-brand without re-specifying the look.

Next: [Lesson 5 - Skills from SOPs and orchestration](05-skills-from-sops-orchestration.md)
