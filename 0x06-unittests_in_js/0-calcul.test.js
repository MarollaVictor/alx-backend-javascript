const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should return 0 when inputs are 0.1 and 0.1', () => {
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
  });

  it('should return 2 when inputs are 0.6 and 0.6', () => {
    assert.strictEqual(calculateNumber(0.6, 0.6), 2);
  });

  it('should return -2 when inputs are -1.4 and -0.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });
});