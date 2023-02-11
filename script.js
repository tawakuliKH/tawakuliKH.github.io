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
    image: 'assets/desktop files/snapshot-1.png',
    popUpImage: 'assets/popup/popup1.png',
    popUpDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    class: '',
    title: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    roleYear: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
  },
  {
    image: 'assets/desktop files/snapshot-2.png',
    popUpImage: 'assets/popup/popup2.png',
    popUpDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    class: 'projects',
    title: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    roleYear: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
  },
  {
    image: 'assets/desktop files/snapshot-3.png',
    popUpImage: 'assets/popup/popup3.png',
    popUpDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    class: '',
    title: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    roleYear: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
  },
  {
    image: 'assets/desktop files/snapshot-4.png',
    popUpImage: 'assets/popup/popup4.png',
    popUpDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    class: 'projects',
    title: 'Multi Post-Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    roleYear: '2015',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
  },
];

const projectSection = document.getElementById('work');

projects.forEach((item) => {
  projectSection.innerHTML += ` 
  <section class="works ${item.class}" id="works">
            <div class="snapshot"><img src="${item.image}" alt="Project Screenshot" class="image-project"> </div>
            <div class="info">
                <div class="title">${item.title}</div>
                <div class="frame">
                    <div class="client">
                        <div class="name">
                        ${item.client}
                        </div>
                    </div>
                    <div class="counter"></div>

                    <div class="role">
                        <div class="text role-name">${item.role}</div>
                    </div>
                    <div class="counter"></div>

                    <div class="role">
                        <div class="text role-year">${item.roleYear}</div>
                    </div>
                </div>

                <div class="desc">
                ${item.desc}
                    </div>

                <div class="tags">
                    <div>
                        <li class="tag"><a href="" class="html">${item.techs[0]}</a></li>
                    </div>
                    <div>
                        <li class="tag"><a href="" class="css">${item.techs[1]}</a></li>
                    </div>
                    <div>
                        <li class="tag"><a href="" class="javascript">${item.techs[2]}</a></li>
                    </div>
                </div>
                <div class="action btn">
                    <button class="btn-action see-project">See Project</button>
                </div>
            </div>
        </section>
  `;
});

const projectPopUp = document.getElementById('pops');
projects.forEach((item) => {
  projectPopUp.innerHTML += `
  <div class="popUp" id="popUp">
  <div class="popUp-content">
      <div class="heading-popup">
          <div class="title">${item.title}</div>
          <div class="cross-black">
              <img src="assets/cross-black.png" alt="Cross btn" class="cross">
          </div>
      </div>
      <div class="frame">
          <div class="client">
              <div class="name">
              ${item.client}
              </div>
          </div>
          <div class="counter"></div>

          <div class="role">
              <div class="text role-name"> ${item.role}</div>
          </div>
          <div class="counter"></div>

          <div class="role">
              <div class="text role-year">${item.roleYear}</div>
          </div>
      </div>
      <div>
          <img class="image-popup" src="${item.popUpImage}" alt="">
      </div>
      <div class="popUp-description">
          <div class="popUp-desc">
          ${item.popUpDesc}
          </div>

          <div class="technologies">
              <div class="tags">
                  <div>
                      <li class="tag"><a href="#" class="html">${item.techs[0]}</a></li>
                  </div>
                  <div>
                      <li class="tag"><a href="#" class="css">${item.techs[1]}</a></li>
                  </div>
                  <div>
                      <li class="tag"><a href="#" class="javascript">${item.techs[2]}</a></li>
                  </div>
              </div>
              <div class="tags">
                  <div>
                      <li class="tag"><a href="#" class="github">${item.techs[3]}</a></li>
                  </div>
                  <div>
                      <li class="tag"><a href="#" class="ruby">${item.techs[4]}</a></li>
                  </div>
                  <div>
                      <li class="tag"><a href="#" class="bootstrap">${item.techs[5]}</a></li>
                  </div>
              </div>
              <div class="popUp-buttons">
                  <div class="seelive"><a href="#"><img src="assets/popup/see live.png" alt=""></a></div>
                  <div class="seelive"><a href="#"><img src="assets/popup/Enabled.png" alt=""></a></div>
              </div>
          </div>
        
      </div>
  </div>
</div>`;
});

const btnProject = Array.from(document.querySelectorAll('.btn-action'));
const crossBlack = Array.from(document.querySelectorAll('.cross-black'));
const popUp = Array.from(document.querySelectorAll('.popUp'));

for (let i = 0; i < projects.length; i += 1) {
  btnProject[i].addEventListener('click', () => {
    popUp[i].style.display = 'block';
  });

  crossBlack[i].addEventListener('click', () => {
    popUp[i].style.display = 'none';
  });
}

// Form Validation

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact');

const NAME_REQUIRED = 'Please enter your Name';
const EMAIL_REQUIRED = 'Please enter your Email';
const MESSAGE_REQUIRED = 'Please enter your Message';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  const nameValid = hasValue(document.getElementById('user'), NAME_REQUIRED);
  const messageValid = hasValue(document.getElementById('message'), MESSAGE_REQUIRED);
  const emailValid = validateEmail(document.getElementById('email'), EMAIL_REQUIRED, EMAIL_INVALID);
  if (!nameValid || !emailValid || !messageValid) {
    event.preventDefault();
  }
});

// Local Storage Practice
const storageValues = {
  user: '',
  email: '',
  message: '',
};

function updateStorage() {
  storageValues.user = document.getElementById('user').value;
  storageValues.email = document.getElementById('email').value;
  storageValues.message = document.getElementById('message').value;
  localStorage.setItem('contactDetails', JSON.stringify(storageValues));
}

document.getElementById('user').addEventListener('keyup', updateStorage);

document.getElementById('email').addEventListener('keyup', updateStorage);

document.getElementById('message').addEventListener('keyup', '');

const finalStorage = JSON.parse(localStorage.getItem('contactDetails'));
function useStorage() {
  document.getElementById('user').value = finalStorage.user;
  document.getElementById('email').value = finalStorage.email;
  document.getElementById('message').value = finalStorage.message;
}

if (localStorage.getItem('contactDetails')) {
  useStorage();
}
