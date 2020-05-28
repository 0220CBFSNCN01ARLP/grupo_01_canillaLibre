const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

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

const authController = require("../controllers/authController");

router.get("/register", authController.showRegister);
router.post("/register", upload.single("avatar"), authController.register);

//profile
//router.get("/profile", function (req, res, next) {});

module.exports = router;
