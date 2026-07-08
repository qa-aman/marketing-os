# Session 5 facilitator guide - Bigger outputs and automation

**Length:** 2 hours. **Audience:** non-technical marketers. **Example:** Verdal. **You need:** the Verdal folder on the demo machine, Cowork installed and signed in, Artifacts and Code Execution turned on in settings, this guide, and the slides.

Goal for the room: by the end, every attendee has a pinned live artifact showing Verdal data and at least one scheduled task set to run weekly. They leave understanding that Cowork can maintain outputs without anyone re-prompting.

Capabilities covered: live artifacts, scheduled tasks, parallel and research workflows, combining scheduled tasks with live artifacts as a marketing control center.

---

## Run of show

| Segment | Time | Slide |
|---|---|---|
| Recap and promise | 0:00 - 0:05 | 1-2 |
| Teach: live artifacts, scheduled tasks, parallel workflows | 0:05 - 0:30 | 3-9 |
| Demo: Verdal dashboard and scheduled digest | 0:30 - 0:55 | 10 |
| Break | 0:55 - 1:00 | - |
| Lab: pin an artifact, set a schedule | 1:00 - 1:45 | 11 |
| Debrief and Q&A | 1:45 - 1:55 | 12 |
| Preview and homework | 1:55 - 2:00 | 13-14 |

---

## 0:00 - 0:05  Recap and promise

Say: "Sessions 1 through 4 you made one thing at a time - a brief, a draft, a report. Each one was useful but it was done the moment it was finished. Today is different. Today you build outputs that stay alive."

Name the two things they will leave with: a pinned live artifact that shows Verdal keyword and competitor data, and a scheduled task that refills that data every week without them asking.

Set the expectation: the teaching section is short and practical. The demo shows both features in one prompt. The lab is where they build it.

---

## 0:05 - 0:30  Teach - live artifacts, scheduled tasks, parallel workflows

Keep this plain and tight. Cover in order:

**Live artifacts.**
A live artifact is a dashboard Cowork builds and maintains. Unlike a static markdown file, a live artifact is interactive: you pin it to the sidebar and click refresh to pull new data. Two prerequisites: Artifacts and Code Execution must be on in settings, and the prompt must use the words "live artifact" explicitly. Stress this point - without that phrase, Cowork will produce a static file.

Walk through the Verdal example: a dashboard showing this week's keyword opportunities (indoor plant care guide, repot monstera, plant watering schedule) with a bar chart and a "last refreshed" timestamp. Ask: how often do you manually pull this kind of data? With a live artifact, you never re-prompt - you just refresh.

**Scheduled tasks.**
Scheduled tasks are recurring jobs you configure once. Cowork runs them on the schedule you set and saves the output to your folder. Walk through the four fields: name, folder, frequency, status. The Verdal example: a weekly competitor digest every Sunday at 9am, saved to projects/weekly-digest.md.

Clarify what is worth scheduling: repeatable, predictable, data-driven work - weekly content briefs, weekly competitor digests, monthly performance reports, monthly newsletter drafts. Not creative strategy or one-off work; those belong in prompted sessions.

**Parallel and research workflows.**
For big research tasks, use the phrase "research [targets] in parallel" in the prompt. Cowork spins helpers for each target and merges the findings. The Verdal example: one helper researches The Sill, one researches Bloomscape, one researches Leon and George, then they merge into a single digest. You get three competitive reports in the time of one.

**The control center idea.**
Connect all three. A scheduled task runs on Sunday morning and updates a file in your projects folder. A live artifact reads that file and shows you a fresh dashboard. You pin the artifact once, and every Monday morning it is already current. Say: "That is a marketing control center that updates itself. You set it up in one session and it runs from there."

---

## 0:30 - 0:55  Demo - Verdal dashboard and scheduled digest

**Lead with this:** the live dashboard that refreshes is the "build once, it stays" moment, open with it.

This is the headline demonstration. One prompt, two outcomes.

1. Open Cowork on the demo machine. Confirm Artifacts and Code Execution are on in settings before you start.
2. Load the verdal-marketing folder. Grant access if prompted.
3. Paste the demo prompt:

   > Load verdal-marketing/. Build a LIVE ARTIFACT showing this week's keyword opportunities and competitor activity for Verdal. Then schedule a weekly competitor digest every Sunday at 9am, saved to projects/weekly-digest.md.

4. Narrate as it runs: "It is building the live artifact first - see it creating the keyword bars and the competitor section. Now it is setting up the scheduled task."
5. When the artifact appears, pin it to the sidebar. Show the pin button.
6. Click refresh. Point out the "last refreshed" timestamp updating. Say: "That is live data. I did not re-prompt. I clicked refresh."
7. Navigate to the scheduled tasks panel and show the Verdal weekly competitor digest entry - name, folder, frequency, status Active.

