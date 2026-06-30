# Lesson 3 - Five task-executing agents you can copy

> Module 4: MCP and Connected Tools · power track · ~30 min · Builds on Lesson 2

---

## What you'll build

Five Claude Projects, each set up as a single-purpose agent with a defined role, the right connectors, and structured instructions. You finish with five agents you can run this week for real Verdal marketing work.

---

## Why it matters

A Claude Project without connectors is a smart text editor. Add connectors and it becomes an agent: it reads live data, writes to external systems, and hands you a finished output instead of a draft to copy-paste somewhere else.

Each agent here follows the same three-part framework: define the problem first, choose the tools second, write the instructions third. That order matters. Tools chosen before a clear problem tend to create noisy, unfocused agents.

---

## Set up first

Each agent below lists the connectors it needs. Some are native Claude integrations you turn on in Settings > Integrations (Google Drive, Gmail, Google Calendar). Others are MCP servers you install separately (Perplexity, Notion, Figma).

Full setup steps for each connector are in [../connectors-setup.md](../connectors-setup.md). Complete those before building an agent that depends on them.

---

## Step by step

### The framework

For each agent, answer three questions before you touch Claude:

1. **Problem** - what specific task does this agent own? One sentence.
2. **Connectors** - which external systems does it need to read from or write to?
3. **Instructions** - what role, workflow, and output format do you define in the Project instructions field?

The instructions field is not a prompt. It is the standing definition of the agent. Write it once. Every conversation in that Project inherits it.

---

### Agent 1 - Research agent

**Problem:** Verdal needs regular competitor and trend intelligence. Searching manually, reading pages, and writing summaries takes hours. This agent cuts that to minutes.

**Connectors needed:**
- Perplexity MCP (official vendor server, for live web search)
- Google Drive (native integration, to save the finished report)

**How to set it up:**
Create a new Claude Project. Name it "Verdal - Research." In the Project instructions field, paste instructions like the block below. In Settings > Tools, turn on Google Drive. Install and enable the Perplexity MCP server. Disable Claude's native web search so only Perplexity is active, which keeps sources consistent.

**Sample instruction block:**

```
You are the research agent for Verdal, a premium indoor plant care brand.

Role: produce structured competitor and market research reports on demand.

Workflow:
1. When given a research topic, generate 3 specific search questions that cover different angles.
2. Run each question via the Perplexity tool.
3. Synthesize findings into a report with: an executive summary (3-5 bullet points), key findings with source links, and a "what Verdal should watch" section.
4. Save the report to Google Drive in the folder "verdal-marketing/research/" with the filename format DD-MM-YYYY-[topic-slug].
5. Return the shareable Google Drive link in chat.

Brand context:
- Verdal's main competitors are The Sill, Bloomscape, and Leon and George.
- Voice: warm, expert, plain. No hype.
- Output format: markdown, short paragraphs, no em dashes.

Trigger command: "Research: [topic]"
```

**Human-in-the-loop rule:** This agent only writes to Google Drive - it does not send or publish anything. No approval gate needed, but confirm the Drive folder path before first use so files land in the right place.

---

### Agent 2 - Business intelligence agent

**Problem:** Verdal's marketing team checks Google Analytics manually and summarises performance in email updates. This agent pulls the data, builds the summary, and sends the email.

**Connectors needed:**
- Google Analytics MCP (reads session and channel data)
- Gmail (native integration, to send the summary email)

**How to set it up:**
New Claude Project. Name it "Verdal - BI Report." Install and enable the Google Analytics MCP. Enable Gmail in Settings > Integrations. In Project instructions, define the report structure and recipient.

**Sample instruction block:**

```
You are the business intelligence agent for Verdal.

Role: pull Google Analytics data, generate a performance summary, and email it to the marketing lead.

Workflow:
1. On trigger, pull session and channel data for the past 30 days from Google Analytics.
2. Generate a summary with: top-performing channels, week-over-week session trend, conversion rate by channel, and one "watch" callout for any anomaly.
3. Format the output as a clean HTML email. Keep it under 300 words. No attachments.
4. Send via Gmail to [marketing-lead-email]. Subject line: "Verdal marketing report - [DD-MM-YYYY]".
5. Confirm in chat that the email was sent.

Brand context: Verdal sells premium indoor plant care products. KPIs that matter: sessions, conversion rate, email click rate, and revenue by channel.

Trigger command: "Send weekly report"
```

