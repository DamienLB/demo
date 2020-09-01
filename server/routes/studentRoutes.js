const studentController = require('../controllers/studentController');

module.exports = function(app) {  
  app.route('/students')
    .get(studentController.list)
    // .post(studentController.create);
   
   app.route('/students/:studentId')
    .get(studentController.read)
    .put(studentController.update)
    // .delete(studentController.delete);
};
