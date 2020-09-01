const sql = require('../db.js');


exports.getById = (studentId, result) => {
  sql.query("Select student from students where id = ? ", studentId, (err, res) => {             
    if(err) {
      result(err, null);
    } else{
      result(null, res);
    }
  });   
};

exports.listAll = (result) => {
  sql.query("Select * from students", (err, res) => {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else{
      result(null, res);
    }
  });   
};

exports.updateById = (studentId, Student, result) => {
  sql.query("UPDATE students SET dob = ?, address = ? WHERE id = ?", [Student.dob, Student.address, studentId], (err, res) => {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else{   
      result(null, res);
    }
  }); 
};
