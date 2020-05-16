var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* REgister*/

router.get('/register.ejs', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get("/form_prod.ejs", function (req, res, next) {
  res.render("form_prod", { title: "Express" });
});

module.exports = router;
