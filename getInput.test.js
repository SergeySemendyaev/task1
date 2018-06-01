var getInput = require('./getInput');

test('changes inputbox value, leaving only numbers', () => {
    document.body.innerHTML = '<div class = "list"><input id = "input" value = "e3 w2q1"></div>';
    getInput();
    expect(document.getElementById('input').value).toEqual('321');
});

test("null input doesn't change anything", () => {
    document.body.innerHTML = '<div class = "list"><input id = "input" value = ""></div>';
    getInput();
    expect(document.getElementById('input').value).toEqual('');
});