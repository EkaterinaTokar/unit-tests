const toPairs = require('../../tasks/objects/toPairs');

function Foo() {
    this.a = 1;
    this.b = 2;
}
Foo.prototype.c = 3;

let GfG = {
    'x': 1,
    'y': 2
}

test('Returns the key-value pairs', () => {
    expect(toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]);
    expect(toPairs(GfG)).toEqual([['x', 1], ['y', 2]]);
});
