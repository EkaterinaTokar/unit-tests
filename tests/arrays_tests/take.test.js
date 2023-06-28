const take = require('../../tasks/arrays/take');

test('Returns the slice of array', () => {
    expect(take([1, 2, 3])).toEqual([1]);
    expect(take([1, 2, 3], 2 )).toEqual([1, 2]);
    expect(take([],3 )).toEqual([]);
    expect(take([1, 2, 3], 5 )).toEqual([1, 2, 3]);
    expect(take([1, 2, 3], 0 )).toEqual([]);
    expect(take([1, 2, 3], -1 )).toEqual([]);
});
