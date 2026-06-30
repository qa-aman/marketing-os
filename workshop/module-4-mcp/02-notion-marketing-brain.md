# Lesson 2 - Notion as your marketing brain

> Module 4: MCP and Connected Tools · power track · ~25 min · Builds on Lesson 1

---

## What you'll build

By the end of this lesson you will have a Claude Project that reads from and writes to a live Notion workspace. You will run three real workflows against Verdal's marketing setup: scheduling content to a calendar database, generating a campaign status dashboard, and enriching a review database with AI-assigned labels. Every workflow follows the same loop: pull context from Notion, synthesise with Claude, write the result back to Notion.

---

## Why it matters

Most marketing teams store their source of truth in Notion, then manually copy information into AI tools and back again. That copy-paste step is where context gets lost and errors creep in. When Claude connects directly to Notion via MCP, the hand-off disappears. Claude reads your live data, reasons over it, and writes structured results back into the same database, in one session, without a human relay.

The gather-synthesise-act loop unlocks workflows that feel closer to a junior team member than a chat tool. You ask for a dashboard; Claude pulls the tracker, runs the numbers, and returns a formatted view. You paste a new blog post; Claude slots it into the content calendar with the right platform tags and status. You point Claude at 50 customer reviews; Claude labels each row with a pain point category and priority level.

Notion also pairs well with other connectors. Add a design tool connector alongside the Notion connector and you can generate assets and log the links back to the same calendar row, all in one prompt chain.

---

## Set up first

**Connect the Notion MCP connector**

1. In Claude, open Settings, go to Connectors, and search for Notion in the directory.
2. Click Connect, choose your workspace, and grant the requested permissions.
3. Confirm the connector appears as active before opening a new conversation.

For the full step-by-step with screenshots and permission details, see [../connectors-setup.md](../connectors-setup.md).

**Prepare a test database in Notion**

You need at least one real Notion database to practise against. If you are using Verdal as your worked brand, create a simple content calendar with these columns: Title, Status (Not started / In progress / Published), Publish Date, Platform (Blog / Instagram / Newsletter), and Content Body. Add two or three placeholder rows so Claude has something to read. Name it "Verdal Content Calendar".

---

## Step by step

### 1. Create a Claude Project for Verdal marketing

Open Claude and create a new Project. Name it "Verdal Marketing OS". In the custom instructions paste the following block, replacing the bracketed values with your actual Notion database names once you have confirmed them.

```
You are Verdal's marketing assistant. Verdal is a premium indoor plant care brand. Voice: warm, expert, plain. No jargon. No em dashes.

Personas:
- Plant-proud Priya: established plant parent, values expert guidance, browses Instagram and newsletters
- New-plant Nate: bought his first plant recently, needs reassurance and simple care steps

Tools available: Notion MCP connector.

Working folder: verdal-marketing/ (subdirs: context/, templates/, projects/)

Default workflow:
1. Gather - read from the specified Notion database before generating anything.
2. Synthesise - reason over what you find alongside any input I provide.
3. Act - write results back to Notion with correct field values, or return a formatted summary if I ask for a dashboard view.

When I type "dashboard", pull the Verdal Campaign Tracker database, summarise status by campaign, flag anything overdue, and return a plain-language table.
```

### 2. Workflow A - schedule content to the calendar

Paste a piece of long-form content into the Project chat, for example a 400-word blog post about repotting succulents. Then run this prompt:

```
Read the Verdal Content Calendar database in Notion. Based on the blog post I just pasted, create three new rows:

Row 1 - Blog post version, status Not started, publish date 14-07-2026, platform Blog
Row 2 - Instagram caption (under 150 words, Priya-facing, warm tone), status Not started, publish date 16-07-2026, platform Instagram
Row 3 - Newsletter intro paragraph (90 words, Nate-facing, reassuring tone), status Not started, publish date 18-07-2026, platform Newsletter

Populate the Title and Content Body fields for each row. Confirm when done.
```

Claude will call the Notion connector, locate the database, and write the three rows directly. You will see the entries appear in your Notion workspace within seconds.

### 3. Workflow B - generate a campaign status dashboard

Create a second Notion database called "Verdal Campaign Tracker" with columns: Campaign Name, Status, Owner, Due Date, Priority (High / Medium / Low). Add four or five rows with realistic Verdal campaigns (for example: Spring Repot Guide launch, Summer care email series, New-plant starter kit promo).

