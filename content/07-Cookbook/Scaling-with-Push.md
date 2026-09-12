---
title: Scaling with Push
description: Crisp pixel-art scaling on any window size using the vendored push.lua.
tags:
  - cookbook
  - love2d
---

Your game logic uses a tiny virtual resolution (e.g. 480×270). `push.lua` letterboxes it to any real window. This is how BTTF stays crisp fullscreen.

```lua
push = require("push")

local VIRTUAL_W, VIRTUAL_H = 480, 270
local WINDOW_W, WINDOW_H = 1280, 800

function love.load()
  push:setupScreen(VIRTUAL_W, VIRTUAL_H, WINDOW_W, WINDOW_H, {
    fullscreen = false,
    resizable = true,
    pixelperfect = true,
  })
end

function love.resize(w, h)
  push:resize(w, h)
end

function love.draw()
  push:start()
  -- draw your game in virtual coordinates here
  push:finish()
end
```

Rules: always draw between `start()`/`finish()`, design UI in virtual pixels, set `love.graphics.setDefaultFilter("nearest", "nearest")` in `love.load` for crisp pixels.

Full example: [[06-Starter-Template/bttf/main|main.lua]] + [[06-Starter-Template/bttf/push|push.lua]] in the template.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Blurry pixels | `setDefaultFilter("nearest","nearest")` before loading images |
| Mouse clicks misaligned | Convert with `push:toGame(x, y)` — screen coords ≠ virtual coords |
| Black bars look wrong | Expected — that's letterboxing preserving aspect ratio |
