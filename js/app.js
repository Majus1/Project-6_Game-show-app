// The variables used.
const qwertySection = document.getElementById("qwerty");
const ourPhrase = document.getElementById("phrase");

let missed = 0;

const startButton = document.getElementsByClassName("btn__reset")[0];

// The event full of 5 phrases I thought of
phrases = ["lump", "bucket hat", "sup", "tattoo", "polaroid"];

// The event listiner
startButton.addEventListener("click", ()=> {
    let overlay =document.querySelector("div");
    overlay.style.display = "none";
});

/*
// Funkcije #1 vzme neko random besedo iz arraya slednjo besedo razbije in vrne novi array sestavljen iz črk razbite besede.
*/

// function getRandomPhraseAsArray(arr){
    
// } 

console.log(Math.floor(Math.random() * phrases.length + 1));¸

/*
Man ustvaril si dope funkcijo ki returna random zaporedje nekega elmenta v arraju v celih številih
*/