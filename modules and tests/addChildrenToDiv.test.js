var addChildrenToDiv = require('./addChildrenToDiv');

test('creates and adds span elements to div, quantity of spans equals length of array', () => {
    document.body.innerHTML = '<div class = "list"></div>';
    var array = [0];
    addChildrenToDiv(array);
    expect(document.getElementsByClassName('array').length).toBe(array.length);
});

test('creates and adds span elements to div, quantity of spans equals length of array', () => {
    document.body.innerHTML = '<div class = "list"></div>';
    var array = [0, 1];
    addChildrenToDiv(array);
    expect(document.getElementsByClassName('array').length).toBe(array.length);
});

test('creates and adds span elements to div, quantity of spans equals length of array', () => {
    document.body.innerHTML = '<div class = "list"></div>';
    var array = [];
    addChildrenToDiv(array);
    expect(document.getElementsByClassName('array').length).toBe(0);
});