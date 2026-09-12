---
title: Your First Game
description: Build Pong start-to-finish in one sitting — paddles, ball, scoring, and win state.
---

One sitting, one file, one playable game. Copy each block into `main.lua` in order — it runs at every step.

## Step 1 — Window + paddles (run this first)

```lua
local leftY, rightY = 250, 250

function love.load()
  love.window.setTitle("Pong")
end

function love.draw()
  love.graphics.rectangle("fill", 20, leftY, 15, 100)
  love.graphics.rectangle("fill", 765, rightY, 15, 100)
end
```

Run with `love .` — two white bars. Win #1.

## Step 2 — Move the left paddle

```lua
function love.update(dt)
  local speed = 400
  if love.keyboard.isDown("w") then leftY = leftY - speed * dt end
  if love.keyboard.isDown("s") then leftY = leftY + speed * dt end
  -- right paddle: simple AI follows ball (added in step 4)
end
```

## Step 3 — Ball that bounces

```lua
local ballX, ballY = 400, 300
local ballDX, ballDY = 300, 200

function love.update(dt)
  -- (keep paddle code from step 2)
  ballX = ballX + ballDX * dt
  ballY = ballY + ballDY * dt
  if ballY < 0 or ballY > 600 then ballDY = -ballDY end
end

function love.draw()
  -- (keep paddle drawing)
  love.graphics.circle("fill", ballX, ballY, 10)
end
```

## Step 4 — Paddle collision + scoring

```lua
local leftScore, rightScore = 0, 0

local function resetBall(dir)
  ballX, ballY = 400, 300
  ballDX = 300 * dir
  ballDY = 200 * (math.random() > 0.5 and 1 or -1)
end

function love.update(dt)
  -- movement + ball motion from above...
  -- simple right-paddle AI
  if ballY > rightY + 50 then rightY = rightY + 350 * dt end
  if ballY < rightY + 50 then rightY = rightY - 350 * dt end

  -- collide with left paddle
  if ballX < 35 and ballY > leftY and ballY < leftY + 100 then
    ballDX = math.abs(ballDX)
    ballX = 35
  end
  -- score
  if ballX < 0 then rightScore = rightScore + 1 resetBall(1) end
  if ballX > 800 then leftScore = leftScore + 1 resetBall(-1) end
end

function love.draw()
  love.graphics.rectangle("fill", 20, leftY, 15, 100)
  love.graphics.rectangle("fill", 765, rightY, 15, 100)
  love.graphics.circle("fill", ballX, ballY, 10)
  love.graphics.print(leftScore .. " : " .. rightScore, 380, 20)
end
```

> [!TIP]
> Two-player mode: replace the AI with `up`/`down` keys for the right paddle. Instant party game.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Ball tunnels through paddle at high speed | Clamp position on hit (`ballX = 35`) like above, or reduce speed |
| Paddle leaves screen | Add `leftY = math.max(0, math.min(500, leftY))` at end of update |
| Everything moves too fast/slow | You forgot `* dt` — search for it |

## You shipped a game loop!

You now know: state, input, movement, collision, scoring, reset. Everything else is variations. Next:

- Clean it up with [[07-Cookbook/Game-States|Game States]] (title → play → win)
- Add sound with [[07-Cookbook/Audio|Audio]]
- Share it with [[09-Distribution/index|Distribution]]
- Or start from the full template: [[06-Starter-Template/index|Starter Template]]
