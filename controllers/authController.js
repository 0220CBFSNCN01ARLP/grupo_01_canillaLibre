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
                
                        res.render("profile", { user })

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
        
        if ( user == undefined ){
            res.send( "Usuario no registrado")

        } else {
                   if (bcrypt.compareSync(req.body.pass, user.password)) {
                       usuarioaLoguearse = user;
                   } else {
                       return res.render("login", {
                           errors: [{ msg: "Credenciales Invalidas" }],
                       });
                   }

                   req.session.usuarioLogueado = usuarioaLoguearse;
                   res.redirect("/");
               }
 
            if (req.body.recordarme != undefined){

                res.cookie ("recordarme", usuarioaLoguearse.email, { maxAge: 60000})
            }
        
    },

    //LOGOUT
    logout: function (req, res) {
        console.log(req.session.usuarioLogueado);
        req.session.destroy();
        res.redirect("/");
    },

    //PROFILE
    showProfile: async (req, res) => {
        
        let user = req.session.usuarioLogueado;
        res.render("profile", { user });
        console.log(user);
    },

    editProfile: async (req, res) => {
        const user = await Usuarios.findByPk(req.params.id);
        res.render("profileEdit", { user });
    },

    

    deleteProfile: async (req, res) => {

    }

};

module.exports = controller;
