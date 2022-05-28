const expect = require('chai').expect;
const supertest = require('supertest');

const app = require('../../src/app')
const requestWithSupertest = supertest(app);

describe('Rewards API Router Service', function () {
    it('should return 200 status for / path with response of API service details', async function () {
        const response = await requestWithSupertest.get('/').expect("Content-Type", /json/);
        expect(response.status).equal(200);
        const serviceInfo = response.body;
        expect(serviceInfo).to.be.an("object");
        expect(serviceInfo.apis).to.be.an("array")
    });
    it('should handle as 404 status for /rewards path', async function () {
        const response = await requestWithSupertest.get('/rewards').expect("Content-Type", /json/);
        expect(response.status).equal(404);
    });
});
