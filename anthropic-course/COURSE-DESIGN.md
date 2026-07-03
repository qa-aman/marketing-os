# Course design - Cowork capabilities workshop

A live, hands-on workshop that shows a non-technical marketing team the full range of what Claude Cowork can do, using the Verdal sample brand. Backbone follows Anthropic's official "Introduction to Claude Cowork" course, widened to cover every major capability.

## What Cowork is (the one-line frame)

Claude Chat runs in the cloud and hands you text. Claude Cowork is a local desktop agent: you give it a folder, it reads your files, connects to your tools, does multi-step work, and saves finished output back into the folder. For most marketing tasks, Cowork is where the real work happens.

## The complete capability map

This is the full set the team should leave knowing. Sources: Anthropic's official Cowork course, the Claude Cowork Help Center, and current feature documentation.

| # | Capability | What it means for a marketer |
|---|---|---|
| 1 | The task loop | How Cowork plans a task, works step by step, and shows its to-do list. Watching and steering it. |
| 2 | Setup and permissions | Install, grant folder access, choose a permission mode, understand what Cowork can and cannot touch. |
| 3 | Working folder and files | Point Cowork at a folder; it reads, creates, and edits real files (docs, decks, sheets, images). |
| 4 | Model picker | Choose the right model per task (a heavier model for hard reasoning, a faster one for simple jobs). |
| 5 | Standing context: global instructions | Rules that apply to every session, set once. |
| 6 | Projects | Reusable workspaces with their own instructions, context, and memory, for work you repeat. |
| 7 | Skills | Package a workflow so Cowork repeats it on demand with the same quality. |
| 8 | Plugins | Bundle skills, connectors, and helpers into one package to share your team's expertise. |
| 9 | Connectors (Google Workspace) | Live access to Drive, Gmail, and Calendar. |
| 10 | Connectors (Microsoft 365) | Live access to Outlook, OneDrive, SharePoint, and Teams. |
| 11 | Connectors (other tools) | Scraping, analytics, deck builders, and more, via the connector library. |
| 12 | Claude in Chrome | Cowork browses real websites for you: clicking, reading, capturing. |
| 13 | Live artifacts | Interactive dashboards and docs that refresh their data when reopened. |
| 14 | Scheduled tasks | Recurring jobs that run on their own, for example a weekly report. |
| 15 | Parallel and research workflows | Cowork spins helpers to work on batches or research several things at once. |
| 16 | Safety and review | Permission modes, reviewing output before it ships, keeping sensitive work safe. |
| 17 | Sharing with the team | Validate a skill, package it, and hand it to a colleague. |

## Delivery format: a series of 2-hour sessions

Delivered as recurring 2-hour sessions (cadence, for example weekly or twice weekly, to be set with Aditya). Six content sessions plus async pre-work. One capability cluster per session, so a non-technical team absorbs it without overwhelm.

Every session runs the same shape:

| Segment | Time | What happens |
|---|---|---|
| Recap and warm up | 5 min | One-line recall of last session, today's promise |
| Teach | 25 min | The concepts for today, plain language, slides |
| Instructor demo | 25 min | Live on Verdal, following a demo script so nothing fails |
| Break | 5 min | |
| Hands-on lab | 45 min | Attendees do it on their own laptops, on Verdal |
| Debrief and Q&A | 10 min | What broke, what clicked |
| Preview and homework | 5 min | What is next, one thing to try before then |

### Session 0 - Pre-work (async, before Session 1)
Sent as the setup sheet. Each attendee installs Cowork, signs in, and downloads the Verdal folder, so Session 1 is not eaten by installs. See DOCUMENTS-NEEDED for the setup sheet.

### Session 1 - Meet Claude Cowork
Anthropic Module 1. Capabilities 1-4 (task loop, setup and permissions, files, model picker).
- **Headline demo:** Cowork reads Verdal's brand context and photos and builds a 12-slide on-brand strategy deck in minutes. This is the "wow" that sets up the whole course.
- **Lab:** each attendee loads Verdal and hands Cowork a first task.

### Session 2 - Standing context and projects
Anthropic Module 2, part A. Capabilities 5-6.
- Global instructions set once; Projects as reusable workspaces with memory.
- **Demo:** build a Verdal "carousel" project with its own instructions and memory.
- **Lab:** attendees set global instructions and create a project.

### Session 3 - Skills and plugins
Anthropic Module 2, part B. Capabilities 7-8.
- Skills teach Cowork a workflow; plugins bundle and share them.
- **Demo:** turn a repeated Verdal task (a weekly content brief) into a Skill, then run it.
- **Lab:** attendees build one simple Skill on Verdal.

### Session 4 - Connect your tools
Anthropic Module 3, widened. Capabilities 9-12.
- Connectors: Google Workspace, Microsoft 365, and others. Claude in Chrome.
- **Demo:** connect Gmail or Drive, pull a real item into a Verdal deliverable, then a quick Chrome browse.
- **Lab:** attendees connect one tool they already use and pull one thing from it.

### Session 5 - Bigger outputs and automation
Widened coverage. Capabilities 13-15.
- Live artifacts, scheduled tasks, parallel and research workflows.
- **Demo:** build a Verdal live artifact, then schedule a weekly competitor digest.
- **Lab:** attendees pin a live artifact and set one scheduled task.

### Session 6 - Safety, sharing, and next steps
Anthropic Modules 4 and 5. Capabilities 16-17.
- Working safely, validating a skill, sharing with the team.
- Capability recap, knowledge-check quiz, enroll in the official Anthropic course for the certificate.
- **Demo:** validate and package a Verdal skill to share.
- **Lab:** the quiz, then each attendee plans the first Cowork task they will run at their own desk.

## A note on logins (affects the labs)

The hands-on labs assume each attendee is on their own Claude login. Individual logins are strongly preferred: a shared or common ID means projects, skills, and global instructions collide across people, and only one person can effectively drive the desktop app per account at a time.

If some attendees are on a common ID, run those labs in fallback mode: the instructor drives on screen, one volunteer co-pilots, everyone else follows the lab worksheet on paper and does the real practice as homework on their own machine. Confirm login setup before Session 2, which is the first lab that creates shared objects.

## The five parts to sessions map

The Anthropic course modules map to our sessions like this: Module 1 to Session 1, Module 2 split across Sessions 2 and 3, Module 3 (widened) to Session 4, our added automation coverage to Session 5, and Modules 4 and 5 to Session 6.

## Design principles

- Every capability is shown live on Verdal before attendees try it, so nobody stares at a blank screen.
- Every session ends with the team having built something real.
- No terminal, no code, no Claude Code. Pure Cowork.
- The Anthropic course is the credibility anchor; we point the team to enroll for the certificate after.

## Learning outcomes

By the end, each attendee can: hand Cowork a real task and steer it, set standing context and a project, build and run a Skill, connect one tool, build a live artifact, schedule a recurring job, and share a skill safely with a colleague.
