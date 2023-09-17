// dark mode light
var theme=0;
let darkModeIcon = document.querySelector('#darkMode-icon');
let neonModeIcon = document.querySelector('#neon-icon');
darkModeIcon.onclick = () => {
    
    if(theme === 0)
    {
        darkModeIcon.classList.toggle('bx-sun');
        
        document.body.classList.add('dark-mode');
        document.body.classList.remove('neon-mode');
        theme=1;
    }
    else if(theme === 1)
    {
        darkModeIcon.classList.toggle('bx-menu');
        
        document.body.classList.remove('dark-mode');
        document.body.classList.add('neon-mode');
        theme=2;
    }
    else
    {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.remove('dark-mode');
        document.body.classList.remove('neon-mode');
        theme = 0;
    }


    
    
};

// neon
// let neonModeIcon = document.querySelector('#neon-icon');

// neonModeIcon.onclick = () => {
//     neonModeIcon.classList.toggle('bx-happy-heart-eyes');
//     document.body.classList.toggle('neon-mode');
// };

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


// *************   Image slide    ***************//
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

// *************   Review slide  ***************//
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 600000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
        }, 
          
    },
    loop:true,
  });  


//*********** */   loader section designing   ***************
function loader()
{
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut()
{
    setInterval(loader, 1000);
}

window.onload = fadeOut;









//dot
let dot = document.querySelector('#dot');
let icons = document.querySelector('.icons');

dot.onclick = () =>
{
    dot.classList.toggle('bx-dots-vertical-rounded');
    icons.classList.toggle('dot');
}


//****** */ log-in and sign-in section *********************
const formOpenBtn = document.querySelector("#form-Open");
const formPopUp = document.querySelector(".form-popup");
const formCloseButton = document.querySelector("#close_Btn");
const logInBtn = document.querySelector("#login");
const signInBtn = document.querySelector("#signup");

formOpenBtn.addEventListener("click", () => formPopUp.classList.add("show"));
formCloseButton.addEventListener("click", () => formPopUp.classList.remove("show"));

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.add("active");
});


logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.remove("active");
});
