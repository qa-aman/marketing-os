# Changelog

## v0.2.0 (02-05-2026)

### Skills - book frameworks added to all 21 skills

Every skill now has a proven framework from a bestselling marketing or strategy book wired into its process - not just referenced, but built into the pre-write, structure, and self-check.

| Skill | Framework | Book |
|---|---|---|
| landing-page-writer | StoryBrand SB7 | Donald Miller, *Building a StoryBrand* |
| ad-campaign-writer | Schwartz Awareness Levels + Cialdini 6 Principles | *Breakthrough Advertising* + *Influence* |
| thought-leadership-writer | SUCCESs | Chip & Dan Heath, *Made to Stick* |
| email-nurture | Hook Model + PAS | Nir Eyal, *Hooked* |
| icp-research | Jobs-to-be-Done | Christensen/Moesta, *Competing Against Luck* |
| content-repurposer | STEPPS | Jonah Berger, *Contagious* |
| seo-article-writer | Big 5 | Marcus Sheridan, *They Ask You Answer* |
| campaign-brief | Before/During/After | Allan Dib, *The 1-Page Marketing Plan* |
| competitor-analyst | ERRC Grid + Strategy Canvas | Kim & Mauborgne, *Blue Ocean Strategy* |
| webinar-planner | 5-Component Positioning | April Dunford, *Obviously Awesome* |
| case-study-writer | SCR + Pyramid Principle | Barbara Minto, McKinsey |
| newsletter-writer | Curiosity Gap + Shiny Dime | George Loewenstein + David Perell |
| content-writer | PAS + AIDA | Dan Kennedy + Elias Lewis |
| pr-pitch-writer | AIDA + Journalist Psychology | Ryan Holiday, *Trust Me I'm Lying* |
| retro | Five Whys + Start-Stop-Continue | Taiichi Ohno, Toyota Production System |
| kpi-review | Big Idea + Narrative Arc | Cole Nussbaumer Knaflic, *Storytelling with Data* |
| ppt-maker | Pyramid Principle + SCQA | Barbara Minto, *The Minto Pyramid Principle* |
| press-release-writer | Inverted Pyramid + Ogilvy Headlines | AP Style + David Ogilvy, *Ogilvy on Advertising* |
| social-calendar | Content Marketing Matrix 40/40/20 | Dave Chaffey, Smart Insights |
| linkedin-post | Hook-Story-Offer + Curiosity Gap | Alex Hormozi, *$100M Offers* + Loewenstein |
| ab-copy-writer | Awareness Levels + Cialdini Principles | Schwartz + Cialdini |

### Knowledge examples

- Added `knowledge.example/services/`: complete fictional professional services reference (Clearpath Advisory, B2B GTM consultancy). Covers company, role, brand voice, ICP, services, positioning, competitors, KPIs, learnings, case study, and blog post. Shows how the OS works for a non-SaaS vertical.

### Infrastructure

- MIT license added
- `post/` folder added to .gitignore (local drafts, not tracked)

---

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
