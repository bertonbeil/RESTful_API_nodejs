var express = require('express');
var router  = express.Router();
var Department = require('../models/Department');



router.get('/', function(req, res, next) {
  Department.getAllDepartment(function(err, rows) {
    if (err) {
        res.json(err);
    } else {
        res.json(rows);
    }
  });
}); // getAllDepartment

router.get('/:id', function(req, res, next) {
  Department.getDepartmentById(req.params.id, function(err, rows) {
    if (err) {
        res.json(err);
    } else {
        res.json(rows);
    }
  });
}); // getDepartmentById

router.post('/', function(req, res, next) {
  Department.addDepartment(req.body, function(err, count) {
    if(err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
}); // addDepartment

router.delete('/:id', function(req, res, next) {
  Department.deleteDepartment(req.params.id, req.body, function(err, rows) {
    if (err) {
        res.json(err);
    } else {
        res.json(rows);
    }
  });
}); // deleteDepartment

router.put('/:id', function(req, res, next) {
  Department.updateDepartment(req.params.id, req.body, function(err, rows) {
    if (err) {
        res.json(err);
    } else {
        res.json(rows);
    }
  });
}); // updateDepartment

module.exports = router;
