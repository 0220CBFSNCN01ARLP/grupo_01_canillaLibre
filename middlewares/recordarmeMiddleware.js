function recordarmeMiddleware (req,res, next){

    
    if (req.cookie.recordarme != undefined && req.session.usuarioLogueado == undefined ){
        let users = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "../data/user_db.json"))
        );

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookie.recordarme) {
                {
                    usuarioaLoguearse = users[i];
                } 
            }
        }
        req.session.usuarioLogueado = usuarioaLoguearse;
        }
        next;
}

module.exports = recordarmeMiddleware;