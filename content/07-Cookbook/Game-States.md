---
title: Game States
description: Title, play, pause, and game-over screens without spaghetti code.
---

Beginner games turn into `if playing then ... elseif paused then ...` soup. A tiny state machine fixes it — this is the same pattern in the [[06-Starter-Template/index|Starter Template]] (`StateMachine.lua`, 61 lines).

## Minimal version (no library)

```lua
local state = "title" -- "title" | "play" | "pause" | "over"

function love.update(dt)
  if state == "play" then
    updateGame(dt)
  end
end

function love.draw()
  if state == "title" then
    love.graphics.print("Press ENTER", 350, 280)
  elseif state == "play" then
    drawGame()
  elseif state == "pause" then
    drawGame()
    love.graphics.print("PAUSED", 370, 280)
  elseif state == "over" then
    love.graphics.print("GAME OVER - press R", 320, 280)
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

- [[06-Starter-Template/bttf/states/BaseState|BaseState.lua]] — empty interface
- [[06-Starter-Template/bttf/states/TitleScreenState|TitleScreenState.lua]] — title
- [[06-Starter-Template/bttf/states/PlayState|PlayState.lua]] — gameplay
- [[06-Starter-Template/bttf/StateMachine|StateMachine.lua]] — the switcher

Use the minimal version until you have 3+ states, then graduate.

## When it breaks

| Symptom | Fix |
| ------- | --- |
| Input leaks between states (pause menu moves player) | Gate `love.update` per state like above; don't run game logic when paused |
| Stuck on game-over | You forgot to reset score/positions in `resetGame()` before switching to play |
