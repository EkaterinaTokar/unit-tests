const includes = require('../../tasks/arrays/includes');

test('Returns true if value is found, else false', () => {
    expect(includes([1, 2, 3], 1)).toEqual(true);
    expect(includes([1, 2, 3], 1, 2)).toEqual(false);
    expect(includes({ 'a': 1, 'b': 2 }, 2)).toEqual(true);
    expect(includes('abcd', 'bc')).toEqual(true);
});
