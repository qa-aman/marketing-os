# Changelog

## v0.1.0 (02-05-2026)

Initial release.

### Skills (21)

**Content writing**
- content-writer: short-to-medium form (LinkedIn, blog, email, ad, landing hero)
- linkedin-post: LinkedIn posts with engagement-optimized hooks
- thought-leadership-writer: 1500-2500 word opinion pieces
- seo-article-writer: search-optimized long-form
- newsletter-writer: recurring newsletter issues

**Sales & customer assets**
- case-study-writer: customer success stories in 5-section format
- landing-page-writer: conversion-focused page copy
- ppt-maker: branded .pptx decks with speaker notes

**Paid & outreach**
- ad-campaign-writer: multi-channel paid ad copy
- email-nurture: multi-email lifecycle sequences

**PR & comms**
- press-release-writer: AP-style press releases
- pr-pitch-writer: personalized journalist pitches

**Strategy & planning**
- campaign-brief: end-to-end campaign briefs
- webinar-planner: full webinar campaign packs

**Analysis & feedback**
- kpi-review: monthly metrics review with ranked actions
- retro: structured learnings captured to knowledge/learnings.md

**Research**
- icp-research: ICP and persona builder
- competitor-analyst: competitive matrix and battle cards

**Planning & testing**
- social-calendar: month-by-week content calendar across channels with pillar-to-metric mapping
- ab-copy-writer: 3-5 copy variants per element with angle, hypothesis, and test setup guidance

**Orchestration**
- content-repurposer: one source piece to multi-channel asset pack

### Commands

- /onboard: upload-first wizard with internal 100-point rubric - extracts context from existing docs, fills gaps with targeted Q&A, gates output at 95/100
- /list-skills: show all available skills grouped by category

### Infrastructure

- `scripts/ingest.py`: convert PDF, Word, PPT, CSV, zip (Notion exports), markdown to routed knowledge files
- `knowledge.example/saas/`: complete fictional B2B SaaS reference pack including brand voice, ICP, competitors, services, case study, and blog post
- `.claude/skills/_template/SKILL.md`: scaffold for new skills
- `.claude/settings.json`: Claude Code project settings

### Notes

The OS works best when `knowledge/` is fully populated. Half-filled context produces generic output. Run `/onboard` first.
