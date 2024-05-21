const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true
     },
  originCoordinates: { 
    type: [Number], 
    required: true
   },
  destinationCoordinates: { type: 
    [Number], 
    required: true
   },
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true
     },
}, {
  timestamps: true
});

module.exports = mongoose.model('Route', routeSchema);
