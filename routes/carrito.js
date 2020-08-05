const express = require("express");
const router = express.Router();

// ************ Controllers ************
const carritoController = require("../controllers/carritoController");

router.get("/", carritoController.allshopcart);
// Agregar a carrito de compras

router.post("/:id", carritoController.addshopcart);

//Elimar producto del carrito de compras
router.delete("/:id/delete", carritoController.deletefromshopcart);
// router.post("/carrito", carritoController.deletefromshopcart); /* DELETE */

module.exports = router;
