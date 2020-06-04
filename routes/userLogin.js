const express = require("express");
const router = express.Router();



// ruta franco //
router.get("/headerLogin", (req, res, next) => {
    res.render("headerlogin");

});

module.exports = router;