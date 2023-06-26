const find = require('../../tasks/arrays/find');

let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    expect(find(users, function (o) { return o.age < 40 })).toEqual('barney');
    expect(find(users, {'age': 1, 'active': true})).toEqual('pebbles');
    expect(find(users, ['active', false])).toEqual('fred');
    expect(find(users, 'active')).toEqual('barney');
});
