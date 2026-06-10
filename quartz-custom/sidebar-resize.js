(function () {
  // Preserve page scroll position across SPA nav when the link that triggered
  // it lives in the left sidebar. Quartz resets scroll to the top on every
  // nav, which visually "jumps" the explorer tree back to its start even
  // though its expand/collapse state (and thus its height) is unchanged.
  var savedScrollY = null;

  document.addEventListener('click', function (e) {
    var a = e.target.closest('.sidebar.left a');
    if (a) savedScrollY = window.scrollY;
  }, true);

  document.addEventListener('nav', function () {
    if (savedScrollY !== null) {
      var y = savedScrollY;
      savedScrollY = null;
      requestAnimationFrame(function () {
        window.scrollTo(0, y);
      });
    }
  });

  var LEFT_KEY = 'sidebar-left-width';
  var RIGHT_KEY = 'sidebar-right-width';
  var LEFT_DEFAULT = 600, LEFT_MIN = 160, LEFT_MAX = 900;
  var RIGHT_DEFAULT = 400, RIGHT_MIN = 160, RIGHT_MAX = 700;

  var leftWidth, rightWidth;

  function getQuartzBody() {
    return document.getElementById('quartz-body');
  }

  function getSaved(key, def, min, max) {
    var w = parseInt(localStorage.getItem(key));
    return w >= min && w <= max ? w : def;
  }

  function applyWidths() {
    var body = getQuartzBody();
    if (body) body.style.gridTemplateColumns = leftWidth + 'px 1fr ' + rightWidth + 'px';
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
    applyWidths();

    var leftSidebar = document.querySelector('.sidebar.left');
    if (leftSidebar) {
      makeHandle('sidebar-drag-handle-left', leftSidebar, LEFT_MIN, LEFT_MAX, LEFT_KEY,
        function () { return leftWidth; },
        function (w) { leftWidth = w; },
        false);
    }

    // Folder/tag pages have no right sidebar — only attach if present.
    var rightSidebar = document.querySelector('.sidebar.right');
    if (rightSidebar) {
      makeHandle('sidebar-drag-handle-right', rightSidebar, RIGHT_MIN, RIGHT_MAX, RIGHT_KEY,
        function () { return rightWidth; },
        function (w) { rightWidth = w; },
        true);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('nav', init);
})();
