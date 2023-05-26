// dark mode light
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


//menu bar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>
{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>
{
    document.querySelector('#search-form').classList.remove('active');
}


// *************   Imgae slide section      ***************//
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });










//dot
let dot = document.querySelector('#dot');
let icons = document.querySelector('.icons');

dot.onclick = () =>
{
    dot.classList.toggle('bx-dots-vertical-rounded');
    icons.classList.toggle('dot');
}

