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


};