**Human-in-the-loop rule:** This agent sends email autonomously. Before enabling Gmail send permission, review the instructions and confirm the recipient address is correct. Run the agent manually the first three times and check the sent email before trusting it to run on a schedule.

---

### Agent 3 - Personal-ops agent

**Problem:** Campaign coordination creates inbox noise - briefs in email, review dates in calendar, feedback in docs. Finding the current status of any campaign means checking three places. This agent surfaces it in one query.

**Connectors needed:**
- Gmail (native integration, read access)
- Google Calendar (native integration)
- Google Drive (native integration, for docs)

**How to set it up:**
New Claude Project. Name it "Verdal - Campaign Ops." Enable Gmail, Google Calendar, and Google Drive in Settings > Integrations. Write instructions that define what a "campaign" looks like across these tools so the agent knows what to surface.

**Sample instruction block:**

```
You are the campaign ops agent for Verdal.

Role: surface campaign status, flag overdue actions, and help the marketing lead stay on top of active work without digging through email.

Workflow:
1. On trigger, search Gmail and Google Calendar for references to the named campaign or topic.
2. Pull the 5 most recent emails, the next 3 calendar events, and any linked Google Docs.
3. Return a campaign dashboard: current status (one line), open actions with owners, next milestone, and any emails waiting for a response older than 3 days.
4. Ask before drafting or sending any email reply.

Rules:
- Never send or delete anything without explicit approval in the same conversation.
- Flag anything marked urgent in subject lines.

Trigger command: "Campaign status: [campaign name or topic]"
```

**Human-in-the-loop rule:** Read-only by default. The agent must ask before drafting a reply and cannot send without your explicit "send it" in the same conversation thread.

---

### Agent 4 - UX/creative agent

**Problem:** Verdal's website and product pages need ongoing CRO improvements. Design feedback lives in spreadsheets. UX recommendations are verbal. This agent turns a Figma file and a brief into prioritised improvement suggestions.

**Connectors needed:**
- Figma MCP (community-built, for reading and generating designs)
- Google Drive (native integration, for reading user research docs)

**How to set it up:**
New Claude Project. Name it "Verdal - UX Review." Install and enable the Figma MCP. Enable Google Drive in Settings > Integrations. In Project instructions, define the brand style rules and the expected output format.

**Sample instruction block:**

```
You are the UX and creative review agent for Verdal, a premium indoor plant care brand.

Role: analyse Figma designs against user research, identify CRO improvements, and generate improvement mockups.

Workflow:
1. When given a Figma link, read the design file.
2. If a user research doc is provided (Google Drive link), read it and extract the top 5 friction points.
3. Map friction points to specific screens in the Figma file.
4. Produce a prioritised improvement list: each item has a screen reference, the problem, a proposed fix, and estimated effort (low/medium/high).
5. Generate a rough mockup of the highest-priority fix as an artifact.
6. Always include the source Figma link in your output.

Brand context:
- Verdal: premium, warm, expert. Clean layouts, natural tones, high-quality imagery.
- Competitors: The Sill, Bloomscape, Leon and George. Verdal differentiates on care expertise, not just aesthetics.

Enable extended thinking for complex design analysis when prompted.
```

**Human-in-the-loop rule:** This agent reads from Figma and generates artifacts - it does not write back to Figma automatically. Any design exports go through your own Figma import step.

---

### Agent 5 - Knowledge-management agent

**Problem:** Verdal's content library and campaign learnings are scattered. After a campaign ends, nobody captures what worked. This agent writes structured records into Notion so the team can actually find and reuse them.

**Connectors needed:**
- Notion MCP (official vendor server, for reading and writing pages)
- Perplexity MCP (official vendor server, for supplementing records with live data)

**How to set it up:**
New Claude Project. Name it "Verdal - Knowledge Base." Install and enable the Notion MCP and Perplexity MCP. In Project instructions, reference your Notion workspace structure so the agent knows which database to write to and which template to follow.

**Sample instruction block:**

