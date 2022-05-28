const expect = require('chai').expect;

const utilityController = require('../src/controller/utility')

describe('Utility Controller :: getProcessTime(.)', function () {
    it('should return processTime', async function () {
        const processTime = await utilityController.getProcessTime("1653734686251");
        expect(processTime).to.be.an("string");
    });
});
