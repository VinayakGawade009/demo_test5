const { greet } = require('../src/utils');

test('greet function', () => {
    expect(greet('World')).toBe('Hello, World!');
});
