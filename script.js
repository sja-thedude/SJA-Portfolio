const logo = document.querySelector('.logo');
const icon = document.querySelector('.btn');
const menuList = document.querySelector('.nav-ditems');
const mainBody = document.querySelector('.mainabout');
const menuItems = Array.from(document.querySelectorAll('.nav-ditem'));
const menuButton = document.querySelector('.menubtn');

const filterStyle = () => {
  mainBody.style.filter = 'none';
  logo.style.filter = 'none';
};

const toggleMenu = () => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
};

menuButton.addEventListener('click', () => {
  toggleMenu();
  if (menuButton.classList.contains('active')) {
    icon.src = 'img/Icon-close.png';
    mainBody.style.filter = 'none';
    logo.style.filter = 'none';
  } else {
    filterStyle();
    window.location.reload();
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
    menuList.classList.remove('active');
    filterStyle();
    icon.src = 'img/Union.png';
  });
});

window.addEventListener('resize', () => {
  if (mainBody.clientWidth >= 992 && menuButton.classList.contains('active')) {
    window.location.reload();
  }
});

const form = document.querySelector('.contact-form');
const mail = document.getElementById('mail');
const name = document.getElementById('name');
const message = document.getElementById('msg');
const error = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
  const msgs = [];

  if (mail.value !== mail.value.toLowerCase()) {
    msgs.push('* Please enter valid email address.');
    msgs.push('* Email address must be in lowercase.');
  }

  if (msgs.length > 0) {
    e.preventDefault();
    error.innerHTML = msgs.join('<br/>');
    mail.style.border = '2px solid #f00';
    mail.style.borderRadius = '4px';
  }
});

let formData = { name: '', mail: '', msg: '' };

const saveToLocalStorage = () => {
  localStorage.setItem('form_data', JSON.stringify(formData));
};

name.addEventListener('change', () => {
  formData.name = name.value;
  saveToLocalStorage();
});
mail.addEventListener('change', () => {
  formData.mail = mail.value;
  saveToLocalStorage();
});
message.addEventListener('change', () => {
  formData.msg = message.value;
  saveToLocalStorage();
});
window.onload = () => {
  if (localStorage.getItem('form_data') !== null) {
    formData = JSON.parse(localStorage.getItem('form_data'));
    name.value = formData.name;
    mail.value = formData.mail;
    message.value = formData.msg;
  }
};

const data = [
  {
    pro: 'Html/CSS Capstone Project',
    proimg: 'img/project1.png',
    prodes: 'Microverse is an online remote school for Software developers! The main Aim of it is to provide related skills to land a remote Job!',
    prolang: ['html', 'Javascript', 'css'],
    live_version: 'https://sja-thedude.github.io/Capstone-Project-Module1/',
    source_code: 'https://github.com/sja-thedude/Capstone-Project-Module1',
  },
  {
    pro: 'React Capstone Project',
    proimg: 'img/project2.png',
    prodes: 'This app displays a list of all popular Forex pair real-time prices. Users can click on currency pair to view the latest updates about the pair.',
    prolang: ['Css', 'React', 'Redux'],
    live_version: 'https://sja-forex-metrics-webapp.netlify.app/',
    source_code: 'https://github.com/sja-thedude/Forex-Metrics-Webapp',
  },
  {
    pro: 'Rails Capstone Project',
    proimg: 'img/project3.png',
    prodes: 'This app displays a list of all popular Forex pair real-time prices. Users can click on currency pair to view the latest updates about the pair.',
    prolang: ['html', 'Ruby on rails', 'Postgresql'],
    live_version: 'https://sja-forex-metrics-webapp.netlify.app/',
    source_code: 'https://github.com/sja-thedude/Forex-Metrics-Webapp',
  },
  {
    pro: 'Final Capstone Project',
    proimg: 'img/project4.png',
    prodes: 'This project is build for the Final Capstone Project which is based on an app to book an appointment to the doctor, we followed the given design of the website, but we personalized the content.',
    prolang: ['React', 'Ruby on rails', 'Postgresql'],
    live_version: 'https://frontend-doctor-api1.netlify.app/',
    source_code: 'https://github.com/sja-thedude/book-an-appointment-backend',
  },
];

const [project] = data;
const section = document.querySelector('.mobdesk');
section.innerHTML = `<div id="popup" class="popup">

  <div class="mheader">
    <div class="pro"><h3 class="protitle">${project.pro}</h3></div>
      <button data-close-button class="closebtn">&times;</button>
    </div>
    <div class="imgpop"><img src=${project.proimg} alt="" class="proimg"></div>
  <p class="prodes">${project.prodes}</p>
  <ul class="prolang" id="prolang">
    <li class="pro-item"><span class=""></span></li>
    <li class="pro-item"><span class="html">${project.prolang[0]}</span></li>
    <li class="pro-item"><span class="ruby">${project.prolang[1]}</span></li>
    <li class="pro-item"><span class="css">${project.prolang[2]}</span></li>
    <li class="pro-item"><span class=""></span></li>
  </ul>
<div class="action">
  <button class="actbtn-live" type="button">See live <img src="img/Icon1.png" alt="see live icon"></button>
  <button class="actbtn-source" type="button">See source <img src="img/Icon2.png" alt="see live icon"></button>
</div>
</div>
<div id="overlay"></div>`;

const secData = data[0];

document.querySelector('.popup .actbtn-live').onclick = () => {
  window.location.href = secData.live_version;
};
document.querySelector('.popup .actbtn-source').onclick = () => {
  window.location.href = secData.source_code;
};

const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add('active');
  overlay.classList.add('active');
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    section.classList.remove('invisible');
    document.body.classList.add('fixed');
    const popup = document.querySelector(button.dataset.popupTarget);
    openPopup(popup);
  });
});

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active');
  popups.forEach((popup) => {
    closePopup(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    section.classList.add('invisible');
    document.body.classList.remove('fixed');
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});
