"use strict";

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

let i = 0;

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
const itemsContainer = document.getElementById("items-container");
const activeImgContainer = document.querySelector(".col-big");
const asideImgContainer = document.querySelector(".col-small");
const asideRow = document.createElement("div");
asideRow.classList.add("col-small-row");

console.log(activeImgContainer);
console.log(asideImgContainer);


// Al click dell'utente sulle frecce verso l'alto o il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

{/* <div id="items-container" class="container">
        <div class="col-big">
            <img class="item-img" src="img/01.webp" alt="">
            <div class="item-description">
                <h2 class="item-title">Amazing Spiderman</h2>
                <p class="item-text">Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.</p>
            </div>
        </div>
        <div class="col-small">
            <div class="col-small-row">
                <img class="item-img" src="img/02.webp" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="img/03.webp" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="img/04.webp" alt="">
            </div>
            <div class="col-small-row">
                <img class="item-img" src="img/05.webp" alt="">
            </div>
            <!-- Buttons -->
            <button id="previous-btn" class="previous btns" type="button"><i class="fa-solid fa-chevron-up"></i></button>
            <button id="next-btn" class="next btns" type="button"><i class="fa-solid fa-chevron-down"></i></button>
        </div>
</div> */}