const { listAll, getById, updateById } = require('../models/studentModel.js');


exports.list = (req, res) => {
  try {
    const filters = req.query.firstname || req.query.lastname ? { firstname: req.query.firstname, lastname: req.query.lastname } : false;
    listAll((results) => {
      res.json(results);
    }, filters);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.read = (req, res) => {
  try {
    getById(req.params.studentId, (results) => {
      if (!results.length) {
        res.status(404).send('not found');
        return;
      }
      // send a single result as an object rather than as an array
      res.json(results[0]);
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.update = (req, res) => {
  try {
    updateById(req.params.studentId, (results) => {
      res.status(200).send({ success: true });
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
