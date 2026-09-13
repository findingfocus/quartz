---
title: Tools and Assets
description: Every free tool I actually use — editor, git, art, audio — plus the only Lua libraries worth learning first.
---

Everything here is free. My rule: learn the tool when the game demands it, not before.

## Code & version control

| Tool | Why | Start when... |
| ---- | --- | ------------- |
| [Sublime Text](https://www.sublimetext.com/) + the Love2D package (via Package Control) | What I learned on and recommend — instant, lightweight, stays out of your way | Right now |
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

| Tool                                      | Why                                      |
| ----------------------------------------- | ---------------------------------------- |
| [Audacity](https://www.audacityteam.org/) | Record + trim effects                    |
| [bfxr](https://www.bfxr.net/)             | Generate retro blips in seconds          |
| [OpenGameArt](https://opengameart.org/)   | Free music/sfx (check license per asset) |

## Lua libraries (only these to start)

| Library                                           | Use for                                                            | Note                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [class.lua](https://github.com/vrld/hump)         | Tiny OOP, from Matthias Richter's collection                       | Read it once, 98 lines, already in the template                    |
| [push.lua](https://github.com/Ulydev/push)        | Resolution scaling, from Ulysse Ramage                             | See [[Cookbook/Scaling-with-Push\|Scaling recipe]]              |
| [knife](https://github.com/airstruck/knife) | Timers, tweens, state machines, events — pick single micro-modules | Graduate here after Pong, each module stands alone |
| [bitser](https://github.com/gvx/bitser) | Saving nested tables (inventories, unlock maps) | When `string.format` can't hold your save — see [[Cookbook/Save-and-Load\|Save & Load]] |
| [jumper](https://github.com/Yonaba/Jumper)        | Pathfinding                                                        | Grid-based enemies                                                 |

> [!WARNING]
> Library trap: installing 6 libraries before writing gameplay. Finish [[First-Game/index|Pong]] with zero libraries first — you'll know exactly which one you need next.

## Curated link shelf

- [Love2D wiki](https://love2d.org/wiki/Main_Page) — the reference, bookmark it
- [Lua manual 5.4](https://www.lua.org/manual/5.4/) + [Learn X in Y](https://learnxinyminutes.com/lua/)
- [CS50's Intro to Game Development](https://cs50.harvard.edu/games/) — free, uses Lua/Love2D, perfect next course after this hub
