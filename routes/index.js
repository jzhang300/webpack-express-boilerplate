const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Main' });
});
router.get('/other', (req, res) => {
  res.render('other', { title: 'Other' });
});


module.exports = router;
