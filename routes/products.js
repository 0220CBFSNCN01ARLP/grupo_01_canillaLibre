var express = require("express");
var router = express.Router();

// ************ Controller Require ************
const controller = require("../controllers/productsController");

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/
router.get("/product", controller.allproducts);
router.get(
  "/productDetail2/:id?",
  controller.detailproduct
); /* GET - Product detail */
router.get("/product-edit-form/:id", controller.edit); /* GET - Product edit */
router.put(
  "/product-edit-form/:id",
  controller.update
); /* PUT - Product update */

module.exports = router;
