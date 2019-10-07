module.exports = function(sequelize, DataTypes) {
    // model to record member's contributions
    const Contribution = sequelize.define("Contribution", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      member: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      contribution: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bankSlip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dueDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      paidOn: {
        type: DataTypes.STRING,
        allowNull: false
      },
      delay: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

    // foreign key to link contributions to their members. 
    // contributions cannot be created without members.

    Contribution.associate = function(models) {
        Contribution.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Contribution;
  };