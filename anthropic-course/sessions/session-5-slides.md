# Session 5 slides - Bigger outputs and automation

Detailed slide spec. Each slide has its on-screen content and speaker notes. This is the source of truth: the HTML deck (`session-5.html`) is generated from it. One idea per slide.

Palette: botanical green `#2F6B4F`, cream `#F7F4EC`, terracotta `#C56B47`, ink `#1F2A24`.

---

## Slide 1 - Title

**On screen:**
- Bigger outputs and automation
- Session 5 of 6 - Cowork for the team
- Build things that keep working: dashboards that refresh, jobs that run themselves.

**Notes:** Welcome them back. Session 5 of 6. Today they stop making one-off things and start building outputs that keep working - dashboards that refresh themselves and jobs that run without anyone pressing a button.

---

## Slide 2 - Recap and promise

**On screen:**
- Kicker: So far and today's promise
- So far you make one thing at a time. Today you build outputs that stay alive.
- Sub: One prompt, one file, done. Today: one prompt, and Cowork keeps it current.
- Right panel "Build once, keeps working" showing: a pinned Verdal AI-search dashboard and a weekly competitor digest scheduled every Sunday.

**Notes:** Anchor them in where they have come from. Sessions 1 through 4 covered single tasks: one brief, one draft, one report. Today the output stays alive. The promise: by the end they will have a pinned dashboard and a scheduled job running for Verdal.

---

## Slide 3 - Agenda

**On screen (3 items):**
1. Live artifacts - dashboards that refresh their data
2. Scheduled tasks - recurring jobs that run on their own
3. Parallel and research workflows - Cowork works on several things at once

Right panel: matching short list of the three things they will build in the lab.

**Notes:** Three topics today. Keep pace: 20 minutes of teaching, demo, then the lab. The agenda on the right matches what they will actually do in the lab.

---

## Slide 4 - Live artifacts

**On screen:**
- Kicker: Live artifacts
- A live artifact is a dashboard that refreshes.
- Sub: Build it once. Pin it. Click refresh for new data - no re-prompting needed.
- Right panel "Verdal AI-search visibility dashboard": bar chart of three keyword opportunities (indoor plant care guide 78, repot monstera 61, plant watering schedule 54), last refreshed timestamp.

**Notes:** Live artifacts are the biggest shift in how they think about Cowork output. A static file is done when it is written. A live artifact is a small app: you pin it, you click refresh, and it fetches fresh data. Walk them through the Verdal example on the right.

---

## Slide 5 - How to build a live artifact

**On screen (3 steps):**
1. Turn on Artifacts and Code Execution in Cowork settings
2. Use the words "live artifact" in your prompt
3. Pin it to your sidebar - click refresh anytime for new data

Right panel "Tip - the words that matter": shows the contrast between saying "live artifact" (works) vs "dashboard" without the phrase (produces a static file). Settings path: Cowork preferences - Features - Artifacts + Code Execution - On.

**Notes:** Three steps. Stress step 2: the words live artifact matter. If they do not say it, Cowork will write a static markdown file and they will wonder why nothing refreshes.

---

## Slide 6 - Scheduled tasks

**On screen:**
- Kicker: Scheduled tasks
- Some jobs should run on their own.
- Sub: Set it once. Cowork runs it every week and saves the file to your folder.
- Right panel "New scheduled task" with four fields: Name (Verdal weekly competitor digest), Folder (verdal-marketing/projects/), Frequency (Every Sunday at 9am), Status (Active).

**Notes:** Some work should just happen. A weekly competitor digest, a monthly content brief - these are repeatable and predictable. Set the task once, Cowork runs it on the schedule you pick. Show the mock form on the right and talk through each field.

---

## Slide 7 - What to automate

**On screen:**
- Kicker: What to automate
- Recurring, predictable, data-driven work is what scheduling is built for.
- Sub: If you could write the same prompt every Monday, automate it.
- Right panel "Good candidates to automate": weekly content brief (every Monday 8am), weekly competitor digest (every Sunday 9am), monthly performance report (first Monday of month), monthly newsletter draft (last Friday of month).
- Footer note: Leave creative strategy, positioning, and one-off work for prompted sessions.

**Notes:** Give them a mental model for what is worth scheduling. Repeatable, time-boxed, data-driven work. Not creative strategy, not one-off briefs. The list on the right is the cheat sheet they take back to their desks.

