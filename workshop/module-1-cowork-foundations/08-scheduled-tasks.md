# Lesson 8 - Scheduled tasks

> Use case 8 of 8 · ~20 min · Builds on Lesson 7

## What you'll build

A recurring scheduled task that runs one of your existing workflows automatically at a fixed time each week. By the end, you'll have a self-updating marketing control center inside Cowork, combining scheduled tasks with the live artifacts from Lesson 5.

## Why it matters

Every workflow you repeat on a schedule is pure overhead. A weekly competitive digest, a monthly newsletter draft, a Friday content brief - these are not creative decisions, they are maintenance. Scheduling them means the output shows up in your project folder without you touching anything. Your attention goes to acting on the work, not producing it.

## Step by step

1. Open Cowork and click into the Verdal project you have been building throughout this course.

2. In the left sidebar, find the **Schedule** section and click it. This is where all recurring tasks for this project live.

3. Click **New scheduled task**.

4. Give the task a clear name. For Verdal, use something like "Weekly competitive digest - Verdal." Vague names become confusing once you have five scheduled tasks running.

5. In the description field, write one sentence explaining what this task does and who it is for. Example: "Summarizes competitor activity each week so the content team can respond in Monday planning."

6. In the details field, paste the full prompt you want to run. This is the same prompt you tested manually in an earlier lesson - just copy it over. The prompt should be specific: which files to read, what to produce, where to save the output, and what format to use.

7. In the folder selector, point the task at `verdal-marketing/`. If the task reads from `context/` and writes to `projects/`, make sure those subfolders already exist and are not empty.

8. Set the frequency. For a weekly competitive digest, choose **Every Sunday at 9:00 am**. For a monthly newsletter draft, choose the first Monday of the month. Pick a time when you are not in the middle of other work so the output is ready when you need it.

9. Save the task. It now appears in your Schedule list with its next run time shown.

10. To review or change it later, click the task name. You can edit the prompt details, change the folder, or adjust the frequency at any time. The task does not re-run unless you trigger it manually or wait for the scheduled time.

11. To build your marketing control center: go back to the live artifact you created in Lesson 5. Pin it to the Verdal project overview. Now your artifact reflects the latest output from every scheduled task that has run. The overview updates itself each time a task completes, and you open one screen to see where things stand across content, campaigns, and competitors.

## The prompt

Paste something like this into the details field of a weekly competitive digest task:

```
Today is [auto-filled by Cowork]. You are running the weekly competitive digest for Verdal, a premium indoor plant care brand based in Portland, OR.

Read all files inside verdal-marketing/context/competitors/. Look for anything added or updated in the last 7 days.

Summarize:
- Any new product launches or promotions from the top 3 competitors
- Price changes or shipping offers
- New content themes or campaign angles you noticed
- One tactical recommendation for Verdal based on this week's activity

Write the summary in plain language. Keep it under 400 words. Use bullet points for the competitor findings and a short paragraph for the recommendation.

Save the output to verdal-marketing/projects/competitive-digest-[DD-MM-YYYY].md using today's date in the filename.
```

## What good looks like

- The task appears in the Schedule list with a name, next run time, and folder shown at a glance
- On Sunday morning, the digest file appears in `verdal-marketing/projects/` with no action from you
- The output follows the format and length you specified in the prompt details
- The live artifact on your Cowork overview refreshes to reflect the new file
- You can open the task at any time, read the last output, and edit the prompt if the output drifted from what you wanted

## Your turn

**Exercise 1 - Verdal practice:** Schedule the weekly competitive digest described above. Use `verdal-marketing/` as the folder, set it to run every Sunday at 9:00 am, and paste the prompt from the section above into the details field. Save it, then open it again to confirm the name, folder, and frequency are all correct.

**Exercise 2 - your own brand:** Pick one recurring task you currently do by hand. A weekly content brief, a monthly campaign summary, or a Friday lead-generation report are all good candidates. Write the prompt manually first and run it once to confirm the output is right. Then schedule it in Cowork with a realistic frequency. Do not schedule anything you have not already tested manually.

## Common mistakes

- Scheduling a workflow before you have tested it manually even once. If the prompt is vague when you run it by hand, it will produce inconsistent output on autopilot.
- Writing task details that are too short or too open-ended. "Summarize competitors" will drift every week. Specify the files, the format, the word count, and the output location.
- Setting a frequency that is too high. A daily newsletter draft creates noise faster than anyone can act on it. Weekly is the right default for most content tasks; monthly for reports.
- Forgetting to point the task at the correct subfolder. If your prompt writes to `projects/` but the task folder is set to `context/`, the output lands in the wrong place or fails silently.
- Never revisiting a scheduled task after the first few runs. Check the output after the first two or three runs to catch drift early.

## What you just learned

You can schedule any prompt you have already tested to run automatically, turning your most repetitive marketing workflows into a system that produces output without your involvement.

---

## You finished the course

Here is everything you can now do with Claude Cowork:

- [ ] **Lesson 1 - Workspace and context:** Set up a project folder and load brand context so every task knows who you are and who you are talking to
- [ ] **Lesson 2 - Templates:** Build reusable prompt templates that produce consistent output without rewriting from scratch
- [ ] **Lesson 3 - Projects:** Organize work into focused projects with their own folders, files, and history
- [ ] **Lesson 4 - Connectors:** Connect Cowork to external tools so it can pull live data without copy-pasting
- [ ] **Lesson 5 - Live artifacts:** Create pinned documents that update themselves and give you a real-time view of your marketing
- [ ] **Lesson 6 - Skills and plugins:** Extend Cowork with specialized capabilities for tasks it cannot handle out of the box
- [ ] **Lesson 7 - Browser use:** Let Cowork act in a browser window on your behalf, researching and gathering information from live sites
- [ ] **Lesson 8 - Scheduled tasks:** Automate recurring workflows so the output appears in your project folder on a fixed schedule

The real win is not any single lesson. It is combining all of them. A connected workspace with loaded context, reusable templates, live data from connectors, a pinned artifact that refreshes, and scheduled tasks running in the background adds up to a marketing system that largely runs itself. Your role shifts from producing the work to reviewing and acting on it.

The next step is simple: rebuild every exercise you completed using Verdal's brand with your own brand instead. Start with Lesson 1 and replace the Verdal files with your own context. By the time you reach Lesson 8 again, you will have a working system for your actual marketing, not a practice brand.

Return to the course overview: [README.md](../README.md)
