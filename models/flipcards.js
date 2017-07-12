'use strict';
module.exports = function(sequelize, DataTypes) {
  var flipcards = sequelize.define('flipcards', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    deckId: DataTypes.INTEGER
  }, {});

  flipcards.associate = (models) => {
    flipcards.belongsTo(models.decks, {as:"containerDeck", foreignKey:"deckId"});
  };
  return flipcards;
};
