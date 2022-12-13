
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


const customizationBtn = document.getElementById("customization");
const customiztion = document.querySelector(".cutomiztion");
const closeCustomiztion = document.querySelector("#customization__close");
let isCustomiztionWindowOpen = false;

customizationBtn.addEventListener('click', showCustomizationWindow);


function showCustomizationWindow() {
  if(isCustomiztionWindowOpen) {
    customiztion.classList.remove('open');
    customiztion.classList.add('close');
  } else {
    customiztion.classList.remove('close');
    customiztion.classList.add('open');
  }
}

