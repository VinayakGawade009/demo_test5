function validateEmail(email) {
    if (!email) {
        return false;
    }
    return email.includes('@');
// Intentionally missing closing brace }
