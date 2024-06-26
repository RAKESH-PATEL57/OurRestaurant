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
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
    // console.log(1);
}

window.onscroll = () =>
{
    // console.log(1);
    navbar.classList.remove('active');
    menu.classList.add('active');
}

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       // active navbar links
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });

//       // active sections for animation on scroll
//       sec.classList.add("show-animate");
//     }

//   });



// search section           *********************

// document.querySelector('#search-icon').onclick = () =>
// {
//     document.querySelector('#search-form').classList.toggle('active');
// }

// document.querySelector('#close').onclick = () =>
// {
//     document.querySelector('#search-form').classList.remove('active');
// }


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


// *********** */   loader section designing   ***************
function loader()
{
    document.querySelector('.loader-container').classList.add('fade-out');
    document.body.classList.add('loading-off');
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

const homeheader = document.querySelector('.header');
const homepage = document.querySelector('.home');
// const bodyScroll = document.querySelector('.body');

formOpenBtn.onclick = () => {
    formPopUp.classList.add("show");
    homeheader.classList.add('headerblur');
    homepage.classList.add('homeblur');
    // bodyScroll.classList.add('bodyScroll');
  
};
formCloseButton.onclick = () => {
    formPopUp.classList.remove("show");
    homeheader.classList.remove('headerblur');
    homepage.classList.remove('homeblur');
    // bodyScroll.classList.remove('bodyScroll');
}

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.add("active");

});


logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formPopUp.classList.remove("active");
});


//***************** Cart section *********************   ///
let openShopping = document.querySelector('.bx-cart');
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');

let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('cartOpen');
    console.log(1);
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('cartOpen');
    // console.log(1);
})

let listCards = [];
// let api_Url = "./products.json";

async function initApp(){
    // const products = await fetch(url);
    const products = await fetch ('products.json');
    const productsList = await products.json();
    // console.log (productsList);
    let rk = products;

    productsList.forEach((value, key) => {
        let newDiv = document.createElement('totalCartItem');
        
        newDiv.classList.add('item');
        if(value.newprice!=null){
        newDiv.innerHTML = `
           <img src="./images/${value.image}"/>
           <div class="title">${value.name} </div>
           <div class="prices"> <span class="price">${'₹'+value.price.toLocaleString()}</span><span class="newprice">${'₹'+value.newprice.toLocaleString()}</span></div>
           <button onclick="addToCard(${key})">Add To Card</button>   
           `}       

           else{
            newDiv.innerHTML = `
               <img src="./images/${value.image}"/>
               <div class="title">${value.name} </div>
               <div class="prices">${'₹'+value.price.toLocaleString()}</div>
               <button onclick="addToCard(${key})">Add To Card</button>
            `}
        list.appendChild(newDiv);

    });
}

initApp();

async function addToCard(key)
{

    const cartProducts = await fetch ('products.json');
    // const propertyNames = Object.keys(key);
    const cartProductsList = await cartProducts.json();

    if(listCards[key] == null){
        listCards[key] = cartProductsList[key];
        listCards[key].quantity = 1;
     }
    else{
        listCards[key].quantity += 1;
    }
    reloadCard();
}

function reloadCard()
{
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        currentPrice = value.newprice!=null ? value.newprice : value.price;
        subPrice = currentPrice*value.quantity
        totalPrice = totalPrice + subPrice;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${subPrice.toLocaleString()}</div>
                <div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity - 1},${currentPrice})" >-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity + 1},${currentPrice})">+</button>
                    
                </div>
                
            `;
            listCard.appendChild(newDiv);
        }
        else if(value == null)
        {
            count = 0;
            totalPrice = 0;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${subPrice.toLocaleString()}</div>
                <div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity - 1},${currentPrice})" >-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick = "changeQuantity(${key}, ${value.quantity + 1},${currentPrice})">+</button>
                    
                </div>
                
            `;
        }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(key, quantity, price)
{
    if(quantity == 0)
    {
        delete listCards[key];
    }
    else
    {
        listCards[key].quantity = quantity;
        listCards[key].price=price;
    }
    
    reloadCard();
}
