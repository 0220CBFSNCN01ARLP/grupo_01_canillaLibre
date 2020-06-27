module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
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

    User.associate = (function(models){
        //un usuario - muchas compras
        User.belongsTo(models.Compras), {
            as: "comprasDeUser",
            foreignKey: "comprasId"
        }
    })



    return User;
};
