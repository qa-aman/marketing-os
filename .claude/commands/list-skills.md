---
description: List every skill in marketing-os with what it does, when to use it, and what it reads from knowledge/. Use when the user asks "what can this OS do", "list skills", "show me what's available", "/help", or wants an overview.
---

# /list-skills

Show the user every skill installed in this Marketing OS, grouped by category. For each skill, show:
- Slash command (e.g. `/content-writer`)
- One-line description
- Which `knowledge/` files it reads
- A representative trigger phrase

## Process

1. **Scan `.claude/skills/`** for all SKILL.md files.
2. **Read frontmatter** (name, description, reads) from each.
3. **Group by category** (use the table below as canonical grouping):

| Category | Skills |
|---|---|
| **Short-form content** | content-writer, linkedin-post |
| **Long-form content** | thought-leadership-writer, seo-article-writer, newsletter-writer |
| **Sales & customer assets** | case-study-writer, landing-page-writer, ppt-maker |
| **Paid & outreach** | ad-campaign-writer, email-nurture |
| **PR & comms** | press-release-writer, pr-pitch-writer |
| **Strategy & planning** | campaign-brief, webinar-planner |
| **Analysis & feedback** | kpi-review, retro |
| **Research** | icp-research, competitor-analyst |
| **Orchestration** | content-repurposer |

4. **Output as a clean table**:

```
# marketing-os: skills available

## Short-form content
| Command | What it does | Try it |
|---|---|---|
| /content-writer | Posts, blogs, emails, ads, landing copy | "Write a LinkedIn post about Q3 launch" |
| /linkedin-post | LinkedIn posts tuned for engagement | "Draft 3 LinkedIn variants for our funding news" |

## Long-form content
| Command | What it does | Try it |
|---|---|---|
| /thought-leadership-writer | 1500-2500 word opinion pieces | "Write a POV piece on AI replacing SDRs" |
...
```

5. **End with the daily-use pattern**:

```
## A typical week

- Monday: /kpi-review last week's metrics
- Tuesday: /content-writer or /linkedin-post for the week's post
- Wednesday: /campaign-brief for next month's launch
- Thursday: /content-repurposer to atomize the week's article
- Friday: /retro any campaign that ended this week
```

6. **Show what's missing**:

```
## Missing context?
Run `/onboard` to populate `knowledge/`. Skills get exponentially better when the OS knows your brand.
```

## Rules

- Always read frontmatter live, do not hardcode the list. New skills should appear automatically.
- If a skill is missing required context (e.g. `knowledge/brand/voice.md`), flag it next to that skill: `[needs voice]`.
- Keep the output scannable. The whole table should fit in one screen.
