const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");

const guestMiddleware = require("../middlewares/guestMiddleware");
const userMiddleware = require("../middlewares/userMiddlware");

// ************ Controllers ************
const carritoController = require("../controllers/carritoController");

router.get("/", carritoController.allshopcart);
// Agregar a carrito de compras

router.post("/:id", carritoController.addshopcart);

//Elimar producto del carrito de compras
router.delete("/:id/delete", carritoController.deletefromshopcart);
// router.post("/carrito", carritoController.deletefromshopcart); /* DELETE */

module.exports = router;
