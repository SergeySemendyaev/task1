var swap = require('./swap');

module.exports = function sortAscending() {
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
}