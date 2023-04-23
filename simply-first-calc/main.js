
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
var toCalc = ""
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let btn = button.innerHTML;
        if (btn == "=" && toCalc.length > 1) {
            screen.innerText = eval(toCalc);
            toCalc = "";
            return;
        };

        if (btn != "=") {
            toCalc = toCalc + btn
            screen.innerText = toCalc;
        };

    });

});

