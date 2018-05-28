var array;

function makeNumbers(array) {
    var result = [];
    for (var i = 0; i < array.length; i++){
        if(!Number.isInteger(+array[i]))
            continue;
        result.push(array[i]);    
    }
    return result;
}

function getInput() {
    var numbers;
    array = document.getElementsByTagName("input")[0].value;
    numbers = makeNumbers(array);
    document.getElementsByTagName("input")[0].value = numbers.join("");
}