const includes = require('../../tasks/arrays/includes');

test('Checks if value is in collection. If collection is a string, it\'s checked for a substring of value', () => {
    expect(includes([1, 2, 3], 1)).toEqual(true);
    expect(includes([1, 2, 3], 1, 2)).toEqual(false);
    expect(includes({ 'a': 1, 'b': 2 }, 2)).toEqual(true);
    expect(includes('abcd', 'bc')).toEqual(true);
});
