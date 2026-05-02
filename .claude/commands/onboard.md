---
description: Onboarding wizard for marketing-os. Upload-first: parses existing brand docs, pitch decks, website copy, and ICP research from uploads/, extracts context, writes knowledge/ files, then asks targeted questions only for what is missing. Scores completeness against an internal rubric out of 100. Does not share score until it exceeds 95. Cloner decides whether to fill remaining gaps. Supports --icp, --brand, --services, --kpis, --role args to jump to a specific section.
---

# /onboard

Populates `knowledge/` so every skill in marketing-os produces brand-accurate, ICP-specific output instead of generic AI copy.

Two paths:
- **Upload-first** (preferred): cloner drops existing docs into `uploads/`, ingest script extracts content, wizard scores and fills gaps.
- **Q&A-only** (no existing docs): wizard interviews the cloner section by section.

Internal rubric runs continuously. Score is never shared with the cloner until it exceeds 95/100. Below 95, ask gap-filling questions. Above 95, surface remaining gaps as optional and let the cloner decide.

---

## Rubric (100 points - internal, never show score until >95)

Score each file every time content is added or updated.

### company.md - 8 pts
| Criterion | Points |
|---|---|
| Name + website + one-liner | 2 |
| Plain-English "what we do" (includes the problem and who has it) | 2 |
| Who we sell to (role, stage, deal size, sales cycle) | 2 |
| Boilerplate paragraph + explicit "what we are NOT" list | 2 |

### role.md - 5 pts
| Criterion | Points |
|---|---|
| Role title + top 3 KPIs they're measured on (with current and target values) | 2 |
| Working style + what they want from the OS | 3 |

### brand/voice.md - 22 pts (most critical - determines output quality for every skill)
| Criterion | Points |
|---|---|
| Voice in one sentence | 2 |
| At least 5 named voice principles with explanations | 5 |
| Phrases we use (5+) AND phrases we avoid (5+) | 4 |
| Sentence length pattern + POV by content type (blog, product, newsletter, press) | 3 |
| Tone calibration (formal scale 1-10, humor approach, confidence level) | 3 |
| Style rules: em dash policy, emoji policy, number format, date format, Oxford comma, contractions | 3 |
| At least 1 concrete good example AND 1 bad example in their voice | 2 |

### brand/visual.md - 5 pts
| Criterion | Points |
|---|---|
| Color palette (primary, accent, neutral at minimum, with hex codes) | 2 |
| Typography (heading + body fonts) | 1 |
| Logo rules (minimum size, clearspace, what to avoid) | 1 |
| Image style guidance (photography, illustration, screenshot rules) | 1 |

### services/ (at least 1 file) - 18 pts
| Criterion | Points |
|---|---|
| What it is (description a non-expert would understand) | 3 |
| Who it's for (buyer role, company profile) + who it's NOT for (anti-customer) | 3 |
| Pricing (tiers, deal size, or honest ballpark - "custom only" counts if stated) | 4 |
| Proof points (metrics, named customers, benchmarks - at least 3 specific claims) | 4 |
| Top 3 objections and their responses | 4 |

### icp/personas.md (at least 1 persona) - 18 pts
| Criterion | Points |
|---|---|
| Role + firmographics (company stage, size, revenue range, industry) | 3 |
| Goals (what they're measured on, 3+) + pains (today's frustrations, 3+) | 4 |
| Jobs-to-be-done in "when...I want...so I can" format (at least 2) | 4 |
| How they buy (discovery channels, decision criteria ranked, buying committee, objections) | 3 |
| Where they hang out (communities, newsletters, podcasts, conferences) | 2 |
| Voice/language they use vs avoid | 2 |

### markets/positioning.md - 10 pts
| Criterion | Points |
|---|---|
| One-sentence positioning (target + problem + category + benefit + alternative + differentiator) | 3 |
| What we are + what we are NOT (explicit category boundaries) | 3 |
| Messaging hierarchy: H1 + sub-headline + 3 supporting messages | 2 |
| Proof points (5+ specific claims with numbers) | 2 |

### markets/competitors.md - 5 pts
| Criterion | Points |
|---|---|
| At least 2 competitors with comparison table | 2 |
| Per-competitor: their weakness + our competitive angle + recent moves | 3 |

### kpis.md - 5 pts
| Criterion | Points |
|---|---|
| North star metric (name, current value, target, timeframe) | 2 |
| At least 4 Tier 1 KPIs with current values and targets | 3 |

### content-library/ - 4 pts
| Criterion | Points |
|---|---|
| At least 1 past article or blog post (used for voice extraction) | 2 |
| At least 1 case study or customer story | 2 |

---

## Step-by-step process

### Step 0: Check for section args and existing state

