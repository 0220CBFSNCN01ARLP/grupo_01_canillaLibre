const { Usuarios, Productos } = require("../../database/models");

const controller = {
    showProfile: async (req, res) => {
        const users = await Usuarios.findAll();
        const plainUsers = users.map((user) => {
            return {
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                fecha_nac: user.fecha_nacimiento,
                avatar: user.avatar,
            };
        });

        res.send({ count: plainUsers.length, users: plainUsers });

        //console.log(user);
    },

    showOneProfile: async (req, res) => {
        const user = await Usuarios.findByPk(req.params.id);

        const plainUser = {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            fecha_nac: user.fecha_nacimiento,
            avatar: user.avatar,
        };
        res.send(plainUser);
    },
};

module.exports = controller;
