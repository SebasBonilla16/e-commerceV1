//Hamburger Menu
let menu = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menu.onclick = () => {
    menu.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
};

window.onscroll = () => {
    menu.classList.remove(`bx-x`);
    navbar.classList.remove(`active`);
};







// SLideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}