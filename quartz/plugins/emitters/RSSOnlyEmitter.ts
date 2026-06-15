import { QuartzEmitterPlugin } from "../types"
import { ContentIndex } from "./contentIndex"  // official one

export const RSSOnlyEmitter: QuartzEmitterPlugin = () => {
  const baseEmitter = ContentIndex({
    enableSiteMap: true,
    enableRSS: true,
  })

  return {
    name: "RSSOnlyEmitter",
    async emit(ctx, content, resources) {
      const filteredContent = content.filter(([tree, vfile]) => {
        const tags = (vfile.data?.frontmatter?.tags as string[] | undefined) ?? []
        return tags.includes("feed")
      })

      return baseEmitter.emit(ctx, filteredContent, resources)
    },
  }
}
