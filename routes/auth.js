const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const fs = require("fs");

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
    //check("pass2").equals(body.pass).withMessage("Debe repetir la contraseña"),
  ],
  authController.register
);

router.get("/login", authController.showLogin);
router.post(
  "/login",
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
  /* check("pass")
    .isLength({ min: 8 })
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
        if (users[i].pass != value) {
          return false;
        }
      }
      return true;
    })
    .withMessage("La contraseña debe tener más de 8 caracteres"), */
  authController.login
);

//profile
//router.get("/profile", function (req, res, next) {});

module.exports = router;
