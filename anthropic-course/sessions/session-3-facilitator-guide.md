# Session 3 facilitator guide - Skills and plugins

**Length:** 2 hours. **Audience:** non-technical marketers. **Example:** Verdal. **You need:** the Verdal folder on the demo machine, Cowork installed and signed in, skill-creator already added under Customize > Claude Skills, this guide, and the slides.

Goal for the room: by the end, every attendee has built and saved at least one real skill in Cowork. They leave knowing that a skill is a saved workflow with a trigger description, not just a saved prompt.

Capabilities covered: what a skill is, building a skill via Cowork UI, the skill-creator skill, plugins as a sharing mechanism.

---

## Run of show

| Segment | Time | Slide |
|---|---|---|
| Recap and promise | 0:00 - 0:05 | 1-2 |
| Teach: skills, three ways to build, plugins | 0:05 - 0:30 | 3-8 |
| Demo: turn the Verdal weekly brief into a skill | 0:30 - 0:55 | 9 |
| Break | 0:55 - 1:00 | - |
| Lab: build one simple skill | 1:00 - 1:45 | 10 |
| Debrief and Q&A | 1:45 - 1:55 | 11 |
| Preview and homework | 1:55 - 2:00 | 12-13 |

---

## 0:00 - 0:05  Recap and promise

Say: "In Sessions 1 and 2 you got Cowork running, built your folder, and gave it your brand context. Today we go one layer deeper. You are going to package the work you repeat into a skill - so next week you type one command instead of typing the whole workflow again."

Set the one rule for today: skills are built in the Cowork UI via Customize > Claude Skills. Nobody uses the terminal.

## 0:05 - 0:30  Teach - what a skill is, three ways to build one, plugins

Keep this plain and practical. Cover in order:

1. **The problem.** Ask: who has typed the same long instruction more than once this week? Pause. That is the problem a skill solves. Show the pain slide - the same weekly-brief instruction repeated in Week 1, Week 2, Week 3.

2. **What a skill is.** A skill is a SKILL.md file with two parts: a name (for humans) and a description (the trigger the model reads). The description is the most important part - it tells Cowork when to load and run the skill. Spend 2 minutes on this distinction. It is the one idea the room needs to leave with.

3. **Three ways to build a skill.** Extend an official Anthropic template (fastest start), package a workflow you already do (most common), or build from scratch. For most people in the room, option 2 is the answer.

4. **The skills library.** Go to Customize > Claude Skills. The first skill to add is skill-creator, because it writes skills for you - you describe what you need and it produces the SKILL.md. Show this briefly if time allows.

5. **Plugins.** A plugin bundles skills plus connectors plus shared helpers into one installable package. Useful for handing your whole toolkit to a new teammate. Keep this to 2 minutes - most of the room will not publish plugins yet, but they need to know the concept exists.

Key line: "The description is not a label. It is what Cowork reads to decide when to run the skill. Get this right and the skill fires automatically."

## 0:30 - 0:55  Demo - turn the Verdal weekly brief into a skill

This is the headline moment. Follow the demo steps exactly.

1. Open Cowork. Confirm skill-creator is installed under Customize > Claude Skills. Point to it.
2. Load the Verdal marketing folder. Show the context/ files quickly so the room sees what brand knowledge is available.
3. Paste the demo prompt: ask Cowork to take the weekly content brief workflow and package it as a reusable skill called weekly-content-brief, keeping it brand-agnostic.
4. Narrate what Cowork is doing: "It is reading our context first. Now it is drafting the SKILL.md - watch the name and description fields. This is the trigger it will use next time."
5. Show the Save Skill button. Click it. Open the saved skill and show the name and description to the room.
6. Point out the key detail: the skill is brand-agnostic. It loads context/ at runtime, so it will work for any brand folder, not just Verdal.

Say while it runs: "I am not typing the workflow. I am describing what I want packaged and Cowork is writing the skill for me. Next Monday I type one command and get the same result."

If the demo is slow, narrate the skill anatomy on the slides while it runs. If it fails, switch to a pre-built skill card screenshot and walk through the SKILL.md fields manually.

## 0:55 - 1:00  Break

## 1:00 - 1:45  Lab - build one simple skill

Attendees work on their own laptops with their own Verdal copy. Walk the room.

High level steps:
1. Go to Customize > Claude Skills and add skill-creator if not already there.
2. Pick a Verdal task you repeat - an Instagram caption, a weekly brief, a competitor note.
3. Ask skill-creator to package it as a skill. Use the starter prompt from the lab slide as a template.
4. Save the skill. Try running it with one command and check the output.

The starter prompt on the lab slide targets an instagram-captions skill. Attendees can substitute any workflow they repeat.

Login note: if some attendees are on a common ID, they follow along while the volunteer drives, and build their own skill at their desk as homework. Confirm this before the session.

Circulate. The two most common blockers:
- Skill-creator not added yet: direct them to Customize > Claude Skills.
- Brand details baked into the skill: remind them the skill should load context at runtime from the context/ folder, not hardcode Verdal's voice rules inside the SKILL.md. This is the brand-agnostic principle.

## 1:45 - 1:55  Debrief and Q&A

Ask three questions: What workflow will you package first for your own brand? What did you write in the description - the trigger? How is a skill different from just saving a prompt?

The third question is the important one. The answer the room needs: a saved prompt is static text you paste again. A skill is loaded by Cowork automatically when the trigger description matches what you asked. One is manual; the other is automatic.

## 1:55 - 2:00  Preview and homework

Preview Session 4: "Next time we connect your tools - your CMS, your calendar, your analytics. Real data in, finished output out."

Homework: think of one workflow you repeat for your own brand (not Verdal) and package it as a skill before next session. Run it once and bring the result to Session 4.

---

## Facilitator prep checklist

- [ ] Cowork installed and signed in on the demo machine
- [ ] Verdal folder present and openable
- [ ] skill-creator added under Customize > Claude Skills before the session starts
- [ ] Demo prompt tested end to end this morning
- [ ] Slides open
- [ ] Backup screenshot of a completed SKILL.md ready in case the live demo fails
- [ ] Confirmed who is on individual vs common logins