Key line to say: "One prompt. A dashboard that refreshes itself, and a job that runs every Sunday. The data fills itself in and the dashboard shows it. You just open it on Monday."

If the demo is slow, keep narrating the task loop. If the artifact fails to build, fall back to showing the scheduled task setup alone and explain the artifact separately using the slide. If both fail, switch to the backup recording.

---

## 0:55 - 1:00  Break

---

## 1:00 - 1:45  Lab - pin an artifact, set a schedule

Attendees work on their own machines with their own copy of the Verdal folder.

The three steps:
1. Build a simple Verdal live artifact - keyword tracker or content calendar. They use the starter prompt from slide 11 or write their own. Stress: the words "live artifact" must be in the prompt.
2. Pin it and click refresh. Confirm the timestamp updates.
3. Create one scheduled task. Their choice of name and frequency, but save to projects/.

Starter prompt (also on slide 11):

> Load verdal-marketing/context/. Build a LIVE ARTIFACT that tracks Verdal's top 5 keyword opportunities this week and flags any new content from The Sill or Bloomscape. Pin it. Then schedule this same research task to run every Monday at 8am, saving a summary to projects/weekly-brief.md.

Pick one dashboard to build, so everyone's output is different:
(a) a keyword-opportunities radar from data/keyword-opportunities.csv
(b) a competitor-engagement dashboard from data/competitor-posts.csv
(c) a channel-performance snapshot from data/last-month-metrics.csv
Then schedule one weekly job.

Login note: attendees on a shared login follow along while the volunteer drives and complete the task as homework. Confirm this before the session.

**Common blockers to watch for:**

- Artifacts and Code Execution not turned on in settings. Fix: Cowork preferences - Features - toggle both on - restart the session.
- Prompt says "dashboard" without "live artifact" - output is a static markdown file. Fix: re-run with "live artifact" in the prompt.
- Pin button not visible - the artifact panel may need to be expanded. Fix: drag the artifact panel wider or look for the pin icon in the top-right corner of the artifact.
- Scheduled task not showing in the panel - sometimes a page refresh is needed. Fix: close and reopen the project in Cowork.

Circulate every 8-10 minutes. Ask: "Is your artifact pinned? Can you see the refresh button?" Those two questions surface most issues quickly.

---

## 1:45 - 1:55  Debrief and Q&A

Showcase and vote (about 2 minutes): ask 2 or 3 volunteers to share their screen, put their output up, and let the room vote or clap for the favorite. Name a table favorite. This turns solo lab work into a shared moment, and it is where the energy is.

Ask three questions. Let a few people answer each.

1. What will you put on a live dashboard for your own brand?
2. What weekly job would save you the most time if it ran itself?
3. What surprised you about the refresh?

The third question tends to generate the best conversation. Many people expect they will have to re-prompt every time they want new data. When they see the refresh button just work, the value of live artifacts clicks. If no one answers, prompt with: "Did you expect to have to re-type the prompt each week?"

Take 3-4 minutes for open questions before moving on.

---

## 1:55 - 2:00  Preview and homework

Preview Session 6: "The final session covers safety, sharing, and next steps - how to use Cowork with a team, what is safe to share, and where the guardrails are."

Homework: pick one recurring task for their own brand, schedule it in Cowork to run weekly, let it run once, open the output, and bring it to Session 6 to share. Keep it simple - a weekly content brief or a weekly competitor check is enough.

Cowork MVP: give a quick shout-out to the best output of the session, or to anyone who used Cowork for something real outside the lab. Keep a running MVP across the six sessions if the room enjoys it.

---

## Knowledge check (send 1-2 days after the session)

- Q: What phrase must be in your prompt to get a live artifact instead of a static file? A: "Live artifact," said explicitly.
- Q: What four fields define a scheduled task? A: Name, folder, frequency, and status.
- Q: What does asking Cowork to "research in parallel" do? A: It spins up separate helpers for each target and merges their findings into one result.

Send these by message or a quick form 1-2 days after the session. Retrieval a day or two later is what makes it stick.

---

## Facilitator prep checklist

- [ ] Cowork installed and signed in on the demo machine
- [ ] Artifacts and Code Execution turned on in Cowork settings
- [ ] Verdal folder present and openable
- [ ] Demo prompt tested end to end this morning - live artifact builds, scheduled task appears
- [ ] Pin button location confirmed in current Cowork version
- [ ] Scheduled tasks panel location confirmed in current Cowork version
- [ ] Slides open
- [ ] Backup recording ready in case the live demo fails
- [ ] Confirmed who is on individual vs common logins
- [ ] FAQ sheet printed or shared in the room chat
