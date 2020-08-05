function userMiddleware(req, res, next) {
    if (req.session.usuarioLogueado) {
        next();
    } else {
        res.render("notPermission");
    }
}

module.exports = userMiddleware;
