var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ironman', function(req, res, next) {
  res.send("<h1>Страница Железного человека</h1>")
});

router.get('/hulk', function(req, res, next) {
  res.send("<h1>Страница Халка</h1>")
});

router.get('/spiderman', function(req, res, next) {
  res.send("<h1>Страница Человека-Паука</h1>")
});
  
module.exports = router;
