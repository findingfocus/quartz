---
title: Distribution
description: Ship your Love2D game to web, desktop, and Steam — the exact pipeline I use.
---
 
Sharing is simple: zip it right, pair it with the Love2D runtime, upload. In one session you can deploy for all platforms.

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
> Web builds are easy to share, but require touch control implementation if you want mobile support.


