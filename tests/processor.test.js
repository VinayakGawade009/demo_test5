const { processData } = require('../src/processor');

test('processor data', () => {
    // This will fail because processData() throws a TypeError
    expect(processData()).toBeDefined();
});
