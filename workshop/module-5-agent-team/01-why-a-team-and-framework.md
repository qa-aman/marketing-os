# Lesson 1 - Why a team beats one agent, and the four-step framework

> Module 5: Your AI Marketing Team · power track · ~20 min · Builds on Module 4

---

## What you'll build

A written plan for your Verdal agent team: five named agents, the skills each one owns, and the routing logic that ties them together. No code yet. This is the design document you will use in every lesson that follows.

---

## Why it matters

By the end of Module 4 you had a working skill library for Verdal: a content writer, a social scheduler, an SEO researcher, a campaign brief generator. Running any one of them worked well. Running several in sequence inside the same conversation started to get messy.

That messiness has a name. It is the single-agent limit, and understanding it is what makes a team worth building.

---

## Step by step

### The context-dilution problem

Every conversation with Claude has a fixed context window. The more skills you load, the more system prompts, instructions, and prior outputs compete for space in that window. After a few back-and-forth exchanges, Claude starts losing the thread of earlier instructions. It ignores parts of your voice guide. It forgets which template to use. Outputs drift.

This is not a bug in Claude. It is a structural limit of single-agent design. When one agent has to hold everything, the window fills up and focus degrades.

The symptom looks like this: you ask for a 600-word Instagram caption in Verdal's warm-expert tone, and you get a generic product description instead. Not because the skill is wrong, but because there is too much else in the conversation for Claude to keep the skill instructions sharp.

The more skills you add, the worse it gets. A library of twelve skills loaded into one chat is essentially twelve sets of instructions all fighting for attention.

### The team lead and specialists model

The fix is the same one that works in any human organization: specialize, then delegate.

Instead of one agent that does everything, you have a team lead and a set of specialists. The team lead, which is the main Claude instance in your project, takes every incoming request and routes it to the right specialist. Each specialist has a narrow role, a small set of skills, and its own context window. It sees only what it needs to see.

When a specialist runs, it does not inherit the accumulated conversation history from other specialists. It starts with a clean window, its own role definition, its assigned skills, and the specific task the lead handed it. Then it finishes and returns the output.

The lead sequences these handoffs automatically. You write one prompt. Claude figures out which agent to call, in what order, and passes outputs between them. You get back a finished set of deliverables.

This is not theoretical. You will run a prompt like "draft the May care-guide campaign for Verdal: research, brief, blog post, and social content" and the team will execute it without you touching a single intermediate step.

### The four-step framework

The design process has four steps. Do them in order.

**Step 1: Map your marketing functions.**
List every type of marketing work you need to produce. For Verdal, that might be: SEO content, social posts and visuals, campaign briefs and strategy, analytics and performance reporting, presentations and client-facing decks. Each function becomes a category.

**Step 2: Build skills for each function.**
A skill is a single workflow packaged as a reusable instruction file. One skill per deliverable type. You have already built several of these in Modules 2 through 4. The key design rule is that skills are not agents. A skill is a playbook. An agent is the person who carries it.

**Step 3: Group skills into agents.**
Look at your skill list and cluster the ones that belong together. Skills that share a context, a data source, or a type of reasoning go to the same agent. An SEO specialist and a blog writer both need keyword data, so they can live on one agent. A data analyst working with GA4 exports needs different context than a copywriter, so they stay separate.

Each agent gets a role definition, a list of its skills, any MCP connectors it needs, and a default model.

**Step 4: Connect the agents as a team with routing.**
Add routing rules to your CLAUDE.md. These rules tell the team lead which agent to call for which type of task. A request that mentions "performance data" or "GA4" goes to the data analyst. A request for "Instagram" or "social calendar" goes to the social specialist. You write these rules once; Claude uses them on every future request.

### Mapping Verdal's team

Here is the team plan you are building toward. Read it now and keep it as your reference for Lessons 2 through 5.

**Agent 1: Content strategist**
Role: research, content planning, campaign briefs.
Skills: ICP research, content calendar planner, campaign brief generator.
Connector: none at first; can add a search MCP later.
When to call: any request that starts with "research", "plan", "brief", or "strategy".

**Agent 2: SEO and blog specialist**
Role: keyword research and long-form content production.
Skills: keyword researcher, SEO article writer, blog post generator.
Connector: Ahrefs or a search MCP for live keyword data.
When to call: any request that mentions "blog", "SEO", "keyword", or "search rankings".

**Agent 3: Social and creative specialist**
Role: social copy, visual briefs, and scheduling.
Skills: social post writer, caption variants generator, content calendar scheduler.
Connector: Notion MCP for calendar output.
When to call: any request that mentions "Instagram", "LinkedIn", "social", "caption", or "post".

**Agent 4: Data analyst**
Role: campaign performance, analytics dashboards, reporting.
Skills: campaign report builder, data visualizer.
Connector: GA4 MCP for live analytics pulls.
When to call: any request that mentions "performance", "data", "analytics", "GA4", or "dashboard".

**Agent 5: Presentation specialist**
Role: slide decks, client reports, internal strategy decks.
Skills: branded deck builder, visual report formatter.
Connector: none standard; takes data files as input.
When to call: any request that mentions "deck", "slides", "presentation", or "report".

The team lead, the main Claude instance in your project, holds the routing rules in CLAUDE.md and sequences tasks across agents. You never tag agents manually in normal use. You write one prompt to the team lead and it handles the rest.

---

## The prompt

Use this prompt to ask Claude to propose a team structure from your marketing functions. Run it from your verdal-marketing/ folder after Claude has read your context files.

```
Read everything in context/ and then do the following.

List every distinct marketing function Verdal needs to execute, based on the brand, ICP, and services context you have read. Group those functions into 4-6 specialist roles. For each role, name the agent, list the skills it should own, note any external connector it would need, and write one sentence explaining when the team lead should route a task to it.

Format the output as a table with columns: Agent name | Role in one sentence | Skills it owns | Connector needed | When to route here.

Do not build anything yet. This is a planning document only.
```

---

## What good looks like

- Five clearly distinct agents with no overlapping skill ownership.
- Each agent's role can be described in one plain sentence without using the word "manages".
- The routing logic in the last column is specific enough that a different person could apply it without asking you.
- No agent is doing both content creation and analytics. Those are different context types and they conflict when combined.

---

## Your turn

Run the planning prompt above in your verdal-marketing/ project. Review the table Claude returns. Check two things: first, does every skill you built in Modules 2 through 4 land on exactly one agent? Second, does any agent have more than four or five skills? If yes, split that agent into two.

Save the output to verdal-marketing/projects/agent-team-plan.md. You will refer back to it in every lesson this module.

---

## Common mistakes

**Assigning the same skill to two agents.** Pick one home. If two agents both need keyword data, give the keyword researcher skill to the SEO specialist and have the content strategist request output from the SEO specialist when it needs that data.

**Making one "general" agent.** The whole point is specialization. An agent defined as "does everything the other agents don't handle" is just the single-agent problem with extra steps.

**Skipping the routing rules.** Without routing rules in CLAUDE.md, the team lead has no basis for delegation. It will attempt to do everything itself. Write the routing rules in this lesson, not later.

**Confusing skills with agents.** A skill is an instruction file for one specific deliverable. An agent is a role that carries several related skills. You do not need an agent for every skill. Simple skills can run directly from the team lead without a specialist.

---

## What you just learned

A growing skill library creates context dilution in a single agent; a team of specialists solves this by giving each agent a clean, focused context window, with a lead that routes and sequences tasks automatically.

Next: [Lesson 2 - The three things every agent needs](02-three-things-every-agent-needs.md)
