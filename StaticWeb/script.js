$(document).ready(function () {
    $(".owl-carousel").owlCarousel({ items: 4, nav: true });
  });

const navbar ={
    button: document.querySelector('.main-nav ul .button'),
    nav: document.querySelector('.main-nav'),
};

const modal = document.querySelector('.modal');

const close = modal.querySelector('.close');

const schedule ={
    buttons: document.querySelectorAll('.schedule-nav a'),
    days: document.querySelectorAll('.schedule-day'),
};

function showModal(){
    navbar.button.onclick = function(){
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