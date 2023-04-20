const turn = document.getElementById("turn")
const cells = document.querySelectorAll(".square")
const restartbtn = document.getElementById("restart")

var nowTurn = "X";

const winner = {
    1: ['1', '2', '3'],
    2: ['4', '5', '6'],
    3: ['7', '8', '9'],
    4: ['1', '5', '9'],
    5: ['3', '5', '7'],
    6: ['1', '4', '7'],
    7: ['2', '5', '8'],
    8: ['3', '6', '9']
};


var posX = []
var posO = []

var wins;


function restartGame() {
    cells.forEach(cell => {
        cell.innerHTML = ""
    })
    cells.innerHTML = ""
    wins = undefined
    posX = []
    posO = []
    nowTurn = "X";
    turn.innerHTML = "X's turn"

}
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!wins) {
            if (!(posO.includes(cell.getAttribute("cell")) || posX.includes(cell.getAttribute("cell")))) {
                if (nowTurn == "X") {
                    cell.innerHTML = "X";
                    posX.push(cell.getAttribute("cell"))
                    nowTurn = "O";
                    turn.innerHTML = "O's turn"
                    checkWinner();
                } else {
                    cell.innerHTML = "O"
                    posO.push(cell.getAttribute("cell"))
                    nowTurn = "X";
                    turn.innerHTML = "X's turn"
                    checkWinner();

                }

            }
        }
    })
});
function checkWinner() {
    let gameLength = posO.length + posX.length;
    for (i in winner) {
        const win = winner[i]
        if (win.every(pos => posX.includes(pos))) {
            turn.innerHTML = "Gano X"
            wins = "X"
        } else if (win.every(pos => posO.includes(pos))) {
            turn.innerHTML = "Gano O"
            wins = "O"
        }
    }

    if (gameLength > 8) {
        if (!wins) {
            turn.innerHTML = "Empate"
        }
    }
}