const btn = document.getElementById("game-btn");
const letters = 'ABCDEFGHIJKLMONPQRSTUVWXYX';
const container = document.getElementById("game-container");
var currentletters = {}, unmatched;
var squares = [];
var addSquares = () => {
    for (let i = 0; i < 3; i++) {
        if (squares.length % 2 == 0)  //if we have an even number of squares we add a new random letter square
        {
            squares.push({
                letter: letters.charAt(Math.floor(Math.random() * letters.length)),
                size: 80 + (squares.length) * 20
            });
            unmatched = squares[squares.length - 1].letter;
        }
        else {
            squares.push({
                letter: unmatched,
                size: 80 + (squares.length) * 20,
            });
        }
        var newsquare = document.createElement("div");
        newsquare.style.width = squares[squares.length - 1].size + "px";
        newsquare.style.height = squares[squares.length - 1].size + "px";
        newsquare.style.backgroundColor = "black";
        newsquare.innerHTML = squares[squares.length - 1].letter;
        container.appendChild(newsquare);
    }
}
btn.addEventListener('click', addSquares);


