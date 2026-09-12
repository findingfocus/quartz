import { visit } from "unist-util-visit"

function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "a") return
      const href = node.properties && node.properties.href
      if (typeof href !== "string") return
      if (!/^https?:\/\//.test(href)) return
      node.properties.target = "_blank"
      node.properties.rel = "noreferrer noopener"
    })
  }
}

export default function ExternalLinks() {
  return {
    name: "ExternalLinks",
    htmlPlugins() {
      return [rehypeExternalLinks]
    },
  }
}
