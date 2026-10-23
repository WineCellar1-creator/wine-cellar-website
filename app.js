// Wine Cellar landing page: language switch (EN/PL), Play links, screenshot lightbox.
(function () {
  var PLAY = 'https://play.google.com/store/apps/details?id=com.winecellar.app';

  var PL = {
    skip: 'Przejdź do treści', navJourney: 'Od owocu do butelki', navInside: 'Co w środku', navFaq: 'Pytania',
    getIt: 'Pobierz z', side: 'dla domowych<br>winiarzy',
    heroTitle: 'Moja domowa winiarnia ma wreszcie <u>dziennik</u>',
    heroSub: 'każdy balon, każdy pomiar, każdy kolejny krok',
    heroLead: 'Wine Cellar trzyma każdy nastaw na osobnej półce, od pierwszego przepisu do butelkowania. Zapisuje pomiary BLG/SG, liczy moc wina i przypomina, kiedy zlać wino znad osadu.',
    heroSmall: 'Jednorazowy zakup · bez subskrypcji · bez reklam',
    polJar: 'wino śliwkowe · OG 1.095 ✓', ann: 'to już 24. dzień!', polCal: 'mówi mi, co dalej',
    cellarCap: 'Twoja piwniczka',
    jTitle: 'Od owocu do butelki', jHand: 'cały proces w jednej aplikacji',
    jSub: 'Prawdziwe ekrany aplikacji, w kolejności, w jakiej je poznasz.',
    s1Title: 'Przepis dopasowany do Twoich owoców',
    s1Text: 'Wybierz gotowy przepis albo zapisz własny. Wpisz, ile masz owoców, i wybierz wino wytrawne, półsłodkie lub słodkie. Wine Cellar przeliczy cukier, wodę i dawki syropu.',
    s1a: 'Naturalny cukier z owoców jest wliczony w obliczenia', s1b: 'Szacowana ilość wina i wielkość fermentora od razu',
    s2Title: 'Każdy nastaw ma swój balon',
    s2Text: 'Każde wino stoi na półce w Twojej piwniczce, z objętością, datą startu, etapem i pomiarami. Otwórz balon, aby zobaczyć, na jakim etapie jest ten nastaw.',
    s2a: 'OG, SG i moc zapisane dla każdego nastawu', s2b: 'Notatki z degustacji kontrolnych i dziennik zdjęć',
    s3Title: 'Nie przegapisz dnia zlewania',
    s3Text: 'Kalendarz planuje każdy krok dla każdego nastawu. Dostajesz przypomnienie, gdy trzeba zmierzyć, zlać, dodać syrop albo butelkować.',
    s3a: 'Jeden kalendarz dla wszystkich nastawów', s3b: 'Widżet na ekranie głównym pokazuje dzisiejsze zadania',
    s4Title: 'Wine Lab+ liczy za Ciebie',
    s4Text: 'Kalkulatory OG i FG na moc, SG, Brix i °Blg, korekta temperatury i dosładzanie. Przy każdym pojęciu jest znak ?, który je wyjaśnia.',
    s4a: 'Korekta temperatury dla areometru', s4b: 'Sprawdzenie gotowości do butelkowania na podstawie stabilnego SG',
    s5Title: 'Ucz się po drodze',
    s5Text: 'Krótkie poradniki krok po kroku: areometr, zlewanie, filtracja, higiena i butelkowanie, a do tego lista sprzętu. Przydadzą się przy pierwszym nastawie i przy pięćdziesiątym.',
    iTitle: 'Co jeszcze jest w środku', iHand: 'stuknij zdjęcie, aby powiększyć',
    c1Title: 'Plan produkcji', c1Text: 'Każdy etap nastawu jako lista kontrolna, z datami i potrzebnymi pomiarami.',
    c2Title: 'Książka przepisów', c2Text: 'Gotowe przepisy według trudności i osobna zakładka na Twoje własne.',
    c3Title: 'Poradnik i sprzęt', c3Text: 'Słowniczek, przydatne linki i uporządkowana lista sprzętu w jednym miejscu.',
    c4Title: 'Kopia i przywracanie', c4Text: 'Zapisz kopię win, pomiarów i przepisów przed aktualizacją albo zmianą telefonu.',
    c5Title: 'Ciemny lub jasny', c5Text: 'Domyślnie ciemny motyw piwniczki, a jeśli wolisz, jasny pergaminowy.',
    c6Title: '9 języków', c6Text: 'Wybierasz w Ustawieniach. Język ustawia też wskazówki regionalne.',
    f1: 'Jednorazowy zakup', f1t: 'Płacisz raz w Google Play. Bez subskrypcji i bez reklam.',
    f2: 'Telefon i tablet', f2t: 'Układ dla obu, z widżetem na ekranie głównym.',
    f3: 'Twoje dane są Twoje', f3t: 'Biblioteka jest na Twoim urządzeniu, z kopią i przywracaniem, gdy ich potrzebujesz.',
    f4: 'Etykiety z kodem QR', f4t: 'Wydrukuj etykietę QR dla każdego wina i zeskanuj ją później, aby otworzyć jego kartę.',
    qTitle: 'Warto wiedzieć',
    q1: 'Dla kogo jest Wine Cellar?', a1: 'Dla dorosłych hobbystów, którzy robią w domu wino owocowe lub gronowe i chcą panować nad swoimi nastawami. Pasuje początkującym dzięki poradnikom i osobom, które mają wiele balonów naraz.',
    q2: 'Czy potrzebuję specjalnego sprzętu?', a2: 'Areometr pozwala w pełni wykorzystać aplikację, bo z pomiarów wynikają moc wina i gotowość do butelkowania. Resztę znajdziesz na liście sprzętu w poradniku.',
    q3: 'Ile to kosztuje?', a3: 'To jednorazowy zakup w Google Play. Aktualną cenę w Twoim kraju zobaczysz na stronie sklepu.',
    q4: 'Czy jest wersja na iPhone’a?', a4: 'Na razie nie. Wine Cellar jest dostępny na telefony i tablety z Androidem.',
    q5: 'Gdzie mogę uzyskać pomoc?', a5: 'Napisz na <a href="mailto:supportwinecellar1@gmail.com">supportwinecellar1@gmail.com</a>. Samouczek możesz uruchomić ponownie w Ustawieniach.',
    navFilm: 'Film', vTitle: 'Dwie minuty w aplikacji', vHand: 'włącz z dźwiękiem', vNote: 'Film po angielsku · 1080p · 2 min',
    ch1: 'Twoja piwniczka', ch2: 'Każdy nastaw', ch3: 'Przepisy', ch4: 'Kalendarz', ch5: 'Poradniki',
    cTitle: 'Twój następny nastaw zaczyna się tutaj', cText: 'Wine Cellar · asystent domowego winiarstwa na Androida',
    support: 'Pomoc', privacy: 'Polityka prywatności',
    legal: 'Wine Cellar jest przeznaczony dla osób dorosłych (18+). Pomaga planować i zapisywać domową produkcję wina; przestrzegaj lokalnych przepisów dotyczących produkcji domowej.'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i]'));
  var EN = {};
  nodes.forEach(function (n) { EN[n.dataset.i] = n.innerHTML; });
  EN.cellarCap = 'Your cellar';
  var lang = 'en';

  function setLang(l) {
    lang = l;
    var dict = l === 'pl' ? PL : EN;
    nodes.forEach(function (n) { var v = dict[n.dataset.i]; if (v != null) n.innerHTML = v; });
    document.documentElement.lang = l;
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    var hl = l === 'pl' ? 'pl' : 'en';
    document.querySelectorAll('a.play').forEach(function (a) { a.href = PLAY + '&hl=' + hl; });
    try { localStorage.setItem('wc-lang', l); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('wc-lang'); } catch (e) {}
  setLang(saved || ((navigator.language || '').toLowerCase().indexOf('pl') === 0 ? 'pl' : 'en'));
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  // Promo film chapters
  var film = document.getElementById('promo');
  if (film) {
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
  }

  // Lightbox for real screenshots
  var dlg = document.getElementById('zoom');
  if (dlg && dlg.showModal) {
    var img = dlg.querySelector('img'), cap = dlg.querySelector('p');
    document.querySelectorAll('.shot').forEach(function (b) {
      b.addEventListener('click', function () {
        var inner = b.querySelector('img');
        img.src = b.dataset.full; img.alt = inner ? inner.alt : '';
        var key = b.dataset.cap, dict = lang === 'pl' ? PL : EN;
        cap.innerHTML = (key && dict[key]) || '';
        dlg.showModal();
      });
    });
    dlg.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }
})();
