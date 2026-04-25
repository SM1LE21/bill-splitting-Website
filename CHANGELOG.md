# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-04-25 — Remotion setup and repo conventions

- Added commit, changelog, and code conventions to `AGENTS.md` and initialised `CHANGELOG.md`.
- Installed the official `remotion-best-practices` Agent Skill under `.claude/skills/`, with `skills-lock.json` pinned for reproducible re-installs.
- Scaffolded `src/remotion/` for compositions and pointed `AGENTS.md` at it.
- Updated `.gitignore` so shared skills track but per-machine state (`settings.local.json`, sessions, cache) stays out.
