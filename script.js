var userInput;
var digitsFromUserInput;
var ascendingOrder = true;
var div = document.getElementsByClassName("list")[0];
var spans = document.getElementsByTagName("span");
var button = document.getElementsByTagName("button")[0];
var positionLeft;
var positions;
var position = 0;
var span_i;
var span_i_min_1;

function makeNumbers(array) {
    positions = [];
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!Number.isInteger(+array[i]) || array[i] == " ")
            continue;
        result.push(array[i]);
        var span = document.createElement("span");
        span.id = position++;
        span.style.position = "absolute";
        span.style.left = positionLeft + "px";
        positions.push(positionLeft);
        positionLeft += 15;
        span.innerHTML = array[i];
        div.appendChild(span);
    }
    return result;
}

function getInput() {
    clearDiv()
    userInput = document.getElementsByTagName("input")[0].value;
    digitsFromUserInput = makeNumbers(userInput);
    document.getElementsByTagName("input")[0].value = digitsFromUserInput.join("");
}

function clearDiv() {
    for (var i = 0; i < spans.length; )
        div.removeChild(spans[0]);
    positionLeft = 5;
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
            span_i_min_1 = document.getElementById(i - 1);
            span_i = document.getElementById(i);
            span_i_min_1.style.color = span_i.style.color = "red";
            setTimeout(function(){
                span_i.style.color = span_i_min_1.style.color = "black";
            }, 2100);
            span_i_min_1.style.left = positions[i] + "px";
            span_i.style.left = positions[i - 1] + "px";
            swap(i);
            break;
        }
    }
    if (i == 0) {
        ascendingOrder = false;
        sort();
    }
}

function swap(index) {
    var temp = span_i_min_1.id;
    span_i_min_1.id = span_i.id;
    span_i.id = temp;
    temp = digitsFromUserInput[index - 1];
    digitsFromUserInput[index - 1] = digitsFromUserInput[index];
    digitsFromUserInput[index] = temp;
    //spans[index-1].style.color = spans[index].style.color = "black";
}

function sortDescending() {
    for (var i = 0; i < spans.length - 1; i++) {
        if (spans[i].innerHTML < spans[i + 1].innerHTML) {
            spans[i].style.color = spans[i + 1].style.color = "red";
            spans[i].style.left = positions[i] + 23 + "px";
            button.addEventListener('transitionend', swap(i + 1));
            spans[i].style.left = positions[i] + "px";
            spans[i].style.color = spans[i + 1].style.color = "black";
            break;
        }
    }
    if (i == spans.length - 1) {
        ascendingOrder = true;
        sort();
    }
}
