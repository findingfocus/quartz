---
title: Steam Distribution
description: From desktop builds to a Steam store page — what changes and what's the same.
---
If your [[Distribution/Desktop|Desktop]] build works, you've got the hardest part done.
## Pipeline

1. **Finish desktop builds** — Windows + Mac + Linux zips, versioned
2. **Pay + create app** — $100 Steam Direct fee, create app ID in Steamworks
3. **Integrate Steamworks** — Love2D can incorporate achievements/cloud saves; optional for v1
4. **Depots + testing** — upload via `steamcmd` or SteamPipe GUI (Tutorial Coming Soon)
5. **Store page** — capsule art, 5 screenshots, 1 trailer (your web build makes a great trailer capture source), description, content survey
6. **Release** — coming-soon page early, launch with your demo link

## Love2D-specific notes

- Keep `.love` inside your depot build exactly like desktop — Steam just delivers files
- Test the Steam overlay with `love.window` fullscreen settings; prefer borderless/resizable over exclusive fullscreen
- Cloud saves: point `love.filesystem` save dir usage at Steam Cloud paths or use luasteam remote storage

> [!NOTE]
> Start with itch.io (free, instant) before Steam. Same zips, zero fee, great for playtesting. Steam when you have a game strangers pay for.

Check out [[Demos/Tashio Tempo|Tashio Tempo]] — web demo + desktop zips + Steam release, same pipeline as above.
