const Path = require('../../models/path');

module.exports = {
  create,
  getAll,
  deletePath
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

async function deletePath(req, res) {
  try {
    const pathId = req.params.id;
    const deletedPath = await Path.deleteOne({ _id: pathId, userId: req.user._id });
    if (deletedPath.deletedCount === 0) {
      return res.status(404).json({ message: 'Path not found' });
    }
    res.status(200).json({ message: 'Path deleted successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
}
