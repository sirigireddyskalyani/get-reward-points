const expect = require('chai').expect;

const rewardsController = require('../src/controller/rewards')

describe('Rewards Controller :: calcRewardPoints(.)', function () {
    it('should return 90 points for expense 120', async function () {
        const response = await rewardsController.calcRewardPoints(120);
        expect(response).to.be.an("object");
        expect(response.expense).equal(120);
        expect(response.points).equal(90);
    });

    it('should return  0 points for expense 50', async function () {
        const response = await rewardsController.calcRewardPoints(50);
        expect(response).to.be.an("object");
        expect(response.points).equal(0);
    });
    it('should return  0 points for expense 30', async function () {
        const response = await rewardsController.calcRewardPoints(30);
        expect(response).to.be.an("object");
        expect(response.points).equal(0);
    });
    it('should return  1 point  for expense 51', async function () {
        const response = await rewardsController.calcRewardPoints(51);
        expect(response).to.be.an("object");
        expect(response.points).equal(1);
    });
    it('should return 54 points for expense 102', async function () {
        const response = await rewardsController.calcRewardPoints(102);
        expect(response).to.be.an("object");
        expect(response.points).equal(54);
    });
});
