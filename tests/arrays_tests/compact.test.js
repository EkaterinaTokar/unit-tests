const compact = require('../../tasks/arrays/compact');

let array = [0, 1, false, 2, '', 3];

test('Compact should be defined', () => {
    expect(compact).toBeDefined();
});
test('Returns the slice of array.', () => {
    expect(compact(array)).toEqual([1, 2, 3]);
    expect(compact(array)).not.toContain(false);
    expect(compact(array)).not.toContain(0);
    expect(compact(array)).not.toContain('');
    expect(compact(array)).not.toContain(null);
});
