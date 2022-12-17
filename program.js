
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
const customiztion = document.querySelector(".customization");
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
const urlWrapper = document.querySelector(".hero__form__input");
const errorMessage = document.querySelector(".hero__form__input-error__message");



url.addEventListener('focus', removeErrorMessage);

function removeErrorMessage() {
  urlWrapper.classList.remove("error");
  errorMessage.classList.add("hide")
  errorMessage.classList.remove("show")
}



let size = document.getElementsByName('size');
let color = document.getElementsByName('color');
let format = document.getElementsByName('format');

function getCheckedValue(values) {
  let chosenValue;
  for(let i = 0; i < values.length; i++) {
    if(values[i].checked) chosenValue = values[i].value;
  }
  return chosenValue;
}

console.log(getCheckedValue(color), getCheckedValue(size), getCheckedValue(format));


//let baseURL = `http://api.qrserver.com/v1/create-qr-code/?data=${validURL}&size=${getCheckedValue(size)}x${getCheckedValue(size)}&color=${getCheckedValue(color)}&format=${getCheckedValue(format)}`;


let saveChangesBtn = document.querySelector(".customization__save");

saveChangesBtn.addEventListener('click', saveChanges);

function saveChanges() {
  return getCheckedValue(color), getCheckedValue(size), getCheckedValue(format);
}



let qrcode = document.querySelector('.qrcode');
let validURL;
let code = document.querySelector(".qrcode__img-src");
urlSubmitBtn.addEventListener('click', getTheURL)

function getTheURL() {

  if(regex1.test(url.value) || regex2.test(url.value)) {
    
    validURL = url.value;
    console.log(`http://api.qrserver.com/v1/create-qr-code/?data=${validURL}&size=${getCheckedValue(size)}x${getCheckedValue(size)}&color=${getCheckedValue(color)}&format=${getCheckedValue(format)}`)
    code.src = `http://api.qrserver.com/v1/create-qr-code/?data=${validURL}&size=${getCheckedValue(size)}x${getCheckedValue(size)}&color=${getCheckedValue(color)}&format=${getCheckedValue(format)}`
  } else {
    urlWrapper.classList.add("error");
    errorMessage.classList.add("show")
    errorMessage.classList.remove("hide")
    console.log('false')
  }
  
  
    showQrCode()
  
}

function showQrCode() {
  qrcode.classList.remove("hide");
  qrcode.classList.add("show");
}


let clearURL = document.querySelector("#clear__url");

clearURL.addEventListener('click', removeUrlAndImage);

function removeUrlAndImage() {
  url.value = "";
  hideQrCode()
}

function hideQrCode() {
  qrcode.classList.remove("show");
  qrcode.classList.add("hide");
}