module.exports = function (sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    name: DataTypes.STRING,
    task: DataTypes.TEXT,
    score: {
      type: DataTypes.INTEGER,
      defaultValue: '0'
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
   

  });
  Tasks.associate = function (models) {
    Tasks.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tasks;
};