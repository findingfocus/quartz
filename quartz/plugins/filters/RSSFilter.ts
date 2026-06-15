import { QuartzFilterPlugin } from "../types"

export const RSSFilter: QuartzFilterPlugin = () => ({
  name: "RSSFilter",
  shouldPublish(_ctx, [_tree, vfile]) {
    const tags = (vfile.data?.frontmatter?.tags as string[] | undefined) ?? []
    return tags.includes("feed")
  },
})
