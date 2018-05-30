module.exports = function(index, span1, span2) {
    var temp = span1.id;
    span1.id = span2.id;
    span2.id = temp;
    temp = digitsFromUserInput[index - 1];
    digitsFromUserInput[index - 1] = digitsFromUserInput[index];
    digitsFromUserInput[index] = temp;
}