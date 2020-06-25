function recordarmeMiddleware (req,res, next){

    
    if (req.cookie.recordarme != undefined && req.session.usuarioLogueado == undefined ){
        
        let user = require("../database/models");

            if ( user.email == req.cookie.recordarme) {
                    usuarioaLoguearse = { user };
            }
        
        req.session.usuarioLogueado = usuarioaLoguearse;
        }
        next;
}

module.exports = recordarmeMiddleware;