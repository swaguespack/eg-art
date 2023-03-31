const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedArt` array in User.js
const artSchema = new Schema({

  description: {
    type: String,
    required: true,
  },
  // Saved Art id from eg-art
  artId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  }
});

module.exports = artSchema;