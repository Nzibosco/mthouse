module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 10]
      }
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // creating a foreign key to link users to contributions they make
  User.associate = function(models) {
    // Associating Users with contributions
    // When an user is deleted, also delete any associated contribution
    User.hasMany(models.Contribution, {
      onDelete: "cascade"
    });
  };

  return User;
};

