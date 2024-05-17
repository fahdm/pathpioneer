module.exports = {
    create
  };
  
  function create(req, res) {
    res.json({
      user: {
        name: req.body.name,
        email: req.body.email
      }
    });
  }