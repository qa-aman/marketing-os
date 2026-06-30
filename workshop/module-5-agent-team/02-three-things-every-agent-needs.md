# Lesson 2 - The three things every agent needs, and the /agents command

> Module 5: Your AI Marketing Team · power track · ~25 min · Builds on Lesson 1

## What you'll build

Two Verdal agents created with the `/agents` command in Claude Code: a Content Strategist and a Social Media Specialist. Each one gets a defined role, loaded context from `verdal-marketing/context/`, and the right tools assigned. By the end, you can call either agent by name and it runs with full brand knowledge, no re-explaining.

## Why it matters

A single Claude agent doing everything hits two limits fast. First, it has one context window, so a long research task crowds out brand memory. Second, it has no specialisation, so you get generalist output every time, even for work that needs a specific voice or a specific tool.

Sub-agents fix both. Each one runs in its own context window, carries only the knowledge it needs, and has only the tools relevant to its job. The main Claude acts as team lead: it reads your request, picks the right agent, hands off the task, and returns the result. You never manually route - the routing rules you will set up in Lesson 3 handle that.

Before you can write routing rules, you need agents. That is what this lesson builds.

## Set up first

You need Claude Code running locally with your `verdal-marketing/` folder open as the project. If you have not done that yet, follow the setup instructions in [../connectors-setup.md](../connectors-setup.md) - the sub-agents section walks through the Claude Code install and project folder setup.

The agents you create here are project-level. They live inside the project and are only active when you have that project open.

## Step by step

### Understand the three components

Every agent needs exactly three things before it can do useful work:

**1. Role and responsibilities.** A clear system prompt telling the agent who it is, what it owns, and what it does not touch. The tighter this is, the less the agent bleeds into work it should not be doing. "You are Verdal's Content Strategist. You research topics, build content briefs, and plan editorial calendars. You do not write final copy - that goes to the copy agent" is better than "you help with content."

**2. Knowledge and context.** The brand files, ICP docs, tone guidelines, and templates the agent needs to do its job. For a marketing agent, this typically means pointing it at the relevant files in `verdal-marketing/context/` - brand voice, persona summaries, service descriptions. The agent loads these when it activates, so it starts every task already briefed on Verdal.

**3. Tools.** The skills (reusable instruction sets) and MCP servers (live external connections) the agent is allowed to use. A content strategist might have a web-search skill and no MCP servers. A social media agent might have a Canva skill and a Notion MCP for scheduling to a content calendar. Tools are assigned per agent, not globally - the social agent cannot accidentally call the GA4 tool that belongs to the data analyst.

### Open the /agents command

In Claude Code, type `/agents` in the chat. You will see a menu. Choose "Create new agent," then "Project level agent," then "Generate with Claude." Claude will ask you to describe the role.

You can also use the CLI in your terminal if you prefer. From your project folder, run `claude agents create` - it walks you through the same steps. Either method produces the same result: an agent markdown file inside the `.claude/agents/` folder in your project.

### Create agent 1: Content Strategist

When Claude asks for the role description, use this:

```
Role: Content Strategist for Verdal, a premium indoor plant care brand.

Responsibilities:
- Research content topics using web search
- Build detailed content briefs (topic, angle, ICP fit, key questions, sources)
- Plan editorial calendars with topic clusters and publish dates
- Recommend content formats based on campaign goals

Does not write final copy. Hands off briefs and plans to the copy agent or the user.

Knowledge to load: verdal-marketing/context/brand.md, verdal-marketing/context/icp.md, verdal-marketing/context/services.md

Voice: warm, expert, plain. No jargon, no hype.

Model: claude-sonnet-4-5
```

When prompted for skills, attach the `content-writer` skill from this project's `.claude/skills/` library. This gives the agent the right brief format and output structure.

No MCP tools for this agent - it uses web search built into Claude Code and does not need external system access.

Review the generated agent file in `.claude/agents/content-strategist.md`. Confirm the system prompt, skills, and model look right. Save it.

### Create agent 2: Social Media Specialist

Run `/agents` again. "Create new agent" > "Project level agent" > "Generate with Claude." Use this description:

