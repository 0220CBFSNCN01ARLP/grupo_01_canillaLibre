var express = require("express");
var router = express.Router();

const userMilddlware = require("../middlewares/userMiddlware");

// ************ Controller Require ************
const controller = require("../controllers/productsController");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

/* Product_cart*/
router.get("/product_cart.ejs", function (req, res) {
    res.render("product_cart");
});

/* Form_product*/ //creacion de producto para usuario logueados
router.get("/form_prod.ejs", userMilddlware, function (req, res, next) {
    res.render("form_prod", { title: "Express" });
  });
  


router.get("/profile.ejs", userMilddlware, function (req, res, next) {
    res.render("profile", { title: "Express" });
});

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/

module.exports = router;
