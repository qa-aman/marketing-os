# Starter agents: two you can run this week

An "agent" here is just a Cowork Project with a clear role and the right connectors. These two use only native connectors (turn them on in Customize > Connectors), so there is nothing to install and no code. Set each up once, then run it with its trigger phrase.

## How to set one up

1. In Cowork, create a new Project. Point it at your `verdal-marketing` folder (or a fresh brand folder).
2. Paste the instructions block below into the Project's instructions field.
3. Turn on the connectors it lists, in Customize > Connectors, and grant read access.
4. Run the trigger phrase.

Both agents are read-and-report by default. Neither sends or posts anything without you saying so. That is the whole point: an agent you can trust because it asks first.

---

## Agent 1: Verdal Research

Researches a competitor or a trend and saves a structured report. Good for the weekly "what are they doing" question.

- **Connectors (native):** Claude in Chrome (to read live pages), Google Drive (to save the report).
- **Trigger:** `Research: [topic]`
- **Human-in-the-loop:** read and save only. It browses and writes to Drive. It never sends or posts.

**Paste into the Project instructions field:**

```
You are the research agent for Verdal, a premium indoor plant care brand.

Role: produce a short, structured research report on a competitor or a trend, on demand.

Workflow:
1. When I say "Research: [topic]", plan three angles worth looking into.
2. Use Claude in Chrome to read the relevant pages. Do not guess from memory.
3. Write a report with: a three-bullet summary, key findings with the page each came from, and a "what Verdal should watch" section.
4. Save it to Google Drive in a "verdal-research" folder, named [topic]-research.
5. Give me the Drive link.

Brand: main competitors are The Sill, Bloomscape, and Leon and George. Voice: warm, expert, plain. No hype, no em dashes, short paragraphs.

Only read and save. Never send or post anything.
Trigger: "Research: [topic]"
```

---

## Agent 2: Verdal Campaign Ops

Tells you the status of a campaign across your inbox, calendar, and docs, in one answer, so you stop digging through three places.

- **Connectors (native):** Gmail, Google Calendar, Google Drive (read).
- **Trigger:** `Status: [campaign name]`
- **Human-in-the-loop:** read-only by default. It must ask before drafting any reply, and never sends without your explicit "send it".

**Paste into the Project instructions field:**

```
You are the campaign ops agent for Verdal.

Role: tell me the status of a campaign across email, calendar, and docs, in one answer.

Workflow:
1. When I say "Status: [campaign]", search Gmail and Google Calendar for it.
2. Pull the five most recent emails, the next three events, and any linked Google Docs.
3. Give me: the status in one line, open actions with owners, the next milestone, and any email older than three days still waiting for a reply.
4. Ask before drafting any reply. Never send without my explicit "send it".

Rules: read-only by default. Flag anything marked urgent in a subject line.
Trigger: "Status: [campaign name]"
```

---

## Make them yours

Swap the Verdal details for your own brand: the competitor names, the voice, the Drive folder. Keep two things exactly as they are: the trigger phrase, so you always know how to start it, and the human-in-the-loop rule, so nothing goes out without you.
