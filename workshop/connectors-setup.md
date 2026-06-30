# Setup hub - every tool the course uses, with official docs

This is the one place that tells you how to install and connect everything the lessons need, with a link to the official documentation for each so you never get stuck. You only need the tools a given lesson actually uses, so set them up as you reach them.

If a step in any lesson is unclear, come here first, then follow the official link.

## Where connectors live

In Claude Desktop, connectors are under **Customize > Connectors**. You will see built-in options (Google Drive, Gmail, Google Calendar, and more) plus a way to add others. Connect a tool once and Claude can use it in any session.

General tips:
- Grant the minimum access a tool asks for. Read-only is usually enough.
- If a connector wants an API token, you get it from that tool's own account settings, not from Claude.
- Test a connector with one small request before a big one.
- If a connector is greyed out or failing, disconnect and reconnect, then retry.

---

## Foundations (needed across the course)

**Claude Desktop with Cowork** - the no-code track (Modules 1, 2, 6).
- Download Claude Desktop, sign in, and confirm Cowork is in the sidebar.
- Desktop app guide: https://code.claude.com/docs/en/desktop

**Claude Code** - the power track (Modules 3, 4, 5).
- Install (macOS, Linux, WSL): run `curl -fsSL https://claude.ai/install.sh | bash`
- Overview and all install options: https://code.claude.com/docs/en/overview
- First-task quickstart: https://code.claude.com/docs/en/quickstart
- The `CLAUDE.md` project memory file: https://code.claude.com/docs/en/memory

**Anthropic support**, for account or billing issues: https://support.anthropic.com

---

## Module 1 tools

**Apify (web scraping)** - competitor social scrape (Lesson 4).
- Get an API token from your Apify account settings.
- API and integration docs: https://docs.apify.com/platform/integrations/api
- In Claude: Customize > Connectors, add Apify, paste the token. Free tier is enough to start.

**Gmail and Google Drive (native)** - pull reports and files (Lesson 4).
- Customize > Connectors > Gmail or Google Drive > sign in with Google, allow read access.

**Gamma (deck builder inside Claude)** - turn insights into a polished deck (Lesson 4).
- Create a Gamma account first: https://gamma.app
- Customize > Connectors > search Gamma > Connect > pick your workspace > Allow.

**Ahrefs (SEO)** - keyword and visibility data (Lesson 5).
- Needs an Ahrefs plan: https://ahrefs.com
- Customize > Connectors > Ahrefs > authorize. No plan? Use Google Search Console alone.

**Google Search Console** - your site's real search data (Lesson 5).
- Your site must be verified first. About and setup: https://search.google.com/search-console/about
- Help docs: https://support.google.com/webmasters
- Customize > Connectors > Google Search Console > sign in with the account that owns the property.

**Claude in Chrome** - let Cowork use a real browser (Lesson 7).
- Enable Claude in Chrome under Customize > Connectors.
- Official setup docs: https://code.claude.com/docs/en/chrome
- Background and install: https://www.anthropic.com/news/claude-for-chrome
- Install only the official extension and sign in with the same Claude account.

**skill-creator skill and the official marketing plugin** (Lesson 6).
- Customize > Claude Skills > add skill-creator.
- Skills docs: https://code.claude.com/docs/en/skills
- Plugins (browse and install): https://code.claude.com/docs/en/plugins

---

## Module 2 tools (the content engine)

**An image generation connector** - header images and ad visuals (Lessons 3, 4).
- Any image-generation MCP connector works. Add it under Customize > Connectors and follow its token steps.
- Browse available MCP servers: https://github.com/modelcontextprotocol/servers

**WordPress** - push blog drafts (Lesson 4).
- Connect via a WordPress connector and authorize the site. Posts go in as drafts for review.
- WordPress REST API reference (what the connector uses under the hood): https://developer.wordpress.org/rest-api/

**Notion** - publish content entries and track status (Lesson 5; full depth in Module 4).
- Setup steps below under Module 4. For Module 2 you only need a content database to write into.

---

## Module 3 tools (skills deep dive)

**Claude Code** - see Foundations above. Most of this module runs in the Claude Code desktop app.

**skill-creator** - generate properly formatted skills.
- Skills authoring docs: https://code.claude.com/docs/en/skills
- The open Agent Skills standard skills follow: https://agentskills.io
- Official Anthropic skills to extend: https://github.com/anthropics/skills

**Claude Design tool** - extract a brand design system as a skill (Lesson 4). Available inside Claude; no separate install.

**Plugins** - package your skill library (Lesson 6).
- Full plugin authoring guide: https://code.claude.com/docs/en/plugins

---

## Module 4 tools (MCP and connected tools)

**MCP, the concept** (Lesson 1).
- What MCP is and how it works: https://modelcontextprotocol.io
- MCP in Claude Code: https://code.claude.com/docs/en/mcp
- Step-by-step first server: https://code.claude.com/docs/en/mcp-quickstart
- Directory of servers (the four tiers live here): https://github.com/modelcontextprotocol/servers

**Notion connector** (Lesson 2).
- Official Notion MCP / connector help: https://www.notion.com/help/notion-mcp
- Connect it under Customize > Connectors, authorize your workspace, and pick the databases to share.

**Canva connector** (Lesson 2, optional).
- Canva developer and MCP docs: https://www.canva.dev

**Analytics and email connectors** (Lesson 3) - for the business-intelligence and ops agents.
- Native Google connectors (Drive, Gmail, Calendar) under Customize > Connectors.
- For other tools, find a server in the registry: https://github.com/modelcontextprotocol/servers

**n8n (build your own connector)** (Lesson 4).
- n8n docs: https://docs.n8n.io
- Use it to build a custom MCP server when no native or official one exists.

---

## Module 5 tools (your AI marketing team)

This module runs in Claude Code. No new third-party accounts, but these official guides cover each piece:
- Create and route sub-agents: https://code.claude.com/docs/en/sub-agents
- Project memory and routing rules in `CLAUDE.md`: https://code.claude.com/docs/en/memory
- Connect tools to agents with MCP: https://code.claude.com/docs/en/mcp
- A Notion board as the shared task queue: https://www.notion.com/help/notion-mcp
- Assign tasks from your phone (remote control): https://code.claude.com/docs/en/remote-control

---

## Module 6 tools (multi-model workflows)

**Google Gemini** (Lesson 1).
- Use it at https://gemini.google.com
- Developer docs, if you go deeper: https://ai.google.dev

**Perplexity** (Lesson 2).
- Use it at https://www.perplexity.ai
- Pair its live research with Claude for analysis and artifacts.

---

## Scheduling reference (used in Modules 1, 2, 5)

- Cloud routines that run even when your computer is off: https://code.claude.com/docs/en/routines
- Scheduled tasks that run on your machine: https://code.claude.com/docs/en/desktop-scheduled-tasks
