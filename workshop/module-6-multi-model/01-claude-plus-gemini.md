# Lesson 1 - Claude plus Gemini: division of labor and the critique loop

> Module 6: Multi-Model Workflows · no-code track · ~20 min · Builds on Module 1

---

## What you'll build

A two-stage workflow using Gemini to process a year of raw Verdal customer reviews, then Claude to turn that summary into a positioning brief. You will then run a critique loop where Gemini challenges the brief and Claude revises it. By the end you will have a tighter, more honest brief than either model could produce alone.

---

## Why it matters

Most marketers treat model choice like a loyalty question: Claude person or Gemini person. That framing is wrong. Each model has a structural advantage. Gemini has a context window of up to 2 million tokens, which means you can paste an entire year of reviews, survey exports, or long documents in a single prompt and ask it to find patterns. Claude is better at strategic synthesis, behavioral reasoning, and sharpening a narrative into something people will actually read.

Splitting the work by capability rather than convenience saves you hours of manual analysis and produces a better deliverable than running everything through one model.

The critique loop is the highest-leverage piece. Instead of you reviewing and improving a draft yourself, you route it to the other model for an adversarial read, then pass the critique back for revision. Two passes of this can close the gap between a decent first draft and something you are confident enough to act on.

---

## Set up first

You need a Gemini account (free tier is sufficient for this lesson) and your existing Claude account. If you have not set up either, see [../connectors-setup.md](../connectors-setup.md) before continuing.

For the Verdal example below, open a Claude Project called "Verdal" and load your brand context into it (voice, personas, services). You will paste Gemini's output directly into Claude, so no integration is needed.

---

## Step by step

**Step 1 - Gather your raw data**

Collect your customer reviews, survey responses, or any other large volume of text. For Verdal, this might be a year of Trustpilot exports, post-purchase survey responses, and DM feedback from Instagram. Paste everything into a single document. Do not clean it or summarize it first. Raw is the point.

**Step 2 - Feed it to Gemini**

Open Gemini (gemini.google.com). Paste your raw data, then run the Gemini preprocessing prompt from the section below. Because Gemini can hold millions of tokens in a single conversation, it can scan the entire dataset and pull out the patterns without you needing to segment the data first.

Wait for Gemini's structured output. You are looking for clusters of themes, repeated language, and the emotional tone behind complaints and praise. If Gemini gives you a vague summary, use the follow-up prompt to push it toward specifics.

**Step 3 - Route Gemini's output to Claude**

Open your Verdal Claude Project. Paste Gemini's structured summary, then run the Claude synthesis prompt from the section below. You are asking Claude to turn pattern data into a positioning brief: what Verdal stands for, who it is really for, what fear or desire drives the purchase, and what claims are defensible based on what customers actually said.

Claude should produce a short brief, roughly one page. If it is longer than that, ask Claude to cut it by half.

**Step 4 - Run the critique loop**

Take Claude's positioning brief and paste it back into Gemini. Run the Gemini critique prompt. Ask Gemini to find the three weakest claims in the brief, identify anything that contradicts the raw data, and flag any customer language that the brief missed or softened.

Copy Gemini's critique. Go back to Claude. Paste the critique alongside the original brief and run the Claude revision prompt. Claude will reconcile the critique with its brief and produce a revised version.

You now have a positioning brief that two independent models have stress-tested.

---

## The prompt

**Gemini preprocessing prompt**

```
You are analyzing a large set of raw customer reviews and survey responses for a premium indoor plant care brand called Verdal.

Here is the raw data:
[PASTE YOUR RAW DATA HERE]

Your job is to extract structured signal from this data. Do the following:

1. List the five most common praise themes. For each theme, include 2-3 direct quotes that represent it.
2. List the five most common complaint or concern themes. Same format: theme name, 2-3 direct quotes.
3. List the top five emotional drivers you can infer from the language. What are customers really afraid of or hoping for when they buy a plant care product?
4. List any phrases customers use repeatedly that the brand could borrow in its own copy.
5. Flag any claims or promises customers expected that the product did not deliver.

Be specific. Use customer language, not marketing language. Do not paraphrase unless a quote is too long to include in full.
```

**Follow-up if Gemini is too vague**

```
Your themes are too general. I need each theme to be one specific, nameable thing - not "product quality" but "the soil mix dried out faster than the instructions said it would." Go back through the data and restate each theme at that level of specificity. Include quotes for each.
```

