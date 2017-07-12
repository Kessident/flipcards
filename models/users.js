'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  users.associate = (models) => {
    users.hasMany(models.decks, {as:"createdDecks", foreignKey:"userId"});
  };
  return users;
};
