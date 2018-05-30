var swap = require('./swap');
var ascendingOrder = true;

module.exports = function sort() {
    if (ascendingOrder)
        sortAscending();
    else
        sortDescending();
}

function sortAscending(){
    for (var i = digitsFromUserInput.length - 1; i > 0; i--) {
        if (digitsFromUserInput[i - 1] > digitsFromUserInput[i]) {
            var previousSpan = document.getElementById(i - 1);
            var currentSpan = document.getElementById(i);
            previousSpan.style.color = currentSpan.style.color = "red";
            setTimeout(function() {
                currentSpan.style.color = previousSpan.style.color = "black";
            }, 2100);
            previousSpan.style.left = positions[i] + "px";
            currentSpan.style.left = positions[i - 1] + "px";
            swap(i, currentSpan, previousSpan);
            break;
        }
    }
    if (i == 0)
        ascendingOrder = false;
}

function sortDescending() {
    for (var i = 0; i < digitsFromUserInput.length - 1; i++) {
        if (digitsFromUserInput[i] < digitsFromUserInput[i + 1]) {
            var currentSpan = document.getElementById(i);
            var nextSpan = document.getElementById(i + 1);
            currentSpan.style.color = nextSpan.style.color = "red";
            setTimeout(function() {
                currentSpan.style.color = nextSpan.style.color = "black";
            }, 2100);
            currentSpan.style.left = positions[i + 1] + "px";
            nextSpan.style.left = positions[i] + "px";
            swap(i+1, currentSpan, nextSpan);
            break;
        }
    }
    if (i == digitsFromUserInput.length - 1) 
        ascendingOrder = true;
}