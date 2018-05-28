var array;
var numbersArray;
var ascending = true;
var div = document.getElementsByClassName("list")[0];
var marginLeft = 5;


function makeNumbers(array) {
    var result = [];
    div.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        if (!Number.isInteger(+array[i]))
            continue;
        result.push(array[i]);
        var span = document.createElement("span");
        span.className = [i];
        span.style.position = "absolute";
        span.style.marginLeft = marginLeft+"px";
        marginLeft += 15;
        span.innerHTML = array[i];
        div.appendChild(span);
    }
    return result;
}

function getInput() {
    array = document.getElementsByTagName("input")[0].value;
    numbersArray = makeNumbers(array);
    document.getElementsByTagName("input")[0].value = numbersArray.join("");
}
function sort(){
    if(ascending)
        sortAscending();
    else 
        sortDescending();
}

function sortAscending() {
    var i = numbersArray.length - 1;
    for (; i > 0; i--) {
        if (numbersArray[i - 1] > numbersArray[i]) {
            var temp = numbersArray[i - 1];
            numbersArray[i - 1] = numbersArray[i];
            numbersArray[i] = temp;
            div.innerHTML = numbersArray.join("");
            break;
        }
    }
    if(i == 0) 
        ascending = false;
}

function sortDescending(){
    var i = 0;
    for (; i < numbersArray.length - 1; i++) {
        if (numbersArray[i] < numbersArray[i+1]) {
            var temp = numbersArray[i];
            numbersArray[i] = numbersArray[i+1];
            numbersArray[i+1] = temp;
            var div = document.getElementsByClassName("list")[0];
            div.innerHTML = numbersArray.join("");
            break;
        }
    }
    if(i == numbersArray.length - 1)
        ascending = true;
}