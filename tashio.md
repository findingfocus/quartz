---
title: "tashio"
tags: [repo, gamedev]
---

## 📁 [tashio](https://github.com/findingfocus/tashio)

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md  (40 lines)
│   │   └── feature_request.md  (19 lines)
│   ├── workflows/
│   │   ├── build-preview.yaml  (54 lines)
│   │   ├── ci.yaml  (83 lines)
│   │   ├── deploy-preview.yaml  (37 lines)
│   │   ├── deploy-v5.yaml  (60 lines)
│   │   └── docker-build-push.yaml  (88 lines)
│   ├── FUNDING.yml  (1 lines)
│   ├── dependabot.yml  (20 lines)
│   └── pull_request_template.md  (31 lines)
├── content/
│   ├── Game Distribution/
│   │   ├── Operating Systems/
│   │   └── Steam/
│   │       └── How to distribute a game via Steam.md  (8 lines)
│   ├── Getting Started/
│   │   └── Game Templates/
│   │       └── Pong Template.md  (8 lines)
│   ├── Love2d/
│   │   ├── Love2d.md  (8 lines)
│   │   └── Lua Programming Language.md  (8 lines)
│   ├── CNAME  (1 lines)
│   ├── index.md  (308 lines)
│   ├── structure.md  (347 lines)
│   └── tashio.md  (344 lines)
├── docs/
│   ├── advanced/
│   │   ├── architecture.md  (149 lines)
│   │   ├── creating components.md  (266 lines)
│   │   ├── index.md  (10 lines)
│   │   ├── making plugins.md  (748 lines)
│   │   └── paths.md  (51 lines)
│   ├── cli/
│   │   ├── build.md  (78 lines)
│   │   ├── create.md  (83 lines)
│   │   ├── index.md  (55 lines)
│   │   ├── plugin.md  (281 lines)
│   │   ├── restore.md  (31 lines)
│   │   ├── sync.md  (74 lines)
│   │   ├── tui.md  (64 lines)
│   │   └── upgrade.md  (48 lines)
│   ├── features/
│   │   ├── Bases.md  (21 lines)
│   │   ├── Canvas.md  (21 lines)
│   │   ├── Citations.md  (31 lines)
│   │   ├── Docker Support.md  (17 lines)
│   │   ├── Latex.md  (81 lines)
│   │   ├── Mermaid diagrams.md  (34 lines)
│   │   ├── Obsidian compatibility.md  (223 lines)
│   │   ├── OxHugo compatibility.md  (48 lines)
│   │   ├── RSS Feed.md  (10 lines)
│   │   ├── Roam Research compatibility.md  (35 lines)
│   │   ├── SPA Routing.md  (13 lines)
│   │   ├── backlinks.md  (17 lines)
│   │   ├── breadcrumbs.md  (54 lines)
│   │   ├── callouts.md  (96 lines)
│   │   ├── comments.md  (182 lines)
│   │   ├── darkmode.md  (25 lines)
│   │   ├── explorer.md  (294 lines)
│   │   ├── folder and tag listings.md  (33 lines)
│   │   ├── full-text search.md  (31 lines)
│   │   ├── graph view.md  (91 lines)
│   │   ├── i18n.md  (18 lines)
│   │   ├── index.md  (48 lines)
│   │   ├── popover previews.md  (17 lines)
│   │   ├── private pages.md  (33 lines)
│   │   ├── reader mode.md  (57 lines)
│   │   ├── recent notes.md  (24 lines)
│   │   ├── social images.md  (19 lines)
│   │   ├── syntax highlighting.md  (143 lines)
│   │   ├── table of contents.md  (18 lines)
│   │   └── wikilinks.md  (26 lines)
│   ├── getting-started/
│   │   ├── authoring-content.md  (49 lines)
│   │   ├── index.md  (34 lines)
│   │   ├── installation.md  (161 lines)
│   │   ├── migrating.md  (228 lines)
│   │   ├── upgrading.md  (40 lines)
│   │   └── whats-new.md  (193 lines)
│   ├── images/
│   │   ├── custom-social-image-preview-dark.png
│   │   ├── custom-social-image-preview-light.png
│   │   ├── dns records.png
│   │   ├── giscus-discussion.png
│   │   ├── giscus-example.png
│   │   ├── giscus-repo.png
│   │   ├── giscus-results.png
│   │   ├── github-init-repo-options.png
│   │   ├── github-quick-setup.png
│   │   ├── quartz transform pipeline.png
│   │   ├── quartz-layout-desktop.png
│   │   ├── quartz-layout-mobile.png
│   │   ├── quartz-layout-tablet.png
│   │   ├── social-image-preview-dark.png
│   │   └── social-image-preview-light.png
│   ├── plugins/
│   │   ├── AliasRedirects.md  (68 lines)
│   │   ├── ArticleTitle.md  (24 lines)
│   │   ├── Assets.md  (21 lines)
│   │   ├── Backlinks.md  (39 lines)
│   │   ├── BasesPage.md  (75 lines)
│   │   ├── Breadcrumbs.md  (45 lines)
│   │   ├── CNAME.md  (28 lines)
│   │   ├── CanvasPage.md  (59 lines)
│   │   ├── Citations.md  (29 lines)
│   │   ├── Comments.md  (58 lines)
│   │   ├── ComponentResources.md  (19 lines)
│   │   ├── ContentIndex.md  (33 lines)
│   │   ├── ContentMeta.md  (39 lines)
│   │   ├── ContentPage.md  (24 lines)
│   │   ├── CrawlLinks.md  (37 lines)
│   │   ├── CreatedModifiedDate.md  (34 lines)
│   │   ├── CustomOgImages.md  (383 lines)
│   │   ├── Darkmode.md  (37 lines)
│   │   ├── Description.md  (30 lines)
│   │   ├── EncryptedPages Demo.md  (28 lines)
│   │   ├── EncryptedPages.md  (129 lines)
│   │   ├── ExplicitPublish.md  (24 lines)
│   │   ├── Explorer.md  (70 lines)
│   │   ├── Favicon.md  (25 lines)
│   │   ├── FolderPage.md  (31 lines)
│   │   ├── Fonts.md  (226 lines)
│   │   ├── Footer.md  (39 lines)
│   │   ├── Frontmatter.md  (111 lines)
│   │   ├── GitHubFlavoredMarkdown.md  (29 lines)
│   │   ├── Graph.md  (83 lines)
│   │   ├── HardLineBreaks.md  (24 lines)
│   │   ├── Latex.md  (30 lines)
│   │   ├── NotFoundPage.md  (19 lines)
│   │   ├── NoteProperties.md  (23 lines)
│   │   ├── ObsidianFlavoredMarkdown.md  (44 lines)
│   │   ├── OxHugoFlavoredMarkdown.md  (35 lines)
│   │   ├── PageTitle.md  (24 lines)
│   │   ├── ReaderMode.md  (38 lines)
│   │   ├── RecentNotes.md  (47 lines)
│   │   ├── RemoveDrafts.md  (24 lines)
│   │   ├── RoamFlavoredMarkdown.md  (34 lines)
│   │   ├── Search.md  (44 lines)
│   │   ├── Spacer.md  (25 lines)
│   │   ├── StackedPages.md  (61 lines)
│   │   ├── Static.md  (22 lines)
│   │   ├── SyntaxHighlighting.md  (31 lines)
│   │   ├── TableOfContents.md  (34 lines)
│   │   ├── TagList.md  (24 lines)
│   │   ├── TagPage.md  (28 lines)
│   │   ├── UnlistedPages.md  (68 lines)
│   │   └── index.md  (146 lines)
│   ├── tags/
│   │   ├── component.md  (5 lines)
│   │   └── plugin.md  (3 lines)
│   ├── Base.base  (135 lines)
│   ├── Canvas.canvas  (321 lines)
│   ├── community.md  (60 lines)
│   ├── configuration.md  (303 lines)
│   ├── hosting.md  (347 lines)
│   ├── index.md  (69 lines)
│   ├── layout-components.md  (194 lines)
│   ├── layout.md  (240 lines)
│   ├── philosophy.md  (47 lines)
│   ├── showcase.md  (23 lines)
│   └── troubleshooting.md  (172 lines)
├── quartz/
│   ├── cli/
│   │   ├── templates/
│   │   │   ├── blog.yaml  (291 lines)
│   │   │   ├── default.yaml  (277 lines)
│   │   │   ├── obsidian.yaml  (302 lines)
│   │   │   └── ttrpg.yaml  (308 lines)
│   │   ├── args.js  (120 lines)
│   │   ├── constants.js  (16 lines)
│   │   ├── handlers.js  (799 lines)
│   │   ├── helpers.js  (109 lines)
│   │   ├── helpers.test.js  (237 lines)
│   │   ├── plugin-data.js  (367 lines)
│   │   └── plugin-git-handlers.js  (1759 lines)
│   ├── components/
│   │   ├── frames/
│   │   │   ├── DefaultFrame.tsx  (61 lines)
│   │   │   ├── FullWidthFrame.tsx  (51 lines)
│   │   │   ├── MinimalFrame.tsx  (23 lines)
│   │   │   ├── index.ts  (52 lines)
│   │   │   ├── registry.ts  (34 lines)
│   │   │   └── types.ts  (43 lines)
│   │   ├── pages/
│   │   │   └── 404.tsx  (54 lines)
│   │   ├── scripts/
│   │   │   ├── popover.inline.ts  (141 lines)
│   │   │   ├── popover.test.ts  (185 lines)
│   │   │   ├── search.test.ts  (163 lines)
│   │   │   ├── spa.inline.ts  (221 lines)
│   │   │   └── util.ts  (46 lines)
│   │   ├── styles/
│   │   │   └── popover.scss  (89 lines)
│   │   ├── Body.tsx  (7 lines)
│   │   ├── ConditionalRender.tsx  (22 lines)
│   │   ├── Date.tsx  (30 lines)
│   │   ├── DesktopOnly.tsx  (18 lines)
│   │   ├── Flex.tsx  (59 lines)
│   │   ├── Head.tsx  (114 lines)
│   │   ├── Header.tsx  (22 lines)
│   │   ├── MobileOnly.tsx  (18 lines)
│   │   ├── PageList.tsx  (114 lines)
│   │   ├── Spacer.tsx  (8 lines)
│   │   ├── external.ts  (23 lines)
│   │   ├── index.ts  (14 lines)
│   │   ├── registry.ts  (132 lines)
│   │   ├── renderPage.test.ts  (327 lines)
│   │   ├── renderPage.tsx  (376 lines)
│   │   └── types.ts  (30 lines)
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── ar-SA.ts  (93 lines)
│   │   │   ├── ca-ES.ts  (87 lines)
│   │   │   ├── cs-CZ.ts  (87 lines)
│   │   │   ├── de-DE.ts  (87 lines)
│   │   │   ├── definition.ts  (88 lines)
│   │   │   ├── en-GB.ts  (87 lines)
│   │   │   ├── en-US.ts  (87 lines)
│   │   │   ├── es-ES.ts  (87 lines)
│   │   │   ├── fa-IR.ts  (88 lines)
│   │   │   ├── fi-FI.ts  (87 lines)
│   │   │   ├── fr-FR.ts  (87 lines)
│   │   │   ├── he-IL.ts  (88 lines)
│   │   │   ├── hu-HU.ts  (85 lines)
│   │   │   ├── id-ID.ts  (87 lines)
│   │   │   ├── it-IT.ts  (89 lines)
│   │   │   ├── ja-JP.ts  (85 lines)
│   │   │   ├── kk-KZ.ts  (87 lines)
│   │   │   ├── ko-KR.ts  (85 lines)
│   │   │   ├── lt-LT.ts  (107 lines)
│   │   │   ├── nb-NO.ts  (87 lines)
│   │   │   ├── nl-NL.ts  (89 lines)
│   │   │   ├── pl-PL.ts  (87 lines)
│   │   │   ├── pt-BR.ts  (87 lines)
│   │   │   ├── ro-RO.ts  (88 lines)
│   │   │   ├── ru-RU.ts  (99 lines)
│   │   │   ├── th-TH.ts  (85 lines)
│   │   │   ├── tr-TR.ts  (87 lines)
│   │   │   ├── uk-UA.ts  (87 lines)
│   │   │   ├── vi-VN.ts  (85 lines)
│   │   │   ├── zh-CN.ts  (85 lines)
│   │   │   └── zh-TW.ts  (85 lines)
│   │   └── index.ts  (90 lines)
│   ├── plugins/
│   │   ├── emitters/
│   │   │   ├── assets.ts  (69 lines)
│   │   │   ├── componentResources.ts  (525 lines)
│   │   │   ├── helpers.ts  (20 lines)
│   │   │   ├── index.ts  (3 lines)
│   │   │   └── static.ts  (23 lines)
│   │   ├── filters/
│   │   │   ├── RSSFilter.ts  (9 lines)
│   │   │   └── index.ts  (1 lines)
│   │   ├── loader/
│   │   │   ├── componentLoader.ts  (71 lines)
│   │   │   ├── conditions.ts  (33 lines)
│   │   │   ├── config-loader.ts  (943 lines)
│   │   │   ├── frameLoader.ts  (47 lines)
│   │   │   ├── gitLoader.ts  (1077 lines)
│   │   │   ├── index.ts  (499 lines)
│   │   │   ├── install-plugins.ts  (30 lines)
│   │   │   ├── loader.ts  (4 lines)
│   │   │   └── types.ts  (193 lines)
│   │   ├── pageTypes/
│   │   │   ├── 404.ts  (33 lines)
│   │   │   ├── dispatcher.ts  (339 lines)
│   │   │   ├── index.ts  (3 lines)
│   │   │   └── matchers.ts  (39 lines)
│   │   ├── transformers/
│   │   │   └── index.ts  (1 lines)
│   │   ├── config.ts  (51 lines)
│   │   ├── index.ts  (50 lines)
│   │   ├── quartz-plugins.schema.json  (345 lines)
│   │   ├── types.ts  (140 lines)
│   │   └── vfile.ts  (14 lines)
│   ├── processors/
│   │   ├── emit.ts  (100 lines)
│   │   ├── filter.ts  (24 lines)
│   │   └── parse.ts  (221 lines)
│   ├── static/
│   │   ├── giscus/
│   │   │   ├── dark.css  (99 lines)
│   │   │   └── light.css  (99 lines)
│   │   ├── apple-touch-icon-precomposed.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.ico
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── icon.svg
│   │   └── og-image.png
│   ├── styles/
│   │   ├── base.scss  (683 lines)
│   │   ├── callouts.scss  (187 lines)
│   │   ├── custom.scss  (14 lines)
│   │   ├── syntax.scss  (17 lines)
│   │   └── variables.scss  (58 lines)
│   ├── util/
│   │   ├── clone.ts  (3 lines)
│   │   ├── ctx.ts  (65 lines)
│   │   ├── emoji.ts  (47 lines)
│   │   ├── emojimap.json
│   │   ├── escape.ts  (1 lines)
│   │   ├── fileTrie.test.ts  (473 lines)
│   │   ├── fileTrie.ts  (175 lines)
│   │   ├── glob.ts  (22 lines)
│   │   ├── jsx.tsx  (38 lines)
│   │   ├── lang.ts  (1 lines)
│   │   ├── log.ts  (58 lines)
│   │   ├── path.test.ts  (394 lines)
│   │   ├── path.ts  (52 lines)
│   │   ├── perf.ts  (19 lines)
│   │   ├── random.ts  (3 lines)
│   │   ├── resources.tsx  (82 lines)
│   │   ├── slugCollisions.test.ts  (145 lines)
│   │   ├── slugCollisions.ts  (84 lines)
│   │   ├── sourcemap.ts  (18 lines)
│   │   ├── theme.ts  (351 lines)
│   │   └── trace.ts  (43 lines)
│   ├── bootstrap-cli.mjs  (284 lines)
│   ├── bootstrap-worker.mjs  (8 lines)
│   ├── build.ts  (369 lines)
│   ├── cfg.ts  (106 lines)
│   └── worker.ts  (37 lines)
├── .gitattributes  (1 lines)
├── .node-version  (1 lines)
├── .npmrc  (1 lines)
├── .prettierignore  (3 lines)
├── .prettierrc  (21 lines)
├── CODE_OF_CONDUCT.md  (90 lines)
├── Dockerfile  (13 lines)
├── LICENSE.txt  (21 lines)
├── README.md  (17 lines)
├── globals.d.ts  (17 lines)
├── index.d.ts  (16 lines)
├── package-lock.json  (6075 lines)
├── package.json  (90 lines)
├── patch-rss.sh  (1 lines)
├── quartz.config.default.yaml  (280 lines)
├── quartz.config.yaml  (275 lines)
├── quartz.lock.json  (269 lines)
├── quartz.ts  (7 lines)
└── tsconfig.json  (28 lines)
```

## Files


**`.github/ISSUE_TEMPLATE/`**
- [`bug_report.md`](https://github.com/findingfocus/tashio/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) — *40 lines*
- [`feature_request.md`](https://github.com/findingfocus/tashio/blob/main/.github/ISSUE_TEMPLATE/feature_request.md) — *19 lines*

**`.github/workflows/`**
- [`build-preview.yaml`](https://github.com/findingfocus/tashio/blob/main/.github/workflows/build-preview.yaml) — *54 lines*
- [`ci.yaml`](https://github.com/findingfocus/tashio/blob/main/.github/workflows/ci.yaml) — *83 lines*
- [`deploy-preview.yaml`](https://github.com/findingfocus/tashio/blob/main/.github/workflows/deploy-preview.yaml) — *37 lines*
- [`deploy-v5.yaml`](https://github.com/findingfocus/tashio/blob/main/.github/workflows/deploy-v5.yaml) — *60 lines*
- [`docker-build-push.yaml`](https://github.com/findingfocus/tashio/blob/main/.github/workflows/docker-build-push.yaml) — *88 lines*

**`.github/`**
- [`FUNDING.yml`](https://github.com/findingfocus/tashio/blob/main/.github/FUNDING.yml) — *1 lines*
- [`dependabot.yml`](https://github.com/findingfocus/tashio/blob/main/.github/dependabot.yml) — *20 lines*
- [`pull_request_template.md`](https://github.com/findingfocus/tashio/blob/main/.github/pull_request_template.md) — *31 lines*

**`content/Game Distribution/Steam/`**
- [`How to distribute a game via Steam.md`](https://github.com/findingfocus/tashio/blob/main/content/Game Distribution/Steam/How to distribute a game via Steam.md) — *8 lines*

**`content/Getting Started/Game Templates/`**
- [`Pong Template.md`](https://github.com/findingfocus/tashio/blob/main/content/Getting Started/Game Templates/Pong Template.md) — *8 lines*

**`content/Love2d/`**
- [`Love2d.md`](https://github.com/findingfocus/tashio/blob/main/content/Love2d/Love2d.md) — *8 lines*
- [`Lua Programming Language.md`](https://github.com/findingfocus/tashio/blob/main/content/Love2d/Lua Programming Language.md) — *8 lines*

**`content/`**
- [`CNAME`](https://github.com/findingfocus/tashio/blob/main/content/CNAME) — *1 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/content/index.md) — *308 lines*
- [`structure.md`](https://github.com/findingfocus/tashio/blob/main/content/structure.md) — *347 lines*
- [`tashio.md`](https://github.com/findingfocus/tashio/blob/main/content/tashio.md) — *344 lines*

**`docs/advanced/`**
- [`architecture.md`](https://github.com/findingfocus/tashio/blob/main/docs/advanced/architecture.md) — *149 lines*
- [`creating components.md`](https://github.com/findingfocus/tashio/blob/main/docs/advanced/creating components.md) — *266 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/advanced/index.md) — *10 lines*
- [`making plugins.md`](https://github.com/findingfocus/tashio/blob/main/docs/advanced/making plugins.md) — *748 lines*
- [`paths.md`](https://github.com/findingfocus/tashio/blob/main/docs/advanced/paths.md) — *51 lines*

**`docs/cli/`**
- [`build.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/build.md) — *78 lines*
- [`create.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/create.md) — *83 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/index.md) — *55 lines*
- [`plugin.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/plugin.md) — *281 lines*
- [`restore.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/restore.md) — *31 lines*
- [`sync.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/sync.md) — *74 lines*
- [`tui.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/tui.md) — *64 lines*
- [`upgrade.md`](https://github.com/findingfocus/tashio/blob/main/docs/cli/upgrade.md) — *48 lines*

**`docs/features/`**
- [`Bases.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Bases.md) — *21 lines*
- [`Canvas.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Canvas.md) — *21 lines*
- [`Citations.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Citations.md) — *31 lines*
- [`Docker Support.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Docker Support.md) — *17 lines*
- [`Latex.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Latex.md) — *81 lines*
- [`Mermaid diagrams.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Mermaid diagrams.md) — *34 lines*
- [`Obsidian compatibility.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Obsidian compatibility.md) — *223 lines*
- [`OxHugo compatibility.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/OxHugo compatibility.md) — *48 lines*
- [`RSS Feed.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/RSS Feed.md) — *10 lines*
- [`Roam Research compatibility.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/Roam Research compatibility.md) — *35 lines*
- [`SPA Routing.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/SPA Routing.md) — *13 lines*
- [`backlinks.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/backlinks.md) — *17 lines*
- [`breadcrumbs.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/breadcrumbs.md) — *54 lines*
- [`callouts.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/callouts.md) — *96 lines*
- [`comments.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/comments.md) — *182 lines*
- [`darkmode.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/darkmode.md) — *25 lines*
- [`explorer.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/explorer.md) — *294 lines*
- [`folder and tag listings.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/folder and tag listings.md) — *33 lines*
- [`full-text search.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/full-text search.md) — *31 lines*
- [`graph view.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/graph view.md) — *91 lines*
- [`i18n.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/i18n.md) — *18 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/index.md) — *48 lines*
- [`popover previews.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/popover previews.md) — *17 lines*
- [`private pages.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/private pages.md) — *33 lines*
- [`reader mode.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/reader mode.md) — *57 lines*
- [`recent notes.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/recent notes.md) — *24 lines*
- [`social images.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/social images.md) — *19 lines*
- [`syntax highlighting.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/syntax highlighting.md) — *143 lines*
- [`table of contents.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/table of contents.md) — *18 lines*
- [`wikilinks.md`](https://github.com/findingfocus/tashio/blob/main/docs/features/wikilinks.md) — *26 lines*

**`docs/getting-started/`**
- [`authoring-content.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/authoring-content.md) — *49 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/index.md) — *34 lines*
- [`installation.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/installation.md) — *161 lines*
- [`migrating.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/migrating.md) — *228 lines*
- [`upgrading.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/upgrading.md) — *40 lines*
- [`whats-new.md`](https://github.com/findingfocus/tashio/blob/main/docs/getting-started/whats-new.md) — *193 lines*

**`docs/images/`**
- [`custom-social-image-preview-dark.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/custom-social-image-preview-dark.png)
- [`custom-social-image-preview-light.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/custom-social-image-preview-light.png)
- [`dns records.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/dns records.png)
- [`giscus-discussion.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/giscus-discussion.png)
- [`giscus-example.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/giscus-example.png)
- [`giscus-repo.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/giscus-repo.png)
- [`giscus-results.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/giscus-results.png)
- [`github-init-repo-options.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/github-init-repo-options.png)
- [`github-quick-setup.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/github-quick-setup.png)
- [`quartz transform pipeline.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/quartz transform pipeline.png)
- [`quartz-layout-desktop.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/quartz-layout-desktop.png)
- [`quartz-layout-mobile.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/quartz-layout-mobile.png)
- [`quartz-layout-tablet.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/quartz-layout-tablet.png)
- [`social-image-preview-dark.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/social-image-preview-dark.png)
- [`social-image-preview-light.png`](https://github.com/findingfocus/tashio/blob/main/docs/images/social-image-preview-light.png)

**`docs/plugins/`**
- [`AliasRedirects.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/AliasRedirects.md) — *68 lines*
- [`ArticleTitle.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ArticleTitle.md) — *24 lines*
- [`Assets.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Assets.md) — *21 lines*
- [`Backlinks.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Backlinks.md) — *39 lines*
- [`BasesPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/BasesPage.md) — *75 lines*
- [`Breadcrumbs.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Breadcrumbs.md) — *45 lines*
- [`CNAME.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/CNAME.md) — *28 lines*
- [`CanvasPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/CanvasPage.md) — *59 lines*
- [`Citations.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Citations.md) — *29 lines*
- [`Comments.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Comments.md) — *58 lines*
- [`ComponentResources.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ComponentResources.md) — *19 lines*
- [`ContentIndex.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ContentIndex.md) — *33 lines*
- [`ContentMeta.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ContentMeta.md) — *39 lines*
- [`ContentPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ContentPage.md) — *24 lines*
- [`CrawlLinks.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/CrawlLinks.md) — *37 lines*
- [`CreatedModifiedDate.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/CreatedModifiedDate.md) — *34 lines*
- [`CustomOgImages.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/CustomOgImages.md) — *383 lines*
- [`Darkmode.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Darkmode.md) — *37 lines*
- [`Description.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Description.md) — *30 lines*
- [`EncryptedPages Demo.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/EncryptedPages Demo.md) — *28 lines*
- [`EncryptedPages.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/EncryptedPages.md) — *129 lines*
- [`ExplicitPublish.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ExplicitPublish.md) — *24 lines*
- [`Explorer.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Explorer.md) — *70 lines*
- [`Favicon.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Favicon.md) — *25 lines*
- [`FolderPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/FolderPage.md) — *31 lines*
- [`Fonts.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Fonts.md) — *226 lines*
- [`Footer.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Footer.md) — *39 lines*
- [`Frontmatter.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Frontmatter.md) — *111 lines*
- [`GitHubFlavoredMarkdown.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/GitHubFlavoredMarkdown.md) — *29 lines*
- [`Graph.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Graph.md) — *83 lines*
- [`HardLineBreaks.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/HardLineBreaks.md) — *24 lines*
- [`Latex.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Latex.md) — *30 lines*
- [`NotFoundPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/NotFoundPage.md) — *19 lines*
- [`NoteProperties.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/NoteProperties.md) — *23 lines*
- [`ObsidianFlavoredMarkdown.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ObsidianFlavoredMarkdown.md) — *44 lines*
- [`OxHugoFlavoredMarkdown.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/OxHugoFlavoredMarkdown.md) — *35 lines*
- [`PageTitle.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/PageTitle.md) — *24 lines*
- [`ReaderMode.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/ReaderMode.md) — *38 lines*
- [`RecentNotes.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/RecentNotes.md) — *47 lines*
- [`RemoveDrafts.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/RemoveDrafts.md) — *24 lines*
- [`RoamFlavoredMarkdown.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/RoamFlavoredMarkdown.md) — *34 lines*
- [`Search.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Search.md) — *44 lines*
- [`Spacer.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Spacer.md) — *25 lines*
- [`StackedPages.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/StackedPages.md) — *61 lines*
- [`Static.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/Static.md) — *22 lines*
- [`SyntaxHighlighting.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/SyntaxHighlighting.md) — *31 lines*
- [`TableOfContents.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/TableOfContents.md) — *34 lines*
- [`TagList.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/TagList.md) — *24 lines*
- [`TagPage.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/TagPage.md) — *28 lines*
- [`UnlistedPages.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/UnlistedPages.md) — *68 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/plugins/index.md) — *146 lines*

**`docs/tags/`**
- [`component.md`](https://github.com/findingfocus/tashio/blob/main/docs/tags/component.md) — *5 lines*
- [`plugin.md`](https://github.com/findingfocus/tashio/blob/main/docs/tags/plugin.md) — *3 lines*

**`docs/`**
- [`Base.base`](https://github.com/findingfocus/tashio/blob/main/docs/Base.base) — *135 lines*
- [`Canvas.canvas`](https://github.com/findingfocus/tashio/blob/main/docs/Canvas.canvas) — *321 lines*
- [`community.md`](https://github.com/findingfocus/tashio/blob/main/docs/community.md) — *60 lines*
- [`configuration.md`](https://github.com/findingfocus/tashio/blob/main/docs/configuration.md) — *303 lines*
- [`hosting.md`](https://github.com/findingfocus/tashio/blob/main/docs/hosting.md) — *347 lines*
- [`index.md`](https://github.com/findingfocus/tashio/blob/main/docs/index.md) — *69 lines*
- [`layout-components.md`](https://github.com/findingfocus/tashio/blob/main/docs/layout-components.md) — *194 lines*
- [`layout.md`](https://github.com/findingfocus/tashio/blob/main/docs/layout.md) — *240 lines*
- [`philosophy.md`](https://github.com/findingfocus/tashio/blob/main/docs/philosophy.md) — *47 lines*
- [`showcase.md`](https://github.com/findingfocus/tashio/blob/main/docs/showcase.md) — *23 lines*
- [`troubleshooting.md`](https://github.com/findingfocus/tashio/blob/main/docs/troubleshooting.md) — *172 lines*

**`quartz/cli/templates/`**
- [`blog.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/templates/blog.yaml) — *291 lines*
- [`default.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/templates/default.yaml) — *277 lines*
- [`obsidian.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/templates/obsidian.yaml) — *302 lines*
- [`ttrpg.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/templates/ttrpg.yaml) — *308 lines*

**`quartz/cli/`**
- [`args.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/args.js) — *120 lines*
- [`constants.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/constants.js) — *16 lines*
- [`handlers.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/handlers.js) — *799 lines*
- [`helpers.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/helpers.js) — *109 lines*
- [`helpers.test.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/helpers.test.js) — *237 lines*
- [`plugin-data.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/plugin-data.js) — *367 lines*
- [`plugin-git-handlers.js`](https://github.com/findingfocus/tashio/blob/main/quartz/cli/plugin-git-handlers.js) — *1759 lines*

**`quartz/components/frames/`**
- [`DefaultFrame.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/DefaultFrame.tsx) — *61 lines*
- [`FullWidthFrame.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/FullWidthFrame.tsx) — *51 lines*
- [`MinimalFrame.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/MinimalFrame.tsx) — *23 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/index.ts) — *52 lines*
- [`registry.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/registry.ts) — *34 lines*
- [`types.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/frames/types.ts) — *43 lines*

