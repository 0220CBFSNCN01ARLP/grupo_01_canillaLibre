function userMiddleware(req, res, next) {
    if (req.session.usuarioLogueado) {
        next();
    } else {
        res.render("notPermission");
        //res.send("Esta pagina es solo para usuarios Logueados");
    }
}

module.exports = userMiddleware;
