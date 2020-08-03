const fs = require("fs");
const { check, validationResult, body } = require("express-validator");

const { Productos } = require("../../database/models");

const controller = {
    // Read - Muestra todos los Productos

    allproducts: async (req, res) => {
        const productos = await Productos.findAll();
        res.send(productos);
    },

    detailproduct: async (req, res) => {
        try {
            const productos = await Productos.findByPk(req.params.id, {
                include: [
                    { association: "bebidas" },
                    { association: "insumos" },
                    { association: "cursos" },
                    { association: "usuario" },
                ],
            });
            console.log("la vista del producto es: " + productos);
            return res.send(productos);
        } catch (error) {
            return res.send(error);
        }
    },
};

module.exports = controller;
