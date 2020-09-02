const sql = require('../db.js');

const handler = (result) => (err, res) => {            
  if (err) {
    throw new Error(err);
  }
  result(res);
};

exports.getById = (studentId, result) => {
  sql.query("Select * from students where id = ? ", studentId, handler(result));   
};

exports.listAll = (result) => {
  sql.query("Select * from students", handler(result));    
};

exports.updateById = (studentId, studentdata, result) => {
  const { dob, address } = studentdata;
  sql.query("UPDATE students SET dob = ?, address = ? WHERE id = ?", [dob, address, studentId], handler(result)); 
};
