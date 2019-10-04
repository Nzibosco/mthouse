module.exports = function(sequelize, DataTypes) {
    // model to record member's contributions
    const Loan = sequelize.define("Loan", {
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
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateTaken: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false
      },
      interest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    // foreign key to link loans to their members. 

    Loan.associate = function(models) {
        Loan.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Loan;
  };