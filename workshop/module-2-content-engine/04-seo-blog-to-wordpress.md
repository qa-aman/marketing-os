# Lesson 4 - SEO blog drafts with header images, pushed to WordPress

> Module 2: The Content Engine · no-code track · ~25 min · Builds on Lesson 3

---

## What you'll build

A repeatable blog production pipeline for Verdal. Cowork reads your brand context and a target keyword, writes a fully structured SEO blog post in Verdal's voice, generates a matching header image, and pushes the draft straight into your WordPress backend - feature image attached, ready for human review.

By the end of this lesson you will have a live WordPress draft you can open, read, and publish with one click.

---

## Why it matters

Writing one blog post by hand takes two to four hours. Running this pipeline takes about fifteen minutes of active time and another ten minutes waiting. More importantly, the output is grounded: it reads your brand voice file, your ICP personas, and your keyword before writing a single word - so it does not drift into generic advice.

AI-first search (Perplexity, ChatGPT search, Google AI Overviews) rewards content with clear structure: a table of contents, short answers near the top, and named subheadings that match real queries. This pipeline bakes that structure in by default.

Everything lands in WordPress as a DRAFT. Nothing goes live until a human reads it and clicks Publish.

---

## Set up first

You need two connectors active in your Cowork project before running this lesson.

**Full setup steps are in [../connectors-setup.md](../connectors-setup.md).** Come back here once both are connected.

**WordPress connector - quick notes:**

- You will need your WordPress site URL, a username, and an Application Password (not your login password). Create one under Users > Profile > Application Passwords in your WordPress admin.
- The connector creates posts with status `draft` by default. Double-check this before your first run - you do not want anything going live automatically.
- If your site uses a custom domain with SSL, make sure the URL you enter starts with `https://`.

**Image generation connector (Nano Banana MCP or equivalent):**

- Install and enable in Cowork's MCP settings.
- No extra credentials needed for most setups - just toggle it on.
- Cowork will call it automatically when your prompt asks for an image.

---

## Step by step

**1. Add your SEO brief to the content planner**

Open `verdal-marketing/projects/content-planner.xlsx`. Go to the SEO Blog tab. Add a new row:

| Column | What to fill in |
|---|---|
| Topic | The post subject (e.g. "how to water a monstera") |
| Target keyword / query | The exact phrase you want to rank for |
| Persona | Plant-proud Priya or New-plant Nate |
| Status | Empty |
| Output path | Leave blank - Cowork fills this in |

Save the file.

**2. Open your Verdal project in Cowork**

Make sure your `CLAUDE.md` loads from `verdal-marketing/`. If you completed Lesson 3, this is already set.

**3. Run the blog writing prompt**

Paste the prompt from the next section into Cowork. Cowork reads the planner, loads brand context, writes the draft, generates the header image, and saves both to `verdal-marketing/projects/seo-blog/`.

This step takes ten to fifteen minutes. Do not close Cowork while it runs.

**4. Review the draft**

Open the output file. Read the full post. Check that the voice matches Verdal's tone and that the keyword appears naturally in the intro, at least one subheading, and the conclusion. Fix anything that sounds robotic or off-brand.

**5. Push to WordPress**

Once you are happy with the draft, run the WordPress push prompt (second prompt below). Cowork connects to WordPress, creates the post as a draft, and attaches the header image as the feature image. You will see a confirmation with a link to the draft in your WordPress backend.

**6. Publish when ready**

Log into WordPress. Open the draft. Make any final edits. Click Publish. That is the only step a human needs to take.

---

## The prompt

**Prompt 1 - Write the SEO blog draft and header image**

```
Read verdal-marketing/CLAUDE.md to load brand context, voice rules, and skill paths.

Then read verdal-marketing/projects/content-planner.xlsx and find the first row in the SEO Blog tab where Status = Empty.

Write a complete SEO blog post for Verdal using the topic, target keyword, and persona in that row. Follow these structure rules:
- Title: 55-65 characters, includes the target keyword
- Meta description: 145-155 characters, one clear promise
- Introduction: 80-100 words, answers the core query directly in the first paragraph
- Table of contents: linked H2 headings
- Body: 4-6 H2 sections, each with 150-250 words and 2-4 bullet points where they add clarity
- Key takeaways box near the end: 3-5 bullets, scannable
- Conclusion: 60-80 words, no new information, soft CTA

Write in Verdal's voice from verdal-marketing/context/brand-voice.md. Use the target keyword naturally - not forced into every sentence.

After writing the post, generate a header image using the image generation tool. Image brief: botanical photography style, deep botanical green tones, clean and calm, no text overlay, 1200x628px.

Save the post as verdal-marketing/projects/seo-blog/DRAFT-[slug].md and the image as verdal-marketing/projects/seo-blog/[slug]-header.png.

Update the content planner: set Status to "Draft complete" and fill in the Output path column.

Report back with: word count, keyword density estimate, and the image file path.
```

**Prompt 2 - Push the draft to WordPress**

```
Read the Verdal SEO blog draft at [paste the file path from step 3].

Connect to WordPress using the WordPress connector.

Create a new post with:
- Status: draft (not published)
- Title: [from the draft's H1]
- Content: the full post body, formatted with correct heading levels
- Feature image: [paste the header image file path]
- Categories: assign "Plant Care" if it exists, otherwise leave uncategorized
- Tags: extract 3-5 relevant tags from the post content

Confirm the draft URL once the post is created. Do not publish.
```

---

## What good looks like

A well-run pipeline produces a WordPress draft that looks like this when you open it:

- Feature image showing in the top right of the editor - no broken image link.
- Title visible and under 65 characters.
- Body formatted with H2 and H3 headings, not a wall of text.
- No placeholder text (no "[INSERT EXAMPLE HERE]" left behind).
- Voice that sounds like Verdal: warm, practical, plain. Not "maximize your botanical investments."
- Keyword in the title, first paragraph, and at least one H2.
- Word count between 900 and 1,400 words for a standard how-to post.

If the draft fails any of these, fix it before publishing. A five-minute edit beats a weak post going live.

---

## Your turn

Work through the pipeline with one Verdal post. Use this keyword to start: **"why monstera leaves turn yellow"**. Your persona is New-plant Nate.

After the draft lands in WordPress, check these three things before you call it done:

1. Does the intro answer the question in the first two sentences?
2. Does the header image look like something you would actually use on the Verdal site?
3. Are there any sentences that sound like AI wrote them rather than a knowledgeable plant person?

Fix what needs fixing. Then try a second post with a keyword you actually want to rank for.

---

## Common mistakes

**Publishing instead of drafting.** Double-check the WordPress connector is set to `draft` status before you run the push prompt. If a post goes live before review, unpublish it immediately from the WordPress backend.

**Skipping the brand voice file.** If `verdal-marketing/context/brand-voice.md` is missing or empty, the post will default to generic AI writing. Run `/onboard` to build that file first.

**Not checking keyword placement.** Cowork will use the keyword, but sometimes it ends up only in the body. Read the intro and the title manually. Move the keyword earlier if it is buried.

**Broken feature image.** If the image did not attach, the draft will show no feature image. Open the WordPress media library, confirm the image uploaded, then assign it manually under the post's Featured Image panel.

**Running too many posts at once on your first try.** Do one post end to end. Confirm the whole chain works before running five in a batch. Batch runs save time once the setup is solid.

---

## What you just learned

You built a full SEO blog pipeline: brand-grounded drafting, structured for AI search, header image generated and attached, pushed to WordPress as a draft ready for human review.

Next: [Lesson 5 - The distribution layer](05-distribution-notion.md)
