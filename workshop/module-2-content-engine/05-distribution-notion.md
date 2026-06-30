# Lesson 5 - The distribution layer: push to Notion, sync status back

> Module 2: The Content Engine · no-code track · ~20 min · Builds on Lesson 4

---

## What you'll build

A two-step distribution loop for Verdal's content. Cowork reads the content planner, pushes finished entries to a Notion content database (title, platform, publish date, post copy, and attached media), then writes the updated status back to the planner so every row stays current.

By the end of this lesson, a finished Verdal post will go from "Complete" in your spreadsheet to a populated Notion card, and your planner will reflect "In Notion" without you touching a single row manually.

---

## Why it matters

Production and distribution are two different problems. Lesson 4 left you with finished content sitting in your output folder and a planner full of "Complete" statuses. That content isn't useful until it reaches the place your team (or scheduler) actually works from.

Notion is that place for most small marketing teams. It gives you a visual calendar, shareable links, and a single database your whole team can filter by platform, date, or status, without anyone needing to dig through folder hierarchies.

The planner stays the command centre. Notion is the destination. The loop closes when the planner knows the content landed.

Module 4 goes deeper on Notion workflows, approval queues, and team handoffs. Here, the only job is getting content in and status back.

---

## Set up first

**Connect Notion to Cowork.** In Claude desktop, open Settings, go to Connectors, and add Notion. You'll be asked to authorise your Notion workspace. Select the workspace and the specific pages or databases Cowork should access. See [../connectors-setup.md](../connectors-setup.md) for the step-by-step walkthrough. Once connected, Cowork can read and write to any Notion database you've shared with it.

**Create a Notion content database.** In Notion, create a new database (inline or full-page, either works) and add these properties:

| Property | Type |
|---|---|
| Title | Title |
| Platform | Select |
| Publish date | Date |
| Status | Select (options: Queued, Published) |
| Post copy | Text |
| Output file | Text |

Name the database something clear, like "Verdal Content Calendar". Share it with the Notion connector when prompted. You only need to do this once.

---

## Step by step

**1. Confirm your planner has "Complete" rows.**
Open `verdal-marketing/projects/content-planner.xlsx`. Check that the rows you produced in Lesson 4 have "Complete" in the Status column and a file path in the Output column. Cowork reads those two fields to know what to push.

**2. Open a Cowork session with your Verdal project active.**
Your `CLAUDE.md` already points to the brand context and skills folder. You do not need to re-explain the brand.

**3. Run the distribution prompt** (see The prompt below).

**4. Watch Cowork work through the rows.**
Cowork reads each "Complete" row, picks up the output file path, reads the finished content from that file, and creates a new entry in your Notion database. If a row has a media file attached (image path in a Media column), it attaches that too.

**5. Cowork writes status back.**
After each successful push, Cowork updates that row's Status to "In Notion" and fills a Notion URL column with the direct link to the card. The planner now reflects the live state.

**6. Check Notion.**
Open your Verdal Content Calendar database. You should see one card per pushed row, with copy, platform, and publish date populated.

---

## The prompt

Paste this into Cowork with your Verdal project active:

```
Read the content planner at verdal-marketing/projects/content-planner.xlsx.

Find every row where Status = "Complete".

For each row:
1. Read the finished content from the file path in the Output column.
2. Create a new entry in the Notion database "Verdal Content Calendar" with:
   - Title: the post title or topic from the planner row
   - Platform: the Platform value from the planner
   - Publish date: the Scheduled Date value from the planner
   - Status: Queued
   - Post copy: the full content from the output file
   - Output file: the file path from the planner
3. If the row has a value in the Media column, attach that file path in the Output file field as a note.
4. After each successful push, update that row's Status to "In Notion" in the planner.

Process all "Complete" rows before finishing. Report how many entries were pushed and flag any rows that failed with a reason.
```

---

## What good looks like

- Every "Complete" row in your planner becomes "In Notion" after the run.
- Notion shows one card per piece of content, with copy and metadata filled in, no blank fields.
- The planner's Status column is updated automatically, no manual edits needed.
- Cowork's summary tells you exactly how many rows were pushed and flags any that failed (usually a missing output file or a mismatched column name).

---

## Your turn

1. Make sure at least three rows in your content planner have Status = "Complete" with valid output file paths.
2. Run the prompt above.
3. Open Notion and confirm the cards appeared with the right copy and dates.
4. Check your planner. Confirm the Status column updated to "In Notion".
5. Pick one card in Notion and verify the copy matches the output file exactly, no truncation.

---

## Common mistakes

**Column names don't match.** The prompt references "Status", "Output", "Platform", and "Scheduled Date" exactly. If your planner uses different headers ("Pub Date", "File Path", etc.), either update the prompt to match or rename the columns. One mismatch will cause Cowork to skip those rows.

**Notion database not shared with the connector.** If Cowork can't see the database, re-open Settings and re-authorise the Notion connector. Select the specific database explicitly, not just the parent page.

**Output file path is relative.** Make sure the path in your planner points to a real file Cowork can read. Full paths from the project root work best, for example `verdal-marketing/output/social/30-06-2026-ficus-post.md`.

**Running the prompt on rows already in Notion.** The prompt filters on Status = "Complete", so rows already marked "In Notion" are skipped. If you accidentally re-run, Cowork will report zero rows pushed, not duplicates.

**Media column is empty when there are images.** If Lesson 4 generated images but your planner has no Media column, add one and fill in the image file paths before running the distribution prompt. Cowork can only attach what the planner tells it is there.

---

## What you just learned

The gather-produce-distribute-sync loop is complete: content is produced, pushed to Notion, and the planner reflects current state, all from a single prompt.

Next: [Lesson 6 - Schedule the engine](06-schedule-the-engine.md)
