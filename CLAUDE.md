# marketing-os orchestration rules

This is a Marketing OS. Every skill in `.claude/skills/` is universal and brand-agnostic. All brand, voice, ICP, service, and KPI context lives in `knowledge/`.

## Core contract

1. **Read before writing.** Every skill must read relevant files from `knowledge/` before generating output. If `knowledge/` is empty, instruct the user to run `/onboard` first.
2. **Never hardcode brand context.** No company names, voice rules, or ICP details inside skill files. They are loaded at runtime from `knowledge/`.
3. **Write deliverables to `output/`.** Never modify files in `knowledge/`, `templates/`, or `uploads/` unless the skill is `/onboard` or the user explicitly asks.
4. **Use DD-MM-YYYY date format** in all generated files and filenames.
5. **Match the user's role.** `knowledge/role.md` tells you whether the user is a CMO (wants exec summaries, strategic framing), a content marketer (wants drafts and variants), a growth lead (wants experiments and metrics), or PMM (wants positioning and enablement). Tailor depth and framing accordingly.

## Knowledge folder map

When a skill runs, load only what it needs:

| Skill type | Reads from |
|---|---|
| Content writing (blog, LinkedIn, email, ad) | `brand/voice.md`, `brand/visual.md`, `icp/`, `content-library/` |
| Campaign briefs | `services/`, `icp/`, `markets/`, `kpis.md` |
| Case studies / references | `services/`, `content-library/case-studies/` |
| KPI review / retro | `kpis.md`, `learnings.md` |
| PPT / decks | `brand/visual.md`, `templates/` |
| Press releases | `brand/voice.md`, `services/`, `markets/` |

## Adding a new skill

Copy `.claude/skills/_template/` to `.claude/skills/<skill-name>/`. Edit `SKILL.md`. Declare which `knowledge/` files it reads in the frontmatter `reads:` field. Never embed brand context in the skill body.

## Output naming

`output/<skill-name>/<DD-MM-YYYY>-<slug>.md` (or `.pptx`, `.docx` as appropriate).

## When knowledge is missing or stale

If a skill needs `knowledge/icp/personas.md` and it does not exist, do NOT invent personas. Tell the user: "I need ICP context. Run `/onboard --icp` to add it, or paste your personas now and I will write them to `knowledge/icp/personas.md`."

## Writing rules (apply to every generated artifact)

- No em dashes. Use commas or hyphens.
- No emojis unless the user explicitly asks.
- Specific over vague. Numbers, examples, concrete details.
- Short paragraphs. No corporate speak.
- Match the voice in `brand/voice.md` exactly.

## Training courses (`workshop/` and `anthropic-course/`)

These two folders are self-contained training material, separate from the core marketing-os skills and the `knowledge/` layer. They do not follow the `knowledge/` contract above.

- `workshop/` is a self-paced "Claude Cowork for Marketers" course.
- `anthropic-course/` is an instructor-led Claude Cowork team-enablement workshop (six 2-hour sessions). Each session has a slide deck (`session-N.html`) and a step-by-step lab guide (`session-N-guide.html`).
- It uses a fictional example brand, **Verdal**, on purpose, so it can be taught to any team. Keep it generic. Do not add real company or client brand context here. A real, brand-specific kit is a separate future deliverable for a closer group.
- `anthropic-course/verdal-marketing/` is the distributable "play kit" the team loads into Claude Cowork. `verdal-marketing.zip` is the packaged version to send.
- **Keep the course and kit date-free.** No session dates or timestamps anywhere, since start dates are not fixed. For these two folders only, this overrides the DD-MM-YYYY rule above.
