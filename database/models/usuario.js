module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {
        nombre: {
            type: DataTypes.STRING(100),
        },
        apellido: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING(60),
        },
        avatar: {
            type: DataTypes.STRING,
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
        },
    },{
       tableName: "usuarios", 
       timestamps: false
    });

    Usuarios.associate = (function(models){
        //un usuario - muchas compras
        Usuarios.hasMany(models.Compras), {
            as: "compras",
            foreignKey: "comprasId",
            onDelete: 'cascade'
        }
        //un usuario - muchos productos
        Usuarios.hasMany(models.Productos), {
            as: "productos",
            foreignKey: "usuarioId",
            onDelete: 'cascade'
        }
    })



    return Usuarios;
};
