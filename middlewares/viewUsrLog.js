function viewUsrLog(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        res.locals.user = req.session.usuarioLogueado;
    } else {
        res.locals.user = null;
    }
    next();
}

module.exports = viewUsrLog;
