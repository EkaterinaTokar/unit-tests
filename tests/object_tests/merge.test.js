const merge = require('../../tasks/objects/merge');

let object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
};
let other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};

test('Returns object', () => {
    expect(merge(object, other)).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});
