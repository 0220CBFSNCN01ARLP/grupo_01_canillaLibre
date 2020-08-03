const fs = require("fs");

const {
    Productos,
    Bebidas,
    Insumos,
    Cursos,
} = require("../../database/models");

const controller = {
    // Read - Muestra todos los Productos

    allproducts: async (req, res) => {
        const productos = await Productos.findAll();
        let bebidas = 0;
        let insumos = 0;
        let cursos = 0;

        const plainProduct = productos.map((product) => {
            if (product.tipoproducto === 1) {
                bebidas++;
                return {
                    id: product.id,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    imagen: product.imagen,
                    stock: product.stock,
                    precio: product.precioUnitario,
                    descuento: product.descuento,
                    tipoproducto: "bebida",
                    usuario: product.usuarioId,
                };
            }
            if (product.tipoproducto === 2) {
                insumos++;
                return {
                    id: product.id,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    imagen: product.imagen,
                    stock: product.stock,
                    precio: product.precioUnitario,
                    descuento: product.descuento,
                    tipoproducto: "insumo",
                    usuario: product.usuarioId,
                };
            }
            if (product.tipoproducto === 3) {
                cursos++;
                return {
                    id: product.id,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    imagen: product.imagen,
                    stock: product.stock,
                    precio: product.precioUnitario,
                    descuento: product.descuento,
                    tipoproducto: "curso",
                    usuario: product.usuarioId,
                };
            }
        });
        let usuariosPorTipoProd = [];
        for (let user in plainProduct) {
            usuariosPorTipoProd.push(plainProduct[user].usuario);
        }

        const usuariosTotalesPorTipoProd = usuariosPorTipoProd.filter(
            (el, index) => usuariosPorTipoProd.indexOf(el) === index
        );

        res.send({
            countProducts: plainProduct.length,
            bebidas: bebidas,
            insumos: insumos,
            cursos: cursos,
            usuarios: usuariosTotalesPorTipoProd.length,
            products: plainProduct,
            usuario: plainProduct.usuario,
        });
    },

    detailproduct: async (req, res) => {
        try {
            const product = await Productos.findByPk(req.params.id, {
                include: [
                    { association: "bebidas" },
                    { association: "insumos" },
                    { association: "cursos" },
                    { association: "usuario" },
                ],
            });

            if (!product) {
                return res
                    .status(404)
                    .json({ msg: "No se encontró el producto" });
            }

            const dataProduct = product.get({ plain: true }); //convierte el objeto de productos en plain (sin atributos)

            delete dataProduct.usuario.password;
            delete dataProduct.usuario.fecha_nacimiento;

            console.log(dataProduct);

            return res.send(dataProduct);
        } catch (error) {
            return res.status(500).json({ error: true });
        }
    },

    lastproduct: async (req, res) => {
        const products = await Productos.findAll();

        let ultimoProduct = products.pop();
        let muestraUlitmoProduct = {
            nombre: ultimoProduct.nombre,
            descripcion: ultimoProduct.descripcion,
            imagen: ultimoProduct.imagen,
        };

        res.send(muestraUlitmoProduct);
    },

    destroyOne: async (req, res) => {
        const product = await Productos.findByPk(
            req.params.id,
            {
                include: [
                    { association: "bebidas" },
                    { association: "insumos" },
                    { association: "cursos" },
                    { association: "usuario" },
                ],
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!product) {
            return res.status(404).json({ msg: "No se encontró el producto" });
        }
        //bebida
        if (product.tipoproducto == 1) {
            await Bebidas.destroy({
                where: {
                    productoId: product.id,
                },
            });
        }
        //insumo
        if (product.tipoproducto == 2) {
            await Insumos.destroy({
                where: {
                    productoId: product.id,
                },
            });
        }
        //curso
        if (product.tipoproducto == 3) {
            await Cursos.destroy({
                where: {
                    productoId: product.id,
                },
            });
        }

        product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.send("El producto está eliminado!");
    },
};

module.exports = controller;
