# Lesson 1 - Workspace and context

> Use case 1 of 8 · ~20 min · Builds on Lesson 0

## What you'll build

Three brand context files (brand context, brand voice, ideal customer profile) that Cowork writes for you by asking questions, then reads automatically before every future task.

## Why it matters

This is the single highest-leverage thing you will do in the whole course. Once Cowork knows who your brand is, who you sell to, and how you sound, you never explain it again. Every deck, post, and email after this is automatically on-brand.

## Step by step

### 1. Load your marketing folder

In Cowork, load your `verdal-marketing` folder. The first time, it will ask permission to access the folder. Grant it.

### 2. Ask Cowork to interview you

Instead of writing the context files yourself, let Cowork ask you questions and write them. Paste the prompt below.

### 3. Answer the questions

Cowork will ask about your brand, positioning, audience, and voice using its question tool. Answer each one, or paste in details you already have. Within a few minutes it produces three files and saves them in `context/`.

### 4. Confirm they saved

Open the `context/` folder. You should see `brand-context.md`, `brand-voice.md`, and `ideal-customer-profile.md`.

## The prompt

```
Load my marketing folder. I want you to create three context files in the context/ folder:
brand-context.md, brand-voice.md, and ideal-customer-profile.md.

Do not guess. Interview me using your Ask User Question tool, one topic at a time:
the brand and what it sells, our positioning versus competitors, our ideal customer,
and how we sound. Ask follow-ups where my answers are thin.

When you have enough, write the three files in clean markdown and save them in context/.
Keep them specific and skimmable, not generic.
```

## What good looks like

- Three files in `context/`, each specific to your brand, not generic filler
- The voice file has actual words to use and avoid, not just adjectives
- The customer file names a real persona with fears and triggers, not "busy professionals aged 25-45"
- From now on, when you start any task in this folder, Cowork reads these first without being told

Compare your output to the filled-in examples in [`example-brand/verdal/context/`](../example-brand/verdal/context/).

## Your turn

1. Run the prompt above on the **Verdal** folder if you have not already (the files are pre-filled, so try regenerating one and compare).
2. Now run it on **your own** brand folder. Answer the interview honestly. This becomes the foundation for every other lesson.

Bonus: after the files are written, start a fresh task and ask "who is our customer and how do we sound?" Cowork should answer correctly without you pasting anything. That is the whole point.

## Common mistakes

- **Writing the files yourself.** The interview produces sharper context because Claude probes the gaps. Let it ask.
- **Vague answers.** "We're premium and approachable" is useless. Give it the actual one-liner, the real competitors, the specific fear your customer has.
- **Skipping the voice file.** Without it, every later output drifts into generic AI tone. The words-to-avoid list is what keeps it on-brand.
- **Never checking it saved.** Open the folder and confirm the three files are there before moving on.

## What you just learned

Cowork can build its own brand brief by interviewing you, then use it forever. Next: [Lesson 2 - Templates](02-templates-strategy-deck.md), where that context turns into a finished strategy deck.
