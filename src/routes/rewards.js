var express = require("express");
var router = express.Router();

var { getRewardValidation } = require("./../middleware/rewards");
var { calcRewardPoints } = require("./../controller/rewards");
var { getProcessTime } = require("./../controller/utility");

/* GET home page. */
router.get("/:expense", [getRewardValidation], function (req, res, next) {
  res.send({
    data: calcRewardPoints(req.params.expense),
    processTime: getProcessTime(req.reqTime),
  });
});

module.exports = router;
