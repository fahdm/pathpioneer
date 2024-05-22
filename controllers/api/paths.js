const Path = require('../../models/path');

module.exports = {
  create,
  getAll,
};

async function create(req, res) {
  try {
    const path = await Path.create({ ...req.body, userId: req.user._id });
    res.status(201).json(path);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAll(req, res) {
  try {
    const paths = await Path.find({ userId: req.user._id });
    res.json(paths);
  } catch (err) {
    res.status(400).json(err);
  }
}
