var express = require("express");
var router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/upload/"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });
// ************ Controller Require ************
const controller = require("../controllers/productsController");
const controllerProducts = require("../controllers/newproducts");

/* productDetail*/
/*cambie la vista por detail para hacer pruebas, despues volver a product Detail*/
router.get("/", controller.allproducts);
router.get("/:id?", controller.detailproduct); /* GET - Product detail */
router.get("/:id/edit", controller.edit); /* GET - Product edit */
router.put(
  "/:id?",
  upload.single("image1"),
  controller.update
); /* PUT - Product update */

/*Crear Productos*/

router.get("/", controllerProducts.showRegister);
router.post("/", upload.single("image1"), controllerProducts.register);

/*** DELETE ONE PRODUCT***/
// /produdcts/delete/:id
router.delete("/:id/delete", controller.destroy); /* DELETE - Delete from DB */

module.exports = router;
