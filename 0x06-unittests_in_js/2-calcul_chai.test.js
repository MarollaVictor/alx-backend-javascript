const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM of 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 0 for SUM of -0.4 and 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
    it('should return 4 for SUM of 1.5 and 1.5', () => {
      expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT of 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0 for SUBTRACT of 1.4 and 1.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
    it('should return -2 for SUBTRACT of -0.4 and 1.5', () => {
      expect(calculateNumber('SUBTRACT', -0.4, 1.5)).to.equal(-2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE of 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" for DIVIDE of 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return 2 for DIVIDE of 3.5 and 1.5', () => {
      expect(calculateNumber('DIVIDE', 3.5, 1.5)).to.equal(2);
    });
    it('should return "Error" for DIVIDE of 1.4 and 0.4', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });
});