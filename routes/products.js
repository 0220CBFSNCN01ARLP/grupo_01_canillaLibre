var express = require("express");
var router = express.Router();

// ************ Controller Require ************
const controller = require("../controllers/productsController");

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/
router.get("/", controller.allproducts);
router.get("/:id?", controller.detailproduct); /* GET - Product detail */
router.get("/:id/edit", controller.edit); /* GET - Product edit */
router.put("/:id?", controller.update); /* PUT - Product update */

/*** DELETE ONE PRODUCT***/
// /produdcts/delete/:id
router.delete("/:id/delete", controller.destroy); /* DELETE - Delete from DB */

module.exports = router;
