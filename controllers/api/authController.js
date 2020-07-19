const { Usuarios } = require("../../database/models");


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
		res.send(plainUsers);
		//console.log(user);
	},
	showOneProfile: async (req, res) => {
		const user = await Usuarios.findByPk(req.params.id);

		const plainUser = {
                id: user.id,
				nombre: user.nombre,
				apellido: user.apellido,
				fecha_nac: user.fecha_nacimiento,
				avatar: user.avatar
        }	
				
			
        res.send(plainUser);
    }
		//console.log(user);
	
};

module.exports = controller;