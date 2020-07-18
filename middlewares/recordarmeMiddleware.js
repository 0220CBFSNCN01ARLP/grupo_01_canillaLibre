let { Usuarios } = require("../database/models");

async function recordarmeMiddleware (req,res, next){
    try{
        const user = await Usuarios.findOne(
            { where: { email: req.body.email } 
            });
        } catch (error) {
            return res.send(error);
        }
            if (req.cookie.recordarme && !req.session.usuarioLogueado){    
                if ( user.email == req.cookie.recordarme){
                        usuarioaLoguearse =  user.email;
                }
            };
                req.session.usuarioLogueado = usuarioaLoguearse;
                next;
            }
                
  
module.exports = recordarmeMiddleware;