**`quartz/components/pages/`**
- [`404.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/pages/404.tsx) — *54 lines*

**`quartz/components/scripts/`**
- [`popover.inline.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/scripts/popover.inline.ts) — *141 lines*
- [`popover.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/scripts/popover.test.ts) — *185 lines*
- [`search.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/scripts/search.test.ts) — *163 lines*
- [`spa.inline.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/scripts/spa.inline.ts) — *221 lines*
- [`util.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/scripts/util.ts) — *46 lines*

**`quartz/components/styles/`**
- [`popover.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/components/styles/popover.scss) — *89 lines*

**`quartz/components/`**
- [`Body.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Body.tsx) — *7 lines*
- [`ConditionalRender.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/ConditionalRender.tsx) — *22 lines*
- [`Date.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Date.tsx) — *30 lines*
- [`DesktopOnly.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/DesktopOnly.tsx) — *18 lines*
- [`Flex.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Flex.tsx) — *59 lines*
- [`Head.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Head.tsx) — *114 lines*
- [`Header.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Header.tsx) — *22 lines*
- [`MobileOnly.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/MobileOnly.tsx) — *18 lines*
- [`PageList.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/PageList.tsx) — *114 lines*
- [`Spacer.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/Spacer.tsx) — *8 lines*
- [`external.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/external.ts) — *23 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/index.ts) — *14 lines*
- [`registry.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/registry.ts) — *132 lines*
- [`renderPage.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/renderPage.test.ts) — *327 lines*
- [`renderPage.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/components/renderPage.tsx) — *376 lines*
- [`types.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/components/types.ts) — *30 lines*

