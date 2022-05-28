var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:expense", function (req, res, next) {
  const expense = req.params.expense;
  res.send({ amount: expense });
});

module.exports = router;
