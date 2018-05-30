var digitsFromUserInput;
var positionLeft;
var positions;
var sortOrder = {'ascending':1, 'descending':0};

var getInput = require('./getInput'); 
var sort = require('./sort'); 

input.onchange = getInput;
button.onclick = sort;