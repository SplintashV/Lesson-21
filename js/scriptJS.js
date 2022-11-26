alert('Привет это алерт')

const card = document.querySelector(".card");
const btn = document.querySelector(".card-btn")
const modal = document.querySelector('.overlay')
const modalClose = document.querySelector(".custom-modal__btn")

const burger = document.querySelector(".burger");
const header__nav = document.querySelector(".header__nav");
const header__list = document.querySelector(".header__list");

console.log(card)

const brandColor = "#CE93D8"

card.style.backgroundColor = brandColor;

console.log(modal);

//card.addEventListener('click', function(){
//    card.style.backgroundColor = "#81D4FA";
//    
//    console.log('click');
//});

btn.addEventListener('click',function (){
    modal.classList.add("show");
})

//card.addEventListener('mouseover', function(){
//    card.style.backgroundColor = "grey";
//    card.classList.add("active")
//    console.log('hover');
//});
//
//card.addEventListener('mouseout', function(){
//    card.style.backgroundColor = brandColor
//    card.classList.toggle("active")
//    console.log('убрал');
//});

modalClose.addEventListener('click' , function(){
    modal.classList.remove("show");
})

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active')
    header__nav.classList.toggle('header__nav-active')
    header__list.classList.toggle('header__list-active')
})