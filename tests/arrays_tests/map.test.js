const map = require('../../tasks/arrays/map');

function square(n) {
    return n * n;
}
let users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

test(' Returns the new mapped array', () => {
    expect(map([4, 8], square)).toEqual([16, 64]);
    expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    expect(map(users, 'user')).toEqual(['barney', 'fred']);
});
