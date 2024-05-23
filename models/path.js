const mongoose = require('mongoose');

const pathSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  originCoordinates: {
    type: [Number],
    required: true
  },
  destinationCoordinates: {
    type: [Number],
    required: true
  },
  travelMode: { 
    type: String,
    required: true
  }, 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  directions: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Path', pathSchema);

