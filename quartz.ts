import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

//test

// Sidebar order: folders whose names start with a number (01-Start-Here … 11-Beyond)
// sort numerically first, the Game Demos folder follows a curated order,
// everything else keeps alphabetical title order.
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
  const numA = /^(\d+)/.exec(segA)
  const numB = /^(\d+)/.exec(segB)
  if (numA && numB) return Number(numA[1]) - Number(numB[1])
  if (numA) return -1
  if (numB) return 1
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
