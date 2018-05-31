var clearDiv = require( './clearDiv' );
var createArrayFromString = require( './createArrayFromString' );
var addChildrenToDiv = require( './addChildrenToDiv' );

module.exports = function getInput() {
    clearDiv()
    var input = document.getElementById("input");
    var inputContent = input.value;
    digitsFromUserInput = createArrayFromString(inputContent);
    addChildrenToDiv(digitsFromUserInput);
    input.value = digitsFromUserInput.join("");
};