**Claude synthesis prompt (paste into your Verdal Project)**

```
I have analyzed a year of Verdal customer reviews using a separate tool. Here is the structured output:

[PASTE GEMINI'S OUTPUT HERE]

Using this data and your knowledge of Verdal's voice and personas (Plant-proud Priya, New-plant Nate), write a positioning brief with these four sections:

1. Who Verdal is really for - one or two sentences, grounded in what the review data reveals about who actually buys and loves this product.
2. The core fear or desire - the emotional driver behind the purchase, in plain language.
3. The one thing Verdal is best at - the single claim that the data most strongly supports. This must be specific enough that a competitor could not say the same thing.
4. What Verdal should stop claiming - any promise the data shows customers felt was oversold or undelivered.

Keep the whole brief under 300 words. Use plain language, not marketing language. Match Verdal's warm, expert, plain voice.
```

**Gemini critique prompt (paste Claude's brief into Gemini)**

```
Here is a positioning brief written for Verdal, a premium indoor plant care brand:

[PASTE CLAUDE'S BRIEF HERE]

You have already seen the raw customer data that was used to write this brief. Your job is to critique it hard.

1. Identify the three weakest or least defensible claims in the brief. For each one, point to the specific data that contradicts or does not support it.
2. List any customer language or emotional themes from the raw data that this brief ignored or softened.
3. Flag any place where the brief uses marketing language instead of the customer's actual words.

Be direct. Do not suggest improvements - just identify the problems. I will use your critique to revise.
```

**Claude revision prompt**

```
Here is the original positioning brief for Verdal:

[PASTE ORIGINAL BRIEF]

Here is a critique of that brief:

[PASTE GEMINI'S CRITIQUE]

Revise the brief to address the critique. Where the critique identifies a weak claim, either strengthen it with language from the customer data or remove the claim. Where it flags softened language, use the harder, more specific version. Where it calls out marketing speak, replace it with plain language.

Keep the same four-section structure. Stay under 300 words. Do not add new sections or change the format.
```

---

## What good looks like

Gemini's preprocessing output should read like a research debrief, not a summary. Each theme should be named precisely and backed by actual customer quotes. You should be able to point to a quote and say "yes, that is exactly what I have heard."

Claude's first brief should be tighter and more opinionated than anything you would write yourself in the same time. It should have at least one uncomfortable claim, something about what Verdal does not do or where it falls short, that you might instinctively soften.

Gemini's critique should land a few real hits. If the critique says everything is fine, push back: "Find at least two things that feel like marketing spin. There are always two."

Claude's revision should be noticeably sharper than the first draft. The weakest claims should either be gone or replaced with language customers actually used.

---

## Your turn

Apply this workflow to a real Verdal (or your own brand) dataset.

1. Pull 3-12 months of customer reviews from any source (Google, Trustpilot, survey exports, email replies).
2. Run the preprocessing prompt in Gemini.
3. Run the synthesis prompt in Claude.
4. Run the critique prompt in Gemini.
5. Run the revision prompt in Claude.

Time box this to 30 minutes the first time. The goal is to get a revised brief you would actually use, not a perfect artifact.

---

## Common mistakes

**Cleaning the data before Gemini sees it.** Gemini's value is precisely that it can handle messy, large, unstructured input. If you pre-summarize or edit the data, you lose the signal in the noise. Paste raw.

**Accepting Gemini's first output if it is vague.** Gemini will sometimes produce high-level themes that are too broad to act on. Push it for specificity. The follow-up prompt above exists for this reason.

**Asking Claude to summarize instead of synthesize.** Summarizing means restating what the data says. Synthesizing means making a judgment call: what does this mean for how we talk about Verdal? Push Claude to take a position, not just describe what it found.

**Skipping the critique loop because the first draft looks good.** A brief that looks good on first read is the most dangerous one. Run the critique anyway. You will almost always find one claim that the data does not actually support.

**Treating the critique as final.** Gemini's critique is input for Claude to work with, not a verdict. Claude will reconcile, not just comply. That tension between the two models is where the value is.

---

## What you just learned

Division of labor by capability - Gemini preprocesses large data, Claude synthesizes and revises, and routing the output between them through a critique loop produces a stronger deliverable than either model alone.

Next: [Lesson 2 - Perplexity plus Claude](02-perplexity-plus-claude.md)