```
Role: Social Media Specialist for Verdal, a premium indoor plant care brand.

Responsibilities:
- Write post copy for Instagram, LinkedIn, and Pinterest
- Create content calendar entries with publish dates, captions, and asset notes
- Follow Verdal's brand voice: warm, expert, plain
- Schedule posts to the Notion content calendar when the Notion MCP is active

Does not do keyword research or write long-form copy. Focuses on short-form social.

Knowledge to load: verdal-marketing/context/brand.md, verdal-marketing/context/icp.md, verdal-marketing/templates/social-post.md

Model: claude-haiku-4-5
```

When prompted for skills, attach `linkedin-post` and `social-calendar` from `.claude/skills/`.

For MCP tools, add the Notion MCP if you have it configured. If not, skip it for now - the agent still works for copy and calendar planning, it just cannot push to Notion automatically.

Review `.claude/agents/social-media-specialist.md`. Save it.

### Test each agent by name

To call a specific agent, tag it in the chat: `@content-strategist` or `@social-media-specialist`. Claude Code will route the task to that agent and show you which one is handling it.

Try a quick test for each one before moving to Lesson 3.

## The prompt

Test prompt for the Content Strategist:

```
@content-strategist Research three content topics for Verdal this month. 
The audience is urban apartment dwellers, 28-40, who buy one or two plants 
a year and struggle to keep them alive past the first month.

For each topic: name the angle, explain why it fits this ICP, list four 
key questions the piece should answer, and suggest one content format 
(blog, guide, email, or video script).

Save the brief to verdal-marketing/projects/content-brief-[today's date].md
```

Test prompt for the Social Media Specialist:

```
@social-media-specialist Write three Instagram captions for Verdal based 
on the following topic: "why your plant dies in the first month and how 
to stop it."

One caption should be educational, one should be slightly playful, one 
should feel like advice from a knowledgeable friend. All three under 
150 words. Include a call to action in each.

Save to verdal-marketing/projects/instagram-captions-[today's date].md
```

## What good looks like

- Two agent files exist at `.claude/agents/content-strategist.md` and `.claude/agents/social-media-specialist.md`
- Each has a clear system prompt with defined scope, a "does not do" boundary, and at least one context file listed
- The right skills are attached to each agent
- The Haiku model is assigned to Social (lighter, faster for short-form) and Sonnet to Content Strategist (more reasoning for research)
- Tagging `@content-strategist` in chat produces a scoped brief, not generic content ideas
- Tagging `@social-media-specialist` produces Verdal-voiced captions that match the brand files, not generic social copy

## Your turn

1. Build both agents using the steps above. Run both test prompts and compare the output to what you would get from a non-scoped Claude chat.
2. Open the agent files in `.claude/agents/` and read the system prompt Claude generated. Edit anything that is too vague or too broad. The system prompt is the most important thing you can tune.
3. Think about the other agents from the plan in Lesson 1 (Data Analyst, SEO Specialist, Presentation Specialist). Write down the three components for one of them - role, knowledge files, tools - before you build it.

## Common mistakes

- **System prompt too broad.** "You are a marketing expert" tells the agent nothing useful. Define the job in two sentences, then add a "does not do" line. The boundary is as important as the description.
- **Attaching all skills to every agent.** More skills is not better. Each skill adds context. A social agent with a keyword-research skill attached will occasionally try to use it when it should not. Only attach what the role actually needs.
- **Skipping the knowledge files.** An agent with a great system prompt but no context files will make up brand details. Always point it at the relevant files in `verdal-marketing/context/`.
- **Using Sonnet for every agent.** Haiku is fast and cheap for short-form output like social captions or single-task responses. Reserve Sonnet for agents doing research, reasoning, or multi-step planning. Reserve Opus for the main lead when orchestration logic is complex.
- **Not testing before adding routing rules.** The routing rules in Lesson 3 depend on each agent working correctly on its own. Test each one with the prompts above before wiring up the team.

## What you just learned

Every agent needs a role, the right context, and only the tools for its job - set these three things and the agent runs with no further briefing needed.

Next: [Lesson 3 - Routing rules](03-routing-rules-claude-md.md)
