# Lesson 6 - Package a skill library into a portable plugin

> Module 3: Claude Skills Deep Dive · power track · ~30 min · Builds on Lesson 5

---

## What you'll build

A `verdal-plugin/` directory that bundles all five Verdal skills (brand voice, design system, carousel, newsletter, lead magnet) into a single installable plugin. You will add a custom `/verdal:launch-campaign` slash command that chains the research and carousel skills in one step. Then you will install the plugin into a fresh brand project to confirm the whole library moves in a single operation.

---

## Why it matters

Right now your Verdal skills live inside `verdal-marketing/`. If a colleague wants to use them on a new Verdal campaign folder, or if you start a second brand, they have to copy files manually. One wrong copy and the library drifts.

A plugin solves this at the distribution level. You bundle once, share a GitHub repo link, and anyone with Claude Code installs the whole library with one command. The skills stay namespaced to the plugin, so they never collide with skills in the destination project. This is also how this workshop ships: the full skill library is a plugin candidate you can hand to a client in minutes.

---

## Set up first

You need Claude Code (the desktop app) and a terminal. No developer knowledge required, but you will run a few short terminal commands and create a small JSON file by hand.

For the official plugin documentation, including the exact `plugin.json` schema and distribution options, see [../connectors-setup.md](../connectors-setup.md). Read the plugin setup section there before continuing.

---

## Step by step

### 1. Understand what a plugin is

A plugin is a folder with a specific internal structure. Claude Code reads that structure and makes the skills, commands, and agents inside it available across any project where the plugin is installed.

The minimum structure looks like this:

```
verdal-plugin/
  .claude-plugin/
    plugin.json
  skills/
    brand-voice/
      SKILL.md
    design-system/
      SKILL.md
      design-tokens.json
      component-rules.md
      examples/
    carousel/
      SKILL.md
    newsletter/
      SKILL.md
    lead-magnet/
      SKILL.md
```

The `.claude-plugin/plugin.json` file is the manifest. It tells Claude Code the plugin's name, version, and what it contains. Optional subdirectories you can add later: `commands/` for custom slash commands, `agents/` for named agents, `hooks/` for lifecycle hooks, and `.mcp.json` for MCP server references.

Skills inside a plugin are namespaced to the plugin name. A skill called `carousel` inside a plugin called `verdal` becomes `/verdal:carousel`. This means it will never collide with a carousel skill in the destination project.

### 2. Create the plugin folder

In your terminal, navigate to the parent folder above `verdal-marketing/` and create the plugin directory:

```
mkdir -p verdal-plugin/.claude-plugin
mkdir -p verdal-plugin/skills
mkdir -p verdal-plugin/commands
```

### 3. Write the manifest

Create `verdal-plugin/.claude-plugin/plugin.json`. Open any plain-text editor (TextEdit in plain-text mode works fine) and paste this content:

```json
{
  "name": "verdal",
  "version": "1.0.0",
  "description": "Verdal brand marketing skill library: voice, design system, carousel, newsletter, lead magnet.",
  "skills": [
    "skills/brand-voice",
    "skills/design-system",
    "skills/carousel",
    "skills/newsletter",
    "skills/lead-magnet"
  ],
  "commands": [
    "commands/launch-campaign.md"
  ]
}
```

Save it. The `name` field becomes the namespace prefix for all skills and commands in this plugin.

### 4. Copy your skills into the plugin

Copy each skill folder from `verdal-marketing/skills/` into `verdal-plugin/skills/`. Include all reference files (JSON tokens, component rules, examples) alongside each `SKILL.md`. Do not just copy the `SKILL.md` files alone, or skills that depend on companion files will break.

After copying, spot-check one skill. Open `verdal-plugin/skills/carousel/SKILL.md` and confirm the `reads:` frontmatter paths are still correct relative to their location inside the plugin. If the carousel skill reads `skills/design-system/design-tokens.json`, that path should still resolve correctly from inside `verdal-plugin/`. Adjust any paths that break.

### 5. Create a custom plugin-level command

A plugin-level command is a markdown file in `commands/` that defines a slash command available to anyone who installs the plugin. Create `verdal-plugin/commands/launch-campaign.md`:

```markdown
---
name: launch-campaign
description: Run a Verdal campaign launch: research the topic, produce a carousel, and draft a newsletter teaser in one step.
---

You are running the Verdal campaign launch workflow.

1. Ask the user for the campaign topic and target audience if they have not provided it.
2. Run the `verdal:brand-voice` skill to load voice rules.
3. Run the `verdal:carousel` skill with the topic and audience as the brief.
4. Run the `verdal:newsletter` skill to produce a short teaser email (subject line + three-paragraph body) that promotes the carousel.
5. Save all output to `output/campaigns/<slug>/` where slug is a short version of the campaign topic.
6. Confirm which files were created.
```

This command becomes `/verdal:launch-campaign` in any project where the plugin is installed. It chains three skills without the user having to invoke them individually.

### 6. Test the plugin locally

In your terminal, launch Claude Code pointing at the plugin directory:

