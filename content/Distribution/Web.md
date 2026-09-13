---
title: Web Distribution
description: Compile your Love2D game with love.js and embed it on any site — or right here in Quartz.
---

Share to multiple devices, no install, playtest in seconds.
## Steps

1. **Package**:

   ```bash
   # from your project folder
   zip -9 -r mygame.love . -x "*.git*" "*.gitignore"
   ```
2. **Build** with [love.js](https://github.com/Davidobot/love.js):

   ```bash
   love.js mygame.love mygame -c -t "My Game"
   ```

   Outputs `game.data, game.js, love.js, love.wasm, index.html`.
3. **Test locally:** `cd mygameWeb && python3 -m http.server 8000`
4. **Embed in Quartz** (this site's pattern):

   ```html
   <iframe src="static/games/mygame/index.html"
     style="border:none; aspect-ratio: 16/9;" allowfullscreen></iframe>
   ```

   Drop the build output in `public/static/games/mygame/`.

I automate all of this with a one-command `build.sh` — full script with cleanup, and compatibility mode (`-c`) is documented in [[Web Distribution Script|Web Distribution (full script)]].

## When it breaks

| Symptom                                  | Fix                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| Black screen, console shows memory error | Rebuild with more memory `-m 67108864`                                   |
| Game works locally, not on server        | Serve over HTTP (not `file://`) + check MIME for `.wasm`                 |
| `love.js: command not found`             | Install via npm per love.js README; verify the `~/love.js` folder exists |
