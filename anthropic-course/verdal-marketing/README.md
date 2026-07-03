# verdal-marketing - the workshop dataset

This is the folder you load into Claude Cowork during the workshop. It is a complete, realistic marketing workspace for a fictional brand called Verdal, a premium indoor plant care brand. Every demo and every lab in the six sessions runs on the files in here.

## How to use it

1. Copy this whole `verdal-marketing` folder onto your own computer.
2. In Claude Cowork, load this folder and click Allow when it asks for access.
3. Follow the session. When a slide says "load your verdal-marketing folder" or points at `context/`, `templates/`, `projects/`, or `data/`, this is what it means.

Output you create during the sessions gets saved into `projects/`.

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
  reference/        source material for demos
    competitors.md
    carousel-examples.md
  data/             real numbers for reporting, dashboards, and research
    last-month-metrics.csv
    keyword-opportunities.csv
    competitor-posts.csv
    content-planner.csv
  brand-photos/     images for the strategy deck (swap in real photos)
  projects/         where your finished work is saved (starts almost empty)
    verdal-newsletter.md
```

## Which session uses what

| Session | Uses |
|---|---|
| 1 - Meet Cowork | `context/`, `templates/strategy-deck-outline.md`, `brand-photos/` |
| 2 - Context and projects | `context/`, `templates/carousel-design-system.md`, `reference/carousel-examples.md` |
| 3 - Skills and plugins | `context/` (package a weekly-brief workflow into a skill) |
| 4 - Connect your tools | `projects/verdal-newsletter.md` (update it from a connected tool) |
| 5 - Outputs and automation | `data/keyword-opportunities.csv`, `data/competitor-posts.csv`, `reference/competitors.md` |
| 6 - Safety and sharing | any skill you built (validate and share it) |

## A note on the data

The numbers, posts, and keywords in `data/` are realistic but made up, so the labs work even without connecting a live tool. When you redo the exercises on your own brand, swap in your real files the same way.
