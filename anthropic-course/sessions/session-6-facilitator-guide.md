# Session 6 facilitator guide - Safety, sharing, and next steps

**Length:** 2 hours. **Audience:** non-technical marketers. **Example:** Verdal. **You need:** the Verdal folder on the demo machine, Cowork installed and signed in, a packaged weekly-content-brief.skill ready for demo, the quiz questions, and this guide.

Goal for the room: by the end, every attendee has completed the knowledge check, written a Cowork prompt for a real task they own, and knows exactly where to go to get the official certificate.

Capabilities covered: permission modes, reviewing output before it ships, keeping sensitive data out of the workspace, validating and packaging a skill, sharing with a teammate.

This is the final session. Close with energy. They have built a real toolkit across six sessions and deserve to leave feeling that.

---

## Run of show

| Segment | Time | Slide |
|---|---|---|
| Recap and promise | 0:00 - 0:05 | 1-2 |
| Teach: agenda | 0:05 - 0:08 | 3 |
| Teach: working safely | 0:08 - 0:30 | 4-6 |
| Teach: validate and share a skill | 0:30 - 0:45 | 7-8 |
| Course recap | 0:45 - 0:55 | 9 |
| Demo: validate and share a Verdal skill | 0:55 - 1:05 | 10 |
| Break | 1:05 - 1:10 | - |
| Lab: quiz and prompt planning | 1:10 - 1:45 | 11 |
| Where next | 1:45 - 1:55 | 12 |
| Close | 1:55 - 2:00 | 13 |

---

## 0:00 - 0:05  Recap and promise

Say: "Five sessions in, you can hand Cowork a task, set standing context, build a skill, connect a tool, and schedule a job. Today we make sure everything you built is safe to run and ready to share - and you leave with a plan for your first real task on your own brand."

Set the tone: this is the final session. It is lighter on new content and heavier on consolidation. The quiz is coming and it is short.

## 0:05 - 0:08  Agenda

Walk through the three segments quickly. Name the quiz explicitly so nobody is surprised.

## 0:08 - 0:30  Teach - working safely

Cover three ideas in order:

1. **The review habit.** Cowork takes action - it reads files, writes files, and can trigger connectors. That power means review before anything ships. The habit is three steps: read what Cowork changed, open the output file and check it, then approve or redirect. Nothing leaves the folder until you say so. Use slide 4.

2. **Permission modes.** Cowork has two relevant modes: ask every time (the default, safest) and allow within this folder (for trusted workflows). Show where to find this in Settings > Permissions. Recommend starting on ask every time and only moving to allow within this folder once a skill has been run and verified at least three times. Use slide 5.

3. **Sensitive data.** The rule is simple: the folder you open is the folder it sees. Cowork will read every file in that folder when it is relevant. Do not open a folder containing customer PII, financial data, passwords, or API keys. Grant only the minimum access a connector asks for - if it asks for a whole Google Drive and only needs one folder, say not now and point it at the specific subfolder. Use slide 6.

Reassurance to give: "Cowork is not connected to the internet by default and does not send your files anywhere unless you use a connector that does. The folder you grant is the boundary."

## 0:30 - 0:45  Teach - validate and share a skill

1. **Validate before you share.** A skill that works on your machine may still produce off-brand output on someone else's if the context files are different. The check is four steps: run it once on Verdal, confirm the output is on brand, confirm it saved to the right location, then package. If anything looks wrong, fix the skill before you hand it over. Use slide 7.

2. **Packaging and sharing.** Use the Skill Creator panel in the app to package a skill into a single distributable file (.skill). Hand that file to a teammate by any means - Slack, email, shared drive. They drag it into their Skills panel and it installs in one step. No configuration needed on their end as long as their folder has the same context structure as yours. Use slide 8.

Quick tip for the room: if the context folder structure differs between machines, the skill will still run but may not find the brand files. Solve this by agreeing on a standard folder layout before you share - the Verdal layout (context/, templates/, projects/) is a good default.

## 0:45 - 0:55  Course recap

Slide 9. Run through the six items out loud, one at a time. Pause after each and ask the room to raise a hand if they feel confident in that capability. Note where hands are sparse - those are the topics to address in the quiz debrief or via homework.

Say: "Every one of these is something you did on Verdal in this workshop. Now you do the same thing on your own brand and your own folders. That is the whole idea."

## 0:55 - 1:05  Demo - validate and share a Verdal skill

This is the last live demo of the course. Follow these steps:

1. Open Cowork. Load the Verdal marketing folder. Confirm the weekly-content-brief.skill is in templates/.
2. Paste the demo prompt from slide 10: ask Cowork to run the skill once, show the output, and if it looks good, package it.
3. Narrate out loud: "It is reading the skill definition, pulling the brand context, running the brief, saving to projects/. Now I can see the output - it looks on brand, saved in the right place."
4. Open the packaged .skill file in the folder. Show the room it is a single file. Say: "I drag this into a teammate's Skills panel and they are running the same workflow in under a minute."

Say while it runs: "This is the last thing you need to know to hand Cowork to someone else on your team. One file, one install."

If the demo is slow, narrate the task loop steps from the todo list while you wait. If it fails, walk through the steps manually on screen and explain what each step would do.

## 1:05 - 1:10  Break

## 1:10 - 1:45  Lab - quiz and prompt planning

Two parts:

**Part 1 - Knowledge check (15 minutes).** Run 3-5 questions as a group. Suggested questions:

- What is the difference between ask every time and allow within this folder?
- Name one type of data you should keep out of the Cowork workspace.
- What are the four steps to validate a skill before sharing it?
- Where does output land when Cowork finishes a task?
- What do you need to do before a packaged skill works on a colleague's machine?

Do this as a show of hands or a quick written form. Review answers together. Flag any widespread gaps and address them directly.

**Part 2 - Prompt planning (20 minutes).** Each attendee picks one real task they own - a task they would normally do manually this week. They write it as a Cowork prompt using the template on slide 11:

- Which folder holds the context?
- What is the task?
- Where should the output save?

Walk the room. The goal is a prompt they can paste into Cowork today. If they are stuck on the task, prompt them: what did you do last Monday that took more than 30 minutes and involved writing or researching?

Login note: attendees on a shared login write their prompt now and run it as homework. Confirm this before the session and make sure they have their own Cowork access arranged for after.

## 1:45 - 1:55  Where next

Slide 12. Point to the official Anthropic Cowork course at anthropic.skilljar.com. Say:

"This workshop covered the core. The official course goes deeper, has exercises, and gives you a shareable certificate you can put on your profile. It is free and self-paced - about three hours. If you want the credential or want to go further, that is the next step."

Invite any final questions on the whole course, not just this session.

## 1:55 - 2:00  Close

Slide 13. Keep this brief. Let the slide land.

Say: "You built something real in six sessions. A Verdal skill that runs, a connected tool, a scheduled job, a packaged workflow. Now take that pattern and rebuild it on your own brand. That is where it stops being an exercise and becomes your system."

Thank them. Point anyone who wants individual help toward the official course or office hours if you offer them.

---

## Facilitator prep checklist

- [ ] Cowork installed and signed in on the demo machine
- [ ] Verdal folder present and openable, with weekly-content-brief.skill in templates/
- [ ] Demo prompt tested end to end this morning (run the skill, package it, confirm the output)
- [ ] Quiz questions prepared and ready to display (slide or separate doc)
- [ ] Slides open
- [ ] Confirmed who is on individual vs common logins
- [ ] anthropic.skilljar.com URL confirmed and ready to share with the room
