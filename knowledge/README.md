# knowledge/

This folder is your company's brain. Every skill in marketing-os reads from here at runtime. The folder is gitignored so your private context never gets pushed upstream.

Run `/onboard` to populate it from your uploaded documents.

## Folder map

```
knowledge/
├── company.md                  # name, website, founding year, team size, one-line description
├── role.md                     # the user's role (CMO, content marketer, growth, PMM, founder)
├── kpis.md                     # top metrics, current targets, monthly snapshots
├── learnings.md                # appended by /retro; makes future runs smarter
├── brand/
│   ├── voice.md                # voice principles, phrases used, phrases avoided, POV, sentence length
│   └── visual.md               # colors, typography, logo rules, image style
├── services/
│   └── <one .md per service>   # what it is, who it's for, pricing, key proof points
├── icp/
│   └── personas.md             # roles, company sizes, industries, pains, jobs-to-be-done
├── markets/
│   ├── positioning.md          # one-sentence positioning + alternative
│   └── competitors.md          # top 3 competitors and how you differ
└── content-library/
    ├── <past articles>.md
    ├── case-studies/
    └── inbox/                  # unrouted ingested files; review and move
```

## How skills use this

Each skill declares its `reads:` in frontmatter. Example: `content-writer` reads `brand/voice.md`, `icp/personas.md`, `markets/positioning.md`, and `content-library/`. If any required file is missing, the skill stops and points you to `/onboard --<section>`.

## When to update

- **After running a campaign**: run `/retro`. It appends learnings to `learnings.md`.
- **When you ship a new service or product**: add a file to `services/`, or run `/onboard --services`.
- **When ICP shifts**: rerun `/onboard --icp`.
- **Monthly**: run `/kpi-review`. It reads `kpis.md` and writes a review to `output/`, then asks if any KPI targets changed.
