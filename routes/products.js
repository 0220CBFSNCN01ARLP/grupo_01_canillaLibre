const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const guestMiddleware = require("../middlewares/guestMiddleware");
const userMiddleware = require("../middlewares/userMiddlware");

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

// ************ Controllers ************
const controller = require("../controllers/productsController");


//Todos los productos
router.get("/", controller.allproducts);

//Creacion de producto
router.get("/form_prod", userMiddleware, controller.showRegister);
router.post("/form_prod", upload.single("image1"), controller.register);

//Detalle del producto
router.get("/:id?", controller.detailproduct);

//Editar producto
router.get("/:id/edit",userMiddleware,controller.edit); /* GET */
router.put("/:id?", userMiddleware,upload.single("image1"),controller.update); /* PUT */
router.get("/pruebaSession", function (req, res) {
    if (req.session.numero == undefined) {req.session.numero = 0;}});

//Elimar producto
router.delete("/:id/delete", userMiddleware, controller.destroy); /* DELETE */

module.exports = router;
