const sql = require('../db.js');

const handler = (resultfn) => (err, res) => {            
  if (err) {
    throw new Error(err);
  }
  resultfn(res);
};

exports.getById = (studentId, resultfn) => {
  sql.query("Select * from students where id = ? ", studentId, handler(resultfn));   
};

exports.listAll = (resultfn, filters) => {
  let query = "Select * from students";
  if (filters) {
    const { lastname, firstname } = filters;
    const likestatements = [];
    if (lastname) likestatements.push(`lastname like "${lastname}%"`);
    if (firstname) likestatements.push(`firstname like "${firstname}%"`);

    query = `${query} WHERE ${likestatements.join(" AND ")}`;
  }
  
  sql.query(query, handler(resultfn));    
};

exports.updateById = (studentId, studentdata, resultfn) => {
  const { dob, address } = studentdata;
  sql.query("UPDATE students SET dob = ?, address = ? WHERE id = ?", [dob, address, studentId], handler(result)); 
};
