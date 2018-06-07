
var getInput = require('./inputFormer');
var Sorter = require('./sorter');
var Visualizer = require('./visualizer');

var array;
var sorter;
visualizer = new Visualizer();

input.oninput = function() {
    array = getInput();
    sorter = new Sorter(array)
    visualizer.createNodes(array);
}

next.onclick = function() {
    if (sorter) {
        array = sorter.next();
        visualizer.swap(array);
    }
}

prev.onclick = function() {
    if (sorter) {
        array = sorter.prev();
        visualizer.swap(array);
    }
}