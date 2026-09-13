---
title: Your First Game
description: Build Pong start-to-finish in one sitting — paddles, ball, scoring, and win state.
---

One sitting, one playable game. Clone the [[Starter-Template/index|Starter Template]] and open `states/PlayState.lua` — every block below goes there. It runs at every step.

```bash
git clone https://github.com/findingfocus/love2d-starter.git my-game
cd my-game
love .
```

## Step 1 — Window + paddles (run this first)

File: `states/PlayState.lua` — set positions in `enter`, draw paddles in `render`.

```lua
local leftY, rightY = 250, 250

function PlayState:enter()
  leftY, rightY = 250, 250
end

function PlayState:render()
  love.graphics.rectangle("fill", 20, leftY, 15, 100)
  love.graphics.rectangle("fill", 765, rightY, 15, 100)
end
```

Run with `love .` — title screen, press Enter, two white bars. Win #1.

## Step 2 — Move the left paddle

File: `states/PlayState.lua` — add `update`.

```lua
function PlayState:update(dt)
  local speed = 400
  if love.keyboard.isDown("w") then leftY = leftY - speed * dt end
  if love.keyboard.isDown("s") then leftY = leftY + speed * dt end
  -- right paddle: simple AI follows ball (added in step 4)
end
```

## Step 3 — Ball that bounces

File: `states/PlayState.lua` — ball vars at top of file, move in `update`, draw in `render`.

```lua
local ballX, ballY = 400, 300
local ballDX, ballDY = 300, 200

function PlayState:update(dt)
  -- (keep paddle code from step 2)
  ballX = ballX + ballDX * dt
  ballY = ballY + ballDY * dt
  if ballY < 0 or ballY > 600 then ballDY = -ballDY end
end

function PlayState:render()
  -- (keep paddle drawing)
  love.graphics.circle("fill", ballX, ballY, 10)
end
```

## Step 4 — Paddle collision + scoring

File: `states/PlayState.lua` — score vars + `resetBall` at top of file, merge into `update` / `render`.

```lua
local leftScore, rightScore = 0, 0

local function resetBall(dir)
  ballX, ballY = 400, 300
  ballDX = 300 * dir
  ballDY = 200 * (math.random() > 0.5 and 1 or -1)
end

function PlayState:enter()
  leftY, rightY = 250, 250
  leftScore, rightScore = 0, 0
  resetBall(1)
end

function PlayState:update(dt)
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

function PlayState:render()
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

You now know: state, input, movement, collision, scoring, reset. Everything else is variations. And it's already in the right home — `states/PlayState.lua` — so every [[Cookbook/index|Cookbook]] recipe drops straight in. Next:

- Clean it up with [[Cookbook/Game-States|Game States]] (title → play → win)
- Add sound with [[Cookbook/Audio|Audio]]
- Share it with [[Distribution/index|Distribution]]
