const User = require('../../models/user')

module.exports = {
    create
  };
  
async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}