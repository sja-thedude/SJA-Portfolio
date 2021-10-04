let logo = document.querySelector('.logo');
let icon = document.querySelector('.btn');
let menuList = document.querySelector('.nav-ditems');
let mainBody = document.querySelector('.mainabout');
let menuItems = Array.from(document.querySelectorAll('.nav-ditem'));
let menuButton = document.querySelector('.menubtn');

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
    