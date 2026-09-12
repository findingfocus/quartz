---
title: Collision
description: Simple AABB box collision for Pong, platformers, and top-down games — no physics engine needed.
tags:
  - cookbook
  - love2d
---

For 90% of 2D beginner games, "did box A touch box B?" is all you need. That's AABB (axis-aligned bounding box):

```lua
local function overlaps(a, b)
  return a.x < b.x + b.w
     and b.x < a.x + a.w
     and a.y < b.y + b.h
     and b.y < a.y + a.h
end
```

## Example: pick up a coin

```lua
local player = { x = 100, y = 100, w = 32, h = 32 }
local coin = { x = 300, y = 200, w = 16, h = 16, taken = false }

function love.update(dt)
  -- (movement here)
  if not coin.taken and overlaps(player, coin) then
    coin.taken = true
    score = score + 1
  end
end
```

## Example: solid wall (push out)

```lua
-- after moving, resolve: push player out along smallest axis
if overlaps(player, wall) then
  -- came from left
  player.x = wall.x - player.w
end
```

For full platformer resolution (all 4 sides), resolve X first, then Y — two separate checks.

> [!TIP]
> Need slopes, bouncing, or hundreds of bodies? Graduate to a library like `windfield` (see [[08-Tools/index\|Tools]]). Don't start there.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Tunneling at high speed | Move in smaller steps or clamp position on hit; cap `dt` with `dt = math.min(dt, 1/30)` |
| Collision fires every frame | Add a flag (`taken`, `cooldown`) or resolve position so they no longer overlap |
| Nothing collides | `print()` both boxes' x/y/w/h — usually a width/height is 0 or nil |
