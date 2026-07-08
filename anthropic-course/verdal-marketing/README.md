# verdal-marketing - the workshop dataset

This is the folder you load into Claude Cowork during the workshop. It is a complete, realistic marketing workspace for a fictional brand called Verdal, a premium indoor plant care brand. Every demo and every lab in the six sessions runs on the files in here.

## How to use it

1. Copy this whole `verdal-marketing` folder onto your own computer.
2. In Claude Cowork, load this folder and click Allow when it asks for access.
3. Open the guide for the session you are on from `guides/` (double-click it, it opens in your browser).
4. Follow the guide step by step. When it gives you a "Paste into Cowork" prompt, copy it straight into Cowork.

Output you create during the sessions gets saved into `projects/`.

## Two kinds of files in here

- **For Cowork to work on:** `context/`, `templates/`, `data/`, `reference/`, `brand-photos/`, `projects/`. Cowork reads and edits these.
- **For you to read:** `guides/` holds the six session guides (HTML). Open them in a browser. They are your step-by-step instructions and the exact prompts to paste. Cowork does not need them.

## What is inside

```
verdal-marketing/
  context/          who Verdal is - Cowork reads this before any task
    brand-context.md
    brand-voice.md
    ideal-customer-profile.md
  templates/        reusable structures
    strategy-deck-outline.md
    carousel-design-system.md
    weekly-content-brief/SKILL.md   a ready-made skill (Sessions 3 and 6)
  carousel-design-system/   a ready-made project you load in Session 2
    context/  reference/  output/
  reference/        source material for demos
    competitors.md
    carousel-examples.md
    plant-care-trend-email.md       stand-in email for Session 4
    search-audit-example.md         worked example for Session 4
  data/             real numbers for reporting, dashboards, and research
    keyword-opportunities.csv
    competitor-posts.csv
    last-month-metrics.csv          bonus practice
    content-planner.csv             bonus practice
  brand-photos/     images for the strategy deck (swap in real photos)
  projects/         where your finished work is saved
    verdal-newsletter.md
    weekly-content-brief-example.md a finished brief to package in Session 3
    starter-agents.md               two ready-to-run agents to set up (Session 5)
  guides/           the guides - open in a browser, for you not Cowork
    session-0-setup.html            do this before Session 1: install, folder, global instructions
    session-1-guide.html ... session-6-guide.html
    cowork-cheat-sheet.html         the whole course on one page, keep it at your desk
    recipe-library.html             six real marketing jobs as copy-paste Cowork prompts
  connectors-setup.md   how to connect each tool, with official documentation links
```

## Which session uses what

| Session | Uses |
|---|---|
| 1 - Meet Cowork | `context/`, `templates/strategy-deck-outline.md`, `brand-photos/` |
| 2 - Context and projects | the `carousel-design-system/` project folder |
| 3 - Skills and plugins | `projects/weekly-content-brief-example.md` (package it into a skill) |
| 4 - Connect your tools | `projects/verdal-newsletter.md`, plus `reference/plant-care-trend-email.md` if you have no live Gmail |
| 5 - Outputs and automation | `data/keyword-opportunities.csv`, `data/competitor-posts.csv`, `reference/competitors.md` |
| 6 - Safety and sharing | any skill you built (validate and share it) |

## What each session covers

A plain-language summary of the topics, good for sharing before the workshop.

- **Session 0 (before we start):** install Claude Cowork and set up the workshop folder.
- **Session 1 - Meet Claude Cowork:** what Cowork is and how it differs from the chat, giving it a task on your files, and watching it save a finished file.
- **Session 2 - Context and projects:** setting rules it remembers, building a project with memory, and letting Cowork interview you to build your brand files.
- **Session 3 - Skills and plugins:** turning a repeated task into a reusable skill, and installing ready-made ones like the official marketing plugin.
- **Session 4 - Connect your tools:** connecting Gmail, Drive, Notion, and tools like Apify to pull live data into your work.
- **Session 5 - Bigger outputs and automation:** live dashboards, scheduled tasks, polished decks with Gamma, and research with Perplexity.
- **Session 6 - Safety, sharing and next steps:** working safely, sharing a skill with the team, and setting up your own brand.

## A note on the data

The numbers, posts, and keywords in `data/` are realistic but made up, so the labs work even without connecting a live tool. When you redo the exercises on your own brand, swap in your real files the same way.
