# Course design - the full 13-part marketing-with-AI workshop

This maps all 13 source tutorials into one coherent, deduped course. The source material overlaps a lot (six videos touch skills, four touch MCP, two are pure agent-team builds), so this is organized into 6 modules by capability and difficulty, not 13 loose lessons.

Module 1 is already built. Modules 2-6 are designed here and not yet built.

## The arc

The course climbs from no-code to power-user:

```
Module 1  Cowork Foundations        no-code        beginner
Module 2  The Content Engine        no-code        beginner-intermediate
Module 3  Claude Skills Deep Dive   light code     intermediate
Module 4  MCP and Connected Tools   some config    intermediate
Module 5  Your AI Marketing Team    Claude Code    advanced
Module 6  Multi-Model Workflows     no-code        intermediate
```

The line to watch: Modules 1, 2, and 6 are fully doable by a non-technical marketer. Modules 3, 4, and 5 drift into Claude Code terminal, MCP config files, the `/agents` command, and tools like n8n. That is a real audience shift and the main thing to decide before building (see "Open decision" at the end).

## Module map (all 13 videos placed)

### Module 1 - Cowork Foundations  (BUILT)
**Source:** Video 1, reinforced by Video 6
**Status:** Done. Lessons 0-8 plus the Verdal example brand and the `/cowork-*` tutors.
**What Video 6 adds (to fold in):** importing an existing Claude Chat project into Cowork, explicitly asking for parallel sub-agents in a prompt, and using a master spreadsheet as a batch control file. These become short add-ons to existing lessons, not new lessons.

### Module 2 - The Content Engine
**Source:** Video 4
**Promise:** string the basics into one real, end-to-end content production system.
**Lessons:**
1. Repurpose one blog post into social, newsletter, and LinkedIn formats
2. Generate on-brand carousels from a style library and a content-planner spreadsheet
3. Produce ad creative briefs, then batch visual variations (the 25-ads-across-5-campaigns pattern)
4. Draft SEO blog posts with header images and push them to WordPress as drafts
5. Build the distribution layer: push content and media to Notion, sync status back to the planner
6. Put the whole engine on a weekly schedule
**New tools introduced:** content-planner spreadsheet as an orchestration layer, Notion push via API, WordPress draft push, image generation via MCP.

### Module 3 - Claude Skills Deep Dive
**Source:** Video 8 (concept), Video 2 (build), Video 5 (orchestrate + package)
**Promise:** go from using skills to designing, chaining, and shipping your own skill library.
**Lessons:**
1. The mental model: skills vs projects vs MCP, and the brain + instructions + tools + workspace picture (V8)
2. Three ways to create a skill: extend an official one, package an existing workflow, build from scratch (V8)
3. The three skill types - brand, function, specialty - and skill chaining, where one skill calls another (V2)
4. A design-system skill: extract a brand's look once, reuse it across every output (V2)
5. Skills from SOPs and examples, then multi-skill orchestration on one task (V5)
6. Package a skill library into a portable plugin you can drop into any brand (V5)
**New tools:** skill-creator, Claude Design, official Anthropic skills, plugin packaging.

### Module 4 - MCP and Connected Tools
**Source:** Video 10 (concept), Video 9 (Notion), Video 12 (agent builds)
**Promise:** connect Claude to your real stack and let it act, not just advise.
**Lessons:**
1. MCP explained: what it is, why it beats one-off integrations, the four tiers - native, official, community, custom (V10)
2. Notion as your marketing brain: the Notion connector, reading and writing live databases, the gather-synthesize-act loop (V9)
3. Five task-executing agents you can copy: research, business intelligence, personal ops, UX, knowledge management (V12)
4. Going custom: building your own connector with a no-code tool (n8n), plus the security and human-in-the-loop rules (V10, V12)
**New tools:** Notion MCP, Canva MCP, n8n custom servers, write-back actions.

### Module 5 - Your AI Marketing Team
**Source:** Video 7 (team design), Video 3 (run a campaign)
**Promise:** the capstone - a team of specialized agents with a lead that delegates.
**Lessons:**
1. Why a team beats one agent, and the four-step framework: map functions, build skills, group into agents, connect as a team (V7, V3)
2. The three things every agent needs - role, context, tools - and creating agents with the `/agents` command (V7)
3. Routing rules in CLAUDE.md: how the lead decides which agent or skill handles what (V7, V3)
4. Run a full multi-agent campaign end to end, with a Notion board as the shared human-AI task queue (V3)
5. Remote control: assign tasks from the Claude mobile app (V3)
**New tools:** sub-agents, agent routing rules, Claude Code terminal, Notion task board, mobile dispatch.

### Module 6 - Multi-Model Workflows
**Source:** Video 11 (Gemini), Video 13 (Perplexity)
**Promise:** stop being loyal to one model; route each step to the model that wins it.
**Lessons:**
1. Claude plus Gemini: division of labor, Gemini's big context window as a preprocessing layer, and the critique loop where one model improves the other (V11)
2. Perplexity plus Claude: live research in Perplexity, then analysis and visual artifacts in Claude, using Projects and thinking mode (V13)
**New tools:** Gemini 2.5, Perplexity focus and deep-research modes, Claude Artifacts, extended thinking mode.

## Dedup decisions

- **Skills** appear in V1, V2, V5, V6, V8. The packaging basics stay in Module 1; the deep mechanics consolidate into Module 3. No repetition across modules.
- **MCP** appears in V3, V7, V9, V10, V12. The concept is taught once in Module 4 Lesson 1; every later use just references it.
- **Agent teams** appear in V3, V5, V7. Module 3 introduces parallel sub-agents lightly; the full team build lives once in Module 5.
- **Notion** appears in V2, V3, V4, V9, V12. The connector is taught once in Module 4 Lesson 2; other modules use it as a known tool.
- **AI search / research** in V1 (browser use) and V13 (Perplexity) are kept distinct: Module 1 is in-browser spot checks, Module 6 is structured deep research.

## Build pattern (same as Module 1)

Each new lesson reuses the locked format: what you'll build, why it matters, connect this first, step by step, the prompt, what good looks like, your turn, common mistakes, what you just learned. Each module gets a README. Each lesson can get a `/cowork-*` style tutor command. Verdal stays the worked brand throughout. No references to any source video.

## Open decision (before building Modules 2-6)

Modules 3, 4, and 5 require Claude Code (terminal), MCP config, and tools like n8n - beyond the non-technical marketer Module 1 was written for. Pick one:

- **A. Two tracks.** Keep Modules 1, 2, 6 as the no-code track. Mark Modules 3, 4, 5 as a "power track" and write them for a more technical reader.
- **B. Keep it all no-code.** Where a video uses the terminal, teach the closest Cowork or web-app equivalent and skip the parts that truly need code. Some agent-team depth gets simplified.
- **C. Build only the no-code modules now** (2 and 6), defer 3-5 until later.
