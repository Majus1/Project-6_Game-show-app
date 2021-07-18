// The variables used.
const onScreenKeyboar = document.getElementById("qwerty");
let overlay =document.getElementById("overlay");
const startButton = document.getElementsByClassName("btn__reset")[0];
const overlayHeading =document.querySelector(".title");
let lifeHart = document.querySelectorAll(".tries");
// Keeps track of not matching variables in the switch statement
let wrongMatch = 0;
// Keeps track how many times a wrong letter was picked
let missed = 0;



// The event full of 5 phrases I thought of
const phrase = ["lump", "bucket hat", "sup", "tattoo", "polaroid"];

// The event listiner
startButton.addEventListener("click", ()=> {
    resetAndTryAgain();
    // Bottom line of codes returns a random phrase from the "phrase" array
    let phraseArray = getRandomPhraseAsArray(phrase);
    console.log(phraseArray);
    // Executes and ads a random phrase to the DOM. 
    addPhraseToDisplay(phraseArray);
});


function getRandomPhraseAsArray(phrase) {
    /*
    • The function finds a random number index from 0 to the length of our phrase array.
    • It takes the selected index and returns the phrase associated with the index.
    • The gathered phrase is then split into individual letters witch are saved in a new array.
    • The function then returns the new array full of wonderful letters.
    */
    let randomNumber = Math.floor(Math.random() * phrase.length);
    let randomPhraseSelected = phrase[randomNumber];
    let lettersSplitFromPgrase = randomPhraseSelected.split("");
    return lettersSplitFromPgrase;
};



function addPhraseToDisplay(phraseArray) {
    /*
    • The function goes throw the phrase array.
    • It then selects the div ul and li elements.
    • It then changes the text content of every li to the corresponding content from the phrase array.
    • It then appends the selected li to the ul.
    */
    for (let i = 0; i < phraseArray.length; i++) {
        const div = document.querySelector("#phrase");
        const ul = div.firstElementChild;
        const li = document.createElement("li");
        li.textContent = phraseArray[i];
// The if statement checks the text content of the li variable. If the variables text content is not space it gives it the class "letter".
        if (li.textContent != " ") {
            li.className = "letter";
        }
        
        ul.appendChild(li);
    }
}



onScreenKeyboar.addEventListener("click", (event) => {
    /*
    With the event listener we listen for clicks on elments inside "<div id="#qwerty">".
    With the help of event delegation, we can identify which element was clicked (what letter was clicked).
    Any clicked button will be disabled not to be clicked again.
    The function "checkLetter(buttonCliked)" marks the correctly guessed letters.
    In the case, no letter was clicked nothing happens.
    */
    let buttonCliked = event.target;
    console.log(buttonCliked);
    if (buttonCliked.tagName === "BUTTON") {
        buttonCliked.className = "chosen";
        checkLetter(buttonCliked);
        // Any clicked button will be disabled not to be clicked again.
        // THIS HELPED: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-disabled
        buttonCliked.setAttribute("disabled", "buttonCliked");
        // Displays the correct number of harts
        scoreboard(missed);
        checkWin();
    } else {
        return null;
    }
});


function checkLetter(buttonCliked) {
     /*
    The function creates an array  containing the letters in the phrase
    With the help of the for loop and switch statement, it checks if any index inside the array matches with the chosen letter.
    */
    let lettersWithClass = document.querySelectorAll(".letter");
    
    for (let i = 0; i < lettersWithClass.length; i++) {
        // Dejanski element znotraj arraya
        let letterInQuestion = lettersWithClass[i];
        console.log(`comparing the button clicked _${buttonCliked.textContent}_ in gumb v naši frazi _${letterInQuestion.textContent}_`);

        // Switch statement helps us check for matches.
        // THIS HELPED: https://www.w3schools.com/js/js_switch.asp
        switch (buttonCliked.textContent === letterInQuestion.textContent) {
            case true:
              letterInQuestion.classList.add("show");
              break;
            case false:
            //  Counts the number of times the switch statement was false
              wrongMatch += 1;
              break;
        }
    }
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
    }
}


function scoreboard (missed) {
    /*
    SCORE BOARD

    • Lower switch statement monitors the number how many harts are displayed.
    • Every time the missed variable rises ne hart disaperas
    */
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
    }
}

/*
CHECKWIN

• The function compares the number of letters with the class ".show" and the lenght of the phrase
• If the lenghts are the same then it displays the winner screen and the reset button.
• If the value of the missed variable reaches 5 then the losser screen is displayed as well as the reset button.
*/
function checkWin () {
    let correctlyGuessedLetterLenght = document.querySelectorAll(".show").length;
    let lettersWithClassLenght = document.querySelectorAll(".letter").length;
    console.log(`Število prav ugotovljenih črk v besedi je ${correctlyGuessedLetterLenght} in število vseh črk v besedi je ${lettersWithClassLenght}.`);
    if (correctlyGuessedLetterLenght === lettersWithClassLenght) {
        overlay.style.display = "flex";
        overlay.style.backgroundColor = "#98dec5";
        startButton.textContent = "Reset";
        overlayHeading.textContent = "Good job you won";
    } else if (missed === 5) {
        overlay.style.display = "flex";
        overlay.style.backgroundColor = "#ff8a8a";
        startButton.textContent = "Reset";
        overlayHeading.textContent = "better luck next time";
    }
}

function resetAndTryAgain () {
    // THe function resets the game so anyone can play it again.
    overlay.style.display = "none";
    console.log("This will also reset");

    // initialized variable back to 0
    missed = 0;

    // Displays all the lost harts
    lifeHart[0].style.display = "inline-block";
    lifeHart[1].style.display = "inline-block";
    lifeHart[2].style.display = "inline-block";
    lifeHart[3].style.display = "inline-block";
    lifeHart[4].style.display = "inline-block";

    let alredyChosenLetters = document.querySelectorAll(".chosen");
    for (let n = 0; n < alredyChosenLetters.length; n++) {
        // Sets all of the clickable alredy chose letters back to their original state
        alredyChosenLetters[n].className = "";
        alredyChosenLetters[n].removeAttribute("disabled");

    }

    let greenLetters = document.querySelectorAll(".letter");
    for (let x = 0; x < greenLetters.length; x++) {
        // Select every correctly guessed letter and removes it from DOM
        greenLetters[x].remove();
    }
}