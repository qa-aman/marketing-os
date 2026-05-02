---
name: case-study-writer
description: Write customer case studies and success stories from raw inputs (interview notes, data points, customer quotes). Use when the user asks for a case study, customer story, customer success story, win story, reference write-up, or "turn this customer into a case study". Reads brand voice and service catalog from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/services/
  - knowledge/icp/personas.md
  - knowledge/content-library/case-studies/
writes:
  - output/case-study/
---

# case-study-writer

Turns raw customer interview material into a structured case study. Strict 5-section format, designed for sales enablement and SEO.

## When to use

- "Write a case study from these notes"
- "Turn this customer interview into a story"
- "Draft a customer success story for X"
- "We need a reference write-up"

## Inputs needed (ask the user for each)

- **Customer**: name, industry, size, role of contact
- **Problem**: what they were doing before, what was broken
- **Solution**: which product or service they adopted
- **Implementation**: timeline, scope, who was involved
- **Results**: numbers, quotes, qualitative outcomes
- **Permission**: confirmed they can be named, or anonymous

If any are missing, ask. Do not invent.

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, the relevant `knowledge/services/<service>.md`, and 1-2 past case studies from `knowledge/content-library/case-studies/` to mirror structure.

2. **Confirm anonymization.** If the user has not confirmed permission to name the customer, default to anonymized ("a Series B fintech in EMEA") and flag for review.

3. **Write in the 5-section format**:

   ```
   # <Outcome-led headline>
   <e.g. "How <Customer> cut onboarding time from 14 days to 3">

   ## The customer
   - 1 paragraph: who they are, what they do, scale
   - End with the role and name of the contact

   ## The challenge
   - 2 paragraphs
   - Specific pain, not generic ("Their CSM team was spending 40% of week on manual data entry")
   - End with the cost of inaction (revenue lost, hires deferred, churn risk)

   ## The solution
   - 2-3 paragraphs
   - Why they chose <product>, what they implemented, who was involved
   - One pull quote from the customer about the decision

   ## The results
   - Lead with the headline metric (the one in the title)
   - 3-5 supporting metrics as a bulleted list
   - One pull quote about the outcome
   - Time-to-value if relevant

   ## What's next
   - 1 paragraph: how they plan to expand usage
   - Soft CTA: "If your team is dealing with <similar problem>, see how <product> can help"
   ```

4. **Voice rules**:
   - Customer is the hero, not the product
   - Use the customer's words verbatim where possible (mark as "[customer quote]")
   - Numbers are specific (47%, not "nearly half")
   - No marketing fluff ("revolutionary", "best-in-class")

5. **Self-check**:
   - Headline contains a specific number or outcome
   - At least 4 quantified results
   - 2 pull quotes minimum
   - Length: 600-1000 words
   - Voice matches `knowledge/brand/voice.md`

6. **Save** to `output/case-study/<DD-MM-YYYY>-<customer-slug>.md` with frontmatter:
   ```yaml
   ---
   format: case-study
   customer: <name or "anonymized">
   industry: <industry>
   service: <service from knowledge/services/>
   headline-metric: <the big number>
   permission-confirmed: <true|false>
   created: DD-MM-YYYY
   ---
   ```

7. **Offer derivative assets**:
   - LinkedIn post highlighting the headline metric
   - 1-pager PDF brief for sales (use `/ppt-maker` with case-study layout)
   - Quote graphic suggestions

## Rules

- Never invent metrics, quotes, or implementation details. If the user gave incomplete inputs, mark gaps as `[NEEDS INPUT: <what's missing>]` instead of fabricating.
- If permission is not confirmed, anonymize aggressively. Industry, region, and size only.
- Always show the cost of inaction in The challenge. A case study without it has no stakes.
