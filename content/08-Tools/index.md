---
title: Tools and Assets
description: Every free tool I actually use — editor, git, art, audio — plus the only Lua libraries worth learning first.
tags:
  - hub
  - tools
---

Everything here is free. My rule: learn the tool when the game demands it, not before.

## Code & version control

| Tool | Why | Start when... |
| ---- | --- | ------------- |
| [VS Code](https://code.visualstudio.com/) + Lua extensions | Least friction for beginners | Right now |
| [Git](https://git-scm.com/) + [GitHub](https://github.com/) | Undo button for your whole project + free backup | Before your second game |
| Neovim | Fast once you live in terminal (what I use) | You're curious, not before |

Learn 3 git commands and you're set: `add, commit, push`. Your template is already a repo.

## Art

| Tool | Why |
| ---- | --- |
| [Aseprite](https://www.aseprite.org/) (paid) or [Libresprite](https://libresprite.github.io/) (free) | Pixel art + animation |
| [Tiled](https://www.mapeditor.org/) | Tilemaps — draw levels instead of hardcoding them |
| [Krita](https://krita.org/) / [GIMP](https://www.gimp.org/) | Larger illustrations, textures |

## Audio

| Tool | Why |
| ---- | --- |
| [Audacity](https://www.audacityteam.org/) | Record + trim effects |
| [jsfxr / sfxr](https://sfxr.me/) | Generate retro blips in seconds |
| [OpenGameArt](https://opengameart.org/) | Free music/sfx (check license per asset) |

## Lua libraries (only these to start)

| Library | Use for | Note |
| ------- | ------- | ---- |
| `class.lua` (vendored in template) | Tiny OOP | Read it once, 98 lines |
| `push.lua` (vendored) | Resolution scaling | See [[07-Cookbook/Scaling-with-Push\|Scaling recipe]] |
| [HUMP](https://github.com/vrld/hump) | Gamestates, timers, camera | Graduate here after Pong |
| [windfield](https://github.com/adn4900/windfield) | Real physics | Only when AABB isn't enough ([[07-Cookbook/Collision\|Collision]]) |
| [jumper](https://github.com/Yonaba/Jumper) | Pathfinding | Grid-based enemies |

> [!WARNING]
> Library trap: installing 5 libraries before writing gameplay. Finish [[05-First-Game/index|Pong]] with zero libraries first — you'll know exactly which one you need next.

## Curated link shelf

- [Love2D wiki](https://love2d.org/wiki/Main_Page) — the reference, bookmark it
- [Lua manual 5.4](https://www.lua.org/manual/5.4/) + [Learn X in Y](https://learnxinyminutes.com/lua/)
- [CS50's Intro to Game Development](https://cs50.harvard.edu/games/) — free, uses Lua/Love2D, perfect next course after this hub
