var clearDiv = require( './clearDiv' );
var createArrayFromString = require( './createArrayFromString' );
var addChildrenToDiv = require( './addChildrenToDiv' );

module.exports = function getInput() {
    clearDiv()
    var input = document.getElementsByTagName("input")[0];
    var inputContent = input.value;
    digitsFromUserInput = createArrayFromString(inputContent);
    addChildrenToDiv(digitsFromUserInput);
    input.value = digitsFromUserInput.join("");
};