const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

module.exports = {
    create,
    login,
    checkToken

  };
  
async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);    
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}
  
async function login(req, res) {
  try {
    // Try to find the user in the database by email
    const user = await User.findOne({ email: req.body.email });    
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(req.body.password, user.password);    
    if (!match) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);  

  } catch (err) {
    // Handle any errors that occur
    res.status(500).json({ error: 'An error occurred during login' });
  }
}

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}


function checkToken(req, res) {
  // Verify middleware is doing its job
  console.log('req.user', req.user);
  res.json(req.exp);
}

