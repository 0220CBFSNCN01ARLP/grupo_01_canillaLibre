var express = require("express");
var router = express.Router();

// ************ Controller Require ************
const controller = require("../controllers/productsController");

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

/* ver dejando el index como estaba*/
router.get("/productDetail.ejs", function (req, res, next) {
  res.render("/productDetail", { title: "Express" });
});

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/

module.exports = router;
