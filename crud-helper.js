// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Path = require('./models/path');

// Local variables will come in handy for holding retrieved documents
let user, path;
let users, paths;