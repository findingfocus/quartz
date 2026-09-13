---
title: Beyond Love2D
description: Why I recommend Love2D first, when to reach for Godot/3D, and what's brewing in the Jai lab.
---

This hub leads with Love2D on purpose, but it's not the only road.

## Why Love2D first

- **Tiny:** ~10MB, no editor to learn, you read every file
- **Simple:** Lua is easy to read and fast to prototype
- **Shippable:** web + desktop + Steam from one codebase ([[Distribution/index|how]])
- **Free:** no marketplace, no lock-in, just Lua files you own

I value learning open source tools that can't be taken away from you. Love2D teaches *games*, not *an editor*.

## When to reach for something else

| Want... | Consider | Why |
| ------- | -------- | --- |
| 3D, or 2D with visual editor + console export | [Godot](https://godotengine.org/) (free, open source) | Best free 3D + node/scene workflow; huge beginner community |
| AAA 3D, jobs in industry | [Unreal](https://www.unrealengine.com/) / [Unity](https://unity.com/) | Hiring pipelines, asset stores — heavier, commercial terms |
| Web-first casual | [LÖVE web export](https://github.com/Davidobot/love.js) is enough, or Godot HTML5 | Stay in Love2D until browsers block you |

> [!NOTE]
> Godot Starter: if you outgrow this hub, do Godot's official [Your first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) tutorial, then come back — state machines, `dt`, and collision transfer 1:1.

## Jai (future planning)

I'm learning [Jai](https://github.com/Jai-Community/Jai-Community-Library/wiki) and will document that process here. It's lower-level, hand-rolled, performance-first. Expect devlogs, not polished tutorials, at first. Love2D remains the recommended start; Jai is the deep end I will be exploring publicly.

## Suggested order

1. Finish [[First-Game/index|Pong]] + ship a web build
2. Build one original game with the [[Starter-Template/index|template]] + [[Cookbook/index|cookbook]]
3. *Then* evaluate engines with a real game under your belt — you'll choose wisely