**`quartz/i18n/locales/`**
- [`ar-SA.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ar-SA.ts) — *93 lines*
- [`ca-ES.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ca-ES.ts) — *87 lines*
- [`cs-CZ.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/cs-CZ.ts) — *87 lines*
- [`de-DE.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/de-DE.ts) — *87 lines*
- [`definition.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/definition.ts) — *88 lines*
- [`en-GB.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/en-GB.ts) — *87 lines*
- [`en-US.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/en-US.ts) — *87 lines*
- [`es-ES.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/es-ES.ts) — *87 lines*
- [`fa-IR.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/fa-IR.ts) — *88 lines*
- [`fi-FI.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/fi-FI.ts) — *87 lines*
- [`fr-FR.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/fr-FR.ts) — *87 lines*
- [`he-IL.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/he-IL.ts) — *88 lines*
- [`hu-HU.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/hu-HU.ts) — *85 lines*
- [`id-ID.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/id-ID.ts) — *87 lines*
- [`it-IT.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/it-IT.ts) — *89 lines*
- [`ja-JP.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ja-JP.ts) — *85 lines*
- [`kk-KZ.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/kk-KZ.ts) — *87 lines*
- [`ko-KR.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ko-KR.ts) — *85 lines*
- [`lt-LT.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/lt-LT.ts) — *107 lines*
- [`nb-NO.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/nb-NO.ts) — *87 lines*
- [`nl-NL.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/nl-NL.ts) — *89 lines*
- [`pl-PL.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/pl-PL.ts) — *87 lines*
- [`pt-BR.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/pt-BR.ts) — *87 lines*
- [`ro-RO.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ro-RO.ts) — *88 lines*
- [`ru-RU.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/ru-RU.ts) — *99 lines*
- [`th-TH.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/th-TH.ts) — *85 lines*
- [`tr-TR.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/tr-TR.ts) — *87 lines*
- [`uk-UA.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/uk-UA.ts) — *87 lines*
- [`vi-VN.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/vi-VN.ts) — *85 lines*
- [`zh-CN.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/zh-CN.ts) — *85 lines*
- [`zh-TW.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/locales/zh-TW.ts) — *85 lines*

**`quartz/i18n/`**
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/i18n/index.ts) — *90 lines*

**`quartz/plugins/emitters/`**
- [`assets.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/emitters/assets.ts) — *69 lines*
- [`componentResources.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/emitters/componentResources.ts) — *525 lines*
- [`helpers.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/emitters/helpers.ts) — *20 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/emitters/index.ts) — *3 lines*
- [`static.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/emitters/static.ts) — *23 lines*

**`quartz/plugins/filters/`**
- [`RSSFilter.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/filters/RSSFilter.ts) — *9 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/filters/index.ts) — *1 lines*

