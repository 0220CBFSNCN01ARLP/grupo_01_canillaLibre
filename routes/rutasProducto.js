var express = require("express");
var router = express.Router();
var fs = require("fs");
const multer = require("multer");
const path = require("path");

//Funcion Multer para guardar avatar
var storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../public/prod_upload/"),

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

const newProd_controller = require("../controllers/newproducts");

router.get("/", newProd_controller.showRegister);

router.post("/", upload.single("imagen1"), newProd_controller.register);



module.exports = router;