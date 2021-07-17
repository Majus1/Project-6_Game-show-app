// The variables used.
const qwertySection = document.getElementById("qwerty");
const ourPhrase = document.getElementById("phrase");
const onScreenKeyboar = document.getElementById("qwerty");
let overlay =document.getElementById("overlay");
const startButton = document.getElementsByClassName("btn__reset")[0];
const overlayHeading =document.querySelector(".title");
// Keeps track of not matching variables in the switch statement
let wrongMatch = 0;
// Keeps track how many times a wrong letter was picked
let missed = 0;



// The event full of 5 phrases I thought of
phrase = ["lump", "bucket hat", "sup", "tattoo", "polaroid"];

// The event listiner
startButton.addEventListener("click", ()=> {
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
    • Z pomočjo uporabe event delegation lahko identificeramo kateri elment je bil kliknjen (Katera črka je bila kliknjena).
    • Če je bil kliknjen gumb z neko specifično črko lahko njega naprej manipuliramo.
    • Kateri koli gumb kliknjen bo bil disablan v izogib večkratnega pritiska nanj.
    • Event listiner vsebuje tudi funkcijo (buttonCliked) katera sprejme gumb na katerega smo kliknili in se izvrši.
    • V primeru da nismo kliknili na črko se zgodi nič. Beacuse of return null;
    */
    let buttonCliked = event.target;
    console.log(buttonCliked);
    if (buttonCliked.tagName === "BUTTON") {
        buttonCliked.className = "chosen";
        checkLetter(buttonCliked);
        // numberFailedTries(buttonCliked);
        // Kateri koli gumb kliknjen bo bil disablan v izogib večkratnega pritiska nanj.
        // THIS HELPED: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-disabled
        buttonCliked.setAttribute("disabled", "buttonCliked");
        // Displays the correct number of harts
        scoreboard(missed)
        checkWin()
    } else {
        return null;
    }
});


function checkLetter(buttonCliked) {
     /*
    • Funkcija ustvari array vseh črk znotraj naše phrase.
    • Z pomčjo for loopa in Switch Statementa evalueramo ali se kateri izmed indexov znotraj ustvarjenega arraya ujema kliknjeno črko na tipkovnici 
    */
    let lettersWithClass = document.querySelectorAll(".letter");
    
    for (let i = 0; i < lettersWithClass.length; i++) {
        // Dejanski element znotraj arraya
        let letterInQuestion = lettersWithClass[i];
        console.log(`comparing the button clicked _${buttonCliked.textContent}_ in gumb v naši frazi _${letterInQuestion.textContent}_`);

        // Switch statement nam omogoča testiran ujemanja varabel.
        // THIS HELPED: https://www.w3schools.com/js/js_switch.asp
        switch (buttonCliked.textContent === letterInQuestion.textContent) {
            case true:
              letterInQuestion.classList.add("show");
              break;
            case false:
            //  Counts the number of times the switch statement was false
              wrongMatch += 1
              break;
        };
    };
    console.log(wrongMatch);
    console.log(lettersWithClass.length);
    if (wrongMatch === lettersWithClass.length) {
    /*
    • if the valuse of wrongMatch was the same as lettersWithClass.length it means that there was no corectly chosen letter in the switch statement
    • This means there was no rightcoice and we can add 1 to the missed varriavle 
    */
        missed += 1;
        wrongMatch = 0;
    } else {
        wrongMatch = 0;  
    };
};



/*
SCORE BOARD

• Lower switch statement monitors the number how many harts are displayed.
• Every time the missed variable rises ne hart disaperas
*/

function scoreboard (missed) {
    let lifeHart = document.querySelectorAll(".tries");

    switch (missed) {
        case 0:
        // Code
        break;
        case 1:
            // We take one hart away
            lifeHart[0].style.display = "none";
        break;
        case 2:
            lifeHart[1].style.display = "none";
        break;
        case 3:
            lifeHart[2].style.display = "none";
        break;
        case 4:
            lifeHart[3].style.display = "none";
        break;
        case 5:
            lifeHart[4].style.display = "none";
        break;
    };
};

/*
CHECKWIN

• The function comares the number of letters with the class ".show" and the lenght of the phrase
• If the lenghts are the same then ...
*/
function checkWin () {
    let correctlyGuessedLetterLenght = document.querySelectorAll(".show").length;
    let lettersWithClassLenght = document.querySelectorAll(".letter").length;
    console.log(`Število prav ugotovljenih črk v besedi je ${correctlyGuessedLetterLenght} in število vseh črk v besedi je ${lettersWithClassLenght}.`)
    if (correctlyGuessedLetterLenght === lettersWithClassLenght) {
        overlay.style.display = "flex";
        overlay.style.backgroundColor = "#ff8a8a";
        startButton.style.display = "none";
        overlayHeading.textContent = "better luck next time";
    };
};