If `--icp`, `--brand`, `--services`, `--kpis`, or `--role` is passed, jump straight to that section's gap-filling questions. Skip the welcome message.

Otherwise, check if `knowledge/company.md` exists. If it does, ask:
"Onboarding has already run. Do you want to (a) re-onboard from scratch, (b) fill specific gaps, or (c) cancel?"

If fresh clone, show the welcome message:

```
Welcome to /onboard. I'll set up your knowledge/ folder so every skill in this OS
produces output that sounds like your brand, speaks to your ICP, and references real numbers.

Estimated time:
- If you have existing brand docs: 15-20 minutes
- Starting from scratch: 30-45 minutes

Two ways to start:

OPTION A (faster): Drop your existing docs into the uploads/ folder.
  - Any format works: PDF, PPTX, DOCX, MD, TXT, CSV
  - Good sources: brand guidelines, pitch deck, website copy, past articles, ICP research, competitor analysis
  - Then run: python scripts/ingest.py
  - Tell me when the script finishes and I will check what was extracted.

OPTION B (no existing docs): Type "start" and I will interview you section by section.

Which would you like to do?
```

---

### Step 1: Ingest uploaded docs (Option A)

When the cloner says the script finished:

1. List all files now in `knowledge/` across all subfolders.
2. Read each file to assess content quality - not just presence.
3. Run the full rubric. Calculate points per section.
4. Identify all gaps where points are 0 or partial.
5. Sort gaps by impact (highest missing points first).
6. Say: "I've reviewed what was extracted. Let me ask about the gaps."

For URLs pasted in chat: use WebFetch to read them, extract relevant content, save to `knowledge/content-library/<slug>.md`.

If uploads/ was empty or script wasn't run, switch to Option B automatically.

---

### Step 2: Gap-filling Q&A

Work through gaps in this order: company -> role -> brand/voice -> services -> icp -> positioning -> competitors -> kpis -> content-library.

**Rules:**
- Never ask for information already in `knowledge/` at >80% of its section points.
- One section at a time. Never more than 3 questions per section.
- Be specific. Not "tell me about your brand voice" but "What are 3 phrases your team uses constantly that sound like you? And 3 phrases you'd never write?"
- After each answer: write to the correct `knowledge/` file immediately, recompute that section's score.
- Never tell the cloner the score.

**Questions per gap:**

**company.md:**
- One-liner missing: "Finish this sentence: '[Company] is the [category] that [outcome] for [customer type].'"
- "What we do" missing: "What problem do your customers have before they find you? Describe it as they would."
- "Who we sell to" missing: "Who is your typical buyer? Role, company size, and average deal size."
- "What we're NOT" missing: "Name 3 things people confuse you with that you're not."

**role.md:**
- KPIs missing: "What are the 3 numbers your boss looks at to decide if you're doing well? Include current value and target."
- Working style missing: "How do you prefer to work? What do you hate most in vendor communications?"

**brand/voice.md (spend the most time here):**
- Voice missing: "Describe your writing voice in one sentence. Who would be talking, to whom, about what, in what setting?"
- Principles missing: "What are 3 rules your best writer follows that a new hire wouldn't know from a style guide?"
- Phrases missing: "What 3 words or phrases sound distinctly like you? What 3 phrases would you delete from any draft?"
- Examples missing: "Paste a paragraph you're proud of. Then paste an example of the kind of writing you hate."
- Style rules missing: "Do you use contractions? Em dashes? Emojis in external content? Spell out 'five' or always '5'?"

**services/:**
- No service file: "Name your main product or service. In 2 sentences, what does it do and who is it for?"
- Pricing missing: "What does it cost? Rough tiers are fine. If pricing is custom, say so."
- Proof points missing: "What's your strongest customer result? One sentence, with a number."
- Objections missing: "What's the #1 reason prospects say no? And what do you say back?"

**icp/personas.md:**
- No persona: "Describe your best customer in the last 6 months. Role, company type, and what they were struggling with before they bought."
- JTBD missing: "Finish: 'When [situation], they want [outcome] so they can [deeper goal].'"
- How they buy missing: "How do your best customers find you? What made them choose you over alternatives?"
- Where they hang out missing: "What newsletters, communities, podcasts, or conferences does your typical buyer follow?"

**markets/positioning.md:**
- Positioning missing: "Finish: 'For [target customer] who [problem], [Company] is the [category] that [benefit], unlike [alternative] which [weakness].'"
- What we're not missing: "What are the top 3 things customers confuse you with?"
- Messaging hierarchy missing: "What's your homepage H1? What's the first line under it?"
- Proof points missing: "Give me 5 specific claims with numbers you're comfortable putting on your website."

