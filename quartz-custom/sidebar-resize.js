(function () {
  // Preserve the left sidebar's own scroll position across SPA nav. Quartz
  // rebuilds the Explorer's tree DOM on every nav (clearing then repopulating
  // it), which momentarily empties .sidebar.left and clamps its scrollTop to
  // 0 — visually "jumping" the tree back to its start even though its
  // expand/collapse state (and thus its height) is unchanged.
  var savedLeftScrollTop = null;

  document.addEventListener('click', function (e) {
    var a = e.target.closest('.sidebar.left a');
    if (!a) return;
    var left = document.querySelector('.sidebar.left');
    if (left) savedLeftScrollTop = left.scrollTop;
  }, true);

  document.addEventListener('nav', function () {
    // .center scrolls independently (see custom.scss) — reset it so a
    // newly loaded page starts at the top regardless of the sidebar's depth.
    var center = document.querySelector('.center');
    if (center) center.scrollTop = 0;

    if (savedLeftScrollTop !== null) {
      var top = savedLeftScrollTop;
      savedLeftScrollTop = null;
      requestAnimationFrame(function () {
        var left = document.querySelector('.sidebar.left');
        if (left) left.scrollTop = top;
      });
    }
  });

  // Footer: Quartz renders it as a row below #quartz-body's columns, but
  // .center scrolls independently at 100vh, so the footer no longer lines up
  // with the end of the article and the page-level scrollbar (now hidden,
  // see custom.scss) used to be the only way to reach it. Hide the original
  // and append a clone to the end of .center's content instead, so it
  // scrolls in with the article. Re-run on every nav since .center's content
  // (and possibly the footer itself) is replaced.
  var FOOTER_CLONE_CLASS = 'footer-in-center';

  function relocateFooter() {
    var footer = document.querySelector('#quartz-body > footer, #quartz-body > .footer');
    var center = document.querySelector('.center');
    if (!footer || !center) return;

    footer.style.setProperty('display', 'none', 'important');

    var oldClone = center.querySelector('.' + FOOTER_CLONE_CLASS);
    if (oldClone) oldClone.remove();

    var clone = footer.cloneNode(true);
    clone.classList.add(FOOTER_CLONE_CLASS);
    clone.style.removeProperty('display');
    center.appendChild(clone);
  }

  // Book covers: a book page whose content starts with a single image
  // (the cover, e.g. books/<slug>/cover.jpg) gets that image moved next to
  // the Properties table instead of inline at the top of the article.
  // Books without such a leading image are left untouched.
  function relocateCover() {
    if (!document.body.dataset.slug || document.body.dataset.slug.indexOf('books/') !== 0) return;

    var details = document.querySelector('.note-properties');
    var firstP = document.querySelector('.markdown-preview-view > p:first-child');
    var img = firstP && firstP.children.length === 1 && firstP.firstElementChild.tagName === 'IMG'
      ? firstP.firstElementChild : null;
    if (!details || !img || details.parentElement.classList.contains('properties-with-cover')) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'properties-with-cover';
    details.parentNode.insertBefore(wrapper, details);
    wrapper.appendChild(details);
    wrapper.appendChild(img);
    img.classList.add('book-cover');
    firstP.remove();
  }

  var LEFT_KEY = 'sidebar-left-width';
  var RIGHT_KEY = 'sidebar-right-width';
  var LEFT_DEFAULT = 600, LEFT_MIN = 160, LEFT_MAX = 900;
  var RIGHT_DEFAULT = 400, RIGHT_MIN = 160, RIGHT_MAX = 700;

  var leftWidth, rightWidth, rightSidebarVisible;

  function getQuartzBody() {
    return document.getElementById('quartz-body');
  }

  function getSaved(key, def, min, max) {
    var w = parseInt(localStorage.getItem(key));
    return w >= min && w <= max ? w : def;
  }

  function applyWidths() {
    var body = getQuartzBody();
    if (!body) return;
    body.style.gridTemplateColumns = rightSidebarVisible
      ? leftWidth + 'px 1fr ' + rightWidth + 'px'
      : leftWidth + 'px 1fr';
  }

  // growsLeft: true when dragging the handle left increases the sidebar's width
  // (right sidebar, whose handle sits on its left edge). False for the left
  // sidebar, whose handle is on its right edge and grows when dragged right.
  function makeHandle(id, sidebar, min, max, storageKey, getWidth, setWidth, growsLeft) {
    var existing = document.getElementById(id);
    if (existing) existing.remove();

    var handle = document.createElement('div');
    handle.id = id;
    handle.className = 'sidebar-drag-handle';
    sidebar.appendChild(handle);

    handle.addEventListener('mousedown', function (e) {
      e.preventDefault();
      var startX = e.clientX;
      var startWidth = getWidth();
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      function onMove(e) {
        var delta = e.clientX - startX;
        var raw = growsLeft ? startWidth - delta : startWidth + delta;
        setWidth(Math.min(max, Math.max(min, raw)));
        applyWidths();
      }

      function onUp() {
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        localStorage.setItem(storageKey, getWidth());
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  function init() {
    if (window.innerWidth < 1200) return;

    leftWidth = getSaved(LEFT_KEY, LEFT_DEFAULT, LEFT_MIN, LEFT_MAX);
    rightWidth = getSaved(RIGHT_KEY, RIGHT_DEFAULT, RIGHT_MIN, RIGHT_MAX);

    // Folder/tag pages render an empty .sidebar.right (no Graph/Backlinks —
    // see quartz.config.yaml's right: [] for those page types). Collapse its
    // grid column instead of reserving 400px of dead space for it.
    var rightSidebar = document.querySelector('.sidebar.right');
    rightSidebarVisible = !!rightSidebar && rightSidebar.children.length > 0;
    if (rightSidebar && !rightSidebarVisible) {
      rightSidebar.style.setProperty('display', 'none', 'important');
    }

    applyWidths();

    var leftSidebar = document.querySelector('.sidebar.left');
    if (leftSidebar) {
      makeHandle('sidebar-drag-handle-left', leftSidebar, LEFT_MIN, LEFT_MAX, LEFT_KEY,
        function () { return leftWidth; },
        function (w) { leftWidth = w; },
        false);
    }

    if (rightSidebarVisible) {
      makeHandle('sidebar-drag-handle-right', rightSidebar, RIGHT_MIN, RIGHT_MAX, RIGHT_KEY,
        function () { return rightWidth; },
        function (w) { rightWidth = w; },
        true);
    }

    relocateFooter();
    relocateCover();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('nav', init);
})();
