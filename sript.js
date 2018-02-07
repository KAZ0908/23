var btnNavOpen = document.getElementById('btn-nav-open');
var btnNavClose = document.getElementById('btn-nav-close');
var spMenu = document.getElementById('sp-menu');

console.dir(btnNavOpen);
console.dir(spMenu);

btnNavOpen.addEventListener('click', function() {
  spMenu.classList.add('fadeIn');
  spMenu.classList.add('active');
  setTimeout(function() {
    spMenu.classList.remove('fadeIn');
  }, 1000);
});

btnNavClose.addEventListener('click', function() {
  spMenu.classList.add('fadeOut');
  spMenu.classList.remove('active');
  setTimeout(function() {
    spMenu.classList.remove('fadeOut');
  }, 1000);
});
