var digitsFromUserInput;
var ascendingOrder = true;
var div = document.getElementsByClassName("list")[0];
var positions = [];

function makeNumbers(array) {
    positions[0] = 10;
    var index = 0;
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!Number.isInteger(+array[i]) || array[i] == " ")
            continue;
        result.push(array[i]);
        var span = document.createElement("span");
        span.id = index++;
        span.style.position = "absolute";
        if(i > 0)
            positions[i] = positions[i-1] + 15;
        span.style.left = positions[i] + "px";
        span.innerHTML = array[i];
        div.appendChild(span);
    }
    return result;
}

function getInput() {
    clearDiv()
    var userInput = document.getElementsByTagName("input")[0].value;
    digitsFromUserInput = makeNumbers(userInput);
    document.getElementsByTagName("input")[0].value = digitsFromUserInput.join("");
}

function clearDiv() {
    var DivChildren = document.getElementsByTagName("span");
    for (var i = 0; i < DivChildren.length; )
        div.removeChild(DivChildren[0]);
}

function sort() {
    if (ascendingOrder)
        sortAscending();
    else
        sortDescending();
}

function sortAscending() {
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
    if (i == 0) {
        ascendingOrder = false;
        sort();
    }
}

function swap(index, span1, span2) {
    var temp = span1.id;
    span1.id = span2.id;
    span2.id = temp;
    temp = digitsFromUserInput[index - 1];
    digitsFromUserInput[index - 1] = digitsFromUserInput[index];
    digitsFromUserInput[index] = temp;
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
    if (i == digitsFromUserInput.length - 1) {
        ascendingOrder = true;
        sort();
    }
}
