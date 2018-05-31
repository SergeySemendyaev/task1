var swap = require('./swap');

module.exports = function sortDescending() {
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
}