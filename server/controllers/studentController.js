const { listAll, listAllCount, getById, updateById } = require('../models/studentModel.js');


const handleError = (res, err) => {
  console.error(err);
  res.status(500).send(err);
}

const createFilters = (filternames, req) => {
  // filters exist if there is at least one in the query string
  const filtersExist = filternames.reduce((result, name) => {
    return result || !!req.query[name]
  }, false);
  // if there are no filters in query, return false
  if (!filtersExist) return false;
  
  // iterate over filternames to create an object, e.g. { firstname: req.query.firstname }
  return filternames.reduce((obj, name) => {
    return {...obj, [name]: req.query[name] }
  }, {})
}

exports.list = (req, res) => {
  try {
    const filters = createFilters(['firstname', 'lastname'], req);
    
    listAllCount((counterr, rows) => {
      if (counterr) return handleError(res, counterr);
      
      const allfilters = createFilters(['firstname', 'lastname', 'firstnamekey', 'lastnamekey', 'idkey'], req);
      const limit = req.query.limit;

      listAll((err, results) => {
        if (err) return handleError(res, err);
        res.json({results, count: rows[0].total });
      }, allfilters, limit);

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
