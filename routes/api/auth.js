const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/authController");

//Todos los usuarios
router.get("/profile", controller.showProfile);

//usuarios por id
router.get("/profile/:id", controller.showOneProfile);

//sellers
router.get("/seller", controller.sellers);

module.exports = router;
