# Lesson 1 - Repurpose one blog post into social, newsletter, and LinkedIn

> Module 2: The Content Engine · no-code track · ~20 min · Builds on Module 1

---

## What you'll build

You will take a single Verdal blog post and produce three ready-to-use content formats from it, all reading from your brand context files so every output sounds like Verdal.

Outputs saved to `verdal-marketing/projects/repurpose/output/`:

- 3 Instagram captions (different angles, each with a hook and a CTA)
- 1 newsletter section (intro paragraph + 3 bullet takeaways + a sign-off line)
- 3 LinkedIn posts (one educational, one story-led, one contrarian)

You will do this with a single prompt in Claude Cowork. No copying and pasting between tools, no manual reformatting.

---

## Why it matters

Most marketing teams write one piece of content and post it once. That is the most expensive way to run content, because all the thinking happens once and is then discarded.

Repurposing is not reposting. It is re-framing the same insight for a different surface and a different reader mode. A Care Box subscriber scrolling Instagram and a plant-shop owner reading LinkedIn on a Tuesday morning want the same underlying idea delivered in completely different ways.

Getting this right without a system means your social posts end up sounding like chopped-up blog paragraphs. The workflow below uses your brand voice file to rewrite, not just cut.

---

## Step by step

### 1. Set up the input folder

Inside `verdal-marketing/projects/repurpose/`, create two folders: `input/` and `output/`.

Drop your source blog post into `input/`. For this lesson, use a post about watering frequency or seasonal plant care - anything Verdal has published or that you want to test with. Save it as a plain text or Markdown file. Name it something clear, like `watering-guide.md`.

Your folder should look like this:

```
verdal-marketing/
  context/
    brand-context.md
    brand-voice.md
    ideal-customer-profile.md
  projects/
    repurpose/
      input/
        watering-guide.md
      output/
```

### 2. Open Cowork and load the project

Open Claude Cowork. If you are continuing from Module 1, your `verdal-marketing/` project folder is already connected. If not, point Cowork at the folder now: click the folder icon in the top-left, navigate to `verdal-marketing/`, and confirm.

Cowork reads your `CLAUDE.md` file automatically at the start of every session. That file tells it where your brand context lives and which skills are available. You do not need to re-explain Verdal each time.

If you have not set up `CLAUDE.md` yet, this one line is enough for now - add it to the file:

```
Brand context lives in context/. Always read brand-voice.md and ideal-customer-profile.md before generating any copy.
```

### 3. Run the repurposing prompt

Paste the prompt below into Cowork. Replace the filename if yours is different.

```
Read context/brand-voice.md and context/ideal-customer-profile.md.

Then read projects/repurpose/input/watering-guide.md.

Using only the ideas and information in that post, generate the following:

1. Three Instagram captions for Verdal. Each caption should:
   - Open with a one-line hook (no question marks as openers)
   - Deliver one concrete tip from the post
   - Close with a soft CTA tied to the Care Box or a product
   - Run 100-150 words
   - Match the warm, expert tone in brand-voice.md

2. One newsletter section for Verdal's email list. Structure:
   - Two-sentence intro that names the problem the post solves
   - Three bullet takeaways pulled from the post (each bullet one sentence, specific)
   - One closing line that links to the full post

3. Three LinkedIn posts for Verdal. One educational (teach a framework), one story-led (a plant problem and its fix), one contrarian (a common watering belief that is wrong). Each post 150-200 words. Professional but not stiff - match the Verdal voice.

Save all outputs to projects/repurpose/output/ with these filenames:
- instagram-captions.md
- newsletter-section.md
- linkedin-posts.md
```

### 4. Review and adjust

Cowork will launch parallel agents for each format and write the three files to your output folder. This typically takes 60-90 seconds.

Open each file. Read them out loud. Check:

- Does the Instagram caption sound like something a 34-year-old with three houseplants would share? Or does it sound like a brand announcement?
- Does the newsletter section flow into a real email, or does it read as a standalone article?
- Do the LinkedIn posts vary in feel, or are all three the same post with different opening lines?

If any format feels off, use the targeted correction prompt in the next step.

### 5. Correct one format without redoing the others

If the LinkedIn posts all feel too formal, run this follow-up in the same Cowork session:

```
The three LinkedIn posts in projects/repurpose/output/linkedin-posts.md are too formal.
Rewrite them to be warmer and more direct, matching the brand voice in context/brand-voice.md.
Keep the same structure (educational, story-led, contrarian) and the same length.
Overwrite the file.
```

