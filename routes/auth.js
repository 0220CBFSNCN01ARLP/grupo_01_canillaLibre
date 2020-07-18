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
	[
		check("firstname")
			.isLength({ min: 5 })
			.withMessage("Este campo debe estar completo"),
		check("lastname")
			.isLength({ min: 5 })
			.withMessage("Este campo debe estar completo"),
		check("email").isEmail().withMessage("Debe ser un email valido"),
		//implementar middleware q calcule la edad minima requerida
		//check("age")
		//    .isInt({ min: 18 })
		//    .withMessage("Debe ser mayor de 18 años"),
		check("pass").isLength({ min: 6 }).withMessage("Password Incorrecta"),
		//check("pass2").equals(body.pass).withMessage("Debe repetir la contraseña"),
	],

	authController.register
);

//Login //Read
router.get("/login", guestMiddleware, authController.showLogin);
router.post(
	"/login",

	check("email").isEmail().withMessage("Debe poner un email valido"),
	check("pass").isLength({min:8}).withMessage("La password debe tener al menos 8 caracteres")
	// body("email")
	// 	.custom((value) => async (req, res) =>  {

	// 		const users = await Usuarios.find(
	// 			 { email: req.body.email }

	// 		);

	// 		if (users.email == value) {
	// 			return false;
	// 		}
	// 		return true;

	// 	},
	// 		)
	// 		.withMessage("Email no registrado")]
	,authController.login
);


//Logout
router.get("/logout", authController.logout);

//Profile //Read
router.get("/profile", userMiddlware, authController.showProfile);


//Profile //Update
router.get("/editar/:id", authController.editProfile);
router.post("/editar/:id", upload.single("avatar"), authController.updateProfile);


//Profile //Delete
router.post("/delete/:id", authController.deleteProfile);



//Prueb para ver si estas logueado en la Session
router.get("/check", function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas logueado");
    } else {
        res.send("Estas Logueado como " + req.session.usuarioLogueado);
    }
});

module.exports = router;