**`quartz/plugins/loader/`**
- [`componentLoader.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/componentLoader.ts) — *71 lines*
- [`conditions.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/conditions.ts) — *33 lines*
- [`config-loader.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/config-loader.ts) — *943 lines*
- [`frameLoader.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/frameLoader.ts) — *47 lines*
- [`gitLoader.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/gitLoader.ts) — *1077 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/index.ts) — *499 lines*
- [`install-plugins.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/install-plugins.ts) — *30 lines*
- [`loader.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/loader.ts) — *4 lines*
- [`types.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/loader/types.ts) — *193 lines*

**`quartz/plugins/pageTypes/`**
- [`404.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/pageTypes/404.ts) — *33 lines*
- [`dispatcher.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/pageTypes/dispatcher.ts) — *339 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/pageTypes/index.ts) — *3 lines*
- [`matchers.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/pageTypes/matchers.ts) — *39 lines*

**`quartz/plugins/transformers/`**
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/transformers/index.ts) — *1 lines*

**`quartz/plugins/`**
- [`config.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/config.ts) — *51 lines*
- [`index.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/index.ts) — *50 lines*
- [`quartz-plugins.schema.json`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/quartz-plugins.schema.json) — *345 lines*
- [`types.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/types.ts) — *140 lines*
- [`vfile.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/plugins/vfile.ts) — *14 lines*

**`quartz/processors/`**
- [`emit.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/processors/emit.ts) — *100 lines*
- [`filter.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/processors/filter.ts) — *24 lines*
- [`parse.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/processors/parse.ts) — *221 lines*

