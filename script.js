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
    const startPosition = 10;
    var div = document.getElementsByClassName("list")[0];
    var positions = [];
    var currentPosition = 10;
    var index = 0;
    for(var i = 0; i < numbersArray.length; i++){
        var span = document.createElement("span");
        span.className = "array";
        span.id = index++;
        span.style.left = currentPosition + "px";
        positions.push(currentPosition);
        currentPosition += 15;
        span.innerHTML = numbersArray[i];
        div.appendChild(span);
    }
}

function getInput() {
    clearDiv()
    var input = document.getElementById("input");
    var inputContent = input.value;
    var digitsFromUserInput = createArrayFromString(inputContent);
    addChildrenToDiv(digitsFromUserInput);
    input.value = digitsFromUserInput.join("");
}

function clearDiv() {
    var div = document.getElementsByClassName("list")[0];
    var DivChildren = document.getElementsByTagName("span");
    for (var i = 0; i < DivChildren.length; )
        div.removeChild(DivChildren[0]);
}

function sort() {
    var arrayToSort = document.getElementsByClassName("array");
    var ascendingOrder = document.getElementById("orderAscending").checked == true;
    if (ascendingOrder)
        sortAscending(arrayToSort);
    else
        sortDescending(arrayToSort);
}

function sortAscending(array) {
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

function swap(span1, span2) {
    var tempId = span1.id;
    var tempPosition = span1.style.left;
    span1.id = span2.id;
    span1.style.left = span2.style.left;
    span2.id = tempId;
    span2.style.left = tempPosition;
}

function sortDescending(array) {
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