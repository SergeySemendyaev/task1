module.exports = function() {
    var div = document.getElementsByClassName("list")[0];
    var DivChildren = document.getElementsByTagName("span");
    for (var i = 0; i < DivChildren.length; )
        div.removeChild(DivChildren[0]);
    positionLeft = 10;
}