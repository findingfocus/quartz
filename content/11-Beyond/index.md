---
title: Beyond Love2D
description: Why I recommend Love2D first, when to reach for Godot/3D, and what's brewing in the Jai lab.
---

This hub leads with Love2D on purpose — but it's not the only road.

## Why Love2D first

- **Tiny:** ~10MB, no editor to learn, you read every file
- **Stable:** APIs barely change; tutorials from years ago still work
- **Shippable:** web + desktop + Steam from one codebase ([[09-Distribution/index|how]])
- **Honest:** no marketplace, no lock-in, just Lua files you own

My personal reasons + full comparison live in my tool notes — but the short version: Love2D teaches *games*, not *an editor*.

## When to reach for something else

| Want... | Consider | Why |
| ------- | -------- | --- |
| 3D, or 2D with visual editor + console export | [Godot](https://godotengine.org/) (free, open source) | Best free 3D + node/scene workflow; huge beginner community |
| AAA 3D, jobs in industry | [Unreal](https://www.unrealengine.com/) / [Unity](https://unity.com/) | Hiring pipelines, asset stores — heavier, commercial terms |
| Web-first casual | [LÖVE web export](https://github.com/Davidobot/love.js) is enough, or Godot HTML5 | Stay in Love2D until browsers block you |

> [!NOTE]
> Godot Starter: if you outgrow this hub, do Godot's official [Your first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) tutorial, then come back — state machines, `dt`, and collision transfer 1:1.

## Jai lab (future)

I'm learning [Jai](https://github.com/Jai-Community/Jai-Community-Library/wiki) and will document that process here — lower-level, hand-rolled, performance-first. Expect devlogs, not polished tutorials, at first. Love2D remains the recommended start; Jai is the deep end I'm exploring publicly.

## Suggested order

1. Finish [[05-First-Game/index|Pong]] + ship a web build
2. Build one original game with the [[06-Starter-Template/index|template]] + [[07-Cookbook/index|cookbook]]
3. *Then* evaluate engines with a real game under your belt — you'll choose wisely
