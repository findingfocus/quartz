import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

//test
const config = await loadQuartzConfig()

export default config
export const layout = await loadQuartzLayout()
