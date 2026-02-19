const { add } = require('../src/calculator');

test('calculator add', () => {
    // This will fail because add(2, 2) returns 0 (2 - 2)
    expect(add(2, 2)).toBe(4);
});
