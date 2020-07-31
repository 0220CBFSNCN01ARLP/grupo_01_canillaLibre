const express = require("express");
const router = express.Router();
const path = require("path");
const { check, validationResult, body } = require("express-validator");

// ************ Controllers ************
const controller = require("../../controllers/api/productsController");

//Todos los productos
router.get("/products", controller.allproducts);
//ultimo producto
router.get("/products/lastproduct", controller.lastproduct);

//Detalle de un producto
router.get("/products/:id", controller.detailproduct);

//Borrar un producto
router.delete("/products/:id", controller.destroyOne);

module.exports = router;