---

## Slide 8 - Parallel and research workflows

**On screen:**
- Kicker: Parallel and research workflows
- For big jobs, Cowork spins helpers to work on several things at once.
- Sub: Tell it to research multiple targets and it runs them in parallel, then merges the findings.
- Right panel "Verdal competitor research - running now": task list showing Helper 1 (The Sill, done), Helper 2 (Bloomscape, done), Helper 3 (Leon and George, in progress), Merge findings (pending).

**Notes:** For large research tasks, Cowork can spin up parallel helpers: one scans The Sill, one scans Bloomscape, one scans Leon and George, then they merge the findings. You get three reports worth of research in the time of one.

---

## Slide 9 - The control center

**On screen:**
- Kicker: The control center
- Scheduled tasks plus live artifacts equals a marketing control center that updates itself.
- Sub: You set it up once. From then on, you just open it.
- Right panel "How it connects": Sunday 9am scheduled task runs -> data written to projects/weekly-digest.md -> you open the pinned dashboard Monday morning -> live artifact reads the new file and shows fresh data.

**Notes:** This is the payoff idea for the session. Scheduled tasks fill the data. Live artifacts surface it. You pin the dashboard once and it is always current - you just open it on Monday morning. Let this land before moving to the demo.

---

## Slide 10 - Live demo

**On screen:**
- Kicker: Live demo - watch this
- Build a Verdal dashboard, then schedule a weekly digest.
- Code block prompt: "Load verdal-marketing/. Build a LIVE ARTIFACT showing this week's keyword opportunities and competitor activity for Verdal. Then schedule a weekly competitor digest every Sunday at 9am, saved to projects/weekly-digest.md."
- Pill: It refreshes itself
- Right panel "What comes back": live artifact created and pinned, dashboard shows keyword bars and competitor summary, scheduled task set every Sunday 9am, projects/weekly-digest.md will appear each week.

**Notes:** Switch to Cowork. Paste the prompt, narrate what Cowork does: it builds the live artifact first, shows you the pinned dashboard, then sets up the scheduled task. Open the dashboard and click refresh to show it is live. Key line: one prompt, and Cowork runs this every week from here on.

---

## Slide 11 - Your turn

**On screen:**
- Kicker: Your turn - 45 minutes
- Pin an artifact, set a schedule.
- Steps: 1 Build a simple Verdal live artifact - keyword tracker or content calendar. 2 Pin it and click refresh to see it update. 3 Create one scheduled task that runs weekly.
- Right code block starter prompt: Load verdal-marketing/context/. Build a LIVE ARTIFACT that tracks Verdal's top 5 keyword opportunities this week and flags any new content from The Sill or Bloomscape. Pin it. Then schedule this same research task to run every Monday at 8am, saving a summary to projects/weekly-brief.md.
- Footer: On a shared login? Follow along while the volunteer drives, then set this up at your desk as homework.

**Notes:** Attendees work for 45 minutes. Circulate. Two blockers to watch: Artifacts and Code Execution not turned on in settings, and using the word dashboard instead of live artifact.

---

## Slide 12 - Debrief

**On screen (3 questions):**
- What will you put on a live dashboard for your own brand?
- What weekly job would save you the most time if it ran itself?
- What surprised you about the refresh?

**Notes:** Let a few people answer each question. The goal is to surface what clicked and what did not. The refresh question often leads to the best discussion: people realize they have been re-running prompts manually every week for things Cowork could own.

---

## Slide 13 - Next session and homework

**On screen:**
- Kicker: Next session and homework
- Next: safety, sharing, and next steps - the final session.
- Sub: How to use Cowork with a team, what to share, and where the guardrails are.
- Right code block homework: Pick one recurring task for your own brand. Schedule it in Cowork to run weekly. Let it run once, open the output, and bring it to Session 6 to share.

**Notes:** One session left. Safety, sharing, and next steps is about how to use Cowork with a team, what to share, and where the guardrails are. Homework is one scheduled task - their choice of cadence and topic - to bed in the habit before the final session.

---

## Slide 14 - Thank you

**On screen:**
- Thank you
- See you in the final session.
- Session 6: Safety, sharing, and next steps.

**Notes:** Close. One session left. Build the anticipation for the final wrap on safety and sharing.
