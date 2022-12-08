
const menuBtn = document.querySelector('.navbar__btn');
const navList = document.querySelector('.navbar__list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.setAttribute("aria-expanded", true)
    navList.classList.toggle("open");
    menuOpen = true;
  } else {
    menuBtn.setAttribute("aria-expanded", false);
    navList.classList.toggle("open");
    menuOpen = false;
  }
});


const setCurrentYear = document.querySelector(".year");
let date = new Date();
let currentYear = date.getFullYear();
setCurrentYear.innerHTML = currentYear;

