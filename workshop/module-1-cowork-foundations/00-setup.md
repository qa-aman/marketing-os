# Lesson 0 - Setup

> Before the 8 use cases · ~15 min · Do this once

## What you'll build

A clean folder structure on your computer that every later lesson plugs into, plus Cowork installed and pointed at it.

## Why it matters

Cowork is only as good as the folder you give it. Five minutes of structure now saves you re-explaining your brand in every chat later. Better context in, better output out.

## What you need

- A Claude account with Cowork (the desktop app, not just the browser)
- A laptop (Mac or Windows)
- 15 minutes

## Step by step

### 1. Install Claude Desktop with Cowork

Download Claude Desktop from your account, sign in, and confirm Cowork is available in the left sidebar. Cowork is the mode that works with local folders, as opposed to Chat, which lives in the cloud.

### 2. Create your marketing folder

On your computer, make one folder for your brand's marketing. Inside it, create three subfolders:

```
verdal-marketing/
  context/        brand knowledge Cowork reads before every task
  templates/      reusable structures (deck outlines, carousel rules)
  projects/       where finished work gets saved
```

You can add more later. This is enough to start.

> Following along? Copy [`example-brand/verdal/`](../example-brand/verdal/) and rename it `verdal-marketing`. The `context/` and `templates/` files are already filled in for you.

### 3. Set your global instructions

In Claude Desktop, go to **Settings > Cowork > Global Instructions**. These rules apply to every Cowork session. Keep them short. Too much detail here just boxes Claude in.

Paste this:

```
Always scan for a context/ folder before starting a task and read everything in it.
Save finished work into the projects/ folder. Use sentence case, no em dashes, no emojis.
```

One or two lines is plenty.

## What good looks like

- Cowork appears in your sidebar and you can open it
- Your `verdal-marketing` folder has `context/`, `templates/`, and `projects/` inside
- Global instructions are saved and one or two lines long

## Your turn

Create the same three-folder structure for your own brand, in addition to the Verdal one. You will fill its `context/` folder in Lesson 1.

## Common mistakes

- **Writing a novel in global instructions.** Long rules make Claude rigid. Keep it to a couple of lines.
- **One giant folder with no subfolders.** The `context / templates / projects` split is what makes everything later work.
- **Using Chat instead of Cowork.** Chat cannot read or save to your folders. Make sure you are in Cowork.

## What you just learned

Cowork works on a folder you control, and a little structure goes a long way. Next: [Lesson 1 - Workspace and context](01-workspace-and-context.md), where you teach Cowork your brand once and never repeat yourself again.
