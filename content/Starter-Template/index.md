---
title: Starter Template
aliases:
  - 06-starter-template/index
description: Clone a runnable Love2D starter with title, play, and win screens wired and ready to remix.
---

The fastest way to start a game: clone something that already runs, then make it yours.

## Clone and run (2 min)

```bash
git clone https://github.com/findingfocus/love2d-starter.git my-game
cd my-game
love .
```

You get three screens and a loop: title → play → win → play again.

| Action | Key |
| :--- | :--- |
| Start / Play again | `Enter` |
| Win (from play) | `W` |
| Quit | `Esc` |

## Anatomy

```
my-game/
  main.lua         -- Love2D callbacks + state machine wiring (78 lines)
  conf.lua         -- game title + window size (9 lines)
  class.lua        -- tiny OOP helper, read it once
  StateMachine.lua -- title <-> play <-> win switching
  push.lua         -- resolution scaling for any window size
  states/
    BaseState.lua         -- empty interface (6 lines)
    TitleScreenState.lua  -- press enter to start (16 lines)
    PlayState.lua         -- your gameplay goes here (16 lines)
    WinState.lua          -- press enter to replay (16 lines)
```

> [!NOTE]
> `push.lua`, `class.lua`, and `StateMachine.lua` are helpers — you don't need to understand them fully to use them. Read them once, treat them as black boxes, and build in `states/`.

## How to make it yours (10 min)

1. Change the title + window size in `conf.lua`
2. Put your gameplay in `states/PlayState.lua` (`update` moves things, `render` draws them)
3. Reskin `states/TitleScreenState.lua` and `states/WinState.lua`
4. Ship it: [[Distribution/index|Distribution]]

Full guidance lives in the repo's `README.md`.

## Study the full example (BTTF)

The [[Game Demos/BTTF|BTTF]] demo was built on this exact pattern, extended with a speedometer, obstacles, crash audio, and touch zones. Browse it annotated here:

- [[Starter-Template/bttf/main|main.lua]] — the whole wiring
- [[Starter-Template/bttf/StateMachine|StateMachine.lua]]
- [[Starter-Template/bttf/Delorean|Delorean.lua]] — a player entity
- [[Starter-Template/bttf/states/PlayState|PlayState.lua]] — gameplay
- [[Starter-Template/bttf/states/TitleScreenState|TitleScreenState.lua]] — title
- [[Starter-Template/bttf/states/BaseState|BaseState.lua]]
- [[Starter-Template/bttf/class|class.lua]] + [[Starter-Template/bttf/push|push.lua]] — helper libraries, originals linked above

Full file tree + download: [[Starter-Template/bttf/index|BTTF project page]].

## Next

> [!tip] Next step
> Stuck on a mechanic? Grab a recipe from the [[Cookbook/index|Cookbook]] instead of rewriting from scratch.
