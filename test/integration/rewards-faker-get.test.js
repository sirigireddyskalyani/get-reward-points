const expect = require('chai').expect
const app = require('../../src/app')
request = require('supertest')(app)

describe('Expenses Transactions FAKER API', () => {
    it('should return 10-days of mock transactions', (done) => {
        request
            .get('/rewards/mock/10')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                const records = response.body.data;
                expect(response.statusCode).to.equal(200);
                expect(records.length).to.equal(10);
                done();
            });
    });
    it('should return 90-days of mock transactions', (done) => {
        request
            .get('/rewards/mock/90')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                const records = response.body.data;
                expect(response.statusCode).to.equal(200);
                expect(records.length).to.equal(90);
                done();
            });
    });
});