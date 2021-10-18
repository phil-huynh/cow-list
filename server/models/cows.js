var db = require('../db');

module.exports = {

  getAll: function(callback) {
    var sqlQuery = 'select name, description from cows';
    db.query(sqlQuery, (err, results) => {
      callback(err, results)
    });
  },
  create: function(params, callback) {
    var sqlQuery = 'insert into cows (name, description) values (?, ?)';
    db.query(sqlQuery, params, (err, results) => {
      callback(err, results);
    })
  }
};