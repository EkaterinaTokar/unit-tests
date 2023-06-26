const drop = require('../../tasks/arrays/drop');

let array = [1, 2, 3];

test('Returns the slice of array', () => {
    expect(drop(array, 2)).toEqual([3]);
    expect(drop(array,5 )).toEqual([]);
    expect(drop([],3 )).toEqual([]);
    expect(drop(['a', 'b', 'c', 'd'], 2)).toEqual([ 'c', 'd' ]);
    expect(drop(array)).toEqual([2, 3]);
    expect(drop(array,0 )).toEqual([1, 2, 3]);
    expect(drop(array,-2 )).toEqual([]);
});