```
claude --plugin-dir ./verdal-plugin
```

This loads the plugin into the current session without installing it permanently. Inside Claude Code, type `/verdal:` and you should see all five skills and the `launch-campaign` command appear in the autocomplete list.

If you make a change to any file inside the plugin while Claude Code is open, run:

```
/reload-plugins
```

Claude Code will re-read the plugin directory and pick up your changes without restarting.

Run a quick sanity test:

```
/verdal:brand-voice

Brief: Write a one-paragraph product description for Verdal's new copper watering can. Audience: urban apartment dwellers who want their home to feel intentional.
```

If the output matches Verdal's warm, expert, plain voice and avoids generic filler, the plugin is reading the skill correctly.

### 7. Distribute via a GitHub repo

Push `verdal-plugin/` to a GitHub repository. A public repo works for sharing with clients or teammates. A private repo works for internal use as long as the recipient has access.

Anyone with Claude Code can then install the plugin by running the `/plugin` command and providing the GitHub URL. After install, all namespaced skills and commands are available in their projects immediately.

To install this workshop's own plugin (once published), the same pattern applies: one command, and the full library is available.

---

## The prompt

Run this in Claude Code with the `verdal-marketing/` folder active. It asks Claude to audit your existing skills, flag any broken paths, and generate a ready-to-use manifest for you:

```
I am packaging the Verdal skill library into a plugin.

1. Read all SKILL.md files under skills/. List each skill name and its reads: field.
2. Identify any reads: paths that reference files not present in the skills/ folder.
3. Generate a plugin.json manifest for a plugin named "verdal" that includes all five skills (brand-voice, design-system, carousel, newsletter, lead-magnet) and a commands entry for launch-campaign.md.
4. Flag any skill whose reads: paths will break if the skill is moved into a verdal-plugin/skills/ folder - list the exact paths that need updating.

Output the manifest as a JSON code block. Output the path issues as a numbered list.
```

Use the audit output to fix paths before copying files into the plugin folder. This saves you from chasing silent failures during testing.

---

## What good looks like

After completing the steps:

- `verdal-plugin/.claude-plugin/plugin.json` exists and is valid JSON
- `verdal-plugin/skills/` contains five skill folders, each with its `SKILL.md` and companion files
- `verdal-plugin/commands/launch-campaign.md` exists with correct frontmatter
- Running `claude --plugin-dir ./verdal-plugin` shows all five skills and `launch-campaign` in autocomplete
- `/verdal:brand-voice` produces on-brand Verdal copy in a fresh project folder with no existing context files

The last point is the real test. The plugin should be self-contained. If it only works because context files exist in the originating `verdal-marketing/` folder, the packaging is incomplete.

---

## Your turn

1. Run the audit prompt above on your real skill library. Fix any broken paths before touching the plugin folder.
2. Create the plugin structure and write the manifest by hand. Do not ask Claude to do this step, the manifest is short enough that writing it yourself means you understand what you shipped.
3. Add one custom command that represents the workflow you run most often. It does not have to chain three skills. A single skill with a structured default prompt is enough.
4. Test locally with `--plugin-dir`. Confirm autocomplete and at least one skill invocation.
5. Push to a private GitHub repo. Share the install link with one person and watch them install it.

---

## Common mistakes

**Copying only SKILL.md files.** Skills that read companion files (design tokens, component rules, example posts) will silently fail or produce generic output if those files are missing from the plugin. Copy the whole skill folder, not just the definition file.

**Forgetting to update relative paths.** A skill written inside `verdal-marketing/` may read `context/brand-voice.md` using a path relative to the project root. Inside a plugin, that path does not exist. Either make skills self-contained (embed the content they need in SKILL.md itself) or bundle the context files into the plugin alongside the skill and update the paths.

**Using the plugin name as a folder name inside skills/.** The namespace comes from the `name` field in `plugin.json`, not from folder names. Your skills folder should contain `brand-voice/`, not `verdal-brand-voice/`. Claude Code handles the prefixing.

**Not running /reload-plugins after edits.** Changes to plugin files during an active session are not picked up automatically. If your edits seem to have no effect, run `/reload-plugins` before assuming something is broken.

**Skipping the self-contained test.** Always test the plugin in a completely empty project folder, one with no context files, no CLAUDE.md, no existing skills. That is the condition a new user will be in. If the skills only work when your originating project folder is present, the plugin is not portable yet.

---

## What you just learned

Bundle a complete skill library into a plugin with a manifest, namespaced skills, and a custom slash command, then distribute it to any Claude Code or Cowork project with a single install step.

## You finished Module 3

You started with the mental model for what skills are, worked through three ways to create them, built a design-system skill that other skills depend on, wired skills from real SOPs, orchestrated multi-skill workflows, and packaged the whole library as a portable plugin. That is the full cycle from idea to distributable product.

The same pattern applies to any brand you work on. Onboard once, package once, install everywhere.

Next: [Module 4 - MCP and Connected Tools](../module-4-mcp/README.md)
