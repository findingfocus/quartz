---
title: Save and Load
description: Persist high scores and settings between sessions with 15 lines of Lua.
tags:
  - cookbook
  - love2d
---

Love2D gives you a safe folder per game — use it, don't write next to your code.

```lua
local save = { highScore = 0, muted = false }

function loadSave()
  if love.filesystem.getInfo("save.lua") then
    local chunk = love.filesystem.load("save.lua")
    save = chunk and chunk() or save
  end
end

function writeSave()
  local data = string.format(
    "return { highScore = %d, muted = %s }",
    save.highScore, tostring(save.muted)
  )
  love.filesystem.write("save.lua", data)
end

function love.load()
  loadSave()
end

-- call writeSave() when score changes or on quit
function love.quit()
  writeSave()
end
```

Where it lives: `love.filesystem.getSaveDirectory()` — per-OS appdata folder, works on desktop + web (IndexedDB).

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Save lost after reinstall | Expected — save dir is separate from game dir by design |
| Corrupt save crashes game | Wrap `chunk()` in `pcall`; fall back to defaults |
| Web save doesn't persist | Private windows / cleared site data wipe IndexedDB — warn players |
