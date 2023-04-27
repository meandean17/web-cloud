const btn = document.getElementById("game-btn");
const letters = 'ABCDEFGHIJKLMONPQRSTUVWXYX';
const container = document.getElementById("game-container");
let renderedSquares = [], revealedSquare = null, unmatchedLetter, newLetterArray = [];;

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const randomizeLetters = (array) => {
    for (let i = 0; i < array.length; i++) {
        let index = Math.floor(Math.random() * (i + 1));
        [array[i], array[index]] = [array[index], array[i]];
    }
}

const revealSquare = (square) => {
    if (square.revealed == true || square.matched == true)    //if its already revealed or matched, return
        return;
    square.style.color = "white";   //show the letter
    if (revealedSquare == null) {   //if there is no currently revealed square, let this square be the revealed square
        square.revealed = true;
        revealedSquare = square;
    }
    else {  //if there is a previously revealed square, compare the letters
        if (revealedSquare.letter === square.letter) {  //if the letters are the same, changed to matched
            square.style.backgroundColor = "lightgreen";
            square.matched = true;
            square.revealed = true;
            revealedSquare.style.backgroundColor = "lightgreen";
            revealedSquare.matched = true;
            revealedSquare.square = true;
            revealedSquare = null;
        }
        else {  //otherwise, pause and hide
            setTimeout(() => {
                square.style.color = "black";
                square.revealed = false;
                revealedSquare.style.color = "black";
                revealedSquare.revealed = false;
                revealedSquare = null;
            }, 800);
        }
    }
}

const addSquares = () => {    //adding squares to our game array
    unmatchedLetter = null;
    newLetterArray = [];
    revealedSquare = null;
    let prevGameLength = renderedSquares.length;    //game resets up clicking the game button, saving the old amount of squares
    renderedSquares = [];
    for (let int = 0; int < prevGameLength + 3; int++) { //creating X new letters and adding them to an array
        let newLetter;
        if (unmatchedLetter == null)  //if we have an even number of squares we add a new random letter
        {
            newLetter = letters.charAt(Math.floor(Math.random() * letters.length));
            unmatchedLetter = newLetter;
        }
        else    //otherwise our new letter will be our previously added letter
        {
            newLetter = unmatchedLetter;
            unmatchedLetter = null;
        }
        newLetterArray.push(newLetter);
    }
    randomizeLetters(newLetterArray);
    renderSquares(prevGameLength + 3);
}

const renderSquares = (size) => {
    removeAllChildNodes(container);
    for (let i = 0; i < size; i++) {
        const newsquare = document.createElement("div");
        newsquare.style.width = 80 + (i * 20) + "px";
        newsquare.style.height = 80 + (i * 20) + "px";
        newsquare.style.backgroundColor = "black";
        newsquare.style.color = "black";
        // newsquare.style.padding = i * 20 + "px";
        newsquare.id = "square-" + (i);
        newsquare.classList.add("game-square");
        newsquare.revealed = false;
        newsquare.matched = false;
        newsquare.letter = newLetterArray[i];
        newsquare.onclick = function () { revealSquare(newsquare) };
        newsquare.innerHTML = newLetterArray[i];
        container.appendChild(newsquare);
        renderedSquares[i] = newsquare;
    }
}



btn.addEventListener('click', addSquares);


