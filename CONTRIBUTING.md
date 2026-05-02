# Contributing to marketing-os

This OS gets better when more marketers use it, refine the skills, and contribute back. Here's how.

## Ways to contribute

### 1. Add a new skill

If you've built a skill that's not in the repo (e.g. `webinar-promo-writer`, `swot-analyst`, `okr-writer-marketing`), open a PR.

```bash
cp -r .claude/skills/_template .claude/skills/<your-skill-name>
# Edit SKILL.md with your skill's logic
git add .claude/skills/<your-skill-name>
```

A skill is mergeable if it:
- Has a clear, single-purpose description
- Reads context from `knowledge/`, never hardcodes brand
- Writes deliverables to `output/<skill-name>/`
- Includes self-check criteria
- Is vertical-agnostic (works for SaaS, edtech, services, etc.)

### 2. Add a knowledge example for a new vertical

Current examples:
- `knowledge.example/saas/` - B2B SaaS (Threadline, activation platform)
- `knowledge.example/services/` - B2B professional services (Clearpath Advisory, GTM consultancy)

Verticals still needed:
- `knowledge.example/edtech/`
- `knowledge.example/ecommerce/`
- `knowledge.example/fintech/`
- `knowledge.example/healthcare/`

Each should mirror the SaaS example's structure with realistic, fictional data.

### 3. Improve the onboarding wizard

The `/onboard` command in `.claude/commands/onboard.md` is the highest-leverage adoption surface. PRs welcome for:
- Better voice extraction
- More file types in `scripts/ingest.py` (currently handles PDF, Word, PPT, CSV, zip, markdown)
- Multi-language support
- Industry-specific question branches

### 4. File issues

Open a GitHub issue if:
- A skill produces generic AI output despite full `knowledge/` (likely a prompt fix)
- A file type isn't handled by `scripts/ingest.py`
- The repo is unclear or onboarding stalled

## Skill design principles

Every skill in this repo follows the same contract. Keep it.

1. **Read context, then act.** Every skill loads `knowledge/` files declared in its frontmatter `reads:` list. If required files are missing, the skill stops and tells the user to run `/onboard`.

2. **Never hardcode brand context.** No company names, voice rules, or persona details in skill files. They are loaded at runtime.

3. **Specific over vague.** A skill that produces "best-in-class content" is broken. A skill that produces "an outcome-led 800-word LinkedIn post in the voice of a Series B Head of Growth" is working.

4. **Output to `output/`.** Never modify `knowledge/`, `templates/`, or `uploads/` (except `/onboard`).

5. **Self-check before showing.** Every skill must include a self-check step: voice match, no em dashes, format-specific rules, no AI tells.

6. **Feedback loops.** Skills that produce outcomes (campaigns, content, KPIs) should have a paired retro path. The OS gets smarter only when learnings get captured.

## Voice rules (apply to all generated content)

- No em dashes. Use commas or hyphens.
- No emojis unless the user explicitly asks.
- No corporate filler ("leverage", "unlock", "best-in-class", "in today's fast-paced world").
- Specific over vague. Numbers, examples, named companies.
- Active voice. Present tense.
- DD-MM-YYYY date format in internal docs.

## Pull request checklist

- [ ] Skill follows `_template/SKILL.md` structure
- [ ] Frontmatter has `name`, `description`, `reads`, `writes`
- [ ] Description has trigger phrases for auto-activation
- [ ] No brand-specific content (voice, ICP, services) hardcoded
- [ ] `reads:` lists every `knowledge/` file the skill needs
- [ ] Self-check criteria included
- [ ] Tested against `knowledge.example/saas/` and produces sensible output
- [ ] No mention of specific people, companies, or branded methodologies in skill text

## License

Apache 2.0. Fork it, adapt it, ship it back.
