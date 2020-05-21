var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Register*/
router.get("/register.ejs", function (req, res, next) {
  res.render("register", { title: "Express" });
});

/* Form_product*/
router.get("/form_prod.ejs", function (req, res, next) {
  res.render("form_prod", { title: "Express" });
});

/* Product_cart*/
router.get("/product_cart.ejs", function (req, res, next) {
  res.render("product_cart", { title: "Express" });
});

/* productDetail*/
router.get("/productDetail.ejs", function (req, res, next) {
  res.render("productDetail", { title: "Express" });
});

module.exports = router;
