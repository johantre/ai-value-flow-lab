(function () {
  function sortListing() {
    var ul = document.querySelector("ul.section-ul");
    if (!ul) return;
    var items = Array.from(ul.querySelectorAll("li.section-li"));
    if (items.length < 2) return;
    items.sort(function (a, b) {
      var ta = (a.querySelector(".desc h3 a") || {}).textContent || "";
      var tb = (b.querySelector(".desc h3 a") || {}).textContent || "";
      return ta.trim().localeCompare(tb.trim(), undefined, { sensitivity: "base" });
    });
    items.forEach(function (item) { ul.appendChild(item); });
  }

  document.addEventListener("nav", sortListing);
  sortListing();
})();
