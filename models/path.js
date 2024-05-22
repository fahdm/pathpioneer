// const mongoose = require('mongoose');

// const pathSchema = new mongoose.Schema({
//   name: {
//      type: String, 
//      required: true
//      },
//   originCoordinates: { 
//     type: [Number], 
//     required: true
//    },
//   destinationCoordinates: { type: 
//     [Number], 
//     required: true
//    },
//   userId: {
//      type: mongoose.Schema.Types.ObjectId,
//       ref: 'User', 
//       required: true
//      },
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Path', pathSchema);

// models/path.js

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
}, {
  timestamps: true
});

module.exports = mongoose.model('Path', pathSchema);

