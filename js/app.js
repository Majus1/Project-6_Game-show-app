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


<<<<<<< HEAD
 function getRandomPhraseAsArray(phrase) {
    /*
    • Slednja funkcija najde random število med o in dolžino našega arraya.
    • Poišče element znotraj arraya kateri je bil označen z randomNumber indexom.
    • Slednji element razbije na posamične in jih shrani v novi array.
    • Returna nam naš novi array polen črk izbrane besede.
    • Kar koli je returnano je shranjeno pod variabl v z naslovom randomPhraseInLetters.
    */
    let randomNumber = Math.floor(Math.random() * phrase.length);
    let randomPhraseSelected = phrase[randomNumber];
    let lettersSplitFromPgrase = randomPhraseSelected.split("");
    return lettersSplitFromPgrase;
};

// function addPhraseToDisplay(lettersSplitFromPhrase) {
//     for (let i = 0; i < lettersSplitFromPhrase.length; i++) {};
//     console.log("To je ta sexy črka", lettersSplitFromPhrase[i]);
// };
=======
// function getRandomPhraseAsArray(arr){
    
// } 
>>>>>>> parent of 93c7b20 (Added and tested function getRandomPhraseAsArray)

console.log(Math.floor(Math.random() * phrases.length + 1));¸

/*
    ...
*/