// The variables used.
const qwertySection = document.getElementById("qwerty");
const ourPhrase = document.getElementById("phrase");


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

    /*
    • Slednja funkcija najde z pomočjo for loopa prešiba čez vse elemnte znotraj arraya
    • Selecta div, ul in li element v našemu DOM.
    • Našemu selectanemu li spremeni text bolj natančno ga nadomesti z elementom iz našega arrya
    • Vsre li elemente appenda našemu <ul> tagu in BOOM pojavijo se na našim DOM
    */
function addPhraseToDisplay(phraseArray) {
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

addPhraseToDisplay(phraseArray)









// THE TO DO ZONE

/*
    • Našemu selectanemu li spremeni text bolj natančno ga nadomesti z elementom iz našega arrya
*/