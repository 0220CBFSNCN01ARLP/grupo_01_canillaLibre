const express = require("express");
const router = express.Router();
const path = require("path");
const { check, validationResult, body } = require("express-validator");

// ************ Controllers ************
const controller = require("../../controllers/api/productsController");

//Todos los productos
router.get("/products", controller.allproducts);

//Todos los productos
router.get("/products/:id", controller.detailproduct);

module.exports = router;