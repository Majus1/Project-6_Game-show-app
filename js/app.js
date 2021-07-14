// The variables used.
const qwertySection = document.getElementById("qwerty");
const ourPhrase = document.getElementById("phrase");
const onScreenKeyboar = document.getElementById("qwerty");


let missed = 0;

const startButton = document.getElementsByClassName("btn__reset")[0];

// The event full of 5 phrases I thought of
phrase = ["lump", "bucket hat", "sup", "tattoo", "polaroid"];

// The event listiner
startButton.addEventListener("click", ()=> {
    let overlay =document.getElementById("overlay");
    overlay.style.display = "none";
});


function getRandomPhraseAsArray(phrase) {
    /*
    • Slednja funkcija najde random število med o in dolžino našega arraya.
    • Poišče element znotraj arraya kateri je bil označen z randomNumber indexom.
    • Slednji element razbije na posamične in jih shrani v novi array.
    • Returna nam naš novi array polen črk izbrane besede.
    */
    let randomNumber = Math.floor(Math.random() * phrase.length);
    let randomPhraseSelected = phrase[randomNumber];
    let lettersSplitFromPgrase = randomPhraseSelected.split("");
    return lettersSplitFromPgrase;
};
// Spodnja vrstica shrani retur funkcije getRandomPhraseAsArray() v spodnjo variablo.
const phraseArray = getRandomPhraseAsArray(phrase);


function addPhraseToDisplay(phraseArray) {
    /*
    • Slednja funkcija najde z pomočjo for loopa prešiba čez vse elemnte znotraj arraya
    • Selecta div, ul in li element v našemu DOM.
    • Našemu selectanemu li spremeni text bolj natančno ga nadomesti z elementom iz našega arrya
    • Vsre li elemente appenda našemu <ul> tagu in BOOM pojavijo se na našim DOM
    */
    for (let i = 0; i < phraseArray.length; i++) {
        const div = document.querySelector("#phrase");
        const ul = div.firstElementChild;
        const li = document.createElement("li");
        li.textContent = phraseArray[i];
// Spodnji if statement pogleda textovno vsebino li variable in če ta ni presledek ji dodeli class letter.
        if (li.textContent != " ") {
            li.className = "letter";
        };
        
        ul.appendChild(li);
    };
};
// Spodnja vrstica sproži funkcijo.
addPhraseToDisplay(phraseArray)




onScreenKeyboar.addEventListener("click", (event) => {
    /*
    • Z pomočjo event listerja identificeramo klike na elemente znoraj <div id="#qwerty">
    • Z pomočjo uporabe event delegation lahko identificeramo kateri elment je bil kliknjen
    • Če je bil kliknjen gumb z neko specifično šrko lahko njega naprej manipuliramo.
    • Kateri koli gumb kliknjen bo bil disablan v izogib večkratnega pritiska nanj.
    • Event listiner vsebuje tudi funkcijo katera sprejme gumb na katerega smo kliknili in se izvrši
    */
    let buttonCliked = event.target;
    console.log(buttonCliked);
    if (buttonCliked.tagName === "BUTTON") {
        buttonCliked.className = "chosen";
        checkLetter(buttonCliked)
        // Kateri koli gumb kliknjen bo bil disablan v izogib večkratnega pritiska nanj.
        buttonCliked.setAttribute("disabled", "buttonCliked");
    } else {
        return null;
    }
});

function checkLetter(buttonCliked) {
     /*
    • Slednja for loop selecta vse li elmente znotraj <div> phrase in jim jih shrani v array
    • Z pomočjo for lopa prešiba čez vse.
    • Z pomočjo if statementa previri ali kateri izmed elementov se ujema uporabnkiovim inputom
    • ČE se ujema zgoraj omenjeni elment ujema se mu dodeli class "show" if not sereturna null 
    */
    let lettersWithClass = document.querySelectorAll(".letter");

    for (let i = 0; i < lettersWithClass.length; i++) {
        // Dejanski element znotraj arraya
        let letterInQuestion = lettersWithClass[i];

        console.log(buttonCliked);
        console.log(letterInQuestion);
        console.log([i]);

    };
};
// Zanima nas kako lahko lahko naenkrat prečekamo vse črke. Če ima ena beseda 2x enako črko kako odznačimo oba.