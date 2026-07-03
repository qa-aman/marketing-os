# Session 4 facilitator guide - Connect your tools

**Length:** 2 hours. **Audience:** non-technical marketers. **Example:** Verdal. **You need:** the Verdal folder on the demo machine, Cowork installed and signed in, a Gmail or Drive account signed in and ready for the connector demo, this guide, and the slides.

Goal for the room: by the end, every attendee has connected at least one external tool (Gmail or Drive) and watched Cowork pull live data into a Verdal file. They leave believing connectors change what is possible with a prompt.

Capabilities covered: Connectors (Google Workspace, Microsoft 365, connector library), Claude in Chrome.

---

## Run of show

| Segment | Time | Slide |
|---|---|---|
| Recap and promise | 0:00 - 0:05 | 1-2 |
| Teach: what connectors do, Google and Microsoft | 0:05 - 0:30 | 3-6 |
| Teach: other connectors and Claude in Chrome | 0:30 - 0:40 | 7-9 |
| Demo: pull a live email into a Verdal deliverable | 0:40 - 0:55 | 10 |
| Break | 0:55 - 1:00 | - |
| Lab: connect one tool and pull one thing | 1:00 - 1:45 | 11 |
| Debrief and Q&A | 1:45 - 1:55 | 12 |
| Preview and homework | 1:55 - 2:00 | 13-14 |

---

## 0:00 - 0:05  Recap and promise

Say: "In the last three sessions you set up a folder, added brand context, and built your first projects. Everything lived locally on your machine. Today that changes. Cowork can now reach into the tools you already have open all day - Gmail, Drive, Calendar, Teams - and use what it finds there."

Set the one rule: connectors are just clicks. There is no code. Every connector in today's session is turned on or off in Customize > Connectors.

## 0:05 - 0:30  Teach - what connectors do, Google Workspace, Microsoft 365

Keep this plain and short. Cover, in order:

1. **What a connector does.** A connector gives Cowork live access to an external tool, worked exactly the same as a local file. You click it on in Customize > Connectors, sign in once, and it is available in every future prompt. You do not write any code.
2. **Google Workspace.** Three connectors: Drive (read documents and briefs), Gmail (search threads and emails), Calendar (check events and deadlines). None of this requires downloading a file first. Cowork reads Drive documents as if they were in your local folder.
3. **Microsoft 365.** Four connectors: Outlook, OneDrive, SharePoint, Teams. Each turns on separately. For teams that live in M365, this is where the real leverage is: Cowork can read SharePoint pages and Teams threads the same way it reads a local markdown file.

Verdal example to anchor point 2: "Imagine you get a monthly competitor newsletter on Gmail. You could ask Cowork to find that thread, pull the key product launches, and add a competitor update section to your Verdal content plan - without you opening the inbox yourself."

## 0:30 - 0:40  Teach - other connectors and Claude in Chrome

4. **Connector library.** Beyond Google and Microsoft there is a library of additional connectors in Customize > Connectors. Categories include web scraping (pull competitor posts and pricing pages), analytics (pull live traffic and campaign numbers), and deck builders (push finished slides directly into a presentation tool). The library grows, so show attendees where to browse it.
5. **Claude in Chrome.** Different from connectors: this gives Cowork a browser. It can click, read, and capture what it finds on a live website. Use it for research that requires visiting a real page - checking how a brand appears in search results, reading a competitor's live product page, or grabbing current pricing that is not stored anywhere as a document.
6. **Safety note.** Spend 60 seconds on this. The rule: grant the minimum access a tool asks for, and choose read-only where the option appears. Cowork asks before it does anything outside your folder. You can revoke any connector at any time in Customize > Connectors. For marketing work, read-only access to Gmail and Drive is almost always enough.

## 0:40 - 0:55  Demo - pull a live email into a Verdal deliverable

This is the headline moment for this session. Follow these steps exactly.

1. Open Cowork. Confirm the Verdal folder is loaded.
2. Go to Customize > Connectors. Turn on Gmail live. Sign in with the demo account. Grant read access when prompted.
3. Navigate back to the main prompt. Paste the demo prompt:

   > Read my Gmail, find the latest plant-care trends email a teammate sent, pull the key points, and add a short "this month" section to projects/verdal-newsletter.md.

4. Narrate the task loop out loud: "Watch it search Gmail first. Now it has found the thread. Now it is reading the key points. Now it is opening the newsletter file and writing the new section."
5. Open verdal-newsletter.md and show the new section. Point out it cited the email source and matched the Verdal brand voice from context/.

Say while it runs: "This prompt touched a live inbox and a local file in the same task. That is what connectors unlock. You are not copy-pasting from Gmail any more."

If the demo is slow or the connector sign-in fails, switch to the recorded backup clip (Phase 5 deliverable). Keep narrating.

## 0:55 - 1:00  Break

## 1:00 - 1:45  Lab - connect one tool and pull one thing

Attendees work on their own laptops with their own Verdal copy.

The lab steps:
1. Go to Customize > Connectors. Connect Gmail or Drive (whichever they prefer). Grant read access.
2. Paste the starter prompt from slide 11: ask Cowork to find the most recent Verdal document in Drive, pull the main points, and save a one-page summary to projects/verdal-drive-summary.md using the brand voice in context/.
3. Watch the task loop. Open the file in projects/ when it is done.
4. Stretch task for fast finishers: repeat with the other connector (Gmail if they did Drive first, or vice versa), or try Claude in Chrome to search for a competitor.

Login note: if some attendees are on a common ID, they watch the volunteer drive and do the real task as homework. Confirm this before the session.

Circulate. Common blockers:
- The connector sign-in flow gets interrupted by a browser popup. Fix: walk them through the OAuth flow until it completes.
- They look for results in the chat panel instead of in projects/. Fix: show them the file tree in the left sidebar.
- Drive or Gmail returns nothing because the demo account has no matching documents. Fix: they can pivot to connecting OneDrive or Outlook if they have a Microsoft account, or use Claude in Chrome to browse a public site instead.

Allow extra time for the connector sign-in step. The first OAuth flow takes 2-3 minutes and can stall if the browser blocks popups.

## 1:45 - 1:55  Debrief and Q&A

Ask three questions: Which tool did you connect? What did Cowork pull in? What would you automate with this? Let a few people answer. The goal is to surface the moment connectors clicked for them - when Cowork pulled something real from a live tool and put it straight into a file. That is the mental model for the rest of the course.

## 1:55 - 2:00  Preview and homework

Preview Session 5: "Next time we go bigger - live dashboards and scheduled jobs. Cowork runs tasks without you sitting at the keyboard."

Homework (5 minutes): connect one tool for their own brand and ask Cowork to pull one real piece of content into their projects folder using their own brand voice rules. They should arrive at Session 5 with at least one connector already working.

---

## Facilitator prep checklist

- [ ] Cowork installed and signed in on the demo machine
- [ ] Verdal folder present and openable
- [ ] Gmail or Drive account signed in and ready for the connector demo (demo account, not personal)
- [ ] Connector demo (Gmail + newsletter prompt) tested end to end this morning
- [ ] Slides open
- [ ] Backup recording ready in case the live connector demo fails
- [ ] Confirmed who is on individual vs common logins
- [ ] Browser popup permissions enabled on the demo machine (OAuth needs popups)
