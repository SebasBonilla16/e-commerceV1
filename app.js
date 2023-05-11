//Hamburger Menu
// uses DOM to search for 1st element that matches CSS selector
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

// Grabs menu element from html and toggles the hamburger menu and navbar
menu.onclick = () => {
  menu.classList.toggle(`bx-x`);
  navbar.classList.toggle(`active`);
};
// When scroll on page, hamburger menu is removed
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};







// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //Checks if the slide index is out of bounds, wraps around to the first slide
  if (n < 1) {slideIndex = slides.length} //Wrap around to the last slide
  for (i = 0; i < slides.length; i++) { //hide all slides
    slides[i].style.display = "none";
  }
  //Displays the current slide and mark corresponding dot as active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}