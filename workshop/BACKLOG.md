# Workshop backlog - things to do later

## Package the slash commands as a Cowork plugin

**Why:** Right now the `/cowork-start` and `/cowork-0` ... `/cowork-8` commands live in `.claude/skills/`. In Claude Code they auto-load because the repo is the working directory. In Cowork a learner would have to load this repo folder for the commands to appear.

**The move:** Package `.claude/skills/` as a plugin so the whole course installs in one click and `/cowork-start` is always available, regardless of which folder the learner has open in Cowork.

**Rough steps when we pick this up:**
1. Decide plugin scope: just the `cowork-*` course commands, or the full marketing-os skill set too.
2. Create the plugin manifest and bundle the `cowork-*` SKILL.md files (and the `workshop/` content they read, or rework them to be self-contained).
3. Decide how the lesson files travel with the plugin, since the tutors currently read `workshop/lessons/*.md` by relative path. Either ship the lessons inside the plugin or embed the teaching content in each SKILL.md.
4. Validate it installs in Cowork and the commands show up.
5. Document install steps in the course README.

**Owner:** Aman (later). Not started.

---

## Other ideas

- (add future workshop improvements here)
