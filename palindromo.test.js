const isPalindrome = require('./palindromo')

test('Palindromo Arara para dar True', () => {
    expect(isPalindrome('Arara')).toBe(true);
});

test('Palindromo Subi no ônibus para dar True', () => {
    expect(isPalindrome('Subi no ônibus')).toBe(true);
});

test('Palindromo Marrocos para dar False', () => {
    expect(isPalindrome('Marrocos')).toBe(false);
});