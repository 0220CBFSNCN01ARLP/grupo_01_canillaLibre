var express = require("express");
var router = express.Router();

router.get("/headerLogin", (req, res, next) => {
    res.render("headerlogin");

});
