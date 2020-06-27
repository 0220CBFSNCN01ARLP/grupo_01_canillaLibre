module.exports = (sequelize, DataTypes) => {
    const Cursos   = sequelize.define("Cursos", {

        productoId: {
            type: DataTypes.INTEGER,
        },
        disertante: {
            type: DataTypes.STRING,
        },
        medioId: {
            type: DataTypes.INTEGER,
        },
        create_at: {
            type: DataTypes.DATE
        },
        update_at: {
            type: DataTypes.DATE
        },
            
    },
    
    {
       tableName: "cursos", 
       timestamps: false
    });

    Cursos.associate = function (models) {
        Cursos.hasMany(models.Productos, {
            foreignKey: "productoId",
            as: "Productos"
        });
    };





    return Cursos;
  };