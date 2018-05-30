module.exports = function(numbersArray){
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

