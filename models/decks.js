'use strict';
module.exports = function(sequelize, DataTypes) {
  var decks = sequelize.define('decks', {
    name: DataTypes.STRING,
    useId: DataTypes.INTEGER
  }, {});

  decks.associate = (models) => {
    decks.hasMany(models.flipcards, {as:"cardsContained", foreignKey:"deckId"});
    decks.belongsTo(models.users, {as:"createdBy", foreignKey:"userId"});
  };
  return decks;
};
