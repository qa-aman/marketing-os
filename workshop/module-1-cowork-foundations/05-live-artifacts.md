# Lesson 5 - Live artifacts

> Use case 5 of 8 · ~20 min · Builds on Lesson 4

## What you'll build

A live, refreshable AI-search-visibility dashboard for Verdal, pulling from connected analytics tools to surface weekly priorities, keyword opportunities, and emerging niche queries, all in brand colors with one-click CSV and PDF export.

## Why it matters

Most AI output is a static block of text. You get it, you use it, it goes stale. A live artifact is different: it is a persistent, interactive page connected to your actual data sources. You build it once, pin it to the sidebar, and click refresh any time you want updated numbers, with no need to rerun the conversation or re-enter any context.

For metrics you want to watch week over week, like SEO rankings or keyword gaps, this is the difference between a one-time report and a permanent tool.

## Connect this first

A live artifact is only as useful as the live data behind it. Before you build, connect at least one analytics source:

- **Google Search Console** (free, if your site is verified)
- **Ahrefs** (optional, needs a plan, for richer keyword data)

Connection steps and tips are in [connectors-setup.md](../connectors-setup.md#module-1-tools). Connect your source, confirm it under Customize > Connectors, then continue. No connector means no live data to show.

## Step by step

1. **Enable the required capabilities.** Go to Settings > Capabilities and turn on three things: Artifacts, AI-powered artifacts, and Code Execution. All three must be on or Claude will produce a static output instead of a live one.

2. **Connect your analytics tools first.** A live artifact is only as useful as the data behind it. Before building, connect the tools you want it to pull from. For Verdal's AI-search-visibility dashboard, connect Ahrefs and Google Search Console. Do this in Settings > Connections (or the Integrations panel, depending on your version). Without a live connector, Claude has no data source and will produce a placeholder.

3. **Load the project folder.** Open Claude and load the `verdal-marketing/` folder. This gives Claude access to brand context, templates, and existing projects so the dashboard reflects Verdal's actual positioning and colors.

4. **Use the exact phrase "live artifact" in your prompt.** This is the most important technical detail in this lesson. If you ask Claude to "build a dashboard" or "summarize my SEO data," it will produce a static output. The phrase "live artifact" is what triggers the persistent, refreshable format. See the prompt section below for the exact wording to use.

5. **Iterate if the first version is incomplete.** If data is missing on the first version, for example if a section shows no results or a connector has not fully synced, do not start over. Simply tell Claude what is missing and ask it to fix that section. Live artifacts are designed to be built in a few passes.

6. **Pin the artifact.** Once you are happy with the result, click the pin icon in the top-right corner of the artifact panel. This keeps it permanently in your sidebar so you can return to it without finding the original conversation.

7. **Refresh anytime.** Click the refresh button on the pinned artifact to pull in the latest data from your connected tools. The artifact reruns against live data without reopening the conversation.

## The prompt

```
I have loaded the verdal-marketing/ project folder. Using the connected Ahrefs and Google Search Console data sources, build a live artifact: an AI search visibility radar for Verdal.

The artifact should have three sections:
1. Weekly priority brief - where the site is losing clicks this week and where to focus effort
2. Keyword opportunities - sortable table of long-tail keywords Verdal ranks for between positions 5 and 20, with search volume and difficulty
3. New niche queries - emerging searches in indoor plant care that Verdal does not yet rank for

Use Verdal's brand colors: deep botanical green as the primary, with cream and terracotta accents. Include one-click export buttons for CSV and PDF.

Make this a live artifact so I can pin it and refresh it each week without rerunning this conversation.
```

## What good looks like

- Brand-colored page in botanical green, cream, and terracotta that matches Verdal's visual identity
- Weekly priority summary at the top, written as a plain-language brief, not raw data
- Sortable keyword opportunities table with search volume, keyword difficulty, and current ranking position
- New niche queries section showing searches Verdal is not yet capturing
- One-click CSV and PDF export available on each section
- Artifact pinned to the sidebar and accessible outside the original conversation
- Refresh button pulls updated data from Ahrefs and Google Search Console with one click

## Your turn

**Exercise 1 - Verdal scenario.** Pick a second metric set relevant to Verdal, for example email performance (open rate, click rate, unsubscribe trend) or Instagram engagement. Connect the relevant tool (Klaviyo, later, or Meta), then build a second pinned live artifact for that channel. Practice iterating: if the first version is incomplete, prompt Claude to fix one specific section before moving on.

**Exercise 2 - Your brand.** Repeat the same process for your own brand. Identify one set of metrics you check manually every week, connect the tool that holds that data, and build a live artifact for it. Pin it. Use it for two weeks before deciding whether to refine it.

## Common mistakes

- Forgetting the words "live artifact" in the prompt - Claude defaults to a static output and you will not get the refresh capability
- Skipping the three capability toggles (Artifacts, AI-powered artifacts, Code Execution) - the artifact panel will either not appear or produce a non-interactive result
- Running the prompt before connecting a data source - Claude will build the structure but fill it with placeholder text because there is no live data to pull
- Giving up after the first version - live artifacts rarely look perfect on the first pass; one or two follow-up prompts to fix a missing section or adjust the layout is normal and expected

## What you just learned

You built a persistent, refreshable dashboard from a project folder and pinned it to your sidebar so it is always one click away. Next: [Lesson 6 - Skills and plugins](06-skills-and-plugins.md), where you package a repeatable workflow into a one-click reusable skill.
