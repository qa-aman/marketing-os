# Workshop workflow - how to take the course

This is the map. It shows, module by module, which command to run, what you learn, and what you walk away having built. Do the modules in order the first time.

## Before you start

- You need a paid Claude subscription (Pro, Max, or Team). The free tier will not run these workflows.
- Total course time: about 12 hours across all six modules. You can do one module per sitting.

## How it works

- Every lesson has a tutor command. Type it and Claude guides you through that one lesson, one step at a time, waiting while you do the work.
- Start each session by running the command for where you are. Finish a lesson, run the next command.
- Setup help for every tool, with official documentation links, is in [connectors-setup.md](connectors-setup.md).
- The worked brand is Verdal, in [example-brand/verdal/](example-brand/verdal/). Follow along with it first, then redo each exercise on your own brand.

## Start here

Run `/cowork-start`. It gives you the overview, checks you have what you need, and points you to the first lesson.

Two tracks:
- **No-code** (Modules 1, 2, 6): everything in the Claude desktop app. No terminal.
- **Power** (Modules 3, 4, 5): uses Claude Code and a few config steps, explained plainly. Install Claude Code via [connectors-setup.md](connectors-setup.md) before starting Module 3.

---

## Module 1 - Cowork Foundations  (no-code, beginner)

Goal: set up a real marketing workspace and learn the 8 core Cowork use cases.

| Command | Lesson | What you learn / build |
|---|---|---|
| `/cowork-0` | Setup | Install Cowork, create your context / templates / projects folders |
| `/cowork-1` | Workspace and context | Teach Cowork your brand once so it never re-asks |
| `/cowork-2` | Templates | Build a 12-slide strategy deck from a template and brand photos |
| `/cowork-3` | Projects | Turn a repeatable workflow into a saved project with memory - you build a Carousel Design System that generates on-brand 7-slide carousels from any content |
| `/cowork-4` | Connectors | Pull live data from outside tools (scraping, Gmail, decks) |
| `/cowork-5` | Live artifacts | Build an interactive dashboard that refreshes itself |
| `/cowork-6` | Skills and plugins | Package a workflow into a one-click reusable skill |
| `/cowork-7` | Browser use | Let Cowork browse the web and track AI search visibility |
| `/cowork-8` | Scheduled tasks | Automate workflows into a self-updating control center |

End state: a workspace Cowork understands, plus a deck, a carousel system, a competitor dashboard, and a scheduled job.

---

## Module 2 - The Content Engine  (no-code, beginner to intermediate)

Goal: string the basics into one real content production system that runs weekly.

| Command | Lesson | What you learn / build |
|---|---|---|
| `/engine-1` | Repurpose content | Turn one blog post into social, newsletter, and LinkedIn posts |
| `/engine-2` | Carousels at scale | Generate on-brand carousels from a style library and a content planner |
| `/engine-3` | Ad creative briefs | Produce ad briefs, then batch visual variations |
| `/engine-4` | SEO blog to WordPress | Draft SEO posts with header images, push to WordPress as drafts |
| `/engine-5` | Distribution to Notion | Push finished content to Notion, sync status back to the planner |
| `/engine-6` | Schedule the engine | Run the whole engine automatically every week |

End state: a content engine driven by a planner spreadsheet that produces and distributes content on a schedule.

---

## Module 3 - Claude Skills Deep Dive  (power, intermediate)

Goal: go from using skills to designing, chaining, and shipping your own skill library.

Prerequisite: complete Module 2 and install Claude Code (see [connectors-setup.md](connectors-setup.md)) before starting this module.

| Command | Lesson | What you learn / build |
|---|---|---|
| `/skills-1` | Skills mental model | Skills vs projects vs MCP, and when to make a skill |
| `/skills-2` | Three ways to create a skill | Extend an official skill, package a workflow, or wire a new skill to a live MCP tool |
| `/skills-3` | Skill types and chaining | Brand, function, and specialty skills, and how one skill calls another |
| `/skills-4` | Design-system skill | Extract your brand look once, reuse it across every output |
| `/skills-5` | Skills from SOPs | Turn an SOP into a skill, then orchestrate several skills on one task |
| `/skills-6` | Package a plugin | Bundle your skills into a portable plugin you can install anywhere |

End state: a reusable, brand-agnostic skill library packaged as a plugin.

---

## Module 4 - MCP and Connected Tools  (power, intermediate)

Goal: connect Claude to your real stack and let it take action, not just advise.

Prerequisite: complete Module 3 before starting this module. Claude Code (installed in Module 3) is still required.

| Command | Lesson | What you learn / build |
|---|---|---|
| `/mcp-1` | MCP explained | What MCP is and the four tiers of connectors (native, official, community, custom) |
| `/mcp-2` | Notion marketing brain | Read and write a live Notion database in one session |
| `/mcp-3` | Five agents to copy | Build five task-executing agents (research, BI, ops, UX, knowledge) |
| `/mcp-4` | Custom MCP and security | Build your own connector with n8n, plus the safety rules |

End state: connected tools and agents that act on your behalf, with human-in-the-loop guardrails.

---

## Module 5 - Your AI Marketing Team  (power, advanced)

Goal: build a team of specialized agents with a lead that delegates. The capstone.

Prerequisite: complete Module 4 before starting this module. Claude Code (installed in Module 3) is still required.

| Command | Lesson | What you learn / build |
|---|---|---|
| `/team-1` | Why a team and framework | Why a team beats one agent, and the four-step design framework |
| `/team-2` | What every agent needs | Role, context, tools, and creating agents with the `/agents` command |
| `/team-3` | Routing rules | Write routing rules in CLAUDE.md so the lead delegates correctly |
| `/team-4` | Run a campaign | Run a full multi-agent campaign with a Notion task board |
| `/team-5` | Remote control | Assign tasks to your team from your phone |

End state: a multi-agent team that runs a campaign from a single prompt.

---

## Module 6 - Multi-Model Workflows  (no-code, intermediate)

Goal: route each step of a workflow to the model that wins it.

Prerequisite: complete Module 1. You will use a Gemini account and a Perplexity account alongside Claude (setup in [connectors-setup.md](connectors-setup.md)).

| Command | Lesson | What you learn / build |
|---|---|---|
| `/models-1` | Claude plus Gemini | Use Gemini for heavy data, Claude for strategy, and a critique loop between them |
| `/models-2` | Perplexity plus Claude | Research in Perplexity, then build polished artifacts in Claude |

End state: two multi-model pipelines for your hardest research and analysis.

---

## The full path at a glance

```
/cowork-start
  -> /cowork-0 ... /cowork-8        Module 1  (no-code)
  -> /engine-1 ... /engine-6        Module 2  (no-code)
  -> /skills-1 ... /skills-6        Module 3  (power)
  -> /mcp-1 ... /mcp-4              Module 4  (power)
  -> /team-1 ... /team-5            Module 5  (power)
  -> /models-1 ... /models-2       Module 6  (no-code)
```

## Other files in this folder

- [README.md](README.md) - course overview and the full lesson list
- [connectors-setup.md](connectors-setup.md) - every tool, with official documentation links
- [COURSE-DESIGN.md](COURSE-DESIGN.md) - how the course is structured and why

When you finish, rebuild every module on your own brand. That is where it becomes your system.