Cowork has the full context from the previous run. You do not need to re-paste the source post or the brand files.

---

## The prompt

The full repurposing prompt from Step 3, ready to copy:

```
Read context/brand-voice.md and context/ideal-customer-profile.md.

Then read projects/repurpose/input/watering-guide.md.

Using only the ideas and information in that post, generate the following:

1. Three Instagram captions for Verdal. Each caption should:
   - Open with a one-line hook (no question marks as openers)
   - Deliver one concrete tip from the post
   - Close with a soft CTA tied to the Care Box or a product
   - Run 100-150 words
   - Match the warm, expert tone in brand-voice.md

2. One newsletter section for Verdal's email list. Structure:
   - Two-sentence intro that names the problem the post solves
   - Three bullet takeaways pulled from the post (each bullet one sentence, specific)
   - One closing line that links to the full post

3. Three LinkedIn posts for Verdal. One educational (teach a framework), one story-led (a plant problem and its fix), one contrarian (a common watering belief that is wrong). Each post 150-200 words. Professional but not stiff - match the Verdal voice.

Save all outputs to projects/repurpose/output/ with these filenames:
- instagram-captions.md
- newsletter-section.md
- linkedin-posts.md
```

---

## What good looks like

**Instagram caption - good:**

> Most people water on a schedule. Plants do not live on schedules.
>
> The real signal is the soil 2 inches down. Dry and crumbly? Water slowly until it drains. Still damp? Leave it. That one check prevents 80% of root rot cases we hear about from Care Box subscribers.
>
> Our All-Purpose Plant Food works best in soil that is consistently moist, not swinging between soaked and bone dry. Get the watering right first, then feed.
>
> Link in bio for the full watering guide.

Notice: specific (2 inches, 80%), tied to a product naturally, no corporate language, no exclamation marks.

**Instagram caption - weak:**

> Watering your plants correctly is so important! Our experts have put together a comprehensive guide to help you keep your plants healthy and thriving. Check out our Care Box subscription for more tips and tricks! Link in bio.

This could have been written by any plant brand. It has no specific information and does not demonstrate expertise.

**LinkedIn post - good (educational angle):**

> Most watering advice is backwards.
>
> We tell people to water twice a week. What we should say is: water when the top two inches of soil are dry, then water until it runs through the drainage hole.
>
> The schedule approach assumes every plant, pot, and room has the same evaporation rate. They do not.
>
> A terracotta pot in a south-facing window dries out in three days. The same plant in a glazed ceramic pot in a north-facing room might need nine. Same plant, same owner, completely different timing.
>
> The fix is one 10-second check before every watering session. Stick your finger two inches in. If it is dry, water fully. If it is damp, wait.
>
> Takes a week to build the habit. Saves most of the plants people lose in year one.

Specific numbers, a clear reframe, no Verdal brand mentions needed - the expertise speaks for itself.

---

## Your turn

1. Pick any blog post from your brand's archive (or write a 300-word summary of a topic your brand covers well).
2. Save it to your input folder.
3. Run the repurposing prompt.
4. Review all three output files. Rate each one on how well it sounds like your brand (1-5, where 5 means you would post it unchanged).
5. Run a correction prompt on any format that scored below 4.

Repeat with a second blog post and compare how the outputs differ. You are testing whether your brand voice file is specific enough to consistently shape the output.

---

## Common mistakes

**Skipping the brand voice file read.** If you do not explicitly tell Cowork to read `brand-voice.md` first, it defaults to generic content marketing conventions. The output will be competent and generic. Always load context before generating.

**Giving Cowork a URL instead of a file.** Cowork reads files in your project folder. If you paste a blog post URL, it may or may not be able to fetch the page, and the result depends on whether the site blocks bots. Copy the post text into a file in your input folder instead.

**Asking for too many formats in one run without checking quality first.** The first time you run repurposing on a new brand, generate one format, check it, then add the others. Once you know the voice file is working, you can batch all three formats in a single prompt.

**Treating the output folder as a final step.** Output files are drafts. They are correct in structure and close in voice, but they almost always need one read-through from a human who knows the brand. Plan for 10 minutes of editing per batch.

**Running a new session instead of continuing.** If you want to correct an output, stay in the same Cowork session. Cowork holds context from earlier steps - your brand files and source post are already loaded. Starting fresh means re-loading everything and losing the thread.

---

## What you just learned

You built a repeatable repurposing workflow that reads brand context, processes a source file, and writes finished drafts across three formats without any manual reformatting.

Next: [Lesson 2 - Carousels at scale](02-carousels-at-scale.md)
