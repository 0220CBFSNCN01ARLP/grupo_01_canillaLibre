const fs = require("fs");
const path = require("path");

let { Productos } = require("../database/models");

const controllerProduct = {
    //GET - formulario carga nuevo producto
    showRegister: (req, res) => {
        res.render("form_prod");
    },
    //POST - formulario envia datos de nuevo producto

    register: function(req, res)  {
        Productos.create({

            nombre: req.body.nombre,
            precioUnitario: req.body.precioUnitario,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.file.image1,
            stock: req.body.stock,
            rating: req.body.rating

        });



        res.redirect("/products/");
    },

    edit: function(req, res) {
        Productos.findByPk(req.params.id)
            then(function(Productos) {
                res.redirect("/products/")
            });
    },
    update: function(req, res) {
        Productos.update({

            nombre: req.body.nombre,
            precioUnitario: req.body.precioUnitario,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.file.image1,
            stock: req.body.stock,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/" + req.params.id)
    },

    destroy: function(req, res) {
        Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/");
    }    
        

        

    

     /*register: (req, res) => {

        
        //registro de nuevo producto
        const newproducts = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "../data/product_db.json"))
        );
        const newproduct = {
            id:
                newproducts.reduce((ac, u) => {
                    return Math.max(ac, u.id);
                }, 0) + 1,
            ...req.body,
            image1: "/upload/" + req.file.filename,
            // funcion para integrar el id en cada usr registrado:
        };
        newproducts.push(newproduct);
        fs.writeFileSync(
            path.resolve(__dirname, "../data/product_db.json"),
            JSON.stringify(newproducts, null, 3)
        );
        res.redirect("/products/");
    },*/
};

module.exports = controllerProduct;
