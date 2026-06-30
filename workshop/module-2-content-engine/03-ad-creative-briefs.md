# Lesson 3 - Ad creative briefs, then batch visual variations

> Module 2: The Content Engine - no-code track - ~25 min - Builds on Lesson 2

---

## What you'll build

A two-step ad production pipeline inside Claude Cowork. First, you will generate structured creative briefs for five Verdal campaigns. Then, from those briefs, you will produce multiple visual ad variations per campaign, all saved to your projects folder and ready for review or export.

By the end of this lesson you will have a repeatable system: fill a simple planning file, run two prompts, and walk away with briefs and ad variations without touching a design tool.

---

## Why it matters

Most teams write ad copy in isolation. The creative brief lives in one doc, the visual direction in another, and the actual copy in a Slack thread. Nothing connects.

This pipeline fixes that. The brief is the single source of truth. Every visual variation traces back to it. When a campaign underperforms, you know exactly which angle failed and why, because each brief names the angle, the audience, the hook, and the goal.

Producing 25 ad variations across 5 campaigns by hand takes days. With this pipeline it takes one session.

---

## Set up first

You need a connected image generation tool to complete step 2 of this lesson. Cowork cannot generate image files without one.

If you have not set that up, see [../connectors-setup.md](../connectors-setup.md) and install an image generation connector before continuing. Step 1 (brief generation) works without it; step 2 does not.

Your verdal-marketing/ folder should already exist from Lesson 2 with this structure:

```
verdal-marketing/
  context/
    brand.md
    voice.md
    personas.md
  templates/
    ad-brief-template.md
  projects/
    ads/
```

If the `projects/ads/` folder does not exist, create it now inside verdal-marketing/.

---

## Step by step

### 1. Fill your campaign planning file

Create a file called `ad-campaigns.md` inside `verdal-marketing/projects/ads/`. Add one row per campaign. You need five columns: campaign name, product, goal, platform, and audience.

Example for Verdal:

```
| Campaign | Product | Goal | Platform | Audience |
|---|---|---|---|---|
| care-box-launch | Care Box $29/month | Subscriptions | Instagram | Plant-proud Priya |
| nate-starter | Care Box $29/month | Subscriptions | Facebook | New-plant Nate |
| nutrient-range | Nutrient line | Product sales | Instagram | Plant-proud Priya |
| gifting-season | Care Box $29/month | Gift purchases | Facebook | Both |
| tools-spotlight | Tool range | Product sales | Pinterest | Plant-proud Priya |
```

Save the file. This is your command center for the brief generation step.

### 2. Run the brief generation prompt

Open Cowork. Attach your context files and the planning file, then run the prompt in the next section.

Cowork will spin up one agent per campaign automatically. Each agent reads the planning row, pulls brand and persona context, and outputs a structured brief to `projects/ads/<campaign-name>/brief.md`.

### 3. Review the briefs before moving on

Read through at least two or three briefs before running the visual step. Check that the hook matches the persona, the CTA matches the goal, and the tone matches the Verdal voice. Fix anything that feels off by editing the brief directly. Visuals inherit everything from the brief, so a weak brief produces weak ads.

### 4. Run the visual variation prompt

Once the briefs look right, run the second prompt (also in the next section). Cowork reads each brief and calls your connected image generation tool to produce multiple visual variations per campaign. The variations are saved alongside the brief inside each campaign folder.

For five campaigns at five variations each, expect around 15 to 20 minutes total.

---

## The prompt

### Prompt 1 - Generate ad creative briefs

