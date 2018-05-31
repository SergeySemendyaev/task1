var sortAscending = require('./sortAscending');
var sortDescending = require('./sortDescending');

module.exports = function sort(ascendingOrder=true) {
    var ascendingOrder = document.getElementById("orderAscending").checked == true;
    if (ascendingOrder)
        sortAscending();
    else
        sortDescending();
}