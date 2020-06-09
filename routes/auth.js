const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const session = require('express-session');
const cookieParser = require('cookie-parser');


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

router.get("/register", authController.showRegister);
router.post(
  "/register",
  upload.single("avatar"),
  [
    check("firsname").isLength().withMessage("Este campo debe estar completo"),
    check("lastname").isLength().withMessage("Este campo debe estar completo"),
    check("email")
      .isEmail()
      .custom(function (value) {
        let usersJSON = fs.readFileSync(
          path.resolve(__dirname, "../data/user_db.json")
        );
        let users;
        if (usersJSON == "") {
          users = [];
        } else {
          users = JSON.parse(usersJSON);
        }
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == value) {
            return false;
          }
        }
        return true;
      })
      .withMessage("Email ya registrado"),
    check("age").isInt({ min: 18 }).withMessage("Debe ser mayor de 18 años"),
    check("pass")
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener más de 8 caracteres"),
  ],
  authController.register
);

router.get("/login", authController.showLogin);

router.post(
  "/login",
  [
    check("email")
      .custom(function (value) {
        let usersJSON = fs.readFileSync(
          path.resolve(__dirname, "../data/user_db.json")
        );
        let users;
        if (usersJSON == "") {
          users = [];
        } else {
          users = JSON.parse(usersJSON);
        }
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == value) {
            return true;
          }
        }
        return false;
      })
      .withMessage("Email no registrado"),
  ],
  authController.login
);

/*middleware, comprueba el inicio de session
const auth = function (req,res,next){
  console.log(req.session.email)

if (req.session.email) {
    res.send('No puedes acceder a esa pagina sin logearte')

} else {
    next();
} 
}*/

function userMiddleware (req, res, next){

  if (req.session.usuarioLogueado != undefined){
      next ();

  }else {
      res.send ("Esta pagina es solo para usuarios Logueados");
  }
}
//ruta logout para cerrar session
router.get("/logout", userMiddleware, authController.logout);


module.exports = router;

