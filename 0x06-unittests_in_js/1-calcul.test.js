const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM of 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 0 for SUM of -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
    it('should return 4 for SUM of 1.5 and 1.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.5), 4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT of 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 0 for SUBTRACT of 1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });
    it('should return -2 for SUBTRACT of -0.4 and 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -0.4, 1.5), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE of 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return "Error" for DIVIDE of 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return 2 for DIVIDE of 3.5 and 1.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 1.5), 2);
    });
    it('should return "Error" for DIVIDE of 1.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });
});