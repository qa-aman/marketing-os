---
name: icp-research
description: Build or refine the Ideal Customer Profile (ICP) and personas. Use when the user asks for ICP research, persona development, "who are our customers", buyer personas, audience research, "build our ICP", target customer definition, or wants to update persona docs. Writes to knowledge/icp/personas.md so all other skills get smarter.
reads:
  - knowledge/icp/personas.md
  - knowledge/services/
  - knowledge/markets/positioning.md
  - knowledge/content-library/case-studies/
  - knowledge/learnings.md
writes:
  - knowledge/icp/personas.md
  - output/icp-research/
---

# icp-research

Builds rigorous, evidence-based personas. Writes to `knowledge/icp/personas.md` directly so the rest of the OS uses the updated context.

## When to use

- "Build our ICP from scratch"
- "Refine our buyer personas"
- "Who are we actually selling to?"
- "Update the persona doc based on these customer interviews"
- "I uploaded customer research, build personas from it"

## Inputs needed

- **Source material** (any combination):
  - Existing customer list (CSV in `uploads/`)
  - Customer interview notes
  - Win/loss data
  - Sales team input (paste in chat)
  - Existing case studies in `knowledge/content-library/case-studies/`
  - Pasted survey results
- **Number of personas** to build (default: 1 primary, 1-2 secondary; max 4)
- **Use case**: positioning, ABM targeting, content strategy, paid ads, sales enablement

## Process

1. **Load existing knowledge.** Read `knowledge/icp/personas.md` (if any), `knowledge/markets/positioning.md`, and case studies. If personas already exist, ask: "Replace or refine?"

2. **Gather evidence.** If `uploads/` has customer data, run analysis:
   - Common industries
   - Common company sizes (employees, revenue)
   - Common roles (the buyer, the user, the influencer)
   - Common geographies
   - Common acquisition channels
   - Win-rate by segment if available

   If no data, interview the user. Ask:
   - "Who are your top 5 customers by revenue or fit?"
   - "What pattern do you see across them?"
   - "Who do you NOT want as a customer?"
   - "Which deals close fastest?"

3. **Write the persona doc.** Use this structure (one block per persona):

   ```
   # ICP and Personas (DD-MM-YYYY)

   ## Primary persona: <Name + role>
   Example: "Maya, Head of Demand Gen at Series B SaaS"

   ### Demographics
   - Role: <title>
   - Seniority: <IC | Manager | Director | VP | C-level>
   - Team size: <range>
   - Reports to: <role>

   ### Firmographics
   - Company stage: <seed | A | B | C | growth | enterprise>
   - Employees: <range>
   - Revenue: <range>
   - Industries: <list>
   - Geographies: <list>

   ### Goals (what they're measured on)
   1. ...
   2. ...
   3. ...

   ### Pains (what's broken for them today)
   1. ... (specific, not generic)
   2. ...
   3. ...

   ### Jobs-to-be-done
   "When <situation>, I want to <motivation>, so I can <outcome>"
   List 2-3.

   ### How they buy
   - Discovery channels: <where they find tools>
   - Influencers: <who they trust>
   - Decision criteria: <ranked: outcomes, price, fit, brand, integrations>
   - Buying committee: <other roles involved>
   - Typical sales cycle: <weeks/months>
   - Common objections: <list>

   ### Where they hang out
   - Communities (Slack, Discord, Reddit subs)
   - Newsletters and podcasts
   - Conferences
   - LinkedIn groups, hashtags

   ### Voice (how to write to them)
   - Words they use: ...
   - Words they avoid: ...
   - Tone: <formal | conversational | technical>
   - Length tolerance: <skim | medium | deep dives>

   ### Anti-persona (NOT this person)
   Who looks similar but isn't a fit. Example: "Solopreneurs and pre-seed founders. They don't have budget or scale."

   ### Evidence
   - Source 1: <interview, survey, win-rate analysis>
   - Source 2: ...
   - Confidence level: high / medium / low (based on N data points)

   ---

   ## Secondary persona: <Name + role>
   Same structure, shorter
   ```

4. **Cross-check against case studies.** Open `knowledge/content-library/case-studies/`. Do the existing customers fit the personas? If not, either the personas are wrong or the case studies are unrepresentative. Flag the mismatch.

5. **Check against `knowledge/learnings.md`**. Past campaigns may have revealed which segment converts. Update personas accordingly.

6. **Self-check**:
   - Each persona has at least 3 specific pains, not generic ones
   - Each persona has an explicit anti-persona
   - Confidence level is honest (low if you have <5 data points)
   - Voice notes are concrete enough that `/content-writer` can use them
   - JTBD is in proper format ("When X, I want Y, so I can Z")

7. **Write to `knowledge/icp/personas.md`** (replace or merge based on user choice).

8. **Save a version snapshot** to `output/icp-research/<DD-MM-YYYY>-personas.md` so prior versions are preserved.

9. **Offer follow-ups**:
   - Update positioning to match (`/onboard --markets` or manual edit)
   - Build content briefs targeted at primary persona
   - Run `/competitor-analyst` to map competitors against the same personas

## Rules

- Never invent firmographics. If you have 3 customers, say "based on 3 interviews, low confidence" rather than overstating.
- The anti-persona is mandatory. If you don't know who is NOT your customer, you don't know who is.
- Pains must be specific. "Wants to grow revenue" is not a pain. "Spending 30% of week manually pulling reports" is.
- Voice notes must be concrete enough to use. "Professional" is useless. "Uses 'GTM' not 'go-to-market', avoids exclamation points, prefers numbered lists" is useful.
- Update `knowledge/icp/personas.md` directly. The whole OS depends on this file being current.
