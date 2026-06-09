(function () {
  var metaPromise = null;

  function getBase() {
    return ((document.body && document.body.dataset.basepath) || '').replace(/\/$/, '');
  }

  function fetchMeta() {
    if (metaPromise) return metaPromise;
    metaPromise = fetch(getBase() + '/static/listing-meta.json')
      .then(function (r) { return r.json(); })
      .catch(function () { return {}; });
    return metaPromise;
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
    // Quartz emits relative hrefs like '../books/foo' — strip leading '../'
    href = href.replace(/^(\.\.\/)+/, '');
    // Also handle absolute hrefs with basepath prefix
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

  var pendingObserver = null;

  function waitForListing(meta) {
    if (pendingObserver) { pendingObserver.disconnect(); pendingObserver = null; }
    var ul = document.querySelector('ul.section-ul');
    if (ul) { initListing(ul, meta); return; }
    // Quartz fetches folder-page content async after firing nav —
    // observe until ul.section-ul appears in the DOM.
    pendingObserver = new MutationObserver(function (_, obs) {
      var ul = document.querySelector('ul.section-ul');
      if (!ul) return;
      obs.disconnect(); pendingObserver = null;
      initListing(ul, meta);
    });
    pendingObserver.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () {
      if (pendingObserver) { pendingObserver.disconnect(); pendingObserver = null; }
    }, 3000);
  }

  function init() {
    fetchMeta().then(function (meta) { waitForListing(meta); });
  }

  document.addEventListener('nav', init);
  document.addEventListener('DOMContentLoaded', init);
})();
