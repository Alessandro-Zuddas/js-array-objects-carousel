"use strict";

function carouselSettings(carouselIndex, miniatureOne, miniatureTwo, miniatureThree, miniatureFour){

    container.innerHTML = 
    `
    <div class="col-big">
        <img class="item-img" src="${images[carouselIndex].image}" alt="">
        <div class="item-description">
            <h2 class="item-title">${images[carouselIndex].title}</h2>
            <p class="item-text">${images[carouselIndex].text}</p>
        </div>
    </div>
    <div class="col-small">
        <div class="col-small-row">
            <img class="item-img" src="${miniatureOne}" alt="">
        </div>
        <div class="col-small-row">
            <img class="item-img" src="${miniatureTwo}" alt="">
        </div>
        <div class="col-small-row">
            <img class="item-img" src="${miniatureThree}" alt="">
        </div>
        <div class="col-small-row">
            <img class="item-img" src="${miniatureFour}" alt="">
        </div>
        <!-- Buttons -->
        <button id="previous-btn" class="previous btns" type="button"><i class="fa-solid fa-chevron-up"></i></button>
        <button id="next-btn" class="next btns" type="button"><i class="fa-solid fa-chevron-down"></i></button>
    </div>
    `
};

function carouselCore(carouselIndex){

    if(carouselIndex === 0){

        carouselSettings(carouselIndex, stateTwo.image, stateThree.image, stateFour.image, stateFive.image);

    }else if(carouselIndex === 1){

        carouselSettings(carouselIndex, stateThree.image, stateFour.image, stateFive.image, stateOne.image);

    }else if(carouselIndex === 2){

        carouselSettings(carouselIndex, stateFour.image, stateFive.image, stateOne.image, stateTwo.image);

    }else if(carouselIndex === 3){

        carouselSettings(carouselIndex, stateFive.image, stateOne.image, stateTwo.image, stateThree.image);

    }else if(carouselIndex === 4){

        carouselSettings(carouselIndex, stateOne.image, stateTwo.image, stateThree.image, stateFour.image);

    }

    const nextBtn = document.getElementById("next-btn");
    const previousBtn = document.getElementById("previous-btn");

    nextBtn.addEventListener("click", function(){

        if(carouselIndex == 4){
            carouselIndex = 0;
            carouselCore(carouselIndex);
        }else{
            carouselIndex++;
            carouselCore(carouselIndex);
        }

    });

    previousBtn.addEventListener("click", function(){

        if(carouselIndex <= 0){
            carouselIndex = 4;
            carouselCore(carouselIndex);
        }else{
            carouselIndex--;
            carouselCore(carouselIndex);
        }

    });

}

function startAutoplay(){
    autoplay = setInterval(function(){
        if(carouselIndex < 4){
            carouselIndex++;
            carouselCore(carouselIndex);
        }else{
            carouselIndex = 0;
            carouselCore(carouselIndex);
        }
    }, 3000);
}

function stopAutoplay(){
    clearInterval(autoplay);
}

function reversedAutoplay(){
    autoplay = setInterval(function(){
        if(carouselIndex == 0){
            carouselIndex = 4;
            carouselCore(carouselIndex);
        }else if(carouselIndex <= 4){
            carouselIndex--;
            carouselCore(carouselIndex);
        }
    }, 3000);
}

/*------------------------------------------------------------------------------
                                FUNCTIONS 
-------------------------------------------------------------------------------*/

// Array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
const container = document.getElementById("items-container");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const reverseButton = document.getElementById("reverse-btn");
let carouselIndex = 0;
let autoplay;
let stateOne = images[0];
let stateTwo = images[1];
let stateThree = images[2];
let stateFour = images[3];
let stateFive = images[4];

carouselCore(carouselIndex);

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
startButton.addEventListener("click", function(){
    startAutoplay();
});

stopButton.addEventListener("click", function(){
    stopAutoplay();
});

reverseButton.addEventListener("click", function(){
    reversedAutoplay();
});