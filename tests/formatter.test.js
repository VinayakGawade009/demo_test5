const { formatOutput } = require('../src/formatter');

test('formatter output', () => {
    expect(formatOutput("test")).toBe("test");
});
