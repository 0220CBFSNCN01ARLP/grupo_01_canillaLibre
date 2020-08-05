const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");

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

//Publicaciones del vendedor
router.get("/publications", controller.publications);

//Creacion de producto
router.get("/form_prod", userMiddleware, controller.showRegister);
router.post(
    "/form_prod",
    upload.single("imagen"),
    [
        check("nombre")
            .not()
            .isEmpty()
            .withMessage("Titulo, no puede estar vacio.")
            .isLength({ min: 5 })
            .withMessage("Título, debe tener 5 caracteres o más."),

        check("descripcion")
            .not()
            .isEmpty()
            .withMessage("Descripción, no puede estar vacio.")
            .isLength({ min: 20 })
            .withMessage("Descripción, debe tener 20 caracteres o más."),
    ],
    controller.register
);

//Detalle del producto
router.get("/:id?", controller.detailproduct);

//Editar producto
router.get("/:id/edit", userMiddleware, controller.edit); /* GET */
router.post(
    "/:id/edit",
    userMiddleware,
    upload.single("imagen"),
    controller.update
); /* PUT */

//Elimar producto
router.delete("/:id/delete", userMiddleware, controller.destroy); /* DELETE */

module.exports = router;
