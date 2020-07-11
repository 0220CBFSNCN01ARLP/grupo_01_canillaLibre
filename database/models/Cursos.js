module.exports = (sequelize, DataTypes) => {
    const Cursos   = sequelize.define("Cursos", {

        productoId: {
            type: DataTypes.INTEGER(11)
        }, 
        disertante: {
            type: DataTypes.STRING,
        },
        medioId: {
            type: DataTypes.STRING,
        }
            
    },
    
    {
       tableName: "cursos", 
       timestamps: false
    });

    Cursos.associate = function (models) {
        Cursos.belongsTo(models.Productos, {
                as: "producto",
                foreignKey: "productoId"
            }),
        //una bebida- a muchas presentaciones
        Cursos.belongsTo(models.Medio, {
                as: "medio",
                foreignKey: "medioId"
            })
    }

    return Cursos;
  };