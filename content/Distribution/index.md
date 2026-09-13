---
title: Distribution
aliases:
  - 09-distribution/index
description: Ship your Love2D game to web, desktop, and Steam — the exact pipeline I use.
---
 
Sharing is simpler than you think: zip it right, pair it with the Love2D runtime, upload. One afternoon, all platforms.

## The mental model

1. **`.love` file** = your game zipped (rename `.zip` → `.love`)
2. **Desktop** = `.love` + Love2D runtime per OS
3. **Web** = `.love` compiled with `love.js` → playable in browser
4. **Steam** = desktop builds + Steamworks wrapper

```bash
# the universal first step, from your project folder:
zip -9 -r mygame.love . -x "*.git*" "*.gitignore"
```

## Where to go

| Target | Page | Effort |
| ------ | ---- | ------ |
| **Web** — playable in browser, best for sharing | [[Distribution/Web\|Web guide]] | ~30 min first time |
| **Desktop** — Windows, Mac, Linux zips | [[Distribution/Desktop\|Desktop guide]] | ~1 hr for all three |
| **Steam** — store page + depots | [[Distribution/Steam\|Steam guide]] | An afternoon |

> [!TIP]
> Ship web **first**. Link beats download — friends playtest in one click, and every demo in [[Demos/index|Demos]] is a web build for exactly this reason.

Legacy deep-dives (kept for reference): [[Game Distribution/Game Distribution|old overview]], [[Game Distribution/Web Distribution|old web script]].
