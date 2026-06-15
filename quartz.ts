import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { RSSOnlyEmitter } from "./quartz/plugins/emitters/RSSOnlyEmitter"

const config = await loadQuartzConfig()
config.plugins.emitters = config.plugins.emitters.filter(
  e => e.name !== "ContentIndex"
)

config.plugins.emitters.push(RSSOnlyEmitter())

export default config
export const layout = await loadQuartzLayout()
