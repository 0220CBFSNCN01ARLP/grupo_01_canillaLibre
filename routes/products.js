const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");

const guestMiddleware = require("../middlewares/guestMiddleware");
const userMiddleware = require("../middlewares/userMiddlware");

var storage = multer.diskStorage({
    destination: path.resolve(__dirname, "../public/upload/"),

    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });

// ************ Controllers ************
const controller = require("../controllers/productsController");

//Todos los productos
router.get("/", controller.allproducts);

//Creacion de producto
router.get("/form_prod", userMiddleware, controller.showRegister);
router.post("/form_prod", upload.single("imagen"), [

], controller.register);

//Detalle del producto
router.get("/:id?", controller.detailproduct);

//Editar producto
router.get("/:id/edit",userMiddleware,controller.edit); /* GET */
router.post("/:id/edit", userMiddleware,upload.single("imagen"),controller.update); /* PUT */

//Elimar producto
router.delete("/:id/delete", userMiddleware, controller.destroy); /* DELETE */

module.exports = router;
