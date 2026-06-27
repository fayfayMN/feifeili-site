// Mobile navigation toggle — ~15 lines, no dependencies
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    var expanded = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Close menu when a link is tapped
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
