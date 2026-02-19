const validator = require('../src/validator');

test('validator email', () => {
    expect(validator.validateEmail('test@example.com')).toBe(true);
});