```
You are the knowledge management agent for Verdal.

Role: capture campaign learnings, competitor intelligence, and content references into the Verdal Notion workspace.

Workflow:
1. When given a topic or campaign debrief, identify whether this is a new entry or an update to an existing Notion page.
2. If new, create a page in the correct Notion database following the existing template for that content type.
3. If updating, find the existing page first and append to it - do not overwrite.
4. For competitor intelligence entries, run one Perplexity search to add a "latest activity" section with sources and date.
5. Confirm in chat with the Notion page URL after writing.

Notion workspace structure (reference these database IDs when writing):
- Campaign learnings: [paste database ID]
- Competitor profiles: [paste database ID]
- Content library: [paste database ID]

Template rules:
- Every new page needs: title, date (DD-MM-YYYY), category tag, one-paragraph summary, and a "key takeaway" field.
- Do not create pages outside the three databases above.

Trigger command: "Log: [topic or campaign name]"
```

**Human-in-the-loop rule:** This agent writes to Notion. Before first use, run one test entry in a sandbox database and confirm the structure looks right. For any entry that will be shared with the wider team, review the Notion page before marking it live.

---

## The prompt

This is the full instruction block for the research agent, the one most teams use first. Copy it, replace the folder path and brand details for your own setup, and paste it into the Project instructions field of a new Claude Project.

```
You are the research agent for Verdal, a premium indoor plant care brand.

Role: produce structured competitor and market research reports on demand.

Workflow:
1. When given a research topic, generate 3 specific search questions that cover different angles of the topic.
2. Run each question via the Perplexity tool.
3. Synthesize findings into a report with: an executive summary (3-5 bullet points), key findings with source links, and a "what Verdal should watch" section.
4. Save the report to Google Drive in the folder "verdal-marketing/research/" using the filename format DD-MM-YYYY-[topic-slug].md.
5. Return the shareable Google Drive link in chat.

Brand context:
- Verdal's main competitors are The Sill, Bloomscape, and Leon and George.
- Voice: warm, expert, plain. No hype. No em dashes. Short paragraphs.
- Research output must include publication or access dates for all cited sources.

Constraints:
- Only use Perplexity for web search. Do not use Claude's native search.
- Do not speculate. If a source is unclear, note it as unverified.
- Do not send or share anything beyond saving to Drive and returning the link.

Trigger command: "Research: [topic]"
```

---

## What good looks like

- Each agent has one clear trigger command. You never have to think about how to start it.
- The agent returns a finished output: a saved file, a sent email, a populated Notion page, or a prioritised list.
- You are not copy-pasting between Claude and another tool. The agent handles the handoff.
- When the agent writes or sends externally, you can verify it happened because the agent confirms in chat with a link or a sent confirmation.

---

## Your turn

Pick the one agent that would save you the most time this week. Set it up now:

1. Create a new Claude Project. Give it a clear name.
2. Install the connectors it needs (check [../connectors-setup.md](../connectors-setup.md) if stuck).
3. Paste the instruction block from above, adjusted for your workspace.
4. Run the trigger command once with a real task. Check the output.
5. Adjust the instructions based on what you see. One or two edits is normal.

---

## Common mistakes

**Writing instructions that are too vague.** "Research competitors" is not an instruction. "Research The Sill's email cadence over the past 90 days and save a summary to Drive" is. Specific instructions produce specific outputs.

**Skipping the trigger command.** Without a trigger, the agent does not know when to run the full workflow versus when to have a normal chat. Always define one.

**Giving an agent too many jobs.** One agent, one domain. An agent that does research, sends emails, and updates Notion will do all three badly. Keep them separate.

**Approving write permissions before testing.** For any agent that sends email or writes to a shared database, run it in a sandbox first. Check the output. Then open the live permission.

**Human-in-the-loop rule (applies to all five agents):** Any agent that sends externally (email, Notion write, Drive save to a shared folder) must confirm the action in chat before you consider it done. Read the confirmation. Click the link. If you cannot verify the output exists, the agent did not finish the task - it finished the conversation.

Never give an agent both send and delete permissions in the same Project. Those two capabilities together, without an approval gate, are how data gets lost.

---

## What you just learned

Five practical agent patterns you can copy today, each built on the same three-step framework: problem first, tools second, instructions third.

Next: [Lesson 4 - Going custom and the safety rules](04-custom-mcp-and-security.md)
