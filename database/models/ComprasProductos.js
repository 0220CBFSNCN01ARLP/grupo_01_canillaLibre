module.exports = (sequelize, DataTypes) => {
    const ComprasProducto = sequelize.define("ComprasProducto", {
        cantidad: {
            type: DataTypes.INTEGER,
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
        },
    },{
       tableName: "comprasproducto", 
       timestamps: false
    });
    return ComprasProducto;

    ComprasProducto.associate = (function(models){
        ComprasProducto.hasMany(models.User), {
            as: "usuario",
            foreignKey: "comprasId"
        }
    })


};
