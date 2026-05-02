# marketing-os

A cloneable Marketing OS for Claude Code. One repo, one brand. Clone it, run `/onboard`, upload your docs, ship marketing work 10x faster.

## Who this is for

- Solo marketers, content teams, growth leads, CMOs, agencies
- Any vertical: B2B SaaS, edtech, professional services, ecommerce, fintech
- Anyone who wants AI assistants that know their brand, voice, ICP, and services

## What you get

**18 marketing skills**, each tuned for a specific job:

| Category | Skills |
|---|---|
| Short-form content | `content-writer`, `linkedin-post` |
| Long-form content | `thought-leadership-writer`, `seo-article-writer`, `newsletter-writer` |
| Sales & customer assets | `case-study-writer`, `landing-page-writer`, `ppt-maker` |
| Paid & outreach | `ad-campaign-writer`, `email-nurture` |
| PR & comms | `press-release-writer`, `pr-pitch-writer` |
| Strategy & planning | `campaign-brief`, `webinar-planner` |
| Analysis & feedback | `kpi-review`, `retro` |
| Research | `icp-research`, `competitor-analyst` |
| Orchestration | `content-repurposer` (one source -> 9 derivative assets) |

Plus:
- An onboarding wizard (`/onboard`) that extracts context from your existing docs first (PDF, Word, PPT, CSV, zip, markdown, URLs), fills gaps with targeted questions, and scores completeness against a 100-point rubric before handing off
- A complete reference example (`knowledge.example/saas/`) showing what populated context looks like
- A knowledge layer that every skill reads from, so output sounds like your brand, not generic AI
- A learnings loop (`/retro` -> `knowledge/learnings.md`) so the OS gets smarter every campaign

## Quickstart (15 minutes)

```bash
git clone https://github.com/<you>/marketing-os.git my-company-marketing-os
cd my-company-marketing-os
pip install pypdf python-docx python-pptx
```

Open in Claude Code. Then:

```
/onboard
```

Drop your existing brand docs into `uploads/` first (brand guidelines, pitch deck, past articles, ICP research - any format). Run `python scripts/ingest.py` to extract them. Then run `/onboard` - it scores what was extracted against an internal rubric, asks targeted questions only for what's missing, and gates completion at 95/100. If you have no existing docs, `/onboard` interviews you section by section.

Once done, run any skill:

```
/linkedin-post draft a post on our Q3 launch
/campaign-brief plan our Q4 ABM campaign for enterprise CMOs
/content-repurposer atomize this article: <link>
/kpi-review last month's metrics from uploads/april-dashboard.csv
```

Want to see what good looks like before you start? Open `knowledge.example/saas/` for a complete fictional B2B SaaS reference pack.

## Why this works for any company

The OS separates two layers:

| Layer | What it is | Where it lives | Who owns it |
|---|---|---|---|
| **Skills** | universal logic (how to write a press release, plan a campaign) | `.claude/skills/` | the repo |
| **Knowledge** | your brand, voice, ICP, services, KPIs | `knowledge/` (gitignored) | you |

Every skill reads context at runtime. The same `linkedin-post` skill produces edtech content for an edtech company and SaaS content for a SaaS company, because the `knowledge/brand/voice.md` and `knowledge/icp/personas.md` differ.

## Architecture

```
marketing-os/
├── README.md
├── CLAUDE.md                       # orchestration rules
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .gitignore                      # protects knowledge/, uploads/, templates/, output/
├── .claude/
│   ├── commands/
│   │   ├── onboard.md              # interview + ingest wizard
│   │   └── list-skills.md          # see what's available
│   ├── skills/                     # 18 universal skills
│   │   ├── content-writer/
│   │   ├── linkedin-post/
│   │   ├── ...
│   │   └── _template/
│   └── settings.json
├── knowledge/                      # GITIGNORED. your context.
│   ├── company.md
│   ├── role.md
│   ├── kpis.md
│   ├── learnings.md
│   ├── brand/voice.md
│   ├── brand/visual.md
│   ├── services/
│   ├── icp/personas.md
│   ├── markets/positioning.md
│   ├── markets/competitors.md
│   └── content-library/
├── knowledge.example/saas/         # COMMITTED. fictional B2B SaaS reference.
├── uploads/                        # GITIGNORED. drop files here for ingestion.
├── templates/                      # GITIGNORED. brand .pptx, email shells.
├── output/                         # GITIGNORED. generated deliverables.
├── scripts/
│   └── ingest.py                   # converts pdf/docx/pptx/csv/zip -> markdown
└── setup/
    └── QUICKSTART.md
```

## The contract every skill follows

1. **Read context first.** Every skill loads relevant files from `knowledge/` before generating. If required context is missing, the skill stops and points the user to `/onboard`.
2. **Never hardcode brand.** No company names, voice rules, or ICP details in skill files. Loaded at runtime.
3. **Write to `output/`.** Never modify `knowledge/`, `templates/`, or `uploads/` (except `/onboard`).
4. **Self-check before showing.** Voice match, no em dashes, format-specific rules, no AI tells.
5. **Capture learnings.** Skills that produce campaigns or content have a paired `/retro` path so future runs get smarter.

This is what makes the OS portable across companies and verticals.

## A typical week using this OS

- **Monday**: `/kpi-review` last week's metrics. Get insights, ranked actions, what to test.
- **Tuesday**: `/linkedin-post` or `/content-writer` for the week's post in brand voice.
- **Wednesday**: `/campaign-brief` for next month's launch. End-to-end plan with assets, timeline, and KPIs.
- **Thursday**: `/content-repurposer` to atomize the week's article into LinkedIn, Twitter, email, Reddit, quote graphics.
- **Friday**: `/retro` any campaign that just wrapped. Append learnings to `knowledge/learnings.md` so next campaign starts smarter.

## What this OS replaces

- The 47-tab Notion workspace nobody opens
- The Google Drive of brand guidelines from 2023
- Half-filled persona docs that don't get used
- Marketing decks that took 4 hours to format
- "Can someone write a LinkedIn post for the launch by EOD"
- Reinventing the campaign brief format every quarter

## What this OS does NOT do

- Send emails, post to LinkedIn, run ads, or take actions on external systems. It produces deliverables you publish.
- Replace your brand strategist, designer, or growth analyst. It handles the production layer of marketing, not the strategy layer.
- Work without context. Skills produce generic output if `knowledge/` is empty. Run `/onboard` first.

## Contributing

See `CONTRIBUTING.md`. Add a new skill, contribute a knowledge example for your vertical, or improve the wizard.

## License

Apache 2.0. Fork it, adapt it, share it back.
