var express = require("express");
var router = express.Router();

var { getRewardValidation, postRewardValidation } = require("./../middleware/rewards");
var { calcRewardPoints } = require("./../controller/rewards");
var { getProcessTime } = require("./../controller/utility");
var { getTransactionsPerDays } = require("./../controller/facker");

/* GET home page. */
router.get("/:expense", [getRewardValidation], function (req, res) {
  res.send({
    data: calcRewardPoints(req.params.expense),
    processTime: getProcessTime(req.reqTime),
  });
});

router.get('/mock/:days', function (req, res) {
  const response = getTransactionsPerDays(parseFloat(req.params.days))
  res.send({
      data: response,
      processTime: getProcessTime(req.reqTime),
  });
});

router.post('/total', [postRewardValidation], function (req, res, next) {
  const response = {};
  req.body.records.forEach(function(rec) {
      const details = calcRewardPoints(parseFloat(rec.expenses))
      const entity = response[rec.username]
      if (entity) {
          entity.expenses = entity.expenses + rec.expenses;
          entity.points = entity.points + details.points;
      } else {
          response[rec.username] = {expenses: rec.expenses, points: details.points}
      }
  })
  res.send({
      processTime: getProcessTime(req.reqTime),
      data: response,
  });
});

module.exports = router;
