const simpleMath = require('./simpleMath');
const {assert} = require('chai');

describe('Simple Math', () => {
    describe('should add 3 and 4 and return 7', () => {
        it('should add two numbers correctly', () => {
            const result = simpleMath.add(3, 4);
            assert.equal(result, 7);
        });
    });

    describe('Subtraction', () => {
        it('should subtract 3 from 12 and return 9', () => {
            const result = simpleMath.sub(12, 3);
            assert.equal(result, 9);
        });
    });

    describe('Multiplication', () => {
        it('should multiply 2 and 3 and return 6', () => {
            const result = simpleMath.multiply(2, 3);
            assert.equal(result, 6);
        });
    });
});