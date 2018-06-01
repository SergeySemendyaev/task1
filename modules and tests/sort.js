var sortAscending = require('./sortAscending');
var sortDescending = require('./sortDescending');

module.exports = function sort() {
    var arrayToSort = document.getElementsByClassName("array");
    var ascendingOrder = document.getElementById("orderAscending").checked == true;
    if (ascendingOrder)
        sortAscending(arrayToSort);
    else
        sortDescending(arrayToSort);
}