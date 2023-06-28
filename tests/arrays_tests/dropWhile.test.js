const dropWhile = require("../../tasks/arrays/dropWhile");

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('Returns the slice of array', () => {
    expect(dropWhile(users, function(o) { return !o.active; })).toEqual([ { user: 'pebbles', active: true } ]);
    expect(dropWhile(users, { 'user': 'barney', 'active': false })).toEqual([{ user: "fred", active: false }, { user: "pebbles", active: true }]);
    expect(dropWhile(users, ["active", false])).toEqual([{ user: "pebbles", active: true }]);
    expect(dropWhile(users, "active")).toEqual([{ user: "barney", active: false }, { user: "fred", active: false }, { user: "pebbles", active: true }]);
});
