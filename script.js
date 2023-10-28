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
    pro: 'Microverse',
    proimg: 'img/proj1.png',
    prodes: 'Microverse is an online remote school for Software developers! The main Aim of it is to provide related skills to land a remote Job!',
    prolang: ['Html', 'Javascript', 'Css'],
    live_version: 'https://sja-thedude.github.io/Microverse/',
    source_code: 'https://github.com/sja-thedude/Microverse',
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

const data1 = [
  {
    pro: 'Forex Metrics App',
    proimg: 'img/proj2.png',
    prodes: 'This app displays a list of all popular Forex pair real-time prices. Users can click on currency pair to view the latest updates about the pair.',
    prolang: ['Css', 'React', 'Redux'],
    live_version: 'https://sja-forex-metrics-webapp.netlify.app/',
    source_code: 'https://github.com/sja-thedude/Forex-Metrics-Webapp',
  },
];

const [project1] = data1;
const section1 = document.querySelector('.mobdesk1');
section1.innerHTML = `<div id="popup1" class="popup1">

  <div class="mheader">
    <div class="pro"><h3 class="protitle">${project1.pro}</h3></div>
      <button data-close-button class="closebtn">&times;</button>
    </div>
    <div class="imgpop"><img src=${project1.proimg} alt="" class="proimg"></div>
  <p class="prodes">${project1.prodes}</p>
  <ul class="prolang" id="prolang">
    <li class="pro-item"><span class=""></span></li>
    <li class="pro-item"><span class="html">${project1.prolang[0]}</span></li>
    <li class="pro-item"><span class="ruby">${project1.prolang[1]}</span></li>
    <li class="pro-item"><span class="css">${project1.prolang[2]}</span></li>
    <li class="pro-item"><span class=""></span></li>
  </ul>
<div class="action">
  <button class="actbtn-live" type="button">See live <img src="img/Icon1.png" alt="see live icon"></button>
  <button class="actbtn-source" type="button">See source <img src="img/Icon2.png" alt="see live icon"></button>
</div>
</div>
<div id="overlay"></div>`;

const secData1 = data1[0];

document.querySelector('.popup1 .actbtn-live').onclick = () => {
  window.location.href = secData1.live_version;
};
document.querySelector('.popup1 .actbtn-source').onclick = () => {
  window.location.href = secData1.source_code;
};

const openPopupButtons1 = document.querySelectorAll('[data-popup-target]');
const closePopupButtons1 = document.querySelectorAll('[data-close-button]');
const overlay1 = document.getElementById('overlay');

function openPopup1(popup1) {
  if (popup1 == null) return;
  popup1.classList.add('active');
  overlay1.classList.add('active');
}

function closePopup1(popup1) {
  if (popup1 == null) return;
  popup1.classList.remove('active');
  overlay1.classList.remove('active');
}

openPopupButtons1.forEach((button) => {
  button.addEventListener('click', () => {
    section1.classList.remove('invisible');
    document.body.classList.add('fixed');
    const popup1 = document.querySelector(button.dataset.popupTarget);
    openPopup1(popup1);
  });
});

overlay1.addEventListener('click', () => {
  const popups1 = document.querySelectorAll('.popup1.active');
  popups1.forEach((popup1) => {
    closePopup1(popup1);
  });
});

closePopupButtons1.forEach((button) => {
  button.addEventListener('click', () => {
    section1.classList.add('invisible');
    document.body.classList.remove('fixed');
    const popup1 = button.closest('.popup1');
    closePopup1(popup1);
  });
});

const data2 = [
  {
    pro: 'SpaceX Travellers Hub',
    proimg: 'img/proj3.png',
    prodes: 'This app consists of Rockets, Missions and Profile Section. Users can reserve or cancel the booking with the reservation button for rockets/dragons and can join or leave selected missions. All of these are combined and displayed in the My Profile section.',
    prolang: ['Html', 'React', 'Redux'],
    live_version: 'https://sjathedude-spacetravellershub.netlify.app/',
    source_code: 'https://github.com/sja-thedude/Space-Travelers-Hub',
  },
];

const [project2] = data2;
const section2 = document.querySelector('.mobdesk2');
section2.innerHTML = `<div id="popup2" class="popup2">

  <div class="mheader">
    <div class="pro"><h3 class="protitle">${project2.pro}</h3></div>
      <button data-close-button class="closebtn">&times;</button>
    </div>
    <div class="imgpop"><img src=${project2.proimg} alt="" class="proimg"></div>
  <p class="prodes">${project2.prodes}</p>
  <ul class="prolang" id="prolang">
    <li class="pro-item"><span class=""></span></li>
    <li class="pro-item"><span class="html">${project2.prolang[0]}</span></li>
    <li class="pro-item"><span class="ruby">${project2.prolang[1]}</span></li>
    <li class="pro-item"><span class="css">${project2.prolang[2]}</span></li>
    <li class="pro-item"><span class=""></span></li>
  </ul>
<div class="action">
  <button class="actbtn-live" type="button">See live <img src="img/Icon1.png" alt="see live icon"></button>
  <button class="actbtn-source" type="button">See source <img src="img/Icon2.png" alt="see live icon"></button>
</div>
</div>
<div id="overlay"></div>`;

