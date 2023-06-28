const includes = require('../../tasks/arrays/includes');

test('Returns true if value is found, else false', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
    expect(includes([1, 2, 3], 1, 2)).toBe(false);
    expect(includes({ 'a': 1, 'b': 2 }, 2)).toBe(true);
    expect(includes('abcd', 'bc')).toBe(true);
});