```
You are a paid social strategist for Verdal, a premium indoor plant care brand.

Read the brand context and persona files from context/brand.md, context/voice.md, and context/personas.md.

Then open projects/ads/ad-campaigns.md and read each campaign row.

For each campaign, write a structured creative brief and save it to projects/ads/<campaign-name>/brief.md.

Each brief must include:
- Campaign overview: product, goal, platform, target audience (2-3 sentences)
- Audience insight: one specific pain point or desire this persona has that this campaign addresses
- Hook options: 3 short hooks (under 10 words each), one curiosity-led, one result-led, one problem-led
- Primary ad text: 50-80 words, Verdal voice, leads with the hook, ends with the CTA
- Headline: under 7 words, benefit-first
- CTA text: 3 options (e.g. "Shop now", "Get yours", "Start today")
- Visual direction: describe the scene, mood, and color cues in 2-3 sentences - do not reference specific stock images

Follow the Verdal voice exactly: warm, expert, plain. No corporate speak. No em dashes.

Work through all five campaigns in parallel. Confirm when all five briefs are saved.
```

### Prompt 2 - Generate visual ad variations

```
You are creating ad visuals for Verdal using the connected image generation tool.

Read each brief in projects/ads/. There are five campaign folders, each with a brief.md file.

For each campaign, generate 5 image variations based on the visual direction in the brief. Use the brand colors from context/brand.md: deep botanical green, cream, terracotta.

Save each image to projects/ads/<campaign-name>/ named variation-01.png through variation-05.png.

Do not start the visual step until all five briefs are confirmed present. Work through campaigns in parallel. Confirm when all 25 variations are saved.
```

---

## What good looks like

A well-run brief for the care-box-launch campaign looks like this:

**Campaign overview:** Targeting Plant-proud Priya on Instagram to drive Care Box subscriptions. Priya has 15+ plants and already spends on care, but her routine is inconsistent. Goal is to position the Care Box as the system that ties it all together.

**Hook options:**
- "Your plants deserve a routine."
- "Watch every plant thrive, every month."
- "Still guessing what your pothos needs?"

**Primary text:** Your plants are healthy because you care. But caring better - knowing exactly what each one needs and when - is where the Care Box comes in. Every month: nutrients, tools, and a guide written for your specific collection. $29. Cancel anytime.

**CTA options:** "Start my collection", "Get the Care Box", "Shop now"

**Visual direction:** A windowsill arrangement of 5-6 lush houseplants in terracotta pots, morning light, botanical green plant tags visible. Cream background. Warm and editorial, not clinical.

If your brief reads like that, the visual step will produce usable output.

---

## Your turn

1. Create `ad-campaigns.md` with your five Verdal campaigns using the table format above.
2. Run prompt 1. Wait for all five briefs to save.
3. Read two briefs. Edit any hook or visual direction that feels generic.
4. Run prompt 2 (only if your image generation connector is active). Check the output folder.
5. Open one campaign folder. You should see `brief.md` plus five image files.

If the image tool is not connected yet, complete step 4 after the Connectors lesson and come back.

---

## Common mistakes

**Running the visual prompt before reviewing briefs.** You cannot un-generate 25 images. Review first, fix, then generate. Saves time and token cost.

**Vague visual direction in the brief.** The image tool works from text. "Nice lifestyle shot" produces nothing useful. "Terracotta pots, morning light, cream background, lush green leaves" produces something specific. If the briefs are coming back vague, add a line to prompt 1: "Be specific about lighting, props, and background color."

**Skipping the audience insight field.** This is the most important field. If the brief does not name a real pain point or desire, the hook will be generic and the ad will underperform. Push the model: add "cite a specific insight from personas.md" to your prompt.

**All five campaigns targeting both personas.** The briefs work best when each campaign has one clear audience. Gifting-season targeting "both" is a valid exception, but it needs a different hook strategy. Check the brief carefully when the audience is broad.

**Not saving your planning file before running the prompt.** Cowork reads the file as it exists on disk. If you have unsaved edits, those rows will not be picked up. Save before you run.

---

## What you just learned

You built a two-step ad production pipeline: structured briefs grounded in brand context, then visual variations generated from each brief, with everything saved to a consistent folder structure.

Next: [Lesson 4 - SEO blog to WordPress](04-seo-blog-to-wordpress.md)
