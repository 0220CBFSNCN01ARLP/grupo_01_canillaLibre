var express = require("express");
var router = express.Router();

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

<<<<<<< HEAD

router.get("/profile.ejs", function (req, res, next) {
  res.render("profile", { title: "Express" });
});


/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/

=======
>>>>>>> c2d9e12b44f5e1449a46a31bcd7214e8e88c051f
module.exports = router;
