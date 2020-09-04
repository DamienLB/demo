const date = require('date-and-time');
const sql = require('../db.js');


const applyFilters = (query, filters=false) => {
  let newquery = query;
  const params = [];
  if (filters) {
    // extract filters; non-existent filters will be undefined.
    const { lastname, firstname } = filters;
    const wherestatements = [];

    if (lastname) {
      wherestatements.push(`lastname like ?`);
      params.push(`${lastname}%`);
    }

    if (firstname) {
      wherestatements.push(`firstname like ?`);
      params.push(`${firstname}%`);
    }

    newquery = `${newquery} WHERE ${wherestatements.join(" AND ")}`;
  }
  return [newquery, params];
}

exports.getById = (studentId, resultfn) => {
  sql.query("Select * from students where id = ? ", studentId, resultfn);
};

exports.listAll = (resultfn, filters=false, limit=10000, offset=0) => {
  let query = "Select * from students";
  const order = "order by lastname ASC, firstname ASC, id ASC";

  const limitstatement = `LIMIT ${limit} OFFSET ${offset}`;
  [filteredquery, params] = applyFilters(query, filters);
  sql.query(`${filteredquery} ${order} ${limitstatement}`, params, resultfn);    
};

exports.listAllCount = (resultfn, filters=false) => {
  let query = "Select COUNT(*) as total from students";
  [filteredquery, params] = applyFilters(query, filters);
  sql.query(filteredquery, params, resultfn); 
};

exports.updateById = (studentId, studentdata, resultfn) => {
  const { dob, address } = studentdata;
  const dobDate = new Date(dob);
  const formattedDob = date.format(dobDate, 'YYYY/MM/DD HH:mm:ss'); 

  sql.query("UPDATE students SET dob = ?, address = ? WHERE id = ?", [formattedDob, address, studentId], resultfn); 
};
