# Lesson 6 - Put the whole engine on a weekly schedule

> Module 2: The Content Engine · no-code track · ~15 min · Builds on Lesson 5

---

## What you'll build

A scheduled task inside Claude Cowork that runs the Verdal content engine every Friday at 9 AM. Claude reads the content planner, produces whatever is due that week (social posts, carousel copy, SEO draft), writes output files, and updates the status column in the planner - all without you touching a prompt.

This is the payoff for the last five lessons. The engine now runs itself.

---

## Why it matters

You built a reliable pipeline in Lessons 1-5. But a pipeline you have to trigger manually is still a task on your to-do list. Scheduling removes that friction. You open your laptop Friday morning and the week's content is already drafted and waiting for your review - not stuck in someone's queue.

Scheduled tasks were introduced in Module 1 as a Cowork feature. Here they do something more ambitious: they orchestrate the entire content pipeline in one run. That is the difference between automating a single step and automating a system.

---

## Step by step

**1. Confirm the engine is ready**

Before scheduling, verify the full pipeline works end to end by running it once manually. Open your Verdal project in Cowork and run the Lesson 5 prompt by hand. Check that output files land in `verdal-marketing/projects/` and that the planner's Status column updates to "Complete". Fix anything that is broken now, not after the schedule fires.

**2. Open the schedule command in Cowork**

Inside your Verdal project, type `/schedule` in the Cowork chat. Cowork will prompt you for two things: what to run, and when to run it. You will paste your scheduling prompt (see the next section) and set the recurrence.

**3. Set the recurrence**

When Cowork asks for timing, enter:

```
Every Friday at 9:00 AM
```

Cowork stores this as a recurring task tied to your open project. The task runs as long as Claude desktop is open and the project is loaded. If your laptop is closed at 9 AM Friday, the run is skipped - it does not queue up for later. Build that expectation into your workflow: keep Claude desktop open Thursday night, or set a calendar reminder to open it by 9 AM Friday.

**4. Paste the scheduling prompt**

Copy the prompt from the section below and paste it when Cowork asks what to run. This becomes the instruction set Claude follows every Friday.

**5. Review before anything publishes**

The scheduled run produces drafts and updates the planner. Nothing goes live automatically. After the run completes, open `verdal-marketing/projects/` and skim each output file. Check tone, plant names, and any claims. Once you are satisfied, push to Notion or WordPress manually, or add a separate approval step to your workflow. Automation handles production - you handle sign-off.

---

## The prompt

Paste this into Cowork when setting up the scheduled task:

```
You are running the weekly Verdal content engine. Follow these steps in order.

1. Read the content planner at verdal-marketing/projects/content-planner.xlsx.
   Identify every row where Status is "Queued" or "Due this week".

2. For each row, check the Content Type column and run the matching skill:
   - Social post: use the social post skill in verdal-marketing/context/skills/
   - Carousel: use the carousel post designer skill
   - SEO blog draft: use the SEO blog skill

3. For each piece, load brand context from verdal-marketing/context/brand-voice.md
   and the relevant ICP file before writing. Never invent brand details.

4. Save each output as a new file in verdal-marketing/projects/output/
   using the naming format: DD-MM-YYYY-[content-type]-[topic-slug].md

5. After saving, update the matching row in the content planner:
   - Set Status to "Draft ready"
   - Set Output Path to the file path you just saved

6. Write a short run summary at the end: how many pieces were drafted,
   any rows you skipped and why, and anything that needs human review.

Do not publish anything. Draft and update the planner only.
```

---

## What good looks like

After a successful Friday run you should see:

- New files in `verdal-marketing/projects/output/` dated that Friday
- The content planner updated with "Draft ready" status and correct file paths
- A run summary in the Cowork chat explaining what ran and what was skipped
- No rows left on "Queued" unless Claude could not find the necessary context files

The run summary is your audit trail. If a row was skipped, the summary tells you why (missing skill, missing ICP file, unclear topic slug). Fix the planner entry and the next Friday run picks it up automatically.

---

## Your turn

1. Run the full engine once manually using the Lesson 5 prompt. Confirm everything works.
2. Open your Verdal project in Cowork and type `/schedule`.
3. Paste the prompt above and set the recurrence to every Friday at 9 AM.
4. Add three new rows to the content planner with Status "Queued" for next Friday.
5. On Friday, review the output folder and the planner before touching anything else.

---

## Common mistakes

**Scheduling before testing manually.** The scheduled task runs exactly what you give it. If the pipeline has a broken step, it will fail silently every Friday. Test end to end first.

**Expecting the run to fire if Claude desktop is closed.** Cowork scheduled tasks are not cloud jobs. They need the app open. Close your laptop at 8:59 AM and you lose the run.

**Forgetting to add rows to the planner.** The prompt only processes rows marked "Queued" or "Due this week". If the planner is empty, the run produces nothing and reports zero pieces. Filling the planner is still your job.

**Publishing without reviewing.** The prompt explicitly stops at "Draft ready". Do not remove that instruction to save time. A single off-brand post about the wrong plant species does more damage than the time you save.

**Hardcoding Verdal details in the scheduling prompt.** The prompt above loads brand context from the context folder at runtime. Keep it that way. If you paste voice rules or ICP details directly into the prompt, they drift out of date and override your canonical source files.

---

## What you just learned

You wired a scheduled task to orchestrate the full Verdal content pipeline, so Claude produces, files, and tracks a week of drafts without a manual trigger.

## You finished Module 2

Here is what you built across the six lessons:

- **Lesson 1:** Set up the Verdal project folder and loaded brand context into Claude via a structured context layer.
- **Lesson 2:** Wrote reusable skills for each content type and stored them in the project folder.
- **Lesson 3:** Built the content planner spreadsheet as the command center and status tracker.
- **Lesson 4:** Ran the repurposing pipeline - turning one blog post into social, carousel, and newsletter formats in a single Cowork session.
- **Lesson 5:** Added the distribution layer - pushing drafts to Notion and WordPress and syncing status back to the planner.
- **Lesson 6:** Put the whole engine on a weekly schedule so it runs without you.

The result is a content system that reads its own brief, produces on-brand drafts, files them, and reports back - every Friday, before you sit down.

Next: [Module 3 - Claude Skills Deep Dive](../module-3-skills/README.md)
