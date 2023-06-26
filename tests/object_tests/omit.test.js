const omit = require('../../tasks/objects/omit');

let object = { 'a': 1, 'b': '2', 'c': 3 };

test('Returns object', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
});
