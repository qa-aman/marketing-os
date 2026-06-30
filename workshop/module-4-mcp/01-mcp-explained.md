# Lesson 1 - MCP explained: the four tiers of connectors

> Module 4: MCP and Connected Tools - power track - ~15 min - Builds on Module 3

---

## What you'll build

A clear mental model of how MCP works, plus a saved decision cheat sheet you can reference every time you need to connect Claude to a new tool. By the end you will know exactly which tier of connector to reach for and why.

---

## Why it matters

Every time you connect an AI tool to a business system today, someone builds a custom bridge. When the AI tool updates, the bridge breaks. When you switch AI providers, you rebuild from scratch.

MCP (Model Context Protocol) is the standard that ends this. It is a protocol that sits between AI applications and business tools. Build the connection once, and it works across Claude, ChatGPT, Gemini, and any future model that adopts the standard.

For Verdal, this means your brand context in Notion, your campaign analytics in Google Analytics, and your content calendar in Airtable can all feed Claude without one-off workarounds. You stop copying and pasting between tools.

---

## Step by step

### What MCP actually is

MCP stands for Model Context Protocol. It is an open standard, not a product. Think of it as a universal translator sitting between AI applications and the tools they need to read from or act on.

Before MCP, connecting an AI tool to Salesforce meant building a Salesforce-specific integration. If you later switched to a different AI model, you rebuilt it. MCP removes that dependency. The tool speaks MCP, the AI speaks MCP, and they understand each other regardless of which AI is on either side.

### Servers and clients

There are two sides to every MCP connection.

**MCP servers** are the tools and data sources. Notion, Google Analytics, Airtable, your company database: these are servers. They expose their capabilities through MCP so that any compatible AI can use them.

**MCP clients** are the AI applications. Claude Desktop, Claude web, ChatGPT, Gemini: these consume what the servers expose.

The protocol is what sits between them. When Claude needs to pull a page from your Notion brand kit, it does not call Notion directly with custom code. It makes a standard MCP request. Notion's MCP server handles the translation. Same pattern every time, regardless of tool or model.

### Why model-agnostic matters

This is the part worth internalising. If you connect your Verdal brand kit to Claude via MCP today, and your team switches to a different AI model next year, the Notion connection does not break. The work you put into building context does not disappear. Your integrations travel with you across the AI landscape.

This is the practical definition of future-proof.

### The four tiers of connectors

Choose your connector type by starting at tier 1 and moving down only when the tier above does not cover your use case.

**Tier 1 - Native integrations**

Built directly into the AI client, no configuration required. In Claude Desktop, Google Drive, Google Calendar, and Gmail are examples. You enable them in Settings - Integrations with a few clicks.

Verdal example: connecting Claude to the Verdal Gmail inbox to pull press inquiry threads.

These are the lowest-friction option. The tradeoff is limited scope, you get what the AI vendor chose to include, and some features may be read-only.

**Tier 2 - Official MCP servers**

Published by the tool's own company. Notion publishes an official MCP server on GitHub. Perplexity does too. These are vetted by the vendor and follow a principle of least privilege, you can restrict access to specific pages or data scopes.

Verdal example: connecting the official Notion MCP server to the Verdal brand kit, so Claude always has current voice, persona, and visual guidelines when generating content.

Setup requires editing a config file in Claude Desktop and restarting the app. It takes about ten minutes the first time.

**Tier 3 - Community-built MCP servers**

Built by individuals or teams outside the tool's company. Airtable currently has no official MCP server, so community servers fill the gap.

Use these only when tiers 1 and 2 are not available. Audit the repository before installing: check who maintains it, when it was last updated, and whether the source code is publicly readable. Community servers carry real risks, namely data leakage (your content being sent somewhere unexpected) and prompt injection (malicious content in a retrieved document being interpreted as instructions to Claude).

Verdal example: if you need to pull Verdal's content calendar from Airtable, a community server may be the only option until an official one exists.

**Tier 4 - Custom MCP servers**

Built by you or your team. Tools like n8n let you assemble a custom MCP server without writing code: you pick a data source (Google Analytics, Airtable, Slack), configure what data it exposes, and n8n generates a URL you paste into Claude.

Verdal example: a custom n8n MCP server that pulls Verdal's Google Analytics 4 traffic and e-commerce data, letting Claude generate performance dashboards on demand inside the Claude interface.

Maximum flexibility, highest setup effort.

### Security basics

Two risks to keep in mind.

**Trust level by tier.** Native and official servers are vetted. Community servers are not. Treat community servers like open-source software: read the code or at least the issue tracker before connecting them to live data.

**Prompt injection.** When Claude reads external content through an MCP connection, that content could contain text designed to override Claude's instructions. Example: a Notion page with hidden text that says "ignore all previous instructions." This is not theoretical. Limit sensitive permissions to what a given task actually needs.

**Five tools per server.** Keep each MCP server focused. If a single server exposes more than roughly five tools, Claude starts making poor choices about which one to call. Better to have two focused servers than one sprawling one. For Verdal, a brand kit server (Notion, three to four tools) and an analytics server (GA4 data, one to two tools) beat a single server exposing everything.

---

## The prompt

Once you have Claude Desktop open with at least one MCP server connected, run this to verify what is available.

```
What MCP tools and connectors do you currently have access to? List each one and briefly describe what it can do. Flag any that appear duplicated or that you would recommend I consolidate.
```

Save the output. It becomes your integration inventory for the rest of this module.

---

## What good looks like

- You can name which tier each of your current Verdal connections sits in.
- You know to check for an official server before installing a community one.
- Your MCP servers each expose five tools or fewer.
- Claude can describe every connected tool when you run the prompt above.

---

## Your turn

1. Open a text file in your verdal-marketing/ folder. Name it `connector-decisions.md`.
2. List the tools you currently use for Verdal work: brand docs, analytics, content calendar, project tracking.
3. For each tool, note which tier it would fall into based on what you read above. If you are unsure, write "check official MCP GitHub."
4. Identify one tier-2 option you could set up this week.

You do not need to install anything yet. The next lesson walks through the Notion setup step by step.

---

## Common mistakes

**Installing a community server without checking it first.** Always look at the GitHub repo. A project with one contributor, no recent commits, and no issues is a risk.

**Connecting everything to one MCP server.** Resist the urge to make a single "Verdal server" that does everything. Split by function.

**Assuming native means complete.** Native connectors are convenient but often limited to read operations. If you need Claude to write back to a tool, you likely need an official or custom server.

**Skipping the restart.** After editing a Claude Desktop config file, the app must be fully quit and reopened. Changes do not apply to a running session.

---

## What you just learned

MCP is a universal protocol that decouples AI clients from business tools, making your integrations model-agnostic and reusable across any AI that adopts the standard. You now have a four-tier decision framework for choosing the right connector type for any tool Verdal uses.

Next: [Lesson 2 - Notion as your marketing brain](02-notion-marketing-brain.md)
