const dropWhile = require("../../tasks/arrays/dropWhile");

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('Returns the slice of array', () => {
    expect(dropWhile(users, function(o) { return !o.active; })).toEqual(['pebbles']);
    expect(dropWhile(users, { 'user': 'barney', 'active': false })).toEqual(['fred', 'pebbles']);
    expect(dropWhile(users, ["active", false])).toEqual(['pebbles']);
    expect(dropWhile(users, "active")).toEqual(['barney', 'fred', 'pebbles']);
});
