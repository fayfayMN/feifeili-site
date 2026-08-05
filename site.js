
/* ═══ Lightbox — click any .photo-frame img to view full size ═══ */
(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img class="lightbox-img"><span class="lightbox-close">&times;</span>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('.lightbox-img');

  function open(src) {
    lbImg.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.photo-frame img, .slideshow-slide img, .ach-photo img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { open(this.src); });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target !== lbImg) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  /* ═══ Slideshow ═══ */
  document.querySelectorAll('.slideshow').forEach(function (ss) {
    var slides = ss.querySelectorAll('.slideshow-slide');
    var dots = ss.querySelectorAll('.slideshow-dot');
    var idx = 0;

    function show(n) {
      idx = ((n % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        s.style.display = i === idx ? 'block' : 'none';
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
      });
    }

    ss.querySelector('.ss-prev').addEventListener('click', function () { show(idx - 1); });
    ss.querySelector('.ss-next').addEventListener('click', function () { show(idx + 1); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { show(i); });
    });

    show(0);
  });
})();
