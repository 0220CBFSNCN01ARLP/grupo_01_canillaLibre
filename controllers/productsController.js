const fs = require("fs");
const path = require("path");

const { Productos, Bebidas, Cursos, Insumos, Presentacion, Medio, Usuarios } = require("../database/models");

const controller = {

    //Create - Formulario de Carga de Producto
    showRegister: async (req, res) => {
        
            // no puedo hacer funcionar que mustre en el select del form-prod todas las presentaciones:
            const presentacion = await Presentacion.findAll();
            const medio = await Medio.findAll();

            return res.render("form_prod", { presentacion, medio });
        
        
      },

    //Create - Carga Formulario de Producto 
    register: async (req, res) => {
            const presentacion = await Presentacion.findAll();
            
        try {  
            let product = await Productos.create({
                nombre: req.body.nombre,
                precioUnitario: req.body.precioUnitario,
                descuento: req.body.descuento,
                descripcion: req.body.descripcion,
                imagen: req.file.filename,
                stock: req.body.stock,
                tipoproducto: req.body.productoId,
                usuarioId: req.session.usuarioLogueado.id
            })
                console.log(req.body);
                // en caso que sea 1 graba en bebidas
                // en caso que sea 2 queda como insumo
                // en caso que sea 3 graba en cursos
            switch (req.body.productoId){
                case "1": 
                    const presentacion = await Presentacion.findAll();
                    let bebida = await Bebidas.create({
                        productoId: product.id,
                        marca: req.body.marca,
                        envio: req.body.envio,
                        ibu: req.body.ibu,
                        alcohol: req.body.alcohol, //modificar el modelo a decimal
                        presentacionId: req.body.presentacion
                    });
                    return res.redirect("/products/" + product.id);//bebida
                break;
                case "2":
                    let insumo = await Insumos.create({
                        productoId: product.id,
                        envio: req.body.envio,
                        origen: req.body.origen
                    });
                    return res.redirect("/products/" + product.id);//insumo
                break;
                case "3":
                    let curso = await Cursos.create({
                        productoId: product.id,
                        disertante: req.body.disertante,
                        medioId: req.body.medioId,
                    });
                    return res.redirect("/products/" + product.id);//curso
                break;
                
            }
                console.log(product);
                

            } catch (error) {
                
                return res.send(error);
            }
    },     

    // Read - Muestra todos los Productos

    allproducts: async (req, res) => {
        
        const productos = await Productos.findAll();
            
        res.render("products", { productos });
        
    },

    // Read - Muestra detalle de un producto
    detailproduct: async (req, res) => {
        try {
            const product = await Productos.findByPk(req.params.id, {
                include: [
                    {association: "bebidas"},
                    {association: "insumos"},
                    {association: "cursos"},
                    {association: "usuario"}                    
                    ]
            });
            console.log (product);

            switch (product.tipoproducto){
                case 1:
                    const presentacion = await Presentacion.findAll();
                    const bebida = await Bebidas.findOne({
                        where: {
                            productoId: product.id
                        },
                        include: [{association: "presentacion"}]
                        })
                    return res.render("detail_bebidas", {product, bebida});
                break;
                case 2:
                    const insumo = await Insumos.findOne({
                        where: {
                            productoId: product.id
                            }
                    })
                    return res.render("detail_insumos", {product, insumo});
                break;
                case 3:
                    const curso = await Cursos.findOne({
                        where: {
                            productoId: product.id
                            },
                            include: [
                                    {association: "medio"}]
                    })
                    return res.render("detail_cursos", {product, curso });
                break;
                default: 
                    console.log("no reconozco ninguna tabla");
              
            } 
            
        } catch (error) {
            return res.send(error);
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
