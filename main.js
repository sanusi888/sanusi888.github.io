// main.js - small behaviour for nav + year injection + smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggles (applies for the nav-toggle buttons across pages)
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = document.getElementById('site-nav');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (nav) nav.classList.toggle('open');
    });
  });

  // set footer year in different pages
  var years = [ 'year', 'year-2', 'year-3', 'year-4' ];
  var y = new Date().getFullYear();
  years.forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // smooth scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
