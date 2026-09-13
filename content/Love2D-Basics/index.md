---
title: Love2D Basics
description: The game loop, drawing, input, and audio — the four ideas behind every Love2D game.
---

Every Love2D game is the same skeleton. Learn it once, reuse forever:

```lua
function love.load()    -- runs once: load images, set up state
end

function love.update(dt) -- runs 60 times per second: move things, check rules
end

function love.draw()     -- runs 60 times per second: draw everything
end
```
## Config

`conf.lua` sits next to `main.lua`:

```lua
function love.conf(t)
  t.title = "My First Game"
  t.console = true -- enable print to console
  t.window.width = 800
  t.window.height = 600
end
```
## Drawing

Origin `(0,0)` is top-left. `x` goes right, `y` goes down.

```lua
function love.draw()
  love.graphics.rectangle("fill", 100, 100, 50, 50) -- x, y, w, h
  love.graphics.circle("fill", 300, 200, 25)        -- x, y, radius
  love.graphics.print("Score: 10", 10, 10)
end
```

Load images once in `love.load`, draw them in `love.draw`:

```lua
local ship
function love.load()
  ship = love.graphics.newImage("assets/ship.png")
end
function love.draw()
  love.graphics.draw(ship, 100, 100)
end
```

## Input

```lua
function love.update(dt)
  -- held keys (smooth movement)
  if love.keyboard.isDown("left") then player.x = player.x - 300 * dt end
  if love.keyboard.isDown("right") then player.x = player.x + 300 * dt end
end

function love.keypressed(key)
  -- single presses (jump, pause, quit)
  if key == "space" then jump() end
  if key == "escape" then love.event.quit() end
end
```

## Audio (2 lines)

```lua
local music
function love.load()
  music = love.audio.newSource("assets/theme.mp3", "stream")
  love.audio.play(music)
end
```

Short sound effects: use `"static"` instead of `"stream"`. More in [[Cookbook/Audio|Audio recipe]].

## Try it (10 min)

Make a circle follow your arrow keys:

```lua
local x, y = 400, 300
function love.update(dt)
  local speed = 300
  if love.keyboard.isDown("up") then y = y - speed * dt end
  if love.keyboard.isDown("down") then y = y + speed * dt end
  if love.keyboard.isDown("left") then x = x - speed * dt end
  if love.keyboard.isDown("right") then x = x + speed * dt end
end
function love.draw()
  love.graphics.circle("fill", x, y, 25)
end
```


> [!tip] Next step
> Continue with [[First-Game/index|Your First Game]] — turn this into Pong, start to finish.
