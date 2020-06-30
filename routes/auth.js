const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { Usuarios } = require("../database/models");

//Este middleware sirve para cortar proceso Ej. Register si req.session.usuarioLogeado tiene valor
const guestMiddleware = require("../middlewares/guestMiddleware");
// Middleware para usuario loguedo
const userMiddlware = require("../middlewares/userMiddlware");

//Funcion Multer para guardar avatar
var storage = multer.diskStorage({
    destination: path.resolve(__dirname, "../public/avatar/"),

    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });
//fin de funcion multer

const authController = require("../controllers/authController");


//Registro - //Create
router.get("/register", authController.showRegister);
router.post(
    "/register",
    upload.single("avatar"),
    
    authController.register
);

//Login //Read
router.get("/login", authController.showLogin);
router.post("/login", authController.login);

//Logout
router.get("/logout", authController.logout);

//Profile //Read
router.get("/profile", userMiddlware, authController.showProfile);


//Profile //Update
router.get("/editar/:id", authController.editProfile);



//Prueb para ver si estas logueado en la Session
router.get("/check", function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas logueado");
    } else {
        res.send("Estas Logueado como " + req.session.usuarioLogueado);
    }
});

module.exports = router;
