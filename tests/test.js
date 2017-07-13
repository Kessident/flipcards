const request = require('supertest');
const assert = require('assert');
const app = require('../app');
const models = require('../models');

describe ("User Experience", () => {
  it("Users should be able to register", (done) => {
    //tests here
  });
  it("Users should be able to login", (done) => {
    //tests here
  });
  it("Users should be able to logout", (done) => {
    //tests here
  });

  // Allow the user to create multiple decks of flipcards
  // Allow the user to create flipcards within a deck
  // Allow the user to edit a flipcard
  // Allow the user to delete a flipcard
  // Allow the user to start a quiz using a flipcard deck, Ideally, this quiz would show the cards randomly
  // When a flipcard is flipped, allow the user to choose whether they answered successfully or unsuccessfully, and record that answer
});





/*
  /user
  /deck (post-create)
  /flipcard (post-create, put-edit, post-delete)
  /game
*/