Then type the single command you configured in the custom instructions:

```
dashboard
```

Claude reads the tracker, counts campaigns by status, identifies overdue items based on Due Date versus today's date, and returns a plain-language table with a short summary of what needs attention. No additional prompt engineering needed; the custom instruction carries all the formatting rules.

When the tracker changes, update the rows in Notion and type "dashboard" again. The view regenerates with fresh data.

### 4. Workflow C - enrich a database with AI-assigned labels

This workflow shows the gather-synthesise-act loop at its clearest. Create a third Notion database called "Verdal Customer Reviews" with one existing column: Review Text. Paste in ten to fifteen real or realistic customer reviews as separate rows (for example: "My monstera dropped three leaves after I used the fertiliser", "The care card was so helpful, Nate would love this").

Then run:

```
Read the Verdal Customer Reviews database. For each row, add three new properties with the values below. Create the properties if they do not exist.

Pain Point Type: choose from [Care guidance needed, Product issue, Packaging, Positive - no action, Shipping]
Persona Match: choose from [Priya, Nate, Both, Unknown]
Priority: choose from [High, Medium, Low] based on whether the review signals a product or care failure (High), a general question (Medium), or positive feedback (Low)

Read each row, classify it, and write the labels back. Confirm row count when done.
```

Claude reads each row, reasons over the review text, and writes the three labels back to Notion in sequence. For a database with 15 rows this takes roughly 60-90 seconds. You end up with a structured, filterable database from what was raw unstructured text.

---

## The prompt

The reusable prompt pattern across all three workflows is:

```
Read [database name] in Notion.
[Describe what to do with the data - create rows / classify rows / summarise rows.]
[Specify exact field names and allowed values.]
Confirm when done.
```

Always name the database explicitly. Always list the field names and, for select properties, the allowed values. Claude cannot invent a new Notion select option that does not already exist; if you want "High / Medium / Low" as a Priority field, those options must exist in Notion before Claude writes to them, or you must tell Claude to create the property from scratch.

---

## What good looks like

After Workflow A: three new rows appear in the Verdal Content Calendar with correct dates, platforms, and content bodies. The tone in the Instagram row reads warmer and shorter than the blog row. The newsletter row opens with a line aimed at someone new to plants.

After Workflow B: Claude returns a table with campaign count by status, a list of any rows where Due Date is before today, and one sentence on what to prioritise. It takes under ten seconds.

After Workflow C: every review row in Notion has all three new properties populated. Filtering by Pain Point Type = "Care guidance needed" returns a clean list. No manual tagging required.

---

## Your turn

Pick one of your own content or campaign databases in Notion. Run Workflow A with a recent piece of long-form content you have published or drafted. Check that Claude reads the correct database before writing, and that all field values land in the right columns.

If you do not have a Notion workspace, spend five minutes creating a free account and a single database with four columns: Title, Status, Platform, and Date. That is enough to run all three workflows.

---

## Common mistakes

**Not confirming the database name before writing.** Claude will attempt to match the name you give it. If you have two databases with similar names, it may write to the wrong one. Before running any write workflow, ask Claude to "list the databases it can see in this workspace" and confirm the exact name.

**Select properties that do not exist yet.** If your Notion database has a "Status" column with options "Draft" and "Live" and you ask Claude to set Status to "Not started", it will fail or skip the field. Either add the option in Notion first, or tell Claude to create the property and define the options.

**Skipping the custom instructions.** Running these workflows in a plain chat window works, but you lose the command shortcuts and the consistent voice rules. Always open the Verdal Marketing OS Project before starting.

**Long databases without a row limit.** If your review database has 200 rows, the enrichment workflow will take several minutes and may hit connector timeouts. Start with 15-20 rows to validate the logic, then run in batches.

**Connection drops mid-task.** The Notion connector occasionally drops during long write operations. If Claude stops mid-way through enriching a database, relaunch the Project and ask it to continue from the row where it stopped. Check which rows already have labels before re-running to avoid duplicates.

---

## What you just learned

The Notion connector turns Claude from a content generator into a live database operator - reading, classifying, scheduling, and writing back in one session using the gather-synthesise-act loop.

Next: [Lesson 3 - Five agents to copy](03-five-agents-to-copy.md)
