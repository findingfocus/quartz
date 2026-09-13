---
title: Desktop Distribution
aliases:
  - 09-distribution/desktop
description: Package your Love2D game for Windows, Mac, and Linux from one .love file.
---

One `.love` file, three wrappers. Players never install Love2D — you bundle it.

## Common step

```bash
zip -9 -r mygame.love . -x "*.git*" "*.gitignore"
```

## Windows

1. Download the Windows Love2D zip (64-bit) from [love2d.org](https://love2d.org/)
2. Combine: `copy /b love.exe+mygame.love mygame.exe` (or zip `love.exe`, DLLs, + `mygame.love` together)
3. Distribute the folder as `MyGame_win64.zip`

## macOS

1. Download `love.app`
2. Copy it to `MyGame.app`, drop `mygame.love` into `MyGame.app/Contents/Resources/`
3. Zip the `.app`. Note: unsigned apps trigger Gatekeeper — tell players to right-click → Open, or sign with a Developer ID for wide release

## Linux

1. Ship the `.love` + a launcher script, or bundle the AppImage
2. Simplest widely-working option: `MyGame_linux.tar.gz` containing your `.love` + `README` with `apt install love` instruction + `love mygame.love` launcher

> [!TIP]
> Version your filenames (`MyGame_win64-v1.0.zip`) and keep a changelog — exactly like the downloads on every [[Demos/index|demo page]].

## Checklist before upload

- [ ] Tested on a fresh machine (not just yours)
- [ ] Icon + window title set in `conf.lua`
- [ ] `escape` quits cleanly, no console window on Windows release
- [ ] README with controls included in the zip
