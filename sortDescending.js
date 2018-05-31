var swap = require('./swap');

module.exports = function sortDescending(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var currentSpan = document.getElementById(i);
        var nextSpan = document.getElementById(i + 1);
        if (currentSpan.innerHTML < nextSpan.innerHTML) {
            currentSpan.style.color = nextSpan.style.color = "red";
            setTimeout(function() {
                currentSpan.style.color = nextSpan.style.color = "black";
            }, 2100);
            swap(currentSpan, nextSpan);
            break;
        }
    }
}