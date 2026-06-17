;(function () {
  function patchExplorerSort() {
    document.querySelectorAll(".explorer").forEach((el) => {
      try {
        const fns = JSON.parse(el.dataset.dataFns)
        fns.sortFn = ((a, b) => {
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
        }).toString()
        el.dataset.dataFns = JSON.stringify(fns)
      } catch (e) {
        console.error("[explorer-order-patch] failed:", e)
      }
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patchExplorerSort)
  } else {
    patchExplorerSort()
  }
})()
