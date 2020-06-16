var express = require('express');
var router = express.Router();

/* GET quotes listing. */
router.get('/', (req, res) => {
  let quotesCollection = [{quote: 'Low hanging fruit!'}, {quote: 'Amen Brother!'}];
  res.json({quotes: quotesCollection});
});

module.exports = router;
