const { listAll, getById, updateById } = require('../models/studentModel.js');


exports.list = (req, res) => {
  listAll((err, students) => {
    if (err)
      res.send(err);
      console.log('res', students);
    res.json(students);
  });
};

exports.read = (req, res) => {
  getById(req.params.studentId, (err, student) => {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.update = (req, res) => {
  updateById(req.params.studentId, req.body, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};
