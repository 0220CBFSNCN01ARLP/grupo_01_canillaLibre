var express = require("express");
var router = express.Router();

// ************ Models Require ************
const { Productos } = require("../database/models");

/* GET home page. */
router.get("/", async (req, res, next) => {
    const products = await Productos.findAll({ limit: 10 });
    console.log("el producto del index es: " + products);
    res.render("index", { products });
});

/* GET team */
router.get("/nosotros", function (req, res) {
    res.render("team");
});

/* Product_cart*/
router.get("/product_cart.ejs", function (req, res) {
    res.render("product_cart");
}); //creacion de producto para usuario logueados

//Usuario Invitado
router.get("/notPermission", function (req, res) {
    res.render("notPermission");
});

module.exports = router;
