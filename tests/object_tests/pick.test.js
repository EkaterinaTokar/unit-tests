const pick = require('../../tasks/objects/pick');

let object = { 'a': 1, 'b': '2', 'c': 3 };
test('Creates an array of elements split into groups the length of size', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
});
