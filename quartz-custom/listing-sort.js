(function () {
  var metaCache = null;
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
    href = href.replace(/^(\.\.\/)+/, ''); // strip relative ../
    href = href.replace(/^\//, '');        // strip leading /
    var base = getBase().replace(/^\//, ''); // e.g. 'ai-value-flow-lab'
    if (base && href.indexOf(base + '/') === 0) {
      href = href.slice(base.length + 1); // +1 for the /
    }
    return href.replace(/\/$/, '');
  }

  function addBylines(items, meta) {
    items.forEach(function (li) {
      li.querySelectorAll('.listing-col-author, .listing-col-year').forEach(function (el) { el.remove(); });

      var section = li.querySelector('.section');
      if (!section) return;
      var m = meta[getSlug(li)] || {};

      var authorSpan = document.createElement('span');
      authorSpan.className = 'listing-col-author';
      authorSpan.textContent = lastName(m.author || '');

      var yearSpan = document.createElement('span');
      yearSpan.className = 'listing-col-year';
      yearSpan.textContent = m.year || '';

      // Insert before .desc — keeps grid column order: author | year | title | tags
      var desc = section.querySelector('.desc');
      if (desc) {
        section.insertBefore(yearSpan, desc);
        section.insertBefore(authorSpan, yearSpan);
      } else {
        section.appendChild(authorSpan);
        section.appendChild(yearSpan);
      }
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
    if (!metaCache) return;
    var ul = document.querySelector('ul.section-ul');
    // ul.dataset.sortInit marks that THIS ul element was already processed.
    // Quartz replaces the DOM on SPA nav, so the new ul is always a fresh element.
    if (!ul || ul.dataset.sortInit) return;
    var items = ul.querySelectorAll('li.section-li');
    if (!items.length) return; // ul exists but Quartz hasn't filled it yet — observer will retry
    ul.dataset.sortInit = '1';
    initListing(ul, metaCache);
  }

  function scheduleCheck() {
    clearTimeout(checkTimer);
    checkTimer = setTimeout(checkAndInit, 150);
  }

  // Persistent observer: detects new ul.section-ul on every SPA nav and on initial load
  new MutationObserver(scheduleCheck)
    .observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', function () {
    fetchMeta().then(scheduleCheck);
  });

  document.addEventListener('nav', function () {
    fetchMeta().then(scheduleCheck);
  });
})();
