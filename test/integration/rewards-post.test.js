const expect = require('chai').expect
const app = require('../../src/app')
request = require('supertest')(app)

describe('Total Rewards POST API', () => {
    it('should return exception for missing transactions data', (done) => {
        request
            .post('/rewards/total')
            .set('Accept', 'application/json')
            .send({})
            .end((err, response) => {
                if (err) done(err);
                const exception = response.body;
                expect(response.statusCode).to.equal(200);
                expect(exception.message).to.equal('Please provide a valid list of transactions');
                done();
            });
    });
    it('should return exception for empty transactions list', (done) => {
        request
            .post('/rewards/total')
            .set('Accept', 'application/json')
            .send({records: []})
            .end((err, response) => {
                if (err) done(err);
                const exception = response.body;
                expect(response.statusCode).to.equal(200);
                expect(exception.message).to.equal('Transactions list should not be empty');
                done();
            });
    });
    it('should calculate & return username Albin59 reward points info', (done) => {
        request
            .post('/rewards/total')
            .set('Accept', 'application/json')
            .send({
                records: [
                    {
                        username: "Albin59",
                        date: "2022-04-30T18:28:55.327Z",
                        expenses: 120
                    },
                    {
                        username: "Albin59",
                        date: "2022-05-11T07:13:51.986Z",
                        expenses: 120
                    },
                ]
            })
            .end((err, response) => {
                if (err) done(err);
                const rewards = response.body.rewards;
                expect(response.statusCode).to.equal(200);
                expect(rewards).to.haveOwnProperty('Albin59');
                expect(Object.keys(rewards).length).to.equal(1);
                expect(rewards['Albin59'].points).to.equal(180);
                done();
            });
    });
    it('should calculate & return username Felicity21, Albin59 reward points info', (done) => {
        request
            .post('/rewards/total')
            .set('Accept', 'application/json')
            .send({
                records: [
                    {
                        username: "Albin59",
                        date: "2022-04-30T18:28:55.327Z",
                        expenses: 120
                    },
                    {
                        username: "Albin59",
                        date: "2022-05-11T07:13:51.986Z",
                        expenses: 120
                    },
                    {
                        username: "Felicity21",
                        date: "2022-05-11T07:13:51.986Z",
                        expenses: 120
                    },
                    {
                        username: "Felicity21",
                        date: "2022-05-11T07:13:51.986Z",
                        expenses: 60
                    },
                ]
            })
            .end((err, response) => {
                if (err) done(err);
                const rewards = response.body.rewards;
                expect(response.statusCode).to.equal(200);
                expect(rewards).to.haveOwnProperty('Albin59');
                expect(rewards).to.haveOwnProperty('Felicity21');
                expect(Object.keys(rewards).length).to.equal(2);
                expect(rewards['Albin59'].points).to.equal(180);
                expect(rewards['Felicity21'].points).to.equal(100);
                done();
            });
    });
});