const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedArt` array in User.js
const artSchema = new Schema({
  _id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  // Saved Art id from eg-art
  artId: {
    type: String,

  },
  image: {
    type: String,
  },
  link: {
    type: String,
  }
});

const Art = model('Art', artSchema);

module.exports = Art;