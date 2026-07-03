# Session 4 slides - Connect your tools

Detailed slide spec. Each slide has its on-screen content and speaker notes. This is the source of truth: the HTML deck (`session-4.html`) is generated from it, and you can also build a PPT from it. One idea per slide.

Palette: botanical green `#2F6B4F`, cream `#F7F4EC`, terracotta `#C56B47`, ink `#1F2A24`.

---

## Slide 1 - Title
**On screen:**
- Connect your tools
- Session 4 of 6 - Cowork for the team
- Cowork stops working with just your folder and starts using your whole stack.

**Notes:** Welcome them back. Session 4 of 6. The shift today: Cowork stops working only with the local folder and starts using the tools they already have open all day - Gmail, Drive, Calendar, Teams, and more.

## Slide 2 - Recap and promise
**On screen:**
- So far: Cowork worked with your local folder. Today: connect the live tools you already use.
- One connector changes what Cowork can do. Connect once, use in every prompt from here on.
- Right panel chips: Gmail, Drive, Calendar, Outlook, Teams. Caption: "Connect once, use anywhere."

**Notes:** Quick recap of sessions 1-3: they set up a folder, added brand context, built prompts and projects. Today is the jump: connect live tools so Cowork can pull real data in and push finished work out.

## Slide 3 - Agenda
**On screen (3 items):**
1. Connectors - Google Workspace and Microsoft 365
2. Other connectors - scraping, analytics, deck builders
3. Claude in Chrome - browsing real websites

Right panel: Customize > Connectors list showing Google Workspace, Microsoft 365, web scraping, analytics, deck builders, and more in the library.

**Notes:** Three blocks today. All set up in Customize > Connectors, no code required.

## Slide 4 - What connectors do
**On screen:**
- A connector gives Cowork live access to a tool, worked the same way as your files.
- You click it on. You sign in once. Then you ask Cowork to use it, just like you ask it to read a local document.
- Right: Cowork window showing Gmail on, Google Drive on, Google Calendar on; Outlook off, OneDrive off, Teams off.

**Notes:** The core idea: a connector gives Cowork live access to an external tool, worked exactly the same as local files. No code. Click the connector on in Customize > Connectors, sign in once, and it is there for every future prompt.

## Slide 5 - Google Workspace
**On screen:**
- Drive, Gmail, and Calendar.
- Cowork reads Drive documents, searches Gmail threads, and checks Calendar events - without you downloading anything.
- Right panel chips: Drive, Gmail, Calendar. Verdal example: "Pull last month's campaign brief from Drive, read it, and use it to draft the next one - no download needed."

**Notes:** Google Workspace covers three connectors. Show the Verdal example: pull a Drive document without downloading it first. Cowork reads it as if it were a local file.

## Slide 6 - Microsoft 365
**On screen:**
- Outlook, OneDrive, SharePoint, and Teams.
- If your team lives in Microsoft tools, Cowork connects directly. Files in OneDrive and SharePoint work like local files.
- Right panel chips: Outlook, OneDrive, SharePoint, Teams. Note: each turns on separately in Customize > Connectors.

**Notes:** Same idea as Google Workspace but for M365 teams. Teams messages and threads become readable context. Good to call out for teams that live in Microsoft tools.

## Slide 7 - Other connectors
**On screen:**
- Scraping, analytics, and deck builders.
- Browse the connector library in Customize > Connectors.
- Right panel list: web scraping (pull competitor posts and pricing), analytics (pull live traffic and campaign data), deck builders (push slides into your presentation tool).
- Verdal note: scrape The Sill and Bloomscape product pages for a competitor snapshot.

**Notes:** Beyond Google and Microsoft there is a connector library with more categories. The library grows over time, so show attendees where to browse it.

## Slide 8 - Claude in Chrome
**On screen:**
- Cowork can browse real websites.
- It clicks, reads, and captures what it finds.
- Right panel task example: "Check if Verdal shows up when people search for AI for plant food. Screenshot the top three results and save them to projects/search-audit.md."

**Notes:** Claude in Chrome is different from connectors: it gives Cowork a browser. Main use case is research that requires visiting a live page - checking search results, reading a competitor's site, or grabbing live pricing.

## Slide 9 - Safety note
**On screen:**
- Grant the minimum access a tool asks for. Read-only is usually enough.
- You can revoke any connector at any time in Customize > Connectors.
- Right: dialog mock "Allow Claude to read your Gmail messages and threads? Cowork will not send emails on your behalf." Buttons: Allow / Not now. Note: choose read-only where the option appears.

**Notes:** Do not skip this slide. Non-technical attendees worry about over-granting. The rule is simple: minimum access, read-only where possible, revoke any time.

## Slide 10 - Live demo
**On screen:**
- Pull a real email into a Verdal deliverable.
- Prompt: "Read my Gmail, find the latest plant-care trends email a teammate sent, pull the key points, and add a short 'this month' section to projects/verdal-newsletter.md."
- Pill: "Live data, straight into your files"
- Right panel: file tree showing verdal-newsletter.md updated now. Note: Cowork also did a quick Chrome browse to verify one trend claim.

**Notes:** Switch to Cowork. Connect Gmail live if not already done. Paste the prompt. Narrate: watch it read the Gmail thread, pull the key points, then open the newsletter file and write the new section. Key line: the prompt touched a live inbox and a local file in the same task.

## Slide 11 - Your turn (lab)
**On screen:**
- Connect one tool you use.
- Steps: 1 Go to Customize > Connectors, connect Gmail or Drive. 2 Grant read access when prompted. 3 Ask Cowork to pull one real thing into a Verdal file in projects/.
- Right prompt: "Read my Google Drive, find the most recent Verdal document, pull the main points, and save a one-page summary to projects/verdal-drive-summary.md. Use the brand voice in context/brand-voice.md."
- Footer: on a shared login, watch the volunteer drive, then do this as homework.

**Notes:** Circulate. Common blockers: the connector sign-in flow gets interrupted, or they look for results in the chat panel instead of projects/. Allow extra time for the connector sign-in step - it takes 2-3 minutes the first time.

## Slide 12 - Debrief
**On screen (3 questions):**
- Which tool did you connect?
- What did Cowork pull in?
- What would you automate with this?

**Notes:** Let a few people answer each. Goal: surface the moment connectors clicked - when Cowork pulled something real from a live tool and put it straight into a file.

## Slide 13 - Next time and homework
**On screen:**
- Next: bigger outputs and automation - live dashboards and scheduled jobs.
- Homework prompt: "Connect one tool you use for your own brand (Gmail, Drive, Outlook, or other). Ask Cowork to pull one real piece of content and save it to your projects/ folder using your brand voice rules."

**Notes:** Preview Session 5: bigger outputs and automation. Homework is small and concrete - they arrive at Session 5 with a connector already working, which makes the next session land harder.

## Slide 14 - Thank you
**On screen:**
- Thank you
- Session 5: Bigger outputs and automation.

**Notes:** Close. Point them to the official course for the certificate.
