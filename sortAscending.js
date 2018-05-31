var swap = require('./swap');

module.exports = function sortAscending(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var previousSpan = document.getElementById(i - 1);
        var currentSpan = document.getElementById(i);
        if (previousSpan.innerHTML > currentSpan.innerHTML) {
            previousSpan.style.color = currentSpan.style.color = "red";
            setTimeout(function() {
                currentSpan.style.color = previousSpan.style.color = "black";
            }, 2100);
            swap(currentSpan, previousSpan);
            break;
        }
    }
}