import { h } from "preact"

const brandLink = "https://findingfocus.dev"
const brandText = "Finding Focus Productions"

const defaultLinks = {
  Source: "https://findingfocus.io",
  Discord: "https://discord.gg/g63sjnWYwP",
  Tashio: "https://steam.tashio.dev",
  Blog: "https://findingfocus.blog",
}

export function Footer(opts) {
  const links = (opts && opts.links) || defaultLinks
  const year = new Date().getFullYear()
  return function SiteFooter(props) {
    const displayClass = (props && props.displayClass) || ""
    return h(
      "footer",
      { class: displayClass },
      h(
        "p",
        null,
        h("a", { href: brandLink, target: "_blank", rel: "noreferrer noopener" }, brandText),
        " © " + year,
      ),
      h(
        "ul",
        null,
        Object.entries(links).map(([text, link]) =>
          h(
            "li",
            { key: text },
            h("a", { href: link, target: "_blank", rel: "noreferrer noopener" }, text),
          ),
        ),
      ),
    )
  }
}
