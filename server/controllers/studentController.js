const { listAll, listAllCount, getById, updateById } = require('../models/studentModel.js');


const handleError = (res, err) => {
  console.error(err);
  res.status(500).send(err);
}

exports.list = (req, res) => {
  try {
    const filters = req.query.firstname || req.query.lastname ? { firstname: req.query.firstname, lastname: req.query.lastname } : false;
    listAllCount((counterr, rows) => {
      if (counterr) return handleError(res, counterr);
      listAll((err, results) => {
        if (err) return handleError(res, err);
        res.json({results, count: rows[0].total });
      }, filters);
    }, filters);
  } catch (e) {
    handleError(res, e);
  }
};

exports.read = (req, res) => {
  try {
    getById(req.params.studentId, (err, results) => {
      if (err) return handleError(res, err);
      if (!results.length) {
        res.status(404).send('not found');
        return;
      }
      // send a single result as an object rather than as an array
      res.json(results[0]);
    });
  } catch (e) {
    handleError(res, e);
  }
};

exports.update = (req, res) => {
  try {
    updateById(req.params.studentId, req.body, (err, results) => {
      if (err) handleError(res, err);
      res.status(200).send({ success: true });
    });
  } catch (e) {
    handleError(res, e);
  }
};
