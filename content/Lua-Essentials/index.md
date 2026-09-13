---
title: Lua Essentials
aliases:
  - 03-lua-essentials/index
description: Just enough Lua to make games — variables, tables, functions, and the loop mindset.
---

You don't need all of Lua. You need ~20% of it, used constantly. This page is that 20%. For the full language, the [official Lua docs](https://www.lua.org/manual/5.4/) and [Learn X in Y minutes](https://learnxinyminutes.com/lua/) are excellent — this hub just gives you the game-flavored cut.

## 1. Variables & printing

```lua
local score = 0
local playerName = "Marty"
score = score + 10
print(score) -- shows in console, great for debugging
```

> [!NOTE]
> Use `local` by default. Globals leak between files and cause spooky bugs in bigger games.

## 2. Conditionals & loops

```lua
if score > 100 then
  print("You win!")
end

for i = 1, 3 do
  print("count: " .. i)
end
```

## 3. Functions (your game verbs)

```lua
local function add(a, b)
  return a + b
end

score = add(score, 10)
```

Love2D itself is just functions it calls for you: `love.load` once, `love.update(dt)` every frame, `love.draw()` every frame. See [[Love2D-Basics/index\|Love2D Basics]].

## 4. Tables (arrays + objects in one)

Tables are 90% of Lua. Learn them and everything clicks:

```lua
-- Array-like
local inventory = {"key", "map", "flux-capacitor"}
print(inventory[1]) -- Lua starts at 1!
table.insert(inventory, "skateboard")

-- Object-like
local player = { x = 100, y = 200, speed = 300 }
player.x = player.x + 10

-- Loop over it
for i, item in ipairs(inventory) do
  print(i, item)
end
```

## 5. The `dt` mindset

Games move per-frame, and frames aren't constant. Multiply movement by `dt` (delta time, seconds since last frame):

```lua
-- BAD: speed depends on framerate
player.x = player.x + 5
-- GOOD: 300 pixels per second, every machine
player.x = player.x + 300 * dt
```

## Try it (5 min)

In your `main.lua`, make a square move right at constant speed:

```lua
local x = 0
function love.update(dt)
  x = x + 200 * dt
end
function love.draw()
  love.graphics.rectangle("fill", x, 100, 50, 50)
end
```

Change `200` to `500 * dt` vs `5` with no `dt` and feel the difference.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| `attempt to index nil` | You used a table that doesn't exist yet — `print()` it right before the error line |
| `unexpected symbol near '='` | Missing `local`/`function` keyword or an `end` above |
| Array starts at 0 habit | Lua arrays start at **1**. `myTable[0]` is `nil`. |

## Next

> [!tip] Next step
> Continue with [[Love2D-Basics/index|Love2D Basics]] — the 3 functions that run every game.
