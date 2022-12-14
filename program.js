
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
const closeCustomiztion = document.querySelector(".customization__close");
closeCustomiztion.addEventListener('click', closeCustomizationWindow);

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

function closeCustomizationWindow() {
 customiztion.classList.toggle("close")
 customiztion.classList.toggle("open")
}



//URL regex that starts with HTTP or HTTPS
const regex1 = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
//URL regex that doesn’t start with HTTP or HTTPS 
const regex2 = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;


const url = document.getElementById("url");
const urlSubmitBtn = document.querySelector("#urlSubmit");
const urlWrapper = document.querySelector(".hero__inner__form__input");
const errorMessage = document.querySelector(".hero__inner__form__input-error__message");

let validURL;
urlSubmitBtn.addEventListener('click', getTheURL)

function getTheURL() {

  if(regex1.test(url.value) || regex2.test(url.value)) {
    
    validURL = url.value;
    console.log(validURL)
  } else {
    urlWrapper.classList.add("error");
    errorMessage.classList.add("show")
    errorMessage.classList.remove("hide")
    console.log('false')
  }
  
}

url.addEventListener('focus', removeErrorMessage);

function removeErrorMessage() {
  urlWrapper.classList.remove("error");
  errorMessage.classList.add("hide")
  errorMessage.classList.remove("show")
}