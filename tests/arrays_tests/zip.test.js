const zip = require('../../tasks/arrays/zip');

test('Creates an array of elements split into groups the length of size', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});
