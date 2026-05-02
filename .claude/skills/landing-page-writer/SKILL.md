---
name: landing-page-writer
description: Write landing page copy for product pages, campaign pages, lead-gen pages, pricing pages, and feature pages. Use when the user asks for landing page copy, product page, lead magnet page, "write the page for X", pricing page copy, feature page, hero section, or web copy that converts. Reads brand voice, positioning, and ICP from knowledge/.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/markets/positioning.md
  - knowledge/services/
writes:
  - output/landing-page/
---

# landing-page-writer

Writes conversion-focused landing page copy with a defined section structure. Different from blog writing: every section has a job tied to conversion psychology.

## When to use

- "Write the landing page for our new product"
- "Draft the campaign page for <event>"
- "Write copy for the pricing page"
- "We need a lead magnet page for the ebook"
- "Write the hero section for our homepage"

## Page types this skill handles

| Type | Length | Sections |
|---|---|---|
| **Product page** | Long | Hero, social proof, problem, solution, features, proof, pricing, FAQ, CTA |
| **Campaign / launch page** | Medium | Hero, why-now, what's new, social proof, CTA |
| **Lead magnet page** | Short | Hero, what's inside, who it's for, form, social proof |
| **Pricing page** | Medium | Hero, plan comparison, feature matrix, FAQ, contact |
| **Feature page** | Medium | Hero, problem, how it works, use cases, integrations, CTA |
| **Hero only** | 1 section | H1 + sub + CTA |

## Inputs needed

- **Page type** (from table)
- **Audience persona**: from `knowledge/icp/personas.md`
- **Single conversion action**: book demo, sign up free, download, contact sales, start trial
- **Offer specifics**: what the visitor gets, how long, any pricing
- **Existing assets**: testimonials, customer logos, stats, screenshots (paste or reference files)
- **Constraints**: word count, brand patterns, must-include phrases

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, the relevant persona, `knowledge/markets/positioning.md`, and the relevant service file.

2. **Define the conversion.** What is the ONE action this page exists to drive? If the user names two, force them to pick. Every section serves this action.

3. **Write the page section by section.** Use this canonical structure for a full product page (adapt down for shorter types):

   ```
   ## Hero
   H1 (8-12 words): Outcome-led, specific. NOT "The platform for X". YES "<Outcome the visitor wants> for <persona>"
   Sub (15-25 words): How it works in plain English + who it's for
   Primary CTA button: 2-3 words, action verb
   Secondary CTA (optional): "See how it works" or "Watch demo"
   Hero visual brief: <what the image/video should show>

   ## Social proof bar
   - 5-8 customer logos OR
   - One stat ("Trusted by 4,200+ teams") OR
   - 3-line testimonial with photo

   ## Problem (the pain)
   Section H2: <restate the visitor's pain in their language>
   Body (60-100 words): Specific, with the cost of inaction
   Optional: 3-bullet list of pain manifestations

   ## Solution (how we solve it)
   Section H2: <one-line value prop>
   Body (80-120 words): The mental model. How the product works without jargon.
   Visual brief: product screenshot or diagram

   ## Features (3-5 max)
   Each feature:
     H3 (5-8 words): outcome-led
     Body (40-60 words): how it works + why it matters
     Visual brief: <screenshot or icon>

   ## Proof (case studies, testimonials)
   - 1 hero case study (one stat + one quote + customer name)
   - 3 short testimonials (1 sentence each, with name + role + company)
   - Optional: 1 results stat ("Customers ship 2.4x faster on average")

   ## Pricing (if applicable)
   Use existing pricing page structure or recommend one.

   ## FAQ (5-8 questions)
   Real objections, not softballs. "How is this different from X" not "Is your product good".

   ## Final CTA
   H2: outcome-led restatement
   Body (30-50 words): what happens after they click
   Primary CTA button: same as hero
   Risk reducer: "No credit card required" / "Cancel anytime" / "Free for 14 days"
   ```

4. **Voice rules**:
   - Match `knowledge/brand/voice.md`
   - Second person ("you"), not third person
   - Specific over vague. Numbers, named integrations, named outcomes.
   - Active voice
   - No corporate language: "leverage", "unlock", "robust", "seamless", "best-in-class", "industry-leading"
   - No em dashes
   - No hero copy that could apply to any product

5. **Conversion psychology checks**:
   - Above the fold: visitor knows what it is, who it's for, and what to do next
   - Pain comes before solution. Visitors don't buy solutions, they buy pain relief.
   - Proof appears before the ask
   - Risk is reduced near the CTA
   - One action, repeated. Multiple CTAs OK only if they all drive the same conversion.

6. **Self-check**:
   - H1 is outcome-led, not feature-led
   - Page has exactly one conversion action
   - Social proof appears within first scroll
   - No buzzwords
   - Voice matches brand
   - CTA copy is action verb + outcome ("Get my plan" beats "Submit")

7. **Save** to `output/landing-page/<DD-MM-YYYY>-<slug>.md` with frontmatter:
   ```yaml
   ---
   format: landing-page
   page-type: <type>
   conversion-action: <action>
   audience: <persona>
   offer: <offer>
   created: DD-MM-YYYY
   ---
   ```

8. **Offer companion assets**:
   - Meta title and meta description (60 + 155 chars)
   - Open Graph copy for social shares
   - Confirmation page copy (post-conversion)
   - Email follow-up after form submit (link to `/email-nurture`)

## Rules

- One conversion action. Always.
- Hero copy must work without the rest of the page. If a visitor reads only the hero and bounces, they should know what you do.
- Never write pricing without confirming actual prices with the user. Outdated pricing is worse than no pricing.
- Visual briefs are required for every section that needs an image. Designers can't ship without them.
- If the page involves regulatory claims (medical, financial, legal), flag for legal review.
