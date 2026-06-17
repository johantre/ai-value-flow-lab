;(function () {
  // Content index does not expose frontmatter 'order', so we use a slug map.
  // Keys are slugSegments joined with '/' (full path without extension).
  window.__explorerSlugOrder = {
    "beyond-the-review/readme": 0,
    "beyond-the-review/deel-1": 1,
    "beyond-the-review/deel-2": 2,
    "beyond-the-review/cases": 3,
    "beyond-the-review/deel-3": 4,
    "beyond-the-review/conclusie": 5,
  }

  function patchExplorerSort() {
    document.querySelectorAll(".explorer").forEach((el) => {
      try {
        const fns = JSON.parse(el.dataset.dataFns)
        fns.sortFn = `(a, b) => {
          const orderMap = window.__explorerSlugOrder || {}
          function getOrder(node) {
            const slug = (node.slugSegments || []).join("/")
            const v = orderMap[slug]
            return v != null ? Number(v) : Infinity
          }
          const aOrder = getOrder(a)
          const bOrder = getOrder(b)
          if (aOrder !== bOrder) return aOrder - bOrder
          if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
            return (a.displayName ?? "").localeCompare(b.displayName ?? "", undefined, {
              numeric: true,
              sensitivity: "base",
            })
          }
          return a.isFolder ? -1 : 1
        }`
        el.dataset.dataFns = JSON.stringify(fns)
      } catch (e) {
        console.error("[explorer-order-patch] failed:", e)
      }
    })
  }

  // Re-patch on every SPA navigation before Explorer reads the attribute.
  document.addEventListener("nav", patchExplorerSort)

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patchExplorerSort)
  } else {
    patchExplorerSort()
  }
})()
