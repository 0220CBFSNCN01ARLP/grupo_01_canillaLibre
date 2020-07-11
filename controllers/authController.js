const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

let { Usuarios } = require("../database/models");


const controller = {

    //GET REGISTER
    showRegister: (req, res) => {
        res.render("register");
                                                                                                                                                                                                                                                                                                                                            },

    //POST REGISTER
    register: async (req, res) => {

        //validation
        // console.log(validationResult(req));
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            //registro de nuevo usuario

            if (req.body.pass != req.body.pass2) {
                return res.render("register");
            }

            req.body.pass = bcrypt.hashSync(req.body.pass, 10);

            delete req.body.pass2;

            //inicio de sequelize
            const user = await Usuarios.create(
                {
                    nombre: req.body.firstname,
                    apellido: req.body.lastname,
                    email: req.body.email,
                    password: req.body.pass,
                    avatar: req.file.filename,
                    fecha_nacimiento: req.body.date
                })
                
                    return res.render("profile", { user })

        } else {

            return res.render("register", { errors: errors.errors });

        }
    },

    //GET LOGIN
    showLogin: (req, res) => {
        res.render("login");
    },

    //POST LOGIN
    login: async (req, res) => {
        
        const user = await Usuarios.findOne({
            where: { email: req.body.email },
        });

        //console.log("el usuario que trae el findOne es: " + user.email) ;

        if ( user == undefined ){
            res.send( "Usuario no registrado")

        } else {
                   if (bcrypt.compareSync(req.body.pass, user.password)) {
                        
                        delete user.password;   //borra el pass por seguridad
                        usuarioaLoguearse = user ;
                       
                        //console.log("pase el bcrypt");
                        //console.log(usuarioaLoguearse);
                   } else {
                       return res.render("login", {
                           errors: [{ msg: "Credenciales Invalidas" }],
                       });

                   }
                   //console.log(req.body.recordarme)
                   if (req.body.recordarme){
                        res.cookie ("recordarme", usuarioaLoguearse.email, { maxAge: 60000});
                    }

                        req.session.usuarioLogueado = usuarioaLoguearse;
                        //console.log("esta es la session de: " + req.session.usuarioLogueado.email)
                        return res.redirect("/");
                   
                    }
 
    },

    //LOGOUT
    logout: function (req, res) {
        console.log(req.session.usuarioLogueado);
        req.session.destroy();
        return res.redirect("/");
    },

    //PROFILE
    showProfile: async (req, res) => {
        
        let user = req.session.usuarioLogueado;
        return res.render("profile", { user });
        //console.log(user);
    },

    editProfile: async (req, res) => {
        const user = await Usuarios.findByPk(req.params.id);
        return res.render("profileEdit", { user });
    },

    updateProfile: async (req, res) => {
        const newpass = req.body.pass = bcrypt.hashSync(req.body.pass, 10);
       
        const user = await Usuarios.update(
            {
                nombre: req.body.firstname,
                apellido: req.body.lastname,
                email: req.body.email,
                password: req.body.pass,
                avatar: req.file.filename,
                fecha_nacimiento: req.body.date
            },{
                where: {
                    id: req.params.id
                }
            })
            
            req.session.usuarioLogueado = await Usuarios.findByPk(req.params.id);
            
            return res.redirect("/auth/profile/");
    },

    deleteProfile: async (req, res) => {
        try {
            await Usuarios.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(err) { console.log(err); }
        req.session.usuarioLogueado = null;
        res.redirect("/");
    }

};

module.exports = controller;
