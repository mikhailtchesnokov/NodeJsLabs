const {assert} = require('chai');

describe('Simple Math', () => {
    describe('should add 3 and 4 and return 7', () => {
        it('should add two numbers correctly', () => {
            assert.equal(3 + 4, 7);
        });
    });
});