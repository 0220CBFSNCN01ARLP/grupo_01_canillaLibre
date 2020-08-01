const fs = require("fs");
const path = require("path");
const { check, validationResult, body } = require("express-validator");

const {
  Productos,
  Bebidas,
  Cursos,
  Insumos,
  Presentacion,
  Medio,
  Usuarios,
} = require("../database/models");

let carrito = [];
const carritoController = {
  addshopcart: async (req, res) => {
    // try {
    const usuarioLogueado = req.session.usuarioLogueado;
    const product = await Productos.findByPk(req.params.id, {
      include: [{ association: "usuario" }],
    });

    console.log("los pprdocutos que levantan son " + product);

    if (usuarioLogueado.email != product.usuario.email) {
      carrito.push(product);
      console.log("los items del array " + carrito);
      res.render("shop-cart", { carrito: carrito });
      // res.send(carrito) // modal que avise que se cargo producto xx al carrito
    } else {
      res.send("El usuario logueado no puede comprar sus propios productos");
    }
  },
  allshopcart: (req, res) => {
    console.log(carrito);

    res.render("shop-cart", { carrito: carrito });
  },

  deletefromshopcart: async (req, res) => {
      
    const product = await Productos.findByPk(req.params.id);
    let i = carrito[product.id];
        
    console.log("=========================================================el req params del carrito es: " + i);
    
        if (i !== -1) {
            carrito.splice(i, 1);
        }

    console.log(carrito);

    res.render("shop-cart", { carrito: carrito });
    //res.send(carrito)
  },
  // Compras de productos
};

module.exports = carritoController;
