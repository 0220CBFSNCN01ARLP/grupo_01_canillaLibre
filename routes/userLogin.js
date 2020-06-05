const express = require("express");
const router = express.Router();



// ruta franco //
router.get("/headerLogin", (req, res, next) => {
    //const user = req.session.usuarioLogueado;
    //delete req.session.usuarioLogueado; 
    res.render("headerlogin", {
        //user
    });

});

module.exports = router;