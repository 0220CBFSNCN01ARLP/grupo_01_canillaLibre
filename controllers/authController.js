const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

let { User } = require("../database/models");


const controller = {

    //GET REGISTER
    showRegister: (req, res) => {
        res.render("register");
    },

    //POST REGISTER
    register: async (req, res) => {

        //validation
        console.log(validationResult(req));
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            //registro de nuevo usuario

            if (req.body.pass != req.body.pass2) {
                return res.render("register");
            }

            req.body.pass = bcrypt.hashSync(req.body.pass, 10);

            delete req.body.pass2;

            //inicio de sequelize
            const user = await User.create(
                {
                    nombre: req.body.firstname,
                    apellido: req.body.lastname,
                    email: req.body.lastname,
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
    login: (req, res) => {
        console.log(validationResult(req));
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            //Diego logica del logueo de usr
            let users = JSON.parse(
                fs.readFileSync(path.resolve(__dirname, "../data/user_db.json"))
            );
            // const user = await User.findOne({ where: { email: req.body.email } 
                
            // });
            
            
            for (let i = 0; i < user.length; i++) {
                if (user[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.pass, user[i].pass)) {
                        usuarioaLoguearse = user[i];
                    } else {
                        return res.render("login", {
                            errors: [{ msg: "Credenciales Invalidas" }],
                        });
                    }
                }
            }

            req.session.usuarioLogueado = usuarioaLoguearse;

            if (req.body.recordarme != undefined){

                res.cookie ("recordarme", usuarioaLoguearse.email, { maxAge: 60000})
            }

            res.redirect("/");

            //logeo de usuario
            //res.render("/");
        } else {
            return res.render("login", { errors: errors.errors });
        }
    },

    //LOGOUT
    logout: function (req, res) {
        console.log(req.session.usuarioLogueado);
        req.session.destroy();
        res.redirect("/");
    },

    //PROFILE
    showProfile: (req, res) => {
        
        res.render("profile", { user });

        // console.log(req.session.usuarioLogueado);
        // let User = req.session.usuarioLogueado;
        
    },
};

module.exports = controller;
