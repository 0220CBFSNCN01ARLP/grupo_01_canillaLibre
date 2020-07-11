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
}); //creacion de producto para usuario logueados

//Usuario Invitado
router.get("/notPermission", function(req,res){
    res.render("notPermission");
})

module.exports = router;
