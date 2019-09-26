module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        /* to contact the organizer, we will link the personal details of the person
        who is creating the event so he / she can be the one to be contacted. 
        */
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: false
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
      }
    });

    // foreign key to link events to their users. 
    // events cannot be created without users. They are created by users.

    Event.associate = function(models) {
        Event.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Event;
  };