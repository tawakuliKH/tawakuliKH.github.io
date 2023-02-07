let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector(".vector");
let mobileMenu = document.querySelector(".nav-mobile");
let humberger = document.querySelector('.vector')
let closeIcon = document.querySelector(".cross-btn");
let menu = document.querySelectorAll('.menu-mobile');


let header =document.querySelector('.head');
function toggleMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
    humberger.style.display = 'none';
    header.style.position='static'
  } else {
    mobileMenu.style.display = 'none';
  }
}

function closeMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    humberger.style.display = 'block';
    header.style.position='fixed';
    
  }
}

function menuClick() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    humberger.style.display = 'block';
    header.style.position='fixed';

  }
}

btn.addEventListener("click", toggleMenu);
closeIcon.addEventListener('click', closeMenu);

let arr = Array.from(menu);
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('click', menuClick);
}
