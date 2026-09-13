---
title: Game States
description: Title, play, pause, and game-over screens without spaghetti code.
---

Beginner games turn into `if playing then ... elseif paused then ...` soup. A tiny state machine fixes it — this is the same pattern in the [[Starter-Template/index|Starter Template]] (`StateMachine.lua`, 61 lines).

## Minimal version (no library)

```lua
local state = "title" -- "title" | "play" | "pause" | "over"

function love.update(dt)
  if state == "play" then
    updateGame(dt)
  end
end

function love.draw()
  local WIDTH, HEIGHT = love.graphics.getDimensions()
  if state == "title" then
    love.graphics.printf("Press ENTER", 0, HEIGHT / 2 - 10, WIDTH, "center")
  elseif state == "play" then
    drawGame()
  elseif state == "pause" then
    drawGame()
    love.graphics.printf("PAUSED", 0, HEIGHT / 2 - 10, WIDTH, "center")
  elseif state == "over" then
    love.graphics.printf(string.format("GAME OVER - press R"), 0, HEIGHT / 2 - 10, WIDTH, "center")
  end
end

function love.keypressed(key)
  if state == "title" and key == "return" then state = "play" end
  if state == "play" and key == "p" then state = "pause" end
  if state == "pause" and key == "p" then state = "play" end
  if state == "over" and key == "r" then resetGame() state = "play" end
end
```

## Template version (one file per state)

Each state gets `enter / update / draw / keypressed`. The machine just forwards calls:

- [[Starter-Template/bttf/states/BaseState|BaseState.lua]] — empty interface
- [[Starter-Template/bttf/states/TitleScreenState|TitleScreenState.lua]] — title
- [[Starter-Template/bttf/states/PlayState|PlayState.lua]] — gameplay
- [[Starter-Template/bttf/StateMachine|StateMachine.lua]] — the switcher

Use the minimal version until you have 3+ states, then graduate.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Input leaks between states (pause menu moves player) | Gate `love.update` per state like above; don't run game logic when paused |
| Stuck on game-over | You forgot to reset score/positions in `resetGame()` before switching to play |
