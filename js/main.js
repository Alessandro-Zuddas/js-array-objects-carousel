"use strict";

function carouselCore(carouselIndex){

    if(carouselIndex === 0){

        container.innerHTML = 
        `
        <div class="col-big">
            <img class="item-img" src="${images[0].image}" alt="">
            <div class="item-description">
                <h2 class="item-title">${images[0].title}</h2>
                <p class="item-text">${images[0].text}</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="${images[1].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[2].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[3].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[4].image}" alt="">
            </div>
        </div>
        `
    }else if(carouselIndex === 1){

        container.innerHTML = 
        `
        <div class="col-big">
            <img class="item-img" src="${images[1].image}" alt="">
            <div class="item-description">
                <h2 class="item-title">${images[1].title}</h2>
                <p class="item-text">${images[1].text}</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="${images[2].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[3].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[4].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[0].image}" alt="">
            </div>
        </div>
        `
    }else if(carouselIndex === 2){

        container.innerHTML = 
        `
        <div class="col-big">
            <img class="item-img" src="${images[2].image}" alt="">
            <div class="item-description">
                <h2 class="item-title">${images[2].title}</h2>
                <p class="item-text">${images[2].text}</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="${images[3].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[4].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[0].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[1].image}" alt="">
            </div>
        </div>
        `
    }else if(carouselIndex === 3){

        container.innerHTML = 
        `
        <div class="col-big">
            <img class="item-img" src="${images[3].image}" alt="">
            <div class="item-description">
                <h2 class="item-title">${images[3].title}</h2>
                <p class="item-text">${images[3].text}</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="${images[4].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[0].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[1].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[2].image}" alt="">
            </div>
        </div>
        `
    }else if(carouselIndex === 4){

        container.innerHTML = 
        `
        <div class="col-big">
            <img class="item-img" src="${images[4].image}" alt="">
            <div class="item-description">
                <h2 class="item-title">${images[4].title}</h2>
                <p class="item-text">${images[4].text}</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="${images[0].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[1].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[2].image}" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="${images[3].image}" alt="">
            </div>
        </div>
        `
    }

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
let carouselIndex = 0;

carouselCore(carouselIndex);

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

const autoplay = setInterval(function(){
    carouselIndex++;
    carouselCore(carouselIndex);
}, 3000);

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: