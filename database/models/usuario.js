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
       tableName: "Usuarios", 
       timestamps: false
    });

    User.associate = (function(models){
        //un usuario - muchas compras
        User.hasMany(models.Compras), {
            as: "compras",
            foreignKey: "comprasId"
        }
        //un usuario - muchos productos
        User.hasMany(models.Productos), {
            as: "productos",
            foreignKey: "usuarioID"
        }
    })



    return User;
};
