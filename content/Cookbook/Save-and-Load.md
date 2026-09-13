---
title: Save and Load
description: Persist high scores and settings between sessions with 15 lines of Lua.
---

Love2D gives you a safe folder per game.

```lua
local save = { highScore = 0, muted = false }

function loadSave()
  if love.filesystem.getInfo("save.lua") then
    local chunk = love.filesystem.load("save.lua")
    local data = chunk and chunk()
    if type(data) == "table" then
      save = data
    end
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
| Corrupt save breaks the game | Delete the save file (find it via `getSaveDirectory`) — the game recreates defaults on next launch |

## Outgrowing this (nested tables)

The `string.format` writer only handles flat settings. Once you save inventories, unlock maps, or anything nested, reach for [bitser](https://github.com/gvx/bitser) — one file, no dependencies, and it even understands classes:

```lua
local bitser = require("bitser")

function writeSave()
  love.filesystem.write("save.dat", bitser.dumps(save))
end

function loadSave()
  local raw = love.filesystem.read("save.dat")
  if raw then
    local result = bitser.loads(raw)
    if type(result) == "table" then
      save = result
    end
  end
end
```

Same shape — just a serializer that speaks full Lua tables.
