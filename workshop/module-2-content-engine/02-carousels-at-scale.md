# Lesson 2 - Carousels at scale from a style library and a content planner

> Module 2: The Content Engine · no-code track · ~25 min · Builds on Lesson 1

---

## What you'll build

A repeatable carousel production workflow. You will set up a content planner spreadsheet with a list of carousel topics, then run a single Cowork prompt that reads the planner, generates a complete on-brand carousel for each row using the Verdal design system, saves the slides to an output folder, and marks each row done with the file path.

By the end you will have a working pipeline that lets you produce 5 to 10 carousels in one session without writing the same prompt twice.

---

## Why it matters

Most marketers treat carousels as one-off projects. They open a blank doc, write the hook, tweak the slides, check the brand guide, repeat. It is slow and inconsistent.

The planner-plus-style-library model flips this. The spreadsheet is your command file. It tells Cowork what to make and tracks what is done. The design system is the brand memory. Cowork does the production. You review and publish.

This is the difference between making content and running a content system.

---

## Set up first

You need two files in place before running the workflow.

**The carousel design system** - already built in Lesson 1 at `verdal-marketing/templates/carousel-design-system.md`. This file holds the 7-slide structure, copy length rules, layout instructions, and Verdal brand direction (botanical green, cream, terracotta). Cowork will load it as the visual and structural reference for every carousel it generates.

**The content planner** - create a new spreadsheet (Google Sheets or Excel) and save it to `verdal-marketing/projects/content-planner.xlsx`. Add a tab called `Carousels` with these columns:

| Column | What goes here |
|---|---|
| Topic | One-line description of the carousel subject |
| Angle | The specific frame or audience lens (e.g. "for new plant parents") |
| Platform | Instagram, LinkedIn, or both |
| Status | Empty / In progress / Complete |
| Output path | File path Cowork writes after generating |

Add 3 to 5 rows with Verdal topics before continuing. Leave Status as `Empty` and Output path blank.

---

## Step by step

**1. Open your Cowork project**

Make sure you are in the Verdal project you set up in Module 1. The project folder should be `verdal-marketing/` and your `CLAUDE.md` should already reference the skills folder.

**2. Upload the content planner**

Drag `content-planner.xlsx` into the Cowork chat or use the attachment icon to add it to the session. Cowork will be able to read each row.

**3. Run the carousel generation prompt** (see next section)

Cowork will read the planner, loop over every row with Status = `Empty`, generate a carousel for each one using the design system, save a markdown file per carousel to `verdal-marketing/projects/output/carousels/`, and update each row with the output path and `Complete` status.

**4. Review the output**

Open a generated carousel file. Check that the hook lands, the slide count matches the 7-slide structure, and the copy tone matches Verdal's voice. If a slide is off, edit the file directly or re-run the prompt for that row only.

**5. Save the updated planner**

Cowork will return an updated version of the spreadsheet data. Copy the new Status and Output path values back into your file, or ask Cowork to export the updated sheet.

---

## The prompt

Copy this into Cowork. Adjust the folder paths if yours differ.

```
You are running the Verdal carousel production workflow.

Context files to load first:
- verdal-marketing/templates/carousel-design-system.md (visual and structural rules for all carousels)
- verdal-marketing/context/brand-voice.md (Verdal tone and language rules)
- verdal-marketing/context/icp.md (primary audience)
- verdal-marketing/projects/content-planner.xlsx, tab: Carousels (the production queue)

Task:
1. Read every row in the Carousels tab where Status = "Empty".
2. For each row, generate a complete carousel using the carousel design system. The carousel must follow the 7-slide structure exactly: hook slide, problem or context slide, 4 content slides, and a CTA slide.
3. Write each carousel as a markdown file to: verdal-marketing/projects/output/carousels/<slug-of-topic>.md
   The file should include: slide number, headline, body copy, and a one-line image direction note for each slide.
4. After saving each file, update the row in the planner: set Status to "Complete" and paste the output file path into the Output path column.
5. When all rows are done, return a summary table showing Topic, Status, and Output path for every row you processed.

Brand reminders:
- Voice is warm, expert, plain. No jargon. No hype.
- Colors are deep botanical green, cream, and terracotta. Reference these in image direction notes.
- Assume the reader is an adult who cares about their home and wants plants to thrive, not just survive.
```

---

## What good looks like

A well-generated carousel file for a topic like "Watering mistakes that kill plants" should look like this:

- Slide 1 (hook): A direct, specific headline that names the pain. "Most plants die from too much water, not too little." No filler opener.
- Slides 2-6: Each slide has one idea, a short headline (under 8 words), and 2-3 lines of body copy. No slide tries to do two things.
- Slide 7 (CTA): One clear action. A follow, a save, or a link to a product or guide.
- Image direction notes: Specific and actionable. "Overhead shot of a waterlogged pot on cream linen, botanical green text overlay" beats "nice plant photo."
- Planner update: Status column shows `Complete`. Output path shows the exact file path.

If the output is vague or the slides run long, the most common fix is to paste the carousel back and ask Cowork to tighten each slide to one idea and one action.

---

## Your turn

Add 5 new rows to your Carousels tab. Use Verdal topics you actually want to produce, for example:

- Repotting signs most people ignore
- The difference between wilting from thirst and wilting from rot
- 4 low-light plants that actually grow fast
- How to build a humidity tray for under $5
- Reading your plant's leaves: what color changes mean

Run the full prompt. Review the output files. Pick the strongest carousel and note what made the hook land. That pattern is your template for writing better row inputs next time.

---

## Common mistakes

**Vague topics in the planner.** "Plant care tips" will produce a generic carousel. "3 signs your monstera needs a bigger pot" will produce a useful one. The topic column is where specificity lives. Do the work there.

**Skipping the Angle column.** Without an angle, Cowork picks one for you. Sometimes it is right. Often it is not. Filling in the angle (audience, pain point, or use case) gives you consistent output you can predict.

**Running on an empty context folder.** If `brand-voice.md` or `icp.md` does not exist, Cowork will invent Verdal's voice. Run `/onboard` first, or paste your brand context directly into the prompt.

**Not saving the updated planner.** Cowork updates the data in-session. If you close without copying the updated Status and Output path values back to your file, you lose the tracking layer. Copy it before you close the chat.

**Editing inside Cowork instead of the output file.** If you want to tweak a slide, open the markdown file directly and edit it there. Do not paste the whole carousel back into Cowork to ask for minor changes. That burns context and creates version confusion.

---

## What you just learned

The content planner is the control file. The design system is the brand memory. Together they let Cowork produce on-brand carousels at scale without you rebuilding context on every run.

Next: [Lesson 3 - Ad creative briefs](03-ad-creative-briefs.md)
