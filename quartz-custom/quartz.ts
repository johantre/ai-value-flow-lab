import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config

const { defaults, byPageType } = await loadQuartzLayout()

// Explorer plugin is available after `npx quartz plugin install`
// @ts-ignore — path resolves at build time, not design time
const { Explorer } = await import("./.quartz/plugins/explorer")

const customExplorer = Explorer({
  sortFn: (a: any, b: any) => {
    const aOrder = a.data?.order != null ? Number(a.data.order) : Infinity
    const bOrder = b.data?.order != null ? Number(b.data.order) : Infinity
    if (aOrder !== bOrder) return aOrder - bOrder
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return (a.displayName ?? "").localeCompare(b.displayName ?? "", undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return a.isFolder ? -1 : 1
  },
})

export const layout = {
  defaults: {
    ...defaults,
    left: (defaults.left ?? []).map((c: any) =>
      c.name === "ExplorerComponent" ? customExplorer : c
    ),
  },
  byPageType,
}
