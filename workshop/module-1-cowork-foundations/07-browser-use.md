# Lesson 7 - Browser use

> Use case 7 of 8 · ~25 min · Builds on Lesson 6

## What you'll build

An AI search visibility tracker where Cowork actually opens ChatGPT, Perplexity, and Google AI mode, searches your target prompts one by one, and writes everything into an Excel file with a raw-data tab and an insights tab built for week-over-week tracking.

## Why it matters

Some research only exists inside a live browsing session. There is no file to upload and no API to call - you need someone to go to the site, type the query, and read what comes back. Cowork can do that work for you. Instead of spending an hour clicking through three AI search engines and copying results into a spreadsheet, you hand Cowork a prompt list and let it run in the background while you do something else. The result is a structured tracker you can rerun every week to see whether your brand visibility is improving.

## Connect this first

This lesson needs Cowork to control a real browser:

- Enable **Claude in Chrome** under Customize > Connectors
- Install the **official Claude extension** from the Chrome Web Store and pin it

Steps and tips are in [connectors-setup.md](../connectors-setup.md#module-1-tools). Set it up, confirm the extension is installed and signed in, then continue.

## Step by step

1. **Enable the Chrome connector.** In Claude desktop, go to Customize > Connectors. Find "Claude in Chrome" and toggle it on. This is the permission that lets Cowork control a browser session on your machine.

2. **Install the official Chrome extension.** Open the Chrome Web Store and search for "Claude." Install the extension published by Anthropic. Do not install third-party alternatives - only the official Anthropic extension works with Cowork's browser tool.

3. **Build your prompt list.** In your `verdal-marketing/context/` folder, create a plain text file called `ai-search-prompts.txt`. Write one target query per line - the searches a potential customer might run where you want Verdal to appear. Aim for 10 to 20 prompts to start. Examples:

   ```
   best indoor plant care subscription
   how to care for a monstera indoors
   premium houseplant delivery Portland
   plant care tips for beginners
   best plant subscription box 2024
   ```

4. **Run the prompt.** Paste the prompt from the section below into Cowork and send it.

5. **Grant browser permission.** Cowork will ask for permission to open and control a Chrome window. Click Allow. A browser session will open on your screen - you can minimize it and work on other things.

6. **Let it run in the background.** The task takes roughly 15 to 20 minutes. Cowork works through each prompt on each platform sequentially. You do not need to watch it. When it finishes, it will notify you and write the Excel file to your projects folder.

7. **Review the tracker.** Open the Excel file. Check the raw-data tab first, then switch to the insights tab for the cross-platform summary. Prompts where Verdal does not appear will be highlighted. In week one the week-over-week trend column is blank - it fills in when you rerun the same task next week.

## The prompt

```
Read the file at verdal-marketing/context/ai-search-prompts.txt.

For each prompt in the list, open Google AI mode (google.com), ChatGPT (chatgpt.com), and Perplexity (perplexity.ai) and run the exact query. For each result, capture:
- The platform (Google AI mode, ChatGPT, Perplexity)
- The exact prompt
- Whether Verdal appears in the answer (yes / no / partial mention)
- If yes, how it is described and where in the response it appears
- The top 3 brand URLs cited by the platform for that query
- The top 2 to 3 competing brands mentioned

Once all prompts are done, create an Excel file at verdal-marketing/projects/ai-visibility-tracker.xlsx with:
1. A raw-data tab with one row per prompt per platform, columns for all fields above, and conditional formatting to highlight rows where Verdal does not appear (red fill).
2. An insights tab that summarizes: overall visibility score across platforms, the 5 prompts with lowest Verdal presence, the top competing brands mentioned, and gap opportunities where competitors appear but Verdal does not. Add a simple bar chart showing visibility by platform and a table of top cited URLs. Label the data with today's date so future runs add a new dated tab and the insights tab updates automatically.

Use the brand name Verdal. Run everything in the background and notify me when the file is ready.
```

## What good looks like

- An Excel file saved to `verdal-marketing/projects/` with clear tab labels and today's date
- Raw-data tab with one row per prompt per platform, red highlighting on any row where Verdal is absent
- A column for top cited brand URLs so you can see which pages are getting picked up by AI engines
- An insights tab with a cross-platform visibility score, a list of top competing brands, and a gap-opportunity table calling out prompts where competitors rank but Verdal does not
- Color coding and at least one chart (bar chart of visibility by platform works well)
- Week-over-week trend columns that are blank in week one and fill in on subsequent runs, giving you a slope to track over time

## Your turn

**Exercise 1 - Verdal.** Create `verdal-marketing/context/ai-search-prompts.txt` with 10 prompts a new plant parent might search. Run the prompt above. Note which platforms mention Verdal and which mention The Sill, Bloomscape, or Leon and George instead.

**Exercise 2 - Your own brand.** Swap Verdal for your brand in the prompt. Add your three closest competitors to the insights tab instructions so the gap analysis compares against them directly. Run one full visibility pass and look at where your brand is missing versus where competitors consistently appear.

## Common mistakes

- **Installing the wrong Chrome extension.** Third-party Claude extensions will not work with Cowork's browser tool. Only the extension published by Anthropic on the Chrome Web Store connects correctly.
- **A vague or inconsistent prompt list.** If your prompts change between runs, the week-over-week comparison is meaningless. Lock the list in a file and treat it as a standing asset. Only add or retire prompts intentionally, and note the date when you do.
- **Skipping the browser permission step.** If you dismiss or deny the permission request, Cowork cannot open a Chrome session and the task will stall. Click Allow when prompted.
- **Expecting instant results.** This task runs across three platforms for every prompt in your list. Budget 15 to 20 minutes. Start it before a meeting, not when you need results in five minutes.
- **Not opening the raw-data tab first.** The insights tab synthesizes the data, but spot-checking a few raw rows tells you whether the capture quality is good before you trust the summary.

## What you just learned

Cowork can browse real websites and turn what it finds into a structured deliverable - no APIs, no manual copying. Next: [Lesson 8 - Scheduled tasks](08-scheduled-tasks.md), where you put a workflow like this on autopilot.
