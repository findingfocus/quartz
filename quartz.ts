import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

//test

// Sidebar order: the hub follows an explicit rank map, the Game Demos
// folder follows a curated order, everything else keeps alphabetical title order.
// Must stay self-contained: this function is serialized into the page for client-side sorting.
type ExplorerNode = {
  slugSegments?: string[]
  displayName?: string
  isFolder: boolean
}

function customOrder(a: ExplorerNode, b: ExplorerNode): number {
  const sameKind = (!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)
  if (!sameKind) {
    if (!a.isFolder && b.isFolder) return 1
    return -1
  }
  const segsA = a.slugSegments || []
  const segsB = b.slugSegments || []
  const segA = segsA[segsA.length - 1] || ""
  const segB = segsB[segsB.length - 1] || ""
  // Game Demos: newest first, oldest (BTTF) last
  if (
    segsA.slice(0, -1).join("/") === "game-demos" &&
    segsB.slice(0, -1).join("/") === "game-demos"
  ) {
    const demoOrder: Record<string, number> = {
      "tashio-tempo": 0,
      joust: 1,
      tak: 2,
      bttf: 3,
    }
    const rankA = demoOrder[segA] ?? Number.MAX_SAFE_INTEGER
    const rankB = demoOrder[segB] ?? Number.MAX_SAFE_INTEGER
    if (rankA !== rankB) return rankA - rankB
  }
  // Hub sections in learning order (folder slugs carry no numbers anymore)
  const hubOrder: Record<string, number> = {
    "start-here": 0,
    setup: 1,
    "lua-essentials": 2,
    "love2d-basics": 3,
    "first-game": 4,
    "starter-template": 5,
    cookbook: 6,
    tools: 7,
    distribution: 8,
    demos: 9,
    beyond: 10,
  }
  const hubA = hubOrder[segA] ?? Number.MAX_SAFE_INTEGER
  const hubB = hubOrder[segB] ?? Number.MAX_SAFE_INTEGER
  if (hubA !== hubB) return hubA - hubB
  return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
    numeric: true,
    sensitivity: "base",
  })
}

ExternalPlugin.Explorer({
  sortFn: customOrder,
})

const config = await loadQuartzConfig()

export default config
export const layout = await loadQuartzLayout()
