var express = require('express');
var router = express.Router();
const quotesCollection = require('../quotes.json');

/* GET quotes listing. */
router.get('/', (req, res) => {
  res.json({quotes: quotesCollection});
});

module.exports = router;
