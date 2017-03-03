var db = require('../dbconnection');

var Department = {
  getAllDepartment: function(callback) {
    return db.query('Select * from departments', callback);
  },
  getDepartmentById: function(id ,callback) {
    return db.query('Select * from departments where Id=?', [id], callback);
  },
  addDepartment: function(Department, callback) {
    return db.query('Insert Into departments where (?,?,?)', [Department.Id, Department.Country, Department.State], callback);
  },
  deleteDepartment: function(id, callback) {
    return db.query('delete from departments where Id=?', [id], callback);
  },
  updateDepartment: function(id, Department, callback) {
    return db.query('update departments set Country=?,State=? where Id=?', [Department.Country, Department.State, Department.Id], callback);
  }
  // deleteAllDepartment: function(item, callback){
  //   var delarr = [];
  //   for(i=0; i<item.length; i++) {
  //       delarr[i] = item[i].Id;
  //    }
  //    return db.query( 'delete from departments where Id in (?)', [delarr], callback);
  // }
};

module.exports = Department;
