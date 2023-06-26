const omit = require('../../tasks/objects/omit');

let object = { 'a': 1, 'b': '2', 'c': 3 };

test('Creates an array of elements split into groups the length of size', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
});
