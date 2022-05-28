const expect = require('chai').expect
const app = require('../../src/app')
request = require('supertest')(app)

describe('Rewards GET API', () => {
    it('should return 90 points for 120 expenses', (done) => {
        request
            .get('/rewards/120')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                expect(response.statusCode).to.equal(200);
                expect(response.body.data.points).equal(90)
                done();
            });
    });
    it('should return 1 point for 51 expenses', (done) => {
        request
            .get('/rewards/51')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                expect(response.statusCode).to.equal(200);
                expect(response.body.data.points).equal(1)
                done();
            });
    });
    it('should return 52 point for 101 expenses', (done) => {
        request
            .get('/rewards/101')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                expect(response.statusCode).to.equal(200);
                expect(response.body.data.points).equal(52)
                done();
            });
    });
    it('should return validation message for 10 expenses', (done) => {
        request
            .get('/rewards/10')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                expect(response.statusCode).to.equal(200);
                expect(response.body.message).equal("Reward points are applicable for greater then $50 expense")
                done();
            });
    });
    it('should return validation message for char -char10- expenses', (done) => {
        request
            .get('/rewards/char10')
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) done(err);
                expect(response.statusCode).to.equal(200);
                expect(response.body.message).equal("Please provide a valid expense transaction")
                done();
            });
    });
});