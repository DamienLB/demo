const date = require('date-and-time');
const sql = require('../db.js');


exports.getById = (studentId, resultfn) => {
  sql.query("Select * from students where id = ? ", studentId, resultfn);   
};

exports.listAll = (resultfn, filters) => {
  let query = "Select * from students";
  const order = "order by lastname ASC, firstname ASC, id ASC";
  if (filters) {
    const { lastname, firstname } = filters;
    const likestatements = [];
    if (lastname) likestatements.push(`lastname like "${lastname}%"`);
    if (firstname) likestatements.push(`firstname like "${firstname}%"`);

    query = `${query} WHERE ${likestatements.join(" AND ")}`;
  }
  
  sql.query(`${query} ${order}`, resultfn);    
};

exports.updateById = (studentId, studentdata, resultfn) => {
  const { dob, address } = studentdata;
  const dobDate = new Date(dob);
  const formattedDob = date.format(dobDate, 'YYYY/MM/DD HH:mm:ss'); 

  sql.query("UPDATE students SET dob = ?, address = ? WHERE id = ?", [formattedDob, address, studentId], resultfn); 
};
