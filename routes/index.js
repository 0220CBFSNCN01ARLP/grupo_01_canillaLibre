var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");

// ************ Models Require ************
const { Productos } = require("../database/models");

/* GET home page. */
router.get("/", async (req, res, next) => {
    const bebidas = await Productos.findAll({
        where: {
            [Op.or]: [{ tipoproducto: 1 }],
        },
        limit: 10,
    });
    const insumos = await Productos.findAll({
        where: {
            [Op.or]: [{ tipoproducto: 2 }],
        },
        limit: 10,
    });
    const cursos = await Productos.findAll({
        where: {
            [Op.or]: [{ tipoproducto: 3 }],
        },
        limit: 10,
    });

    res.render("index", { bebidas, insumos, cursos });
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
