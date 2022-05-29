module.exports = {
    getRewardValidation: async function (req, res, next) {
        const expense = await parseFloat(req.params.expense);
        if (isNaN(expense)) {
            res.send({
                title: 'GET Rewards API',
                message: 'Please provide a valid expense transaction'
            })
        } else if (expense < 50) {
            res.send({
                title: 'GET Rewards API',
                message: 'Reward points are applicable for greater then $50 expense'
            })
        } else {
            next();
        }
    
    },
    postRewardValidation: async function (req, res, next) {
        const params = req.body;
        if (!params || !params.records) {
            res.send({
                message: 'Please provide a valid list of transactions'
            })
        } else if (params.records && params.records.length === 0) {
            res.send({
                message: 'Transactions list should not be empty'
            })
        } else {
            next();
        }
    },
}