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

    const user = await User.create(req.body);

    const token = createJWT(user);

    res.json(token);
  } catch (err) {

    res.status(400).json(err);
  }
}

async function login(req, res) {

  try {

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const token = createJWT(user);

    res.json(token);

  } catch (err) {

    res.status(500).json({ error: 'An error occurred during login' });
  }
}

function createJWT(user) {
  return jwt.sign(

    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}


function checkToken(req, res) {
  res.json(req.exp);
}

