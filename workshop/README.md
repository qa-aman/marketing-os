# Marketing with AI - Self-Paced Workshop

A hands-on course that takes you from using Claude like a chatbot to running a marketing system that works while you sleep. Six modules, beginner to advanced, every lesson a real thing you build.

## Who this is for

Marketers who want to do real work with Claude, not just ask it questions. You do not need to code. The first two modules and the last are fully no-code. Three middle modules are a "power track" that use Claude Code and a few config steps, all explained plainly.

You need a Claude subscription, a laptop, and a few hours per module.

## How the course works

Go in order the first time. Every lesson has the same shape: what you'll build, why it matters, set up first (with official docs), step by step, the prompt to copy, what good looks like, your turn, common mistakes.

Each lesson also has a tutor command. Type the command and Claude walks you through that lesson one step at a time, waits while you do it, and helps when you get stuck. Setup links for every tool live in one place: [connectors-setup.md](connectors-setup.md).

We use one worked brand the whole way through: **Verdal**, a premium indoor plant care brand, in [`example-brand/verdal/`](example-brand/verdal/). Follow along with Verdal, then redo each exercise on your own brand.

New here? Run `/cowork-start`, or open [Module 1 Lesson 0](module-1-cowork-foundations/00-setup.md).

## The six modules

| Module | Track | Level | Tutor commands |
|---|---|---|---|
| [1. Cowork Foundations](module-1-cowork-foundations/00-setup.md) | no-code | beginner | `/cowork-0` to `/cowork-8` |
| [2. The Content Engine](module-2-content-engine/README.md) | no-code | beginner-int | `/engine-1` to `/engine-6` |
| [3. Claude Skills Deep Dive](module-3-skills/README.md) | power | intermediate | `/skills-1` to `/skills-6` |
| [4. MCP and Connected Tools](module-4-mcp/README.md) | power | intermediate | `/mcp-1` to `/mcp-4` |
| [5. Your AI Marketing Team](module-5-agent-team/README.md) | power | advanced | `/team-1` to `/team-5` |
| [6. Multi-Model Workflows](module-6-multi-model/README.md) | no-code | intermediate | `/models-1`, `/models-2` |

### Two tracks

- **No-code track** (Modules 1, 2, 6): everything happens in the Claude desktop app. No terminal.
- **Power track** (Modules 3, 4, 5): uses Claude Code, the `/agents` command, MCP config, and tools like n8n. Still explained for a non-developer, but more involved.

## Chat vs Cowork vs Claude Code

- **Claude Chat** runs in the cloud. Great for thinking and drafting, but you copy, paste, and save things yourself.
- **Claude Cowork** is the local desktop agent. It reads a folder on your computer, connects to your tools, and saves finished work back into the folder. This is the no-code track.
- **Claude Code** is the same engine with a terminal and project files. The power track uses it for skills, agents, and MCP.

## What's in this folder

- `module-1-cowork-foundations/` ... `module-6-multi-model/` - the lessons
- `example-brand/verdal/` - the worked brand: context, voice, ICP, templates
- `connectors-setup.md` - the setup hub: every tool, with official documentation links
- `COURSE-DESIGN.md` - how the course is structured and why
- `BACKLOG.md` - future improvements

## Module 1 lesson list

| # | Lesson |
|---|---|
| 0 | [Setup](module-1-cowork-foundations/00-setup.md) |
| 1 | [Workspace and context](module-1-cowork-foundations/01-workspace-and-context.md) |
| 2 | [Templates](module-1-cowork-foundations/02-templates-strategy-deck.md) |
| 3 | [Projects](module-1-cowork-foundations/03-projects-reusable-workflows.md) |
| 4 | [Connectors](module-1-cowork-foundations/04-connectors-live-data.md) |
| 5 | [Live artifacts](module-1-cowork-foundations/05-live-artifacts.md) |
| 6 | [Skills and plugins](module-1-cowork-foundations/06-skills-and-plugins.md) |
| 7 | [Browser use](module-1-cowork-foundations/07-browser-use.md) |
| 8 | [Scheduled tasks](module-1-cowork-foundations/08-scheduled-tasks.md) |

## What you will have at the end

A marketing workspace Claude understands, a content engine that runs weekly, your own skill library packaged as a plugin, connected tools that take action, a team of agents that runs a campaign from one prompt, and multi-model pipelines for the hardest research and analysis.

Start with [Module 1 Lesson 0 - Setup](module-1-cowork-foundations/00-setup.md).
