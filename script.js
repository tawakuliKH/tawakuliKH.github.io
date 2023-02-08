const btn = document.querySelector('.vector');
const mobileMenu = document.querySelector('.nav-mobile');
const humberger = document.querySelector('.vector');
const closeIcon = document.querySelector('.cross-btn');
const menu = document.querySelectorAll('.menu-mobile');
const header = document.querySelector('.head');
function toggleMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
    humberger.style.display = 'none';
    header.style.position = 'static';
  } else {
    mobileMenu.style.display = 'none';
  }
}

function closeMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    humberger.style.display = 'block';
    header.style.position = 'fixed';
  }
}

function menuClick() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    humberger.style.display = 'block';
    header.style.position = 'fixed';
  }
}

btn.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', closeMenu);
let arr = [];
arr = Array.from(menu);
for (let i = 0; i < arr.length; i += 1) {
  arr[i].addEventListener('click', menuClick);
}
