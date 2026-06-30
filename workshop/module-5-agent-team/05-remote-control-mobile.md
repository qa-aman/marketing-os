# Lesson 5 - Remote control: assign tasks from your phone

> Module 5: Your AI Marketing Team · power track · ~15 min · Builds on Lesson 4

---

## What you'll build

A live connection between your phone and your running Claude Code session, so you can hand tasks to your Verdal agent team from anywhere - on the train, between meetings, or away from your desk.

## Why it matters

Your agent team can work while you are not at your computer. The bottleneck is no longer the work itself - it is when you remember to send the brief. Remote control removes that friction. You think of a task, you send it. The team runs it. By the time you are back at your desk, the output is waiting.

This matters for a small team. You are not adding headcount - you are adding hours.

## Set up first

You need two things before this works.

**Claude mobile app.** Download it on iOS or Android. Sign in with the same Anthropic account you use in Claude Code.

**Remote control enabled.** Remote control lets you connect external clients - including your phone - to a session that is already running locally. Full setup steps are in [../connectors-setup.md](../connectors-setup.md). If you have not done that yet, complete it before moving on.

Official reference: [https://code.claude.com/docs/en/remote-control](https://code.claude.com/docs/en/remote-control)

## Step by step

**1. Open your Verdal project in Claude Code.**

Navigate to verdal-marketing/ and start Claude Code as normal. Your agent team and all context files should already be in place from Lessons 1-4.

**2. Type `/remote-control` in the chat.**

Claude Code generates a link and displays it in the terminal. The link ties your current session to a connection you can open from another device.

**3. Open the link on your phone.**

Tap the link or paste it into your phone's browser. It opens in the Claude mobile app (or prompts you to open it there). You are now looking at the same session that is running on your laptop.

**4. Send a task.**

Type your request directly into the chat on your phone. Claude routes it through your local session, the same way it would if you had typed it at your desk. Your agent team picks it up and runs.

**5. Leave it running.**

You do not need to stay on the phone. The session runs locally. Check back when you want to review the output.

## The prompt

Here is a concrete example. You are between meetings and want the research agent to run a competitor digest before your afternoon planning session. Send this from your phone:

```
@research-agent Run a competitor digest for Verdal. Check what Bloomscape, The Sill, and Leon & George are pushing this week across Instagram and their site. Summarise: 3 key themes, any promotions or launches, tone shift versus last week. Save the digest to projects/competitor-digests/.
```

The research agent picks up the task, runs it against your context files, and writes the output to the folder you specified. You can review it when you are back at your desk.

## What good looks like

- Claude acknowledges the task in the mobile chat immediately.
- The research agent runs autonomously - you do not need to approve each step.
- The digest file appears in verdal-marketing/projects/competitor-digests/ by the time you return to your laptop.
- The tone and framing match Verdal's voice because the agent loaded the context files from your project folder.

If nothing happens after 30 seconds, check that Claude Code is still running on your laptop. The session lives there - if the laptop sleeps or the terminal closes, the session ends.

## Your turn

Try this sequence today.

1. Start a Claude Code session in verdal-marketing/.
2. Run `/remote-control` and copy the link to your phone.
3. From your phone, send a small test task - ask the content agent to draft a caption for this week's care tip post.
4. Watch the output appear in your project folder.
5. Reply to the agent from your phone with one revision: tighten it to under 120 characters.

The goal is to feel the rhythm - send, let it run, review, revise. Once that loop feels normal from your phone, you will start seeing tasks differently. Everything that used to wait for desk time becomes fair game.

## Common mistakes

**Closing the laptop.** The session runs on your machine. If the machine sleeps, the connection drops. Keep Claude Code open with your laptop lid up, or use a desktop that stays on.

**Not specifying the output path.** If you do not tell the agent where to save the file, it may save in an unexpected location or just return text in the chat. Always include a target folder in your mobile prompt.

**Sending an ambiguous task.** On mobile, it is tempting to send short messages. "Do the competitor thing" will not work. The agent needs the same clarity it would need from your desk. Write the task in full before you send it.

**Expecting instant results for complex tasks.** A full competitor digest across three brands takes a few minutes. Do not assume it failed if the output is not immediate.

## What you just learned

Claude Code sessions are not tied to one device - you can continue them from your phone and send tasks to your agent team while you are away from your desk.

---

## You finished Module 5

You built a five-agent marketing team for Verdal, wired agents to skills, set routing rules in CLAUDE.md, and learned how to dispatch work remotely. The team runs research, writes content, manages campaigns, and now takes instructions from your phone.

That is a functioning AI marketing operation - not a collection of prompts, but a system with roles, memory, and a feedback loop.

Next: [Module 6 - Multi-Model Workflows](../module-6-multi-model/README.md)
