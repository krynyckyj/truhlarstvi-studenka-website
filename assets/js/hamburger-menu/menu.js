const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const blurOverlay = document.querySelector('.blur-overlay');
const closeBtn = document.querySelector('.close-btn');

function openMenu() {
  mobileMenu.classList.add('active');
  blurOverlay.classList.add('active');
  document.body.classList.add('menu-open');
}
function closeMenu() {
  mobileMenu.classList.remove('active');
  blurOverlay.classList.remove('active');
  document.body.classList.remove('menu-open');
}
hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
blurOverlay.addEventListener('click', closeMenu);

const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
