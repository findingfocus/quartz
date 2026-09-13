---
title: Movement and Jump
description: Smooth top-down movement and platformer jumping with gravity that feels good.
---

## Top-down (8-way)

```lua
local player = { x = 400, y = 300, speed = 300 }

function love.update(dt)
  local dx, dy = 0, 0
  if love.keyboard.isDown("left", "a") then dx = dx - 1 end
  if love.keyboard.isDown("right", "d") then dx = dx + 1 end
  if love.keyboard.isDown("up", "w") then dy = dy - 1 end
  if love.keyboard.isDown("down", "s") then dy = dy + 1 end
  -- moving diagonally combines two full steps, so shrink the
  -- direction back to length 1 for even speed in every direction
  local length = math.sqrt(dx * dx + dy * dy)
  if length > 0 then
    dx, dy = dx / length, dy / length
  end
  player.x = player.x + dx * player.speed * dt
  player.y = player.y + dy * player.speed * dt
end
```

Why this works: holding right gives the direction (1, 0), whose length is 1. Holding right *and* up gives (1, -1) — and by Pythagoras that arrow is √2 ≈ 1.41 long, so diagonals run 41% faster. Dividing by the length squeezes every direction back to exactly 1. The `* 0.7071` you'll see in other tutorials is the same fix hardcoded (`1 / math.sqrt(2)`) — it only works for 8-way keyboard input, while dividing by the length works for analog sticks too.

## Platformer jump (gravity + ground)

```lua
local player = { x = 100, y = 100, vy = 0, onGround = false }
local gravity = 1800
local jumpPower = -650
local groundY = 500

function love.update(dt)
  local speed = 300
  if love.keyboard.isDown("left") then player.x = player.x - speed * dt end
  if love.keyboard.isDown("right") then player.x = player.x + speed * dt end

  player.vy = player.vy + gravity * dt
  player.y = player.y + player.vy * dt

  if player.y >= groundY then
    player.y = groundY
    player.vy = 0
    player.onGround = true
  end
end

function love.keypressed(key)
  if key == "space" and player.onGround then
    player.vy = jumpPower
    player.onGround = false
  end
end
```

Tune in this order: `gravity` → `jumpPower` → `speed`. Small changes, playtest each.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Floaty jump | Raise gravity, raise jump power together |
| Can double-jump | `onGround` isn't resetting — set false on jump, true only on landing |
| Diagonal faster | The direction wasn't shrunk to length 1 — check the `math.sqrt` step above |
