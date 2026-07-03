# Session 3 slides - Skills and plugins

Detailed slide spec. Each slide has its on-screen content and speaker notes. This is the source of truth: the HTML deck (`session-3.html`) is generated from it, and you can also build a PPT from it. One idea per slide.

Palette: botanical green `#2F6B4F`, cream `#F7F4EC`, terracotta `#C56B47`, ink `#1F2A24`.

---

## Slide 1 - Title
**On screen:**
- Skills and plugins
- Session 3 of 6 - Cowork for the team
- Package a workflow once. Run it on command, same quality every time.

**Notes:** Welcome them back. Session 3 of 6. Today we stop typing the same instructions every week and package them as skills that run on command. This is where Cowork starts feeling like a real team member, not just a smart chat.

## Slide 2 - Recap and promise
**On screen:**
- You have your folder and your context. Today you package the work you repeat.
- A skill is a workflow with a name. One command next week, same result every time.
- Right panel: "You do it once - Cowork repeats it on command. Same prompt. Same quality. No retyping."

**Notes:** Quick bridge from Sessions 1 and 2. They have a folder, context files, and projects. Today is about making the work they already repeat reusable. The goal: leave with at least one real skill saved.

## Slide 3 - Today's agenda
**On screen (3 items):**
1. What a skill is - a saved workflow with a trigger
2. Build a skill - three ways, Cowork UI only
3. Plugins - bundle and share your team's toolkit

Right panel: skill anatomy - SKILL.md showing name, description (trigger), and workflow steps.

**Notes:** Three ideas today. We build a real skill in the demo and in the lab. Keep the agenda slide brief - the room wants to get to the practical part.

## Slide 4 - The problem
**On screen:**
- You retype the same workflow every week.
- Same steps, same context, same structure - retyped from memory each time. One missed detail and the output drifts.
- Right: chat window showing the same long weekly-brief instruction typed in Week 1, Week 2, Week 3 (muted).

**Notes:** This is the hook. Ask: who here has typed the same long instruction more than once this week? The chat window on the right shows what that looks like: the same paragraph, repeated, every Monday. A skill ends that.

## Slide 5 - What a skill is
**On screen:**
- A saved workflow with a name and a description.
- The description is the trigger. Cowork reads it to know when to use the skill.
- Right: SKILL.md code block - name: weekly-content-brief, description: use when asked for the weekly Verdal content brief, workflow steps below.

**Notes:** The description field is the key idea. It is not a label - it is the trigger that tells Cowork when to load and run the skill. Spend a moment on this. The name is for humans; the description is for the model.

## Slide 6 - Three ways to build a skill
**On screen (3 items):**
1. Extend an official skill - start from an Anthropic template
2. Package a workflow you already do - the fastest path
3. Build a fresh one - blank canvas, your own steps

Right panel: three Verdal examples - extend official (take the "social-post" template, add Verdal voice rules), package existing (the weekly content brief you already type), build fresh (a "Priya outreach" skill from scratch).

**Notes:** Keep this light. Most people will use option 2 - packaging something they already do. Option 1 is the fastest starting point. Option 3 is for teams ready to build from scratch. You do not need to go deep on all three.

## Slide 7 - The skills library
**On screen:**
- Customize > Claude Skills.
- Add the skill-creator skill first. It builds skills for you - describe what you need and it writes the SKILL.md.
- Right panel: Customize > Claude Skills UI showing skill-creator (add this first), weekly-content-brief (your Verdal skill), instagram-captions (your Verdal skill).

**Notes:** This is the UI path: Customize then Claude Skills. The skill-creator skill is the one they should add first because it helps them build all the others. Show this in the app if you can - it takes under a minute.

## Slide 8 - Plugins
**On screen:**
- A plugin bundles skills to share.
- Hand your whole Verdal toolkit to a new teammate in one install. No setup, no retraining.
- Right panel: Plugin = Skills (every workflow you have packaged) + Connectors (linked tools and data sources) + Helpers (shared context files and templates). New teammate installs one package, gets everything.

**Notes:** Plugins are the team-sharing mechanism. A plugin bundles one or more skills plus any connectors into a single installable package. Mention that plugins can be shared inside a team or published. Keep this brief - most of the room will focus on building skills first, not publishing plugins yet.

## Slide 9 - Live demo
**On screen:**
- Watch: turn the Verdal weekly brief into a skill.
- Prompt: "Take the weekly content brief workflow we just ran and package it as a reusable skill called weekly-content-brief. Make it brand-agnostic - brand context loads from context/ at runtime. Then save the skill."
- Pill: "Do it once, reuse forever"
- Right panel: what comes back - skill card showing weekly-content-brief with name/description/steps, Save Skill button, note "Next week: type one command, same quality output."

**Notes:** Switch to Cowork. Go to Customize > Claude Skills, show skill-creator is installed. Then paste the prompt, narrate what Cowork is doing - reading context, drafting the SKILL.md, showing the Save Skill button. Open the saved skill and show the name and description. Key line: "I typed this once. Next week I type one command."

## Slide 10 - Your turn (lab)
**On screen:**
- Your turn - 45 minutes.
- Build one simple skill.
- Steps: 1. Customize > Claude Skills - add skill-creator if not already there. 2. Pick a Verdal task you repeat. 3. Ask Cowork to package it as a skill, then save.
- Right: starter prompt - "Read context/ for Verdal brand rules and voice. Package the Instagram caption workflow as a skill named instagram-captions. Keep it brand-agnostic - it should load context at runtime, not bake it in. Save the skill when done."
- Footer: on a shared login, follow along while the volunteer drives, then build at your desk as homework.

**Notes:** Attendees work on their own laptops. Circulate. The two most common blockers: skill-creator not added yet (go to Customize > Claude Skills first), and writing a skill that has brand details baked in (remind them to keep it brand-agnostic and load context at runtime).

## Slide 11 - Debrief
**On screen (3 questions):**
- What workflow will you package first for your own brand?
- What did you write in the description - the trigger?
- How is a skill different from just saving a prompt?

**Notes:** Let a few people answer each. The third question is the key one - it surfaces whether they understood that the description is a trigger, not just a label. If they struggle on that one, give the one-liner: the description is what Cowork reads to decide when to run the skill.

## Slide 12 - Next time and homework
**On screen:**
- Next: connect your tools. Cowork linked to your CMS, your calendar, your analytics.
- Homework: think of one workflow you repeat for your own brand. Package it as a skill before next session.
- Right: homework prompt - "Think of one workflow you repeat for your own brand. Open Cowork, load your folder, and ask skill-creator to package it as a skill. Save it. Next session, run it with one command and see what comes back."

**Notes:** Send them off with momentum. Session 4 is about connectors - linking real tools so Cowork can pull live data and push finished work. The homework is one skill for their own brand, not Verdal, so they start seeing the value in their real workflow.

## Slide 13 - Thank you
**On screen:**
- Thank you
- Session 4: Connect your tools.

**Notes:** Close with energy. They now know skills exist, how to build them, and have one saved. Session 4 is connectors - the other half of what makes Cowork feel like a real team member.
