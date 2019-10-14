module.exports = function(sequelize, DataTypes) {
    // model to record accounting transactions
    const Accounting = sequelize.define("Accounting", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      transaction: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      responsiblePerson: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

    // foreign key to link contributions to their members. 
    // contributions cannot be created without members.

    // Contribution.associate = function(models) {
    //     Contribution.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };
  
    return Accounting;
  };