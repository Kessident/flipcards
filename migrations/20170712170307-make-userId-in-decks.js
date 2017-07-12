'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "decks",
      "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "dekcs",
      "userId"
    );
  }
};
