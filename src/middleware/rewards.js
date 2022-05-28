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
}