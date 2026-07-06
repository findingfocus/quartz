Here I will show you how easy it is to package your [[Love2d]] game for distribution for the web.

Download [love.js](https://github.com/Davidobot/love.js)and build your project

```bash
love.js [options] <input> <output>
```

I create a build script to automate the web deployment. Here is a simple version of the build.sh script

```bash
#!/usr/bin/env bash
rm -f tashio.love # Remove previous build if needed
zip -9 -r tashio.love . -x "*.git*" "*.gitignore" # Zip your game into a .love file
mv tashio.love /Users/findingfocus/love.js/ # Send your .love file to the love.js folder
cd /Users/findingfocus/love.js/ # Change directory to love.js
rm -r tashio # Delete old deployment if needed
printf "\n" | love.js tashio.love tashio -c # Run love.js in compatability mode and accept default title
mv tashio.love tashio # Move your .love file into the love.js folder
cd tashio # Change directory to love.js folder
# Move all game data into web deployment folder
mv tashio.love /Users/findingfocus/git/tashio.dev/
mv game.data /Users/findingfocus/git/tashio.dev/
mv game.js /Users/findingfocus/git/tashio.dev/
mv love.js /Users/findingfocus/git/tashio.dev/
mv love.wasm /Users/findingfocus/git/tashio.dev/
```

If you want one command to create the script yourself, you can run this
```bash
cat > build.sh << 'EOF'
#!/usr/bin/env bash
# =============================================
# LÖVE2d Web Build Script
# Lives in same level as your project folders.
# Outputs <ProjectName>Web as a sibling folder,
# =============================================
set -e
# Directory this script lives in (e.g. ~/git)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "======================================"
echo " LÖVE Web Build Script"
echo "======================================"
echo ""
echo "Enter your project name (e.g. tashio):"
read -r PROJECT_NAME
if [ -z "$PROJECT_NAME" ]; then
    echo "Error: Project name cannot be empty!"
    exit 1
fi
LOVE_FILE="${PROJECT_NAME}.love"
PROJECT_DIR="$SCRIPT_DIR/${PROJECT_NAME}"
WEB_DIR="$SCRIPT_DIR/${PROJECT_NAME}Web"
LOVEJS_DIR="$HOME/love.js"
LOVEJS_BUILD_DIR="$LOVEJS_DIR/$PROJECT_NAME"
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Project folder not found at $PROJECT_DIR"
    exit 1
fi
echo ""
echo "--------------------------------------"
echo "[1/5] Verifying setup"
echo "--------------------------------------"
echo "Project name:   $PROJECT_NAME"
echo "Project folder: $PROJECT_DIR"
echo "Web output:     $WEB_DIR"
echo "love.js folder: $LOVEJS_DIR"
if [ ! -d "$LOVEJS_DIR" ]; then
    echo "Error: love.js folder not found at $LOVEJS_DIR"
    exit 1
fi
echo "✓ love.js found"
# Always clean up temp build artifacts, even on failure.
cleanup() {
    rm -f "$LOVEJS_DIR/$LOVE_FILE" 2>/dev/null
    rm -rf "$LOVEJS_BUILD_DIR" 2>/dev/null
}
trap cleanup EXIT
echo ""
echo "--------------------------------------"
echo "[2/5] Preparing output folder"
echo "--------------------------------------"
rm -rf "$WEB_DIR"
mkdir -p "$WEB_DIR"
echo "✓ Cleared and recreated $WEB_DIR"
echo ""
echo "--------------------------------------"
echo "[3/5] Packaging .love file"
echo "--------------------------------------"
cd "$PROJECT_DIR"
rm -f "$LOVE_FILE"
echo "Zipping project contents into $LOVE_FILE..."
zip -9 -r "$LOVE_FILE" . -x "*.git*" "*.gitignore" "*.sh" 2>/dev/null
if [ ! -f "$LOVE_FILE" ]; then
    echo "Error: Failed to create .love file"
    exit 1
fi
echo "✓ Created $LOVE_FILE ($(du -h "$LOVE_FILE" | cut -f1))"
echo ""
echo "--------------------------------------"
echo "[4/5] Building with love.js"
echo "--------------------------------------"
mv "$LOVE_FILE" "$LOVEJS_DIR/"
cd "$LOVEJS_DIR"
rm -rf "$LOVEJS_BUILD_DIR" 2>/dev/null
echo "Running: love.js $LOVE_FILE $PROJECT_NAME -c -t $PROJECT_NAME"
love.js "$LOVE_FILE" "$PROJECT_NAME" -c -t "$PROJECT_NAME"
if [ ! -d "$LOVEJS_BUILD_DIR" ]; then
    echo "Error: love.js build failed"
    exit 1
fi
echo "✓ love.js build complete"
echo ""
echo "--------------------------------------"
echo "[5/5] Moving web files into place"
echo "--------------------------------------"
cd "$LOVEJS_BUILD_DIR"
mv game.data "$WEB_DIR/"
mv game.js "$WEB_DIR/"
mv love.js "$WEB_DIR/"
mv love.wasm "$WEB_DIR/"
mv index.html "$WEB_DIR/"
mv theme "$WEB_DIR/" 2>/dev/null
mv "$LOVEJS_DIR/$LOVE_FILE" "$WEB_DIR/"
echo "✓ Moved game.data, game.js, love.js, love.wasm, index.html, theme, $LOVE_FILE"
cd "$SCRIPT_DIR"
echo ""
echo "======================================"
echo " Build finished successfully!"
echo "======================================"
echo "Your files are ready for web deployment in ${PROJECT_NAME}Web"
EOF
chmod +x build.sh
```

Test the game on web server
```
cd $PROJECT_NAMEWeb
python3 -m http.server 8000
```

Increase Memory if needed
`love.js "$LOVE_FILE" "$PROJECT_NAME" -c -t "$PROJECT_NAME" -m 67108864`