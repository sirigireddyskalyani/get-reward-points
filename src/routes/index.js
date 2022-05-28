var express = require('express');
var router = express.Router();

var {getProcessTime} = require('./../controller/utility');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    title: 'get-reward-points',
    type: 'API Service',
    apis: [
      '/rewards/:expense'
    ],
    processTime: getProcessTime(req.reqTime)
  });
});

module.exports = router;
