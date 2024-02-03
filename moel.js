const mongoose = require('mongoose');

// Define the schema for the Place document
const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  }
});

// Create the Place model based on the schema
const Place = mongoose.model('map', placeSchema);

// Export the Place model
module.exports = Place;
