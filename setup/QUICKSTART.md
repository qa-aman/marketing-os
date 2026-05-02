# Quickstart

Get marketing-os working for your company in 15 minutes.

## 1. Clone and rename

```bash
git clone https://github.com/<you>/marketing-os.git my-company-marketing-os
cd my-company-marketing-os
```

## 2. Install Python dependencies (for file ingestion)

```bash
pip install pypdf python-docx python-pptx
```

Skip this only if you have no PDF, Word, or PPT files to upload.

## 3. Open in Claude Code

```bash
claude
```

## 4. Drop your existing docs (optional but faster)

If you have any of these, drop them into `uploads/` before running the wizard:

| You have... | Drop it in |
|---|---|
| Brand guidelines PDF | `uploads/` |
| Past blog posts (markdown, docx, or URLs) | `uploads/` or paste URLs in chat |
| Service catalog PDF or PPT | `uploads/` |
| ICP / persona doc | `uploads/` |
| Pitch deck (.pptx) | `uploads/` |
| Case studies | `uploads/` |
| KPI dashboard CSV | `uploads/` |
| Notion workspace export (.zip) | unzip into `uploads/notion/` |
| Brand .pptx template | `templates/` (not uploads) |

Then run the ingest script to convert everything to markdown:

```bash
python scripts/ingest.py
```

No existing docs? Skip this step entirely.

## 5. Run the wizard

```
/onboard
```

The wizard checks what was extracted from your uploads, scores completeness against an internal rubric, and asks targeted questions only for what is missing. If you skipped Step 4, it interviews you section by section.

When you say "done", it shows any remaining gaps and their impact on skill output quality. You decide whether to fill them now or later. Use `/onboard --<section>` to return to any one section (`--brand`, `--icp`, `--services`, `--kpis`, `--role`).

## 6. Test a skill

```
/content-writer write a LinkedIn post about <a recent launch or insight>
```

If the output sounds like your brand, you are done. If not, add 3+ more past pieces to `uploads/` and rerun `/onboard --brand` so voice extraction has more signal.

## 7. Daily use

- `/content-writer ...` for posts, blogs, emails, ads
- `/campaign-brief ...` to plan a campaign
- `/ppt-maker ...` to draft a deck
- `/kpi-review ...` for monthly metric review
- `/retro ...` to capture learnings (writes to `knowledge/learnings.md`, makes future runs smarter)

## What goes in git

The `.gitignore` excludes `knowledge/`, `uploads/`, `templates/`, `output/`, and local Claude settings. Your private context never gets pushed upstream. If you want your team to share `knowledge/` and `templates/`, create a private fork and remove those entries from `.gitignore` in the fork only.

## Re-onboarding

Run `/onboard` again any time. It detects existing knowledge and asks whether to update or start fresh.
