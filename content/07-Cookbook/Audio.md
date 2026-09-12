---
title: Audio
description: Music and sound effects in Love2D without crackles, overlap bugs, or bloat.
---

Two rules: `stream` music, `static` effects. Load once, play many times.

```lua
local sounds = {}

function love.load()
  sounds.music = love.audio.newSource("assets/theme.mp3", "stream")
  sounds.music:setLooping(true)
  sounds.jump = love.audio.newSource("assets/jump.wav", "static")
  love.audio.play(sounds.music)
end

function playJump()
  -- clone for overlap: rapid jumps don't cut each other off
  local s = sounds.jump:clone()
  love.audio.play(s)
end
```

## Volume + toggle

```lua
function love.keypressed(key)
  if key == "m" then
    local v = sounds.music:getVolume()
    sounds.music:setVolume(v > 0 and 0 or 0.8)
  end
end
```

Free sound sources: record with Audacity, generate with [jsfxr](https://sfxr.me/), music from [OpenGameArt](https://opengameart.org/) (check licenses). Full list in [[08-Tools/index\|Tools]].

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Effect cuts off when replayed fast | `:clone()` before playing (above) |
| Music stutters / huge memory | Music must be `"stream"`, effects `"static"` — swapped them? |
