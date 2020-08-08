const fs = require("fs");
const path = require("path");
const {
    Productos,
    Bebidas,
    Cursos,
    Insumos,
    Presentacion,
    Medio,
    Usuarios,
    Sequelize,
} = require("../database/models");
const Op = Sequelize.Op;
const carritoController = {
    addshopcart: async (req, res) => {
        // try {
        const usuarioLogueado = req.session.usuarioLogueado;
        const product = await Productos.findByPk(req.params.id, {
            include: [{ association: "usuario" }],
        });

        if (!req.session.carrito) {
            req.session.carrito = [];
        }
        if (usuarioLogueado.email != product.usuario.email) {
            //req.session.carrito.push(product)
            req.session.carrito.push({
                id: product.id,
                cantidad: 1,
            });
            //res.render("shop-cart", { carrito: req.session.carrito });
            res.redirect("/carrito");
            // res.send(carrito) // modal que avise que se cargo producto xx al carrito
        } else {
            res.send(
                "El usuario logueado no puede comprar sus propios productos"
            );
        }
    },
    allshopcart: async (req, res) => {
        if (!req.session.carrito) {
            req.session.carrito = [];
        }
        let items = req.session.carrito.map((e) => {
            return e.id;
        });
        const carrito = await Productos.findAll({
            where: {
                id: { [Op.in]: items },
            },
        });
        res.render("shop-cart", { carrito });
    },
    deletefromshopcart: async (req, res) => {
        let i = req.session.carrito.findIndex((e) => {
            return e.id == req.params.id;
        });
        if (i !== -1) {
            req.session.carrito.splice(i, 1);
        }
        res.redirect("/carrito");
        res.send(req.session.carrito);
    },
};
module.exports = carritoController;
