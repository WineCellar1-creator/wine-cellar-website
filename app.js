// Wine Cellar landing page: language switch (8 languages), mobile menu, film chapters, gallery, lightbox.
(function () {
  var PLAY = 'https://play.google.com/store/apps/details?id=com.winecellar.app';
  var HL = { en: 'en', pl: 'pl', de: 'de', fr: 'fr', es: 'es', pt: 'pt-PT', it: 'it', cs: 'cs' };
  var I18N = window.WC_I18N, SHOTS = window.WC_SHOTS || {}, LANGS = window.WC_LANGS;
  var codes = LANGS.map(function (l) { return l[0]; });
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i]'));
  var shots = Array.prototype.slice.call(document.querySelectorAll('img[data-shot]'));
  var select = document.getElementById('lang');
  var lang = 'en';

  function t(key) { var d = I18N[lang] || I18N.en; return d[key] != null ? d[key] : I18N.en[key]; }

  function pickInitial() {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    if (q && codes.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem('wc-lang'); if (s && codes.indexOf(s) > -1) return s; } catch (e) {}
    var prefs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var c = String(prefs[i]).slice(0, 2).toLowerCase();
      if (codes.indexOf(c) > -1) return c;
    }
    return 'en';
  }

  function setLang(l, save) {
    lang = codes.indexOf(l) > -1 ? l : 'en';
    nodes.forEach(function (n) { var v = t(n.dataset.i); if (v != null) n.innerHTML = v; });
    var note = document.querySelector('[data-i="shotsNote"]');
    if (note) note.hidden = !t('shotsNote');
    shots.forEach(function (img) {
      var key = img.dataset.shot, local = SHOTS[lang] && SHOTS[lang][key];
      var src = local || ('s-' + key + '.jpg');
      if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    });
    document.documentElement.lang = lang;
    document.title = t('title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('desc'));
    document.querySelectorAll('a.play').forEach(function (a) { a.href = PLAY + '&hl=' + HL[lang]; });
    document.querySelectorAll('[data-close]').forEach(function (b) { b.setAttribute('aria-label', t('close')); });
    select.value = lang;
    if (save) {
      try { localStorage.setItem('wc-lang', lang); } catch (e) {}
      try { history.replaceState(null, '', location.pathname + (lang === 'en' ? '' : '?lang=' + lang) + location.hash); } catch (e) {}
    }
  }

  LANGS.forEach(function (l) {
    var o = document.createElement('option'); o.value = l[0]; o.textContent = l[1]; select.appendChild(o);
  });
  select.addEventListener('change', function () { setLang(select.value, true); });
  setLang(pickInitial(), false);

  // Mobile menu
  var burger = document.getElementById('burger'), links = document.getElementById('links');
  function menu(open) { links.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); }
  burger.addEventListener('click', function () { menu(!links.classList.contains('open')); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) menu(false); });

  // Film chapters
  var film = document.getElementById('promo');
  var chBtns = Array.prototype.slice.call(document.querySelectorAll('.chapters button'));
  chBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      film.currentTime = Number(b.dataset.t);
      var p = film.play(); if (p && p.catch) p.catch(function () {});
    });
  });
  film.addEventListener('timeupdate', function () {
    var cur = null;
    chBtns.forEach(function (b) { if (film.currentTime >= Number(b.dataset.t)) cur = b; });
    chBtns.forEach(function (b) { b.setAttribute('aria-current', String(b === cur)); });
  });

  // Gallery arrows
  var gal = document.getElementById('gallery');
  document.querySelectorAll('.arrow').forEach(function (b) {
    b.addEventListener('click', function () {
      var item = gal.querySelector('figure');
      var step = item ? item.getBoundingClientRect().width + 20 : 240;
      gal.scrollBy({ left: Number(b.dataset.dir) * step, behavior: 'smooth' });
    });
  });

  // Lightbox
  var dlg = document.getElementById('zoom');
  if (dlg && dlg.showModal) {
    var big = dlg.querySelector('img'), cap = dlg.querySelector('p');
    document.querySelectorAll('.zoom').forEach(function (b) {
      b.addEventListener('click', function () {
        var img = b.querySelector('img');
        big.src = img.currentSrc || img.src; big.alt = img.alt;
        cap.textContent = b.dataset.cap ? t(b.dataset.cap) : '';
        dlg.showModal();
      });
    });
    dlg.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }
})();
