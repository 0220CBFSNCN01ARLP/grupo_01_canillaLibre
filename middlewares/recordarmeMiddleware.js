let { Usuarios } = require("../database/models");

async function recordarmeMiddleware (req,res, next){

    const user = await Usuarios.findOne(
        { where: { email: req.body.email } 
        });
    
    if (req.cookie.recordarme && !req.session.usuarioLogueado){    
            if ( user.email == req.cookie.recordarme){
                    usuarioaLoguearse =  user.email;
            }
        };
        req.session.usuarioLogueado = usuarioaLoguearse;
        next;
        }
            
  
module.exports = recordarmeMiddleware;