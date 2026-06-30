# Lesson 4 - Connectors

> Use case 4 of 8 · ~25 min · Builds on Lesson 3

## What you'll build

A competitor-analysis spreadsheet and interactive dashboard built from live-scraped social data across The Sill, Bloomscape, and Leon and George, plus a 10-slide presentation generated directly from an email report a teammate sent you, all saved in `verdal-marketing/projects/`.

## Why it matters

Everything so far worked with files already on your computer. Connectors change that. They let Claude pull live data from external tools and services, then work with that data the same way it works with local files. For marketing, this is where Cowork gets genuinely useful: instead of copying stats by hand or chasing links in Slack, you connect the source once and Claude does the retrieval for you. One prompt can pull from multiple sources at the same time.

## Connect this first

This lesson does not work until the tools are connected. Before you run the prompts below, set up:

- **Apify** (web scraping) for the competitor scrape
- **Gmail** for the email-to-deck example
- **Gamma** for the generated presentation

Step-by-step connection instructions and tips are in [connectors-setup.md](../connectors-setup.md#module-1-tools). Connect them now, confirm each one shows as connected under Customize > Connectors, then continue.

## Step by step

1. **Open the connector settings.** In Claude Cowork, go to Customize > Connectors. You will see a list of built-in connectors, including Google Drive, Gmail, Google Calendar, and a few others depending on your plan.

2. **Connect a built-in tool.** Click the connector you want, for example Gmail, and follow the authentication prompt. You will sign in with your Google account and grant the access it asks for. Read the permissions carefully: only grant what the connector actually needs.

3. **Install a third-party connector.** For tools not on the built-in list, such as a web-scraping service (for example, Apify), scroll to the bottom of the Connectors panel and look for an option to add a custom connector. You will need an API token from the third-party service. Paste it in and save. Claude will confirm the connection is live.

4. **Worked example 1 - competitor social analysis.** Once the web-scraping connector is active, switch to your Verdal project folder (`verdal-marketing/`). Claude reads the brand context files first, then you ask it to use the connector to scrape social posts from your named competitors. Claude calls the connector, retrieves the posts, runs the analysis, and writes two output files into `verdal-marketing/projects/`: a structured spreadsheet and an interactive dashboard. It does not guess at data it could not retrieve - if a profile is private or a scrape fails, it flags it.

5. **Worked example 2 - deck from an email.** With both the Gmail connector and a deck-building connector (for example, Gamma, or a similar tool that generates slides inside Claude) active, you can chain them in one prompt. Claude reads your Gmail inbox, finds the specific report, extracts the key insights, and passes them straight into the deck generator. The result is a 10-slide presentation saved in your project folder. No copy-pasting between tabs.

6. **Save everything to the project folder.** Tell Claude explicitly where to save in every prompt. It will not assume a destination.

## The prompt

Prompt 1 - competitor social analysis and dashboard:

```
You are working in my Verdal marketing project. Read the brand context in verdal-marketing/context/ first.

Then use the web-scraping connector to pull the last 25 posts from each of these competitor Instagram and TikTok accounts:
- The Sill (@thesill)
- Bloomscape (@bloomscape)
- Leon and George (@leonandgeorge)

Once you have the data, do the following:

1. Build a spreadsheet with two tabs:
   - Summary tab: one row per competitor showing posting frequency, average engagement rate, content themes, and 2-3 key takeaways for Verdal.
   - Full detail tab: every post with caption, post date, engagement rate, content type (product, lifestyle, educational, UGC), and a performance rating (color-code: green = top 25%, yellow = middle 50%, red = bottom 25% by engagement within that brand).

2. Build an interactive dashboard from the same data that shows:
   - Top-line metrics per brand (total posts, average engagement, best content type)
   - Engagement by content type across all three brands
   - Top topics by post volume
   - A filter to view one brand at a time

Save both files to verdal-marketing/projects/competitor-analysis-30-06-2026/.
Flag any accounts you could not scrape and tell me why.
```

Prompt 2 - deck from a Gmail report:

```
You are working in my Verdal marketing project. Read the brand context in verdal-marketing/context/ first.

Use the Gmail connector to find the most recent email from my teammate that contains a trends report. It will likely have "trends" or "report" in the subject line and was sent in the last 30 days.

Once you find it:
1. Pull the key insights, data points, and any recommendations from that email.
2. Use the deck-building connector to generate a 10-slide presentation in a clean professional theme. The deck should follow this structure: title slide, agenda, 3-4 insight slides (one insight per slide with supporting data), an implications slide for Verdal specifically, a recommended actions slide, and a closing slide.
3. Write the deck content in Verdal's brand voice: warm, expert, plain language. No jargon.

Save the finished deck to verdal-marketing/projects/trends-deck-30-06-2026/.
Tell me which email you used (subject line, sender, date) so I can confirm it is the right one.
```

## What good looks like

- The spreadsheet opens with two clean tabs, no empty rows, no broken formulas
- The summary tab gives you a one-glance view of each competitor without needing to scroll
- The full-detail tab has every post color-coded so underperforming content is immediately obvious
- The dashboard loads in a browser, filters work, and the charts update when you switch brands
- The deck reads as if a human wrote it - insights are specific, not generic, and the Verdal implications slide reflects the actual brand context from your folder
- Both files are in the dated project subfolder, not scattered in the root
- Claude tells you exactly which email it used for the deck so you can verify

## Your turn

**Exercise 1:** Connect one built-in tool you already use, either Google Drive or Gmail. Ask Cowork to pull one real piece of content from it, such as the last campaign brief in Drive or the last newsletter draft in Gmail, and summarize it in the Verdal brand voice. Save the output to `verdal-marketing/projects/`.

**Exercise 2:** Swap Verdal for your own brand. Pick one competitor, connect the web-scraping connector, and ask Claude to pull the last 10 posts. Ask it to write a one-page analysis with three content ideas your brand should test based on what it found.

## Common mistakes

- **Granting too little access.** If the connector cannot see your inbox or a specific Drive folder, Claude will tell you the data is unavailable. Go back to Customize > Connectors, review the permissions you granted, and re-authenticate if needed.
- **Vague scrape requests.** "Get some competitor posts" returns noisy, inconsistent data. Specify the accounts by handle, the platform, the number of posts, and the date range.
- **Not telling Claude where to save.** Without a destination, output ends up in the wrong folder or not saved at all. Always name the exact path in your prompt.
- **Treating connector output as final.** Scraped data has gaps, formatting quirks, and occasional retrieval errors. Read the output before you act on it. Claude will flag issues it knows about, but it will not catch everything.
- **Chaining connectors without confirming each one is live.** Before running a multi-connector prompt, go to Customize > Connectors and confirm each connection shows as active.

## What you just learned

Connectors let Claude reach beyond your local files and pull live data from the tools you already use, so analysis that used to take hours of manual work becomes a single prompt.

Next: [Lesson 5 - Live artifacts](05-live-artifacts.md), where that live data becomes an interactive dashboard that refreshes itself.