**`quartz/static/giscus/`**
- [`dark.css`](https://github.com/findingfocus/tashio/blob/main/quartz/static/giscus/dark.css) — *99 lines*
- [`light.css`](https://github.com/findingfocus/tashio/blob/main/quartz/static/giscus/light.css) — *99 lines*

**`quartz/static/`**
- [`apple-touch-icon-precomposed.png`](https://github.com/findingfocus/tashio/blob/main/quartz/static/apple-touch-icon-precomposed.png)
- [`apple-touch-icon.png`](https://github.com/findingfocus/tashio/blob/main/quartz/static/apple-touch-icon.png)
- [`favicon.ico`](https://github.com/findingfocus/tashio/blob/main/quartz/static/favicon.ico)
- [`favicon.png`](https://github.com/findingfocus/tashio/blob/main/quartz/static/favicon.png)
- [`icon.png`](https://github.com/findingfocus/tashio/blob/main/quartz/static/icon.png)
- [`icon.svg`](https://github.com/findingfocus/tashio/blob/main/quartz/static/icon.svg)
- [`og-image.png`](https://github.com/findingfocus/tashio/blob/main/quartz/static/og-image.png)

**`quartz/styles/`**
- [`base.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/styles/base.scss) — *683 lines*
- [`callouts.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/styles/callouts.scss) — *187 lines*
- [`custom.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/styles/custom.scss) — *14 lines*
- [`syntax.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/styles/syntax.scss) — *17 lines*
- [`variables.scss`](https://github.com/findingfocus/tashio/blob/main/quartz/styles/variables.scss) — *58 lines*

**`quartz/util/`**
- [`clone.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/clone.ts) — *3 lines*
- [`ctx.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/ctx.ts) — *65 lines*
- [`emoji.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/emoji.ts) — *47 lines*
- [`emojimap.json`](https://github.com/findingfocus/tashio/blob/main/quartz/util/emojimap.json)
- [`escape.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/escape.ts) — *1 lines*
- [`fileTrie.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/fileTrie.test.ts) — *473 lines*
- [`fileTrie.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/fileTrie.ts) — *175 lines*
- [`glob.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/glob.ts) — *22 lines*
- [`jsx.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/util/jsx.tsx) — *38 lines*
- [`lang.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/lang.ts) — *1 lines*
- [`log.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/log.ts) — *58 lines*
- [`path.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/path.test.ts) — *394 lines*
- [`path.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/path.ts) — *52 lines*
- [`perf.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/perf.ts) — *19 lines*
- [`random.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/random.ts) — *3 lines*
- [`resources.tsx`](https://github.com/findingfocus/tashio/blob/main/quartz/util/resources.tsx) — *82 lines*
- [`slugCollisions.test.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/slugCollisions.test.ts) — *145 lines*
- [`slugCollisions.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/slugCollisions.ts) — *84 lines*
- [`sourcemap.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/sourcemap.ts) — *18 lines*
- [`theme.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/theme.ts) — *351 lines*
- [`trace.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/util/trace.ts) — *43 lines*

**`quartz/`**
- [`bootstrap-cli.mjs`](https://github.com/findingfocus/tashio/blob/main/quartz/bootstrap-cli.mjs) — *284 lines*
- [`bootstrap-worker.mjs`](https://github.com/findingfocus/tashio/blob/main/quartz/bootstrap-worker.mjs) — *8 lines*
- [`build.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/build.ts) — *369 lines*
- [`cfg.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/cfg.ts) — *106 lines*
- [`worker.ts`](https://github.com/findingfocus/tashio/blob/main/quartz/worker.ts) — *37 lines*
- [`.gitattributes`](https://github.com/findingfocus/tashio/blob/main/.gitattributes) — *1 lines*
- [`.node-version`](https://github.com/findingfocus/tashio/blob/main/.node-version) — *1 lines*
- [`.npmrc`](https://github.com/findingfocus/tashio/blob/main/.npmrc) — *1 lines*
- [`.prettierignore`](https://github.com/findingfocus/tashio/blob/main/.prettierignore) — *3 lines*
- [`.prettierrc`](https://github.com/findingfocus/tashio/blob/main/.prettierrc) — *21 lines*
- [`CODE_OF_CONDUCT.md`](https://github.com/findingfocus/tashio/blob/main/CODE_OF_CONDUCT.md) — *90 lines*
- [`Dockerfile`](https://github.com/findingfocus/tashio/blob/main/Dockerfile) — *13 lines*
- [`LICENSE.txt`](https://github.com/findingfocus/tashio/blob/main/LICENSE.txt) — *21 lines*
- [`README.md`](https://github.com/findingfocus/tashio/blob/main/README.md) — *17 lines*
- [`globals.d.ts`](https://github.com/findingfocus/tashio/blob/main/globals.d.ts) — *17 lines*
- [`index.d.ts`](https://github.com/findingfocus/tashio/blob/main/index.d.ts) — *16 lines*
- [`package-lock.json`](https://github.com/findingfocus/tashio/blob/main/package-lock.json) — *6075 lines*
- [`package.json`](https://github.com/findingfocus/tashio/blob/main/package.json) — *90 lines*
- [`patch-rss.sh`](https://github.com/findingfocus/tashio/blob/main/patch-rss.sh) — *1 lines*
- [`quartz.config.default.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz.config.default.yaml) — *280 lines*
- [`quartz.config.yaml`](https://github.com/findingfocus/tashio/blob/main/quartz.config.yaml) — *275 lines*
- [`quartz.lock.json`](https://github.com/findingfocus/tashio/blob/main/quartz.lock.json) — *269 lines*
- [`quartz.ts`](https://github.com/findingfocus/tashio/blob/main/quartz.ts) — *7 lines*
- [`tsconfig.json`](https://github.com/findingfocus/tashio/blob/main/tsconfig.json) — *28 lines*
