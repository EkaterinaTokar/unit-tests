const filter = require('../../tasks/arrays/filter');

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

test('Returns the new filtered array', () => {
    expect(filter(users, function(o) { return !o.active; })).toEqual(['fred']);
    expect(filter(users, { 'age': 36, 'active': true })).toEqual(['barney']);
    expect(filter(users, ['active', false] )).toEqual(['fred']);
    expect(filter(users, 'active')).toEqual(['barney']);
});
