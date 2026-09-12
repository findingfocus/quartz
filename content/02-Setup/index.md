---
title: Setup & Quickstart
description: Install Love2D, open the barebones project, and run your first window in 15 minutes.
tags:
  - hub
  - beginner
  - setup
---

Goal: a window on screen running **your** code. No frameworks, no build step.

## 1. Install Love2D

| OS | Steps |
| -- | ----- |
| **Mac** | Download from [love2d.org](https://love2d.org/), drag `love.app` to Applications |
| **Windows** | Download the installer (64-bit) from [love2d.org](https://love2d.org/), run it |
| **Linux** | `sudo apt install love` (Ubuntu/Debian) or download AppImage from [love2d.org](https://love2d.org/) |

Verify: run `love --version` in a terminal. You should see `LOVE 11.x`.

> [!TIP]
> Why Love2D? It's free, tiny, stable, and ships to Windows/Mac/Linux/Web/Steam from one codebase. I document the alternatives in [[11-Beyond/index\|Beyond Love2D]] if you're curious about Godot or 3D.

## 2. Install an editor

- **Beginner:** [Sublime Text](https://www.sublimetext.com/) + the Love2D package (via Package Control)
- **Minimal:** anything that edits text files
- **What I use:** Neovim + Git (see [[08-Tools/index\|Tools]] for my full setup)

## 3. Clone the barebones project

This is the "instant start" — a runnable folder with distribution scripts included:

```bash
git clone https://github.com/findingfocus/bttf.git my-first-game
cd my-first-game
love .
```

Don't want the full BTTF example yet? Make the smallest possible game instead — create a folder with one file called `main.lua`:

```lua
function love.draw()
  love.graphics.print("Hello, game dev!", 100, 100)
end
```

Then run it:

```bash
love /path/to/your/folder
```

If you see text in a window, you're a game developer. Seriously.

## 4. Project anatomy (memorize this)

```
my-game/
  main.lua    -- your game (love.load / love.update / love.draw)
  conf.lua    -- window title, size, version
  assets/     -- images, sounds, fonts
  build.sh    -- web + desktop packaging scripts
```

Full annotated version with state machine lives in [[06-Starter-Template/index\|Starter Template]].

## When it breaks

| Symptom | Fix |
| ------- | --- |
| `love: command not found` | Close + reopen terminal after install; on Mac, add `/Applications/love.app/Contents/MacOS` to PATH or just drag your folder onto `love.app` |
| Black window, nothing drawn | You need at least `love.draw()` in `main.lua` — Love2D calls it 60x/sec |
| `Error: main.lua not found` | You pointed `love` at the wrong folder — point it at the folder *containing* `main.lua`, not the file itself |


> [!tip] Next step
> Continue with [[03-Lua-Essentials/index|Lua Essentials]] (Path A) or [[04-Love2D-Basics/index|Love2D Basics]] (Path B). Or skip ahead and [[05-First-Game/index|build Pong]].
