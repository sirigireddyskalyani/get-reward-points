var express = require("express");
var router = express.Router();

var { getRewardValidation } = require("./../middleware/rewards");
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
      records: response,
      processTime: getProcessTime(req.reqTime),
  });
});


module.exports = router;
