var faker = require('faker');
var _ = require('lodash');

module.exports = {
    getTransactionsPerDays: function (days) {
        var response = [];
        for (var i = 0; i < days; i++) {
            var entity = {
                username: faker.internet.userName(),
                date: faker.date.recent(_.random(1, 60, false)),
                expenses: parseFloat(faker.finance.amount(100, 5000, 2))
            }
            response.push(entity)
        }

        return response;
    }
}