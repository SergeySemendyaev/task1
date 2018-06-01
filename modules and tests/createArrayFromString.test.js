var createArrayFromString = require('./createArrayFromString');

test('creates array from numeric string', () => {
    var result = createArrayFromString('0123');
    expect(result).toEqual(['0','1', '2', '3']);
})

test('creates array from numeric string, removes symbols', () => {
    var result = createArrayFromString('q0c1"2!3');
    expect(result).toEqual(['0','1', '2', '3']);
})

test('creates array from numeric string, removes spaces', () => {
    var result = createArrayFromString(' 0 1 2  3 ');
    expect(result).toEqual(['0','1', '2', '3']);
})