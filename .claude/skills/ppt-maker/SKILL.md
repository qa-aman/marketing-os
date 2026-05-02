---
name: ppt-maker
description: Build branded PowerPoint decks (.pptx) for pitches, internal updates, sales decks, customer QBRs, board updates, conference talks. Use when the user asks for a deck, presentation, slides, pitch deck, sales deck, board deck, QBR, "make slides for X", or "build a presentation". Uses templates/ for brand assets. Generates structured slide content with speaker notes.
reads:
  - knowledge/brand/voice.md
  - knowledge/brand/visual.md
  - knowledge/markets/positioning.md
  - knowledge/services/
  - templates/
writes:
  - output/ppt/
---

# ppt-maker

Builds .pptx decks using the brand template, with structured slide content and speaker notes.

## When to use

- "Build a pitch deck for X"
- "Make a sales deck for <product>"
- "Draft slides for the board update"
- "Create a customer QBR deck"
- "Turn this article into a 10-slide presentation"

## Deck types this skill handles

| Type | Slide count | Structure |
|---|---|---|
| Pitch deck (investor) | 10-12 | Sequoia format: problem, solution, market, model, traction, team, ask |
| Sales deck | 8-12 | Hook, problem, agitate, solution, proof, pricing, next step |
| Board deck | 12-20 | KPIs, wins, misses, asks, plan |
| QBR (customer) | 6-10 | Recap, results, learnings, plan, asks |
| Conference talk | 15-30 | Hook, framework, evidence, application, takeaway |
| Internal update | 5-10 | Goal, progress, blockers, next steps |

## Inputs needed

- **Deck type** (from table above) or "custom"
- **Audience and goal**: who is this for, what action should they take after?
- **Source material**: notes, document, article, data points, or "build from scratch"
- **Length**: number of slides (default per type)
- **Brand template**: confirm `templates/<brand>.pptx` exists. If not, ask the user to drop one in.

## Process

1. **Load context.** Read `knowledge/brand/voice.md` (for slide copy) and `knowledge/brand/visual.md` (for color, type, image style references). Read `knowledge/markets/positioning.md` for any positioning slides. Confirm a `.pptx` template exists in `templates/`.

2. **Outline first.** Before generating, show the user the slide-by-slide outline as a numbered list:
   ```
   1. Title slide: <working headline>
   2. Hook: <opening question or stat>
   3. Problem: <the pain>
   ...
   ```
   Wait for the user to confirm or edit before building the file.

3. **Build the deck.** For each slide, generate:
   - **Slide title** (5-9 words, sentence case)
   - **Body content** (3-5 bullets max OR one big number OR one pull quote OR one diagram description)
   - **Speaker notes** (2-4 sentences, what the presenter says out loud)
   - **Visual recommendation** (the visual type, not the image: "screenshot of dashboard", "chart: bar, MRR by month", "icon grid: 4 logos")

4. **Use python-pptx to write the file.** Pseudocode the script if you do not have execution access; otherwise run it. The script should:
   - Open `templates/<brand>.pptx` as the base
   - Add slides using existing layouts (Title, Title+Content, Section Header, etc.)
   - Insert title and body text into the layout placeholders, not free-floating text boxes
   - Add speaker notes via `slide.notes_slide.notes_text_frame`
   - Save to `output/ppt/<DD-MM-YYYY>-<slug>.pptx`

   If the user does not have python-pptx installed, fall back to:
   - Generate `output/ppt/<DD-MM-YYYY>-<slug>.md` with the full slide-by-slide content
   - Tell the user how to install python-pptx and rerun

5. **Slide design rules**:
   - One idea per slide. If you have two, split.
   - 6 words max per bullet
   - 5 bullets max per slide
   - Numbers > words ("$2.4M" beats "significant revenue")
   - Title states the takeaway, not the topic ("Sales doubled in Q3" beats "Q3 sales review")

6. **Self-check**:
   - Title slide includes presenter name, date in DD-MM-YYYY, audience name
   - Every slide has speaker notes
   - Closing slide has one clear CTA or ask
   - Voice matches `knowledge/brand/voice.md`
   - Brand template applied (no default Office theme)

7. **Save** the .pptx and a parallel `.md` outline to `output/ppt/`.

## Building the file

Use python-pptx inline:

```python
from pptx import Presentation
from pathlib import Path

template = Path("templates") / "brand.pptx"
prs = Presentation(str(template))
# Use existing layouts, do not create new ones
title_layout = prs.slide_layouts[0]
content_layout = prs.slide_layouts[1]
# ... add slides
prs.save("output/ppt/DD-MM-YYYY-deck-name.pptx")
```

## Rules

- Never put a slide together without first showing the user the outline.
- Never use the default PowerPoint theme. If no template is in `templates/`, stop and ask the user to drop one in.
- Speaker notes are not optional. A deck without notes is half-done.
- For pitch decks, confirm the financial numbers (ARR, runway, ask) with the user before building. Do not pull from old `knowledge/kpis.md` without confirming they are current.
