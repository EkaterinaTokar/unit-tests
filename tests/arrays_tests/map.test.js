const map = require('../../tasks/arrays/map');

function square(n) {
    return n * n;
}
let users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

test('Creates an array of elements split into groups the length of size', () => {
    expect(map([4, 8], square)).toEqual([16, 64]);
    expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    expect(map(users, 'user')).toEqual(['barney', 'fred']);
});
