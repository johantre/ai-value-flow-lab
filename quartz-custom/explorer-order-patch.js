;(function () {
  // Content index does not expose frontmatter 'order', so we use a slug map.
  // Keys are slugSegments joined with '/' (full path without extension).
  window.__explorerSlugOrder = {
    // Top-level folder order
    "ai-first": 0,
    "trust-by-design": 1,
    "learning-by-design": 2,
    "articles": 3,

    // learning-by-design sub-folders
    "learning-by-design/mass-learning": 0,
    "learning-by-design/learning-models": 1,
    "learning-by-design/ai-assisted-scalable-learning": 2,

    // learning-models/models article order
    "learning-by-design/learning-models/models/wenger-communities-of-practice": 0,
    "learning-by-design/learning-models/models/nonaka-dynamic-theory-organizational-knowledge-creation": 1,
    "learning-by-design/learning-models/models/wegner-transactive-memory": 2,
    "learning-by-design/learning-models/models/aar-a-leaders-guide-to-after-action-reviews": 3,
    "learning-by-design/learning-models/models/snowden-complex-acts-of-knowing": 4,

    // trust-by-design sub-folders
    "trust-by-design/beyond-the-review": 0,
    "trust-by-design/the-performance-illusion": 1,
    "trust-by-design/beyond-the-bonus": 2,
    "trust-by-design/the-kindness-trap": 3,

    // beyond-the-review internal order
    "trust-by-design/beyond-the-review/beyond-the-review": 0,
    "trust-by-design/beyond-the-review/deel-1": 1,
    "trust-by-design/beyond-the-review/deel-2": 2,
    "trust-by-design/beyond-the-review/cases": 3,
    "trust-by-design/beyond-the-review/deel-3": 4,
    "trust-by-design/beyond-the-review/conclusie": 5,

    // synthesis index pages first within their folders
    "trust-by-design/the-performance-illusion/the-performance-illusion": 0,
    "trust-by-design/beyond-the-bonus/beyond-the-bonus": 0,
    "trust-by-design/the-kindness-trap/the-kindness-trap": 0,
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
