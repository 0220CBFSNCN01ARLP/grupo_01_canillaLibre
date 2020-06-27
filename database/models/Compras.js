module.exports = (sequelize, DataTypes) => {
    const Compras  = sequelize.define("Compras", {
        fecha_compra: {
            type: DataTypes.DATE,
        },
        precioTotal: {
            type: DataTypes.DECIMAL(10,2),
        },
    },{
       tableName: "compras", 
       timestamps: false
    });

    Compras.associate = (function(models){
        //muchas compras - un usuario
        Compras.belongsTo(models.Usuarios), {
            as: "usuario",
            foreignKey: "comprasId"
        }
        //muchas comprasProducto - un comprasProductos
        Compras.belongsTo(models.ComprasProducto), {
            as: "comprasProducto",
            foreignKey: "comprasId"
        }

    })

    return Compras;
};
