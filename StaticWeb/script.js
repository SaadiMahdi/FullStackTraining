$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
  });

const navbar ={
    button: document.querySelector('.main-nav ul .button'),
    nav: document.querySelector('.main-nav'),
    bars: document.querySelector('.main-nav .Menu'),
    elements: document.querySelector('.main-nav .main-nav-elements'),
};

const regbutton =  document.querySelector('.about-sub .button');

const modal = document.querySelector('.modal');

const close = modal.querySelector('.close');

const schedule ={
    buttons: document.querySelectorAll('.schedule-nav a'),
    days: document.querySelectorAll('.schedule-day'),
};

const MediaQuery = window.matchMedia('(max-width: 800px)');




function showModal(){
    navbar.button.onclick = function(){
        modal.classList.add('open');
    };
    regbutton.onclick = function(){
        modal.classList.add('open');
    };
};

showModal();

function closeModal(){
    close.onclick = function(){
        modal.classList.remove('open');
    }
}

closeModal();


function responsiveNav() {
    navbar.bars.onclick = function(){
        
        if(navbar.elements.classList.contains("show")){
            navbar.elements.classList.remove("show");
        }else{
            navbar.elements.classList.add("show");
        }
    };
}
responsiveNav();


function HideDays() {
    schedule.days.forEach((elm) =>{
        elm.classList.remove("active");
    });
};


schedule.buttons.forEach(function(elm, i){
    elm.onclick = function(){
        HideDays();
        schedule.days[i].classList.add("active");
    };
});




function scrollHandler() {
    if(window.pageYOffset > 300) navbar.nav.classList.add("fixed");
    else navbar.nav.classList.remove("fixed");
}

document.onscroll = scrollHandler;

scrollHandler();
