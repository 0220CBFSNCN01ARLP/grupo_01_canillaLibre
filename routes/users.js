const express = require("express");
const router = express.Router();
const path = require("path");

const userController = require("../controllers/userController");

/* profile */
router.get("/profile/:id", userController.edit); /* GET */
router.put("/profile/:id", userController.update); /* PUT */

module.exports = router;
