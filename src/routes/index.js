var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    title: 'get-reward-points',
    type: 'API Service',
    apis: [
      '/rewards/:expense'
    ]
  });
});

module.exports = router;
