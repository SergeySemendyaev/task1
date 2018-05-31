var digitsFromUserInput;
var positionLeft;
var positions;

input.onchange = getInput;
button.onclick = sort;

function createArrayFromString(string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        if (!Number.isInteger(+string[i]) || string[i] == " ")
            continue;
        result.push(string[i]);
    }
    return result;
}

function addChildrenToDiv(numbersArray){
    var div = document.getElementsByClassName("list")[0];
    positions = [];
    var position = 0;
    for(var i = 0; i < numbersArray.length; i++){
        var span = document.createElement("span");
        span.id = position++;
        span.style.left = positionLeft + "px";
        positions.push(positionLeft);
        positionLeft += 15;
        span.innerHTML = numbersArray[i];
        div.appendChild(span);
    }
}

function getInput() {
    clearDiv()
    var input = document.getElementById("input");
    var inputContent = input.value;
    digitsFromUserInput = createArrayFromString(inputContent);
    addChildrenToDiv(digitsFromUserInput);
    input.value = digitsFromUserInput.join("");
}

function clearDiv() {
    var div = document.getElementsByClassName("list")[0];
    var DivChildren = document.getElementsByTagName("span");
    for (var i = 0; i < DivChildren.length; )
        div.removeChild(DivChildren[0]);
    positionLeft = 10;
}

function sort(ascendingOrder=true) {
    var ascendingOrder = document.getElementById("orderAscending").checked == true;
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
}
