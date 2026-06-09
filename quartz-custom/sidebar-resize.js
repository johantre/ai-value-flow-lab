(function () {
  var STORAGE_KEY = 'sidebar-left-width';
  var DEFAULT_WIDTH = 600;
  var MIN_WIDTH = 160;
  var MAX_WIDTH = 900;

  function getQuartzBody() {
    return document.getElementById('quartz-body');
  }

  function getSaved() {
    var w = parseInt(localStorage.getItem(STORAGE_KEY));
    return w >= MIN_WIDTH && w <= MAX_WIDTH ? w : DEFAULT_WIDTH;
  }

  function applyWidth(w) {
    var body = getQuartzBody();
    if (body) body.style.gridTemplateColumns = w + 'px 1fr 200px';
  }

  function init() {
    if (window.innerWidth < 1200) return;

    var existing = document.getElementById('sidebar-drag-handle');
    if (existing) existing.remove();

    var sidebar = document.querySelector('.sidebar.left');
    if (!sidebar) return;

    var currentWidth = getSaved();
    applyWidth(currentWidth);

    var handle = document.createElement('div');
    handle.id = 'sidebar-drag-handle';
    sidebar.appendChild(handle);

    handle.addEventListener('mousedown', function (e) {
      e.preventDefault();
      var startX = e.clientX;
      var startWidth = currentWidth;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      function onMove(e) {
        var newWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidth + (e.clientX - startX)));
        currentWidth = newWidth;
        applyWidth(newWidth);
      }

      function onUp() {
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        localStorage.setItem(STORAGE_KEY, currentWidth);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('nav', init);
})();
