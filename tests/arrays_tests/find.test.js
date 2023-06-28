const find = require('../../tasks/arrays/find');

let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

test('should return \'barney\' for user with age less 40', () => {
    expect(find(users, function (o) { return o.age < 40 })).toEqual('barney');
});
test('should return undefined for users with age 2 and active true', () => {
    expect(find(users, { 'age': 2, 'active': true })).toEqual(undefined);
});

test('should return \'pebbles\' for user with age 1 and active true', () => {
    expect(find(users, {'age': 1, 'active': true})).toEqual('pebbles');
});

test('should return \'fred\' for user with active false', () => {
    expect(find(users, ['active', false])).toEqual('fred');
});
test('should return \'barney\' for user with active true', () => {
    expect(find(users, 'active')).toEqual('barney');
});
test('should return undefined for predicate \'\' ', () => {
    expect(find(users, '')).toEqual(undefined);
});