**markets/competitors.md:**
- No competitors: "Who are your top 2 competitors? For each: their biggest weakness and the angle you use when a prospect mentions them."

**kpis.md:**
- North star missing: "What's the one metric that, if it went up 20%, would make your quarter? Current value and target."
- Tier 1 missing: "List your 4 most-watched business metrics with current values."

**content-library/:**
- No articles: "Paste a piece of content that best represents your voice. Or share a URL."
- No case studies: "Describe a customer win in 3-4 sentences: who they are, what problem they had, what happened after."

---

### Step 3: Writing to knowledge/ files

When writing files:
1. Use `knowledge.example/saas/` as the structural template for each file type.
2. Replace all Threadline/fictional content with the cloner's actual content.
3. Use DD-MM-YYYY date format anywhere a date appears.
4. Add at the top: `# Last updated via /onboard - DD-MM-YYYY`
5. Never invent facts. If the cloner didn't provide it: `[NOT PROVIDED - ask cloner]`.

For `brand/voice.md`: if content-library has articles, extract voice from them first (sentence patterns, vocabulary, formality). Pre-fill the voice file before asking questions.

For `learnings.md` when no learnings exist yet:
```
# Learnings

Captured by /retro after each campaign or initiative. Newest at the top.
Every skill reads this file. The more you capture, the smarter the OS gets.

---

(No learnings yet. Run /retro after your first campaign.)
```

---

### Step 4: When cloner says "done"

Run the full rubric one final time across all `knowledge/` files.

**If score >= 95**, share:
```
Your knowledge base is complete. Score: [X]/100.

Every skill in this OS will now produce output calibrated to your brand, ICP, and positioning.

To get started:
- /linkedin-post draft a post about [topic]
- /campaign-brief plan our next campaign
- /content-repurposer atomize this: [paste article]

Run /retro after each campaign to make the OS smarter over time.
```

**If score < 95**, share (do not include the score number):
```
Good progress. Here's what would make a meaningful difference before you start:

1. [file] - Missing: [specific gap]
   Why it matters: [which skills are affected and how]
   To fix: [one concrete action]

2. [file] - Missing: [specific gap]
   Why it matters: [which skills are affected and how]
   To fix: [one concrete action]

[continue for each gap, ordered by impact]

You can fill these now or skip them. The skills will work either way - they'll just be
less accurate on the items above. What would you like to do?
```

If cloner fills gaps: write to files, rerun rubric, loop back to Step 4.
If cloner says skip or done: confirm the OS is live, share the "to get started" commands.
Never pressure the cloner to fill remaining gaps. They decide.

---

## File structure reference

```
knowledge/
├── company.md
├── role.md
├── kpis.md
├── learnings.md
├── brand/
│   ├── voice.md
│   └── visual.md
├── services/
│   └── <slug-of-service-name>.md
├── icp/
│   └── personas.md
├── markets/
│   ├── positioning.md
│   └── competitors.md
└── content-library/
    ├── <past-articles>.md
    └── case-studies/
        └── <customer-name>.md
```

---

## Edge cases

**Pitch deck uploaded (PPTX):** Extract "About Us" slide -> company.md, "Market" slide -> positioning.md, "Customer" slide -> icp/personas.md. Extract from slide bodies, not just headers.

**URL pasted instead of file:** Use WebFetch to read it. Route extracted content to the appropriate knowledge/ file.

**Agency onboarding for a client:** Ask first: "Is this for your own brand or a client?" If client: route all files to `knowledge/<client-slug>/`.

**Non-English content:** Write knowledge/ files in their language. Add `# Language: [language]` at the top of voice.md.

**"I'll fill this in later":** Mark as `[DEFERRED BY CLONER - DD-MM-YYYY]` in the knowledge file. Count as 0 points. Don't ask again unless cloner resumes.

**Ingest script fails:** Fall back to reading files with the Read tool and writing markdown manually. Tell the cloner which file caused the failure.

---

## Quality checks before writing any knowledge file

- No fictional content from knowledge.example/ has leaked. Check for "Threadline", "Maya", "Ramp", "threadline.com" - replace with cloner's content or `[NOT PROVIDED]`.
- Date format is DD-MM-YYYY everywhere.
- File structure matches the corresponding example in `knowledge.example/saas/`.
- voice.md contains real examples from uploaded content or cloner input, not invented examples.

---

## Rules

- Never share the rubric score until score > 95.
- Never invent brand facts, proof points, or customer names.
- Never overwrite an existing knowledge/ file without reading it first.
- If a section already scores >80%, skip its questions.
- Maximum 3 questions per section. Depth comes from follow-ups, not interrogation.
- Always write to the file after each answered section. Never batch at the end.
- Never push files to git. Remind the cloner that knowledge/ is gitignored by design.
