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
var thinking = false;
var finished = false;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function restartGame() {
    if (!thinking) {
        cells.forEach(cell => {
            cell.innerHTML = ""
        })
        cells.innerHTML = ""
        wins = undefined
        posX = []
        posO = []
        nowTurn = "X";
        turn.innerHTML = "X's turn"
    };

}
var wins;

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!wins) {
            if (!(posO.includes(cell.getAttribute("cell")) || posX.includes(cell.getAttribute("cell")))) {
                if (nowTurn == "X") {
                    cell.innerHTML = "X";
                    posX.push(cell.getAttribute("cell"))
                    nowTurn = "O";
                    turn.innerHTML = "O está pensando"
                    checkWinner();
                    if (!wins && !finished) {
                        thinking = true;
                        machineTurn();
                    };
                };

            }
        }
    });

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
            finished = true;

        }
    }
}
function simulateWin(emptyCells, oCell) {
    for (i in winner) {
        let simulated = [];
        const win = winner[i]
        for (pos in posX) {
            console.log(posX.length)
            if (posX.length == 1) {
                console.log("estea" + posX.length)
                if (win.includes(posX[pos]) && win.includes(oCell)) {
                    return oCell;
                } else {
                    console.log("else if 1" + oCell);
                };
            } else {


                if (pos == 0 && (win.includes(posX[pos]) && win.includes(posX[pos + 1]) && win.includes(oCell))) {
                    console.log("else if 3 " + posX[pos + 1])
                    console.log("else if 3 " + posX[pos])
                    console.log("else if 3 " + oCell)
                    return oCell;
                } else if (pos == 7 && (win.includes(posX[pos]) && win.includes(posX[pos - 1]) && win.includes(oCell))) {
                    console.log("else if 4 " + posX[pos - 1])
                    console.log("else if 4 " + posX[pos])
                    console.log("else if 4 " + oCell)

                    return oCell;
                } else {
                    console.log("else if 6 " + posX[pos])
                    console.log("else if 7 " + oCell)
                    if ((win.includes(posX[pos]) && win.includes(posX[pos + 1]) && win.includes(oCell)) || (win.includes(posX[pos]) && win.includes(posX[pos - 1]) && win.includes(oCell)) || (win.includes(posX[pos + 1]) && win.includes(posX[pos - 1]) && win.includes(oCell))) {
                        return oCell;
                    }
                };

            };


        };

    };
};

function machineTurn() {
    let emptyCells = [];
    cells.forEach(cell => {
        if (!posX.includes(cell.getAttribute("cell")) && !posO.includes(cell.getAttribute("cell"))) {
            console.log(cell)
            emptyCells.push(cell);
        }
    });


    for (cell in emptyCells) {
        emptyCell = emptyCells[cell];
        emptyCellparsed = emptyCell.getAttribute("cell");
        if (cell = simulateWin(emptyCells, emptyCellparsed)) {
            elemento = document.querySelector('div[cell="' + cell + '"]');
            elemento.textContent = "O"
            posO.push(emptyCellparsed)
            nowTurn = "X";
            turn.innerHTML = "X's turn"
            thinking = false;
            checkWinner();
            salir = true;
            break
        };
        // } else if (win[getRandomInt(3)] == emptyCellparsed) {
        //     emptyCell.innerHTML = "O"
        //     console.log(emptyCell);

        //     posO.push(emptyCellparsed)
        //     nowTurn = "X";
        //     turn.innerHTML = "X's turn"
        //     thinking = false;
        //     checkWinner();
        //     salir = true;
        //     break
        // } else if (win[getRandomInt(3)] == emptyCellparsed) {
        //     emptyCell.innerHTML = "O"
        //     console.log(emptyCell);

        //     posO.push(emptyCellparsed)
        //     nowTurn = "X";
        //     turn.innerHTML = "X's turn"
        //     thinking = false;
        //     checkWinner();
        //     salir = true;
        //     break
        // };

    };



    // randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    // randomCell.innerHTML = "O"
    // posO.push(randomCell.getAttribute("cell"))
    // nowTurn = "X";
    // turn.innerHTML = "X's turn"
    // thinking = false;
    // checkWinner();
};