const secData2 = data2[0];

document.querySelector('.popup2 .actbtn-live').onclick = () => {
  window.location.href = secData2.live_version;
};
document.querySelector('.popup2 .actbtn-source').onclick = () => {
  window.location.href = secData2.source_code;
};

const openPopupButtons2 = document.querySelectorAll('[data-popup-target]');
const closePopupButtons2 = document.querySelectorAll('[data-close-button]');
const overlay2 = document.getElementById('overlay');

function openPopup2(popup2) {
  if (popup2 == null) return;
  popup2.classList.add('active');
  overlay2.classList.add('active');
}

function closePopup2(popup2) {
  if (popup2 == null) return;
  popup2.classList.remove('active');
  overlay2.classList.remove('active');
}

openPopupButtons2.forEach((button) => {
  button.addEventListener('click', () => {
    section2.classList.remove('invisible');
    document.body.classList.add('fixed');
    const popup2 = document.querySelector(button.dataset.popupTarget);
    openPopup2(popup2);
  });
});

overlay2.addEventListener('click', () => {
  const popups2 = document.querySelectorAll('.popup2.active');
  popups2.forEach((popup2) => {
    closePopup2(popup2);
  });
});

closePopupButtons2.forEach((button) => {
  button.addEventListener('click', () => {
    section2.classList.add('invisible');
    document.body.classList.remove('fixed');
    const popup2 = button.closest('.popup2');
    closePopup2(popup2);
  });
});

const data3 = [
  {
    pro: 'Book an Appointment',
    proimg: 'img/proj4.png',
    prodes: 'This project is based on an app to book an appointment to the doctor, we followed the given design of the website, but we personalized the content.',
    prolang: ['React', 'Rails', 'Postgresql'],
    live_version: 'https://frontend-doctor-api1.netlify.app/',
    source_code: 'https://github.com/sja-thedude/book-an-appointment-backend',
  },
];

const [project3] = data3;
const section3 = document.querySelector('.mobdesk3');
section3.innerHTML = `<div id="popup3" class="popup3">

  <div class="mheader">
    <div class="pro"><h3 class="protitle">${project3.pro}</h3></div>
      <button data-close-button class="closebtn">&times;</button>
    </div>
    <div class="imgpop"><img src=${project3.proimg} alt="" class="proimg"></div>
  <p class="prodes">${project3.prodes}</p>
  <ul class="prolang" id="prolang">
    <li class="pro-item"><span class=""></span></li>
    <li class="pro-item"><span class="html">${project3.prolang[0]}</span></li>
    <li class="pro-item"><span class="ruby">${project3.prolang[1]}</span></li>
    <li class="pro-item"><span class="css">${project3.prolang[2]}</span></li>
    <li class="pro-item"><span class=""></span></li>
  </ul>
<div class="action">
  <button class="actbtn-live" type="button">See live <img src="img/Icon1.png" alt="see live icon"></button>
  <button class="actbtn-source" type="button">See source <img src="img/Icon2.png" alt="see live icon"></button>
</div>
</div>
<div id="overlay"></div>`;

const secData3 = data3[0];

document.querySelector('.popup3 .actbtn-live').onclick = () => {
  window.location.href = secData3.live_version;
};
document.querySelector('.popup3 .actbtn-source').onclick = () => {
  window.location.href = secData3.source_code;
};

const openPopupButtons3 = document.querySelectorAll('[data-popup-target]');
const closePopupButtons3 = document.querySelectorAll('[data-close-button]');
const overlay3 = document.getElementById('overlay');

function openPopup3(popup3) {
  if (popup3 == null) return;
  popup3.classList.add('active');
  overlay3.classList.add('active');
}

function closePopup3(popup3) {
  if (popup3 == null) return;
  popup3.classList.remove('active');
  overlay3.classList.remove('active');
}

openPopupButtons3.forEach((button) => {
  button.addEventListener('click', () => {
    section3.classList.remove('invisible');
    document.body.classList.add('fixed');
    const popup3 = document.querySelector(button.dataset.popupTarget);
    openPopup3(popup3);
  });
});

overlay3.addEventListener('click', () => {
  const popups3 = document.querySelectorAll('.popup3.active');
  popups3.forEach((popup3) => {
    closePopup3(popup3);
  });
});

closePopupButtons3.forEach((button) => {
  button.addEventListener('click', () => {
    section3.classList.add('invisible');
    document.body.classList.remove('fixed');
    const popup3 = button.closest('.popup3');
    closePopup3(popup3);
  });
});
