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
      menuBody.style.filter = 'none';
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