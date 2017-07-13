const mongoose = require('mongoose');
const nodeEnv = process.env.NODE_ENV || "development";
const config = require('../mongodb-config.json')[nodeEnv];
mongoose.Promise = require('bluebird');
mongoose.connect(config.mongoURL);

const userSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true, default: 1},
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  decks: [{
    name: {type: String, default: "New Deck"},
    cards: [{
      question: {type:String, required:true},
      answer: {type:String, required:true}
    }]
  }]
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
