---
name: seo-article-writer
description: Write SEO-optimized long-form articles targeting specific keywords. Use when the user asks for an SEO article, blog post for ranking, "rank for keyword X", organic content, search-optimized post, pillar page, or content for organic traffic. Includes keyword targeting, search intent matching, internal linking suggestions, and meta tags.
reads:
  - knowledge/brand/voice.md
  - knowledge/icp/personas.md
  - knowledge/services/
  - knowledge/markets/positioning.md
  - knowledge/content-library/
writes:
  - output/seo-article/
---

# seo-article-writer

Writes long-form articles tuned for organic search. Different from thought leadership: optimizes for search intent and keyword coverage, not contrarian POV.

## When to use

- "Write an SEO article on <keyword>"
- "Build a pillar page for <topic>"
- "Rank for <keyword>"
- "Create content that ranks"
- "Write organic blog content on X"

## Inputs needed

- **Primary keyword** (required): the head term to rank for
- **Search intent**: informational, commercial, transactional, navigational (default: ask the user, or infer)
- **Target length**: 1500, 2500, or 3500 words (default: 2500 for pillar, 1500 for supporting)
- **Existing top 3 SERP results**: paste URLs or have the skill use WebFetch
- **Internal pages to link to**: list URLs from the user's site

## Process

1. **Load context.** Read `knowledge/brand/voice.md`, relevant `knowledge/services/`, and `knowledge/content-library/` to find related pieces for internal linking.

2. **Analyze the SERP.** If the user provided top 3 URLs, use WebFetch to read each. Identify:
   - Average word count
   - Common H2 headings (the questions search expects answered)
   - Information gaps (what they all miss)
   - Format type (listicle, guide, comparison, definition)

   If the user did not provide URLs, ask them to paste the top 3 they're competing against.

3. **Match search intent.** Pick the right format:

   | Intent | Format | Length |
   |---|---|---|
   | Informational ("what is X") | Definition + components + examples | 1200-2000 |
   | Commercial ("best X for Y") | Listicle with comparison criteria | 2000-3000 |
   | Transactional ("buy X") | Product page with FAQs | 800-1500 |
   | Navigational ("X login") | Skip, this is a brand search |
   | Comparison ("X vs Y") | Head-to-head table + verdict | 1500-2500 |
   | How-to ("how to X") | Numbered steps + screenshots | 1500-2500 |

4. **Outline.** Show the user the H1 + H2 structure before writing:

   ```
   H1: <article title with primary keyword>
   - H2: <question 1, often "What is X"> (covers 2-3 H3s)
   - H2: <question 2>
   - H2: <comparison table or list>
   - H2: <FAQ section>
   - H2: <conclusion or next steps>
   ```

   Include 5-8 H2s. Each must answer a specific question the searcher has.

5. **Write the article**:
   - **Title**: 50-60 chars, primary keyword in first half
   - **Meta description**: 140-155 chars, primary keyword + benefit + soft CTA
   - **Intro**: 100-150 words. Answer the keyword question in the first paragraph. People-first content scoring favors this.
   - **Body**: H2 sections. Each section 200-400 words.
   - **Use the keyword** in: H1, first paragraph, one H2, image alt text, conclusion. Avoid keyword stuffing.
   - **Semantic variants**: include 5-10 LSI/related terms naturally
   - **Internal links**: 3-5 to other pieces in `knowledge/content-library/` or pages on the user's site
   - **External links**: 2-3 to authoritative sources (with the source link)
   - **One table** if it adds clarity
   - **One FAQ section** at the end (3-5 questions, 50-80 words each)
   - **Conclusion**: 100-150 words. Summarize, then CTA.

6. **Voice rules**:
   - Match `knowledge/brand/voice.md`
   - Avoid AI tells: no "In today's fast-paced world", no "navigating the complexities of", no "leverage", no em dashes
   - Use specific examples and named companies, not "many businesses"
   - Active voice

7. **Self-check**:
   - Primary keyword appears in title, first 100 words, one H2, conclusion
   - 3-5 internal links present
   - At least one table or list for scanability
   - FAQ section present
   - Word count matches target ±10%
   - No em dashes

8. **Save** to `output/seo-article/<DD-MM-YYYY>-<keyword-slug>.md` with frontmatter:
   ```yaml
   ---
   format: seo-article
   primary-keyword: <keyword>
   intent: <informational|commercial|transactional|comparison|how-to>
   target-length: <words>
   actual-length: <words>
   internal-links: <count>
   meta-title: <title>
   meta-description: <desc>
   created: DD-MM-YYYY
   ---
   ```

9. **Offer follow-ons**:
   - LinkedIn post promoting the article
   - 3 supporting articles to build a topic cluster
   - Schema markup recommendation (Article, FAQ, HowTo)

## Rules

- Never write SEO content without the top 3 SERP URLs. Without them, you are guessing what to beat.
- Never stuff keywords. Density above 2% is a red flag.
- Every H2 must answer a question someone actually searches. If you cannot turn an H2 into a "People also ask" question, rework it.
- People-first content. If you would not want to read this as a human, do not publish it.
