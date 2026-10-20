// Filters the publication list by research area (data-areas on each <li>).
(function () {
  var chips = document.querySelectorAll('.filter-bar .chip');
  var pubs = document.querySelectorAll('.pub-year .pub');
  var years = document.querySelectorAll('.pub-year');
  var empty = document.querySelector('.empty-note');

  function apply(filter) {
    pubs.forEach(function (li) {
      var areas = (li.getAttribute('data-areas') || '').split(' ');
      li.hidden = filter !== 'all' && areas.indexOf(filter) === -1;
    });
    var anyVisible = false;
    years.forEach(function (sec) {
      var visible = sec.querySelectorAll('.pub:not([hidden])').length > 0;
      sec.hidden = !visible;
      anyVisible = anyVisible || visible;
    });
    if (empty) empty.hidden = anyVisible;
    chips.forEach(function (c) {
      c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === filter));
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      apply(f);
      history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f);
    });
  });

  var initial = location.hash.slice(1);
  if (initial && document.querySelector('.chip[data-filter="' + initial + '"]')) apply(initial);
})();
