var express = require("express");
var router = express.Router();



// ************ Controller Require ************
const controller = require("../controllers/productsController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});




//middleware Franco para usuarios
function userMiddleware (req, res, next){

  if (req.session.usuarioLogueado != undefined){
      next ();

  }else {
      res.send ("Esta pagina es solo para usuarios Logueados");
  }
};

// header para usuarios - Franco - Header para usuarios
router.get("/index2", userMiddleware, function (req, res, next) {
  res.render("index2", { title: "Express" });
});







/* Product_cart*/
router.get("/product_cart.ejs", function (req, res) {
  res.render("product_cart");
});

router.get("/profile.ejs", function (req, res, next) {
  res.render("profile", { title: "Express" });
});

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/

module.exports = router;
