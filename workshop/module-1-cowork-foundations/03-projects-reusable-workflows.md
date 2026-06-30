# Lesson 3 - Projects

> Use case 3 of 8 · ~25 min · Builds on Lesson 2

## What you'll build

A reusable Carousel Design System project in Claude Cowork that turns any piece of content into a consistent, on-brand 7-slide Instagram carousel, with all context, style rules, and outputs living in one folder you never have to rebuild.

## Why it matters

Some workflows repeat every week, like producing Instagram carousels. Without a project, you explain the brand, the layout rules, and the tone every single time. A Cowork Project gives that workflow its own memory, its own instructions, and its own folder - so you open it, drop in content, and Claude already knows what to do. Set it up once. Use it indefinitely.

## Step by step

1. **Create the project folder.** In your `verdal-marketing/` folder, create a new folder called `Carousel Design System`. Inside it, create three subfolders: `context/` (copy `brand-context.md`, `brand-voice.md`, and `ideal-customer-profile.md` from your main `context/` folder here), `reference/` (drop in 3-5 carousel examples whose layout or visual logic you want to follow - screenshots, exported PDFs, or reference descriptions work), and `output/` (this stays empty for now; Claude will save finished carousels here).

2. **Create the project in Cowork.** Open Claude Cowork. In the left sidebar, go to Projects, then click "Create New Project." When prompted, choose "Use an existing folder" and select your `Carousel Design System` folder. (Two other options exist - "Start from scratch" if you want to build without a pre-made folder, and "Import from a Claude chat" if you have already built a carousel workflow in a regular chat and want to promote it into a project. Both are worth knowing, but for this exercise we are using the folder.)

3. **Understand what the project now has.** The project is live. Cowork has indexed your folder, so it can read the brand context files and the reference examples. The project also has its own memory - notes and outputs it saves will persist between sessions. Every chat you open inside this project starts with that context already loaded.

4. **Ask Claude to build the design system.** Open a chat inside the project and run the first prompt below. Claude will read the reference examples and your brand context, then generate two files: a brand style guide (colors, type, tone in one reference doc) and a carousel design system file (the 7-slide structure with layout rules, copy guidelines, and spacing logic for each position). Ask Claude to save both files to the project.

5. **Set the Project Instructions.** This is the most important step and the one most people skip. Project Instructions are the system prompt for this project only - Claude reads them at the start of every chat inside the project. Click the project settings (gear icon or "Edit Instructions"), and write rules that tell Claude how to navigate the folder, which files are authoritative, and what it should never do. A starter set of rules is included in the prompt section below. Do this for every project you create.

6. **Test the system.** Once the design system file and style guide exist, open a new chat inside the project and run the second prompt below. Attach a short piece of content - a plant care tip, a product description, anything - and ask Claude to produce a 7-slide carousel. Check that the output lands in `output/` and matches the visual and tone rules in the design system.

## The prompt

**Prompt 1 - build the design system**

```
I have placed reference carousel examples in reference/ and brand context in context/. 

Please do the following in order:

1. Read all files in context/ (brand-context.md, brand-voice.md, ideal-customer-profile.md).
2. Read all files in reference/.
3. Identify the layout patterns, visual rhythm, and structural logic across the reference examples.
4. Generate a brand style guide for Verdal that covers: primary and accent colors (deep botanical green, cream, terracotta), typography tone, image guidance, and copy voice. Save it as brand-style-guide.md in this project.
5. Generate a carousel design system file that defines the 7-slide structure: what each slide position is for (hook, problem, insight 1-3, proof, CTA), copy length limits per slide, layout rules, and how to apply Verdal's brand. Save it as carousel-design-system.md in this project.

Flag anything unclear in the reference examples before generating.
```

**Prompt 2 - test with real content**

```
I am attaching a short piece of content below. Using the carousel-design-system.md and brand-style-guide.md already in this project, design a 7-slide Instagram carousel following the design system exactly.

For each slide, output:
- Slide number and position name (e.g. Slide 1 - Hook)
- Headline copy (max characters as defined in the design system)
- Body copy or supporting text
- Layout note (what visual element goes where)
- Any color or image guidance specific to this slide

Save the finished carousel as output/carousel-[topic-slug]-30-06-2026.md.

Content to turn into a carousel:
[paste your content here - e.g. "Yellow leaves on a pothos usually mean one of three things: overwatering, low light, or a nitrogen deficit. Here is how to diagnose which one is happening and fix it before the plant declines further."]
```

## What good looks like

- Every slide uses Verdal's brand colors (deep botanical green, cream, terracotta) with no off-brand color choices.
- Each slide carries one clear idea, not a paragraph.
- Copy length on each slide stays within the limits defined in the design system.
- The finished carousel file is saved to `output/` with a dated filename.
- The design system file and style guide persist in the project so the next carousel takes minutes, not a setup session.
- Opening the project a week later, Claude still knows the folder structure, the rules, and the brand - no re-explaining needed.

## Your turn

**Exercise A.** Build the Carousel Design System project for Verdal following every step above. Generate one carousel on a topic of your choice (e.g. how to use Bloom Booster before flowering season). Check that the output matches the design system.

**Exercise B.** Create a second project for your own brand. Pick a workflow you run regularly - email newsletter drafts, blog post outlines, or ad copy variants all work well. Set up the folder, point Cowork at it, write Project Instructions specific to that workflow, and run one test output. If you have an existing Claude chat where you have already refined a workflow, try importing it using the "Import from a Claude chat" option instead of starting from scratch.

## Common mistakes

- **Skipping Project Instructions.** Without them, Claude treats the folder as raw files and does not follow your workflow rules. Write instructions before you run any real work.
- **No reference examples in `reference/`.** Claude can generate a design system from brand context alone, but it will lack the visual logic and structural consistency your reference examples would teach it. Even three good examples make a measurable difference.
- **Cramming unrelated workflows into one project.** One project per repeatable workflow. A project mixing carousels, email drafts, and press releases will have conflicting instructions and no consistent memory. Keep them separate.

## What you just learned

Projects let you build a workflow once and reuse it with full memory and context intact every session.

Next: [Lesson 4 - Connectors](04-connectors-live-data.md), where your workflows start pulling in live data from outside tools.
