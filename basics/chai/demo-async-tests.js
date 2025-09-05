const customerApiClient = require('./customerApiClient');
const {assert} = require('chai');

describe('Customer API Client', () => {

    before(() => {
        console.log('Before all tests');
    });

    beforeEach(() => {
        console.log('Before each test');
    });

    describe('Get Customer', () => {
        it('should return a customer object', (done) => {
            customerApiClient.getCustomer(1).then((customer) => {
                assert.isObject(customer);
                assert.equal(customer.id, 1);
                assert.equal(customer.name, 'John Doe');
                assert.equal(customer.age, 30);
                done();
            });
        });
    });

    after(() => {
        console.log('After all tests');
    });

    afterEach(() => {
        console.log('After each test');
    });
});