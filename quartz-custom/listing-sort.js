(function () {
  var metaCache = null;
  var lastInitPath = '';
  var checkTimer = null;

  function getBase() {
    return ((document.body && document.body.dataset.basepath) || '').replace(/\/$/, '');
  }

  function fetchMeta() {
    if (metaCache !== null) return Promise.resolve(metaCache);
    return fetch(getBase() + '/static/listing-meta.json')
      .then(function (r) { return r.json(); })
      .catch(function () { return {}; })
      .then(function (data) { metaCache = data; return data; });
  }

  function lastName(author) {
    if (!author) return '';
    var name = author.replace(/^["']|["']$/g, '').split(' and ')[0].trim();
    return name.split(/\s+/).pop();
  }

  function getSlug(li) {
    var a = li.querySelector('.desc h3 a');
    if (!a) return '';
    var href = a.getAttribute('href') || '';
    href = href.replace(/^(\.\.\/)+/, '');
    var base = getBase();
    if (base && href.indexOf(base.replace(/^\//, '') + '/') === 0) {
      href = href.slice(base.length);
    }
    return href.replace(/^\//, '').replace(/\/$/, '');
  }

  function addBylines(items, meta) {
    items.forEach(function (li) {
      var a = li.querySelector('.desc h3 a');
      if (!a) return;
      li.querySelectorAll('.listing-byline').forEach(function (el) { el.remove(); });
      var m = meta[getSlug(li)];
      if (!m) return;
      var ln = lastName(m.author);
      var yr = m.year;
      if (!ln && !yr) return;
      var span = document.createElement('span');
      span.className = 'listing-byline';
      span.textContent = [ln, yr].filter(Boolean).join(' ') + ' — ';
      a.parentNode.insertBefore(span, a);
    });
  }

  function sortListing(ul, by, meta) {
    var items = Array.from(ul.querySelectorAll('li.section-li'));
    if (items.length < 2) return;
    items.sort(function (a, b) {
      var mA = meta[getSlug(a)] || {}, mB = meta[getSlug(b)] || {};
      if (by === 'author') {
        var lA = lastName(mA.author || '').toLowerCase();
        var lB = lastName(mB.author || '').toLowerCase();
        return lA.localeCompare(lB, undefined, { sensitivity: 'base' });
      }
      if (by === 'year') {
        return (parseInt(mA.year) || 0) - (parseInt(mB.year) || 0);
      }
      var tA = (a.querySelector('.desc h3 a') || {}).textContent || '';
      var tB = (b.querySelector('.desc h3 a') || {}).textContent || '';
      return tA.trim().localeCompare(tB.trim(), undefined, { sensitivity: 'base' });
    });
    items.forEach(function (item) { ul.appendChild(item); });
  }

  function addSortButtons(ul, meta) {
    var existing = document.getElementById('listing-sort-bar');
    if (existing) existing.remove();
    var bar = document.createElement('div');
    bar.id = 'listing-sort-bar';
    ['title', 'author', 'year'].forEach(function (key, i) {
      var btn = document.createElement('button');
      btn.className = 'sort-btn' + (i === 0 ? ' sort-active' : '');
      btn.dataset.sort = key;
      btn.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      bar.appendChild(btn);
    });
    ul.parentNode.insertBefore(bar, ul);
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.sort-btn');
      if (!btn) return;
      bar.querySelectorAll('.sort-btn').forEach(function (b) { b.classList.remove('sort-active'); });
      btn.classList.add('sort-active');
      sortListing(ul, btn.dataset.sort, meta);
    });
  }

  function initListing(ul, meta) {
    var items = Array.from(ul.querySelectorAll('li.section-li'));
    addBylines(items, meta);
    addSortButtons(ul, meta);
    sortListing(ul, 'title', meta);
  }

  function checkAndInit() {
    if (metaCache === null) return;
    var ul = document.querySelector('ul.section-ul');
    if (!ul) {
      // Left listing page — reset so next visit always re-runs
      lastInitPath = '';
      return;
    }
    var items = ul.querySelectorAll('li.section-li');
    if (items.length === 0) return; // ul exists but Quartz hasn't filled it yet
    var path = window.location.pathname;
    if (path === lastInitPath) return; // Already initialized for this path
    lastInitPath = path;
    initListing(ul, metaCache);
  }

  function scheduleCheck() {
    if (checkTimer) clearTimeout(checkTimer);
    // 150ms debounce: wait for Quartz to finish all post-nav DOM updates
    checkTimer = setTimeout(checkAndInit, 150);
  }

  // One persistent observer covers all cases: fresh load, SPA nav, Quartz re-renders
  new MutationObserver(scheduleCheck)
    .observe(document.documentElement, { childList: true, subtree: true });

  // Also trigger on fetch completion in case DOM is already stable
  document.addEventListener('DOMContentLoaded', function () {
    fetchMeta().then(scheduleCheck);
  });

  // Trigger fetch on nav too so metaCache is ready
  document.addEventListener('nav', function () {
    fetchMeta().then(scheduleCheck);
  });
})();
