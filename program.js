
const menuBtn = document.querySelector('.navbar__btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.setAttribute("aria-expanded", true)
    menuOpen = true;
  } else {
    menuBtn.setAttribute("aria-expanded", false);
    menuOpen = false;
  }
});