const missing = require('./does_not_exist.js');

module.exports = { missing };

test('importer missing file', () => {
    expect(missing).toBeDefined();
});