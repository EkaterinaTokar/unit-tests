const omitBy = require('../../tasks/objects/omitBy');

let object = { 'a': 1, 'b': '2', 'c': 3 };

test('Returns the new object', () => {
    expect(omitBy(object, ['a', 'c'])).toEqual({ 'b': '2' });
});
