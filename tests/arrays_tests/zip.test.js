const zip = require('../../tasks/arrays/zip');

test('Returns the new array of grouped elements', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
    expect(zip(['Amit', 'Akash', 'Avijit'], [1, 2, 3])).toEqual([['Amit', 1], ['Akash', 2],  ['Avijit', 3]]);
});
