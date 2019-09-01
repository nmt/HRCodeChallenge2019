const functions = require('../main.js');

// Round number
test('Rounds 1.9 up to be 2', () => {
    expect(functions.roundNumber(1.9)).toBe(2);
});
test('Rounds 1.1 down to be 1', () => {
    expect(functions.roundNumber(1.1)).toBe(1);
});
test('Rounds 99.5 up to be 100', () => {
    expect(functions.roundNumber(99.5)).toBe(100);
});
test('Rounds 0.2 up to be 0', () => {
    expect(functions.roundNumber(0.2)).toBe(0);
});

// Calculate Gross Income
test('Calculates Gross Income of 60050 to be 5004', () => {
    expect(functions.calculateGrossIncome(60050)).toBe(5004);
});
test('Calculates Gross Income of 40000 to be 3333', () => {
    expect(functions.calculateGrossIncome(40000)).toBe(3333);
});
test('Calculates Gross Income of 123456 to be 10288', () => {
    expect(functions.calculateGrossIncome(123456)).toBe(10288);
});
test('Calculates Gross Income of 80999 to be 6750', () => {
    expect(functions.calculateGrossIncome(80999)).toBe(6750);
});