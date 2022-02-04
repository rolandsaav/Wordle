const body = document.body

const mainDiv = document.getElementById("Main")

let counter = document.createElement('div')
mainDiv.appendChild(counter)

const word = "QITRA"
const grid = document.getElementById("LetterGrid")

const rows = grid.getElementsByClassName("row")

let rowIndex = 0
let letterIndex = 0

let currentRow = rows[rowIndex];
let currentRowSquares = currentRow.getElementsByClassName("square")

body.addEventListener('keydown', (e) => {
    if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
        currentRowSquares[letterIndex].innerText = e.key.toUpperCase().replace(/\s/g,'');
        currentRowSquares[letterIndex].classList.add("entered")
       
        letterIndex += 1;
    } else if (e.key == "Backspace" && letterIndex != 0) {
        letterIndex -= 1;
        currentRowSquares[letterIndex].innerText = "";
        currentRowSquares[letterIndex].classList.remove("entered")
        
    } else if (e.key == "Enter")
    {
        guess = currentRow.innerText.replace(/\s/g,'')
        guess = guess.toUpperCase()
        if(guess.length == currentRowSquares.length)
        {
            for(i = 0; i < word.length; i++)
            {
                if(guess[i] == word[i]) currentRowSquares[i].classList.add("correct");
                else if (word.includes(guess[i])) currentRowSquares[i].classList.add("almost")
                else currentRowSquares[i].classList.add("wrong")
            }

            rowIndex++;
            letterIndex = 0;
            currentRow = rows[rowIndex];
            currentRowSquares = currentRow.getElementsByClassName("square");
        } else {
            alertBox = mainDiv.querySelector(".alert")
            alertBox.classList.add("fade");
        }
        
    }
    counter.innerText = letterIndex

})