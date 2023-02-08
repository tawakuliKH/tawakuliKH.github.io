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

const projects = [
  {
    'image': 'assets/desktop files/snapshot-1.png',
    'popUpImage': 'assets/popup/popup1.png',
    'popUpDesc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'class': '',
    'title': 'Tonic',
    'client': 'CANOPY',
    'role': 'Back End Dev',
    'roleYear': '2015',
    'desc': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'techs': ['html', 'css', 'javascript','Github','Ruby','Bootstrap'],
  },
  {
    'image': 'assets/desktop files/snapshot-2.png',
    'popUpImage': 'assets/popup/popup2.png',
    'popUpDesc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'class': 'projects',
    'title': 'Multi-Post Stories',
    'client': 'CANOPY',
    'role': 'Back End Dev',
    'roleYear': '2015',
    'desc': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'techs': ['html', 'css', 'javascript','Github','Ruby','Bootstrap'],
  },
  {
    'image': 'assets/desktop files/snapshot-3.png',
    'popUpImage': 'assets/popup/popup3.png',
    'popUpDesc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'class': '',
    'title': 'Tonic',
    'client': 'CANOPY',
    'role': 'Back End Dev',
    'roleYear': '2015',
    'desc': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'techs': ['html', 'css', 'javascript','Github','Ruby','Bootstrap'],
  },
  {
    'image': 'assets/desktop files/snapshot-4.png',
    'popUpImage': 'assets/popup/popup4.png',
    'popUpDesc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'class': 'projects',
    'title': 'Multi Post-Stories',
    'client': 'CANOPY',
    'role': 'Back End Dev',
    'roleYear': '2015',
    'desc': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'techs': ['html', 'css', 'javascript','Github','Ruby','Bootstrap'],
  }
]