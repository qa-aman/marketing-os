# Lesson 2 - Templates

> Use case 2 of 8 · ~25 min · Builds on Lesson 1

## What you'll build

A finished 12-slide marketing strategy deck for Verdal, generated from a reusable template and populated with real brand photos, tailored to their Care Box growth priority.

## Why it matters

Most marketers spend hours rebuilding the same deck structure every quarter, copying slides, swapping logos, rewriting the same context. Because Cowork already knows your brand from Lesson 1, it can draft a full, on-brand strategy deck in minutes by reading your template and applying your brand context automatically. The result is not a generic outline - it is a first draft specific to your priorities, voice, and audience.

## Step by step

1. Open Claude Cowork on your desktop.
2. Load your `verdal-marketing/` folder the same way you did in Lesson 1.
3. Load a second folder at the same time: a folder of Verdal brand photos (product shots, lifestyle imagery, plant close-ups). Cowork supports loading multiple folders at once - click the folder icon again and select the photos folder. Both folders are now in scope.
4. Because your `context/` files and global instructions are already in place from Lesson 1, Cowork reads `brand-context.md`, `brand-voice.md`, and `ideal-customer-profile.md` automatically before it does anything else.
5. Point Cowork at the template by referencing it directly in your prompt: `templates/strategy-deck-outline.md`. Cowork reads the 12-slide structure, including any placeholder labels for images, section headers, and content prompts.
6. Run the prompt from the section below.
7. Cowork works through the deck section by section: it reads your brand context, maps the right photos to the right slides, writes slide copy that matches your voice, and follows the template order throughout.
8. The finished deck saves into your `projects/` folder locally, named clearly with the date and deck type.

## The prompt

```
Read templates/strategy-deck-outline.md and all files in context/. Then research current marketing trends for DTC plant care and wellness brands in 2024 - focus on subscription growth, retention tactics, and low-cost acquisition channels.

Using those trends and Verdal's priorities (grow Care Box subscriptions, lower acquisition cost), generate a 12-slide strategy deck that follows the template exactly. Replace every image placeholder with a relevant photo from the brand photos folder I have loaded. Write all slide copy in Verdal's voice: warm, expert, plain. No corporate language.

Save the completed deck to projects/verdal-strategy-deck-[today's date].md.
```

## What good looks like

- Deck follows all 12 slides in `templates/strategy-deck-outline.md`, in order, with no skipped sections.
- Image placeholders are replaced with actual photos from the loaded photos folder, not described or left blank.
- Strategy reflects Verdal's real priorities (Care Box growth, acquisition cost) and their competitive context (The Sill, Bloomscape, Leon and George), not a generic plant brand.
- Slide copy sounds like Verdal, not a consulting template.
- The file exists in `projects/` on your local machine when Cowork is done.

Be honest with yourself on the first pass: some photos may land on the wrong slide, and a headline or two will need tightening. That is normal. The win is a strong, on-brand starting point that would have taken you two or three hours to build manually, now done in minutes.

## Your turn

1. Run the prompt above using the Verdal setup and a small folder of any plant or product photos you have on hand. Review the output slide by slide against the template.
2. Then repeat the exercise using your own brand folder, your own template, and your own photos. Adjust the prompt to reference your growth priorities instead of Verdal's.

## Common mistakes

- Not loading the photos folder: if you skip this step, Cowork has no images to work with and will describe what a photo "could" show instead of placing a real one. Always load the photos folder alongside the marketing folder.
- Expecting a perfect final deck on the first pass: Cowork produces a strong draft, not a production-ready file. Plan to spend 15-20 minutes reviewing and repositioning before you share it.
- Using a template that is too vague: if `strategy-deck-outline.md` just says "Slide 4: Goals" with no structure underneath, Cowork has nothing to work from and output will be generic. Good templates include placeholder labels, guiding questions, or example content for each slide.
- Skipping Lesson 1: Cowork nails brand fit on this deck only because the context files are already loaded. If `brand-context.md` and `ideal-customer-profile.md` do not exist, the deck will read like it was written for any plant brand, not Verdal.

## What you just learned

Cowork can read a reusable template and your brand context together, then generate a complete strategy deck in one pass, with real photos placed and copy written in your voice.

Next: [Lesson 3 - Projects](03-projects-reusable-workflows.md), where you turn a repeatable workflow into a saved project with its own memory.
