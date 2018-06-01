module.exports = function addChildrenToDiv(numbersArray){
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