var express = require('express');
var router = express.Router();
const quotesCollection = require('../quotes.json');
quote = () => quotesCollection[Math.random() * quotesCollection.length>>0]

/* GET quotes listing. */
router.get('/', (req, res) => {
  res.json({quotes: quote()});
});

module.exports = router;
