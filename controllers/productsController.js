const fs = require("fs");
const path = require("path");

const { Productos, Bebidas, Cursos, Insumos } = require("../database/models");

const controller = {

    //Create - Formulario de Carga de Producto
    showRegister: (req, res) => {

        res.render("form_prod", { Productos, Bebidas, Cursos, Insumos });
      },

    //Create - Carga Formulario de Producto 
    register: async (req, res) => {
        let product = await Productos.create({
            nombre: req.body.nombre,
            precioUnitario: req.body.precioUnitario,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            stock: req.body.stock,
            rating: req.body.rating,
            tipoproducto: req.body.productoId
        })            
            res.render('detail', {product});
        },     

    // Read - Muestra todos los Productos

    allproducts: async (req, res) => {
        
        const productos = await Productos.findAll();
            
        res.render("products", { productos });
        
    },

    // Read - Muestra detalle de un producto
    detailproduct: async (req, res) => {
            try {
                const product = await Productos.findByPk(req.params.id);

                res.render("detail", { product });
            } catch (error) {
                res.send(error);
            }
        },

    // Update - Formulario de Edición de Producto
    edit: async (req, res) => {
        try {
            const product = await Productos.findByPk(req.params.id);

            res.render("product-edit-form", { product });
        } catch (error) {
            res.send(error);
        }
    },

    // Update - Carga Formulario de Edición de Producto
    update: async (req, res) => {
        try {
             let product = await Productos.update(
                {
                    //nombre: req.body.nombre,
                    //precioUnitario: req.body.precioUnitario,
                    //descuento: req.body.descuento,
                    //descripcion: req.body.descripcion,
                    //imagen: req.file.filename,
                    //stock: req.body.stock,
                    //rating: req.body.rating,
                    //tipoproducto: req.body.productoId
                    ...req.body
                },
                {
                    where: {
                        id: req.params.id,
                    },
                });

            /*await req.files.forEach((imagen) => {
            Productos.create({
            path: imagen.filename
        });
    }); */

        res.redirect("/products/");
        } catch (error) {
            res.send(error);
        }
    },

    // Delete - Elimina Producto

    destroy: async (req, res) => {
        try {
            await Productos.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.redirect("/products");
        } catch (error) {
            res.send(error);
        }
    },
    };

module.exports = controller;
