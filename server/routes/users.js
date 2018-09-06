'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.route('/')

.post((req, res, next) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err){
            return next(error);
        }
        res.json(userData);
    })
})

.get((req, res, next) => {   
    
    User.find(function(err,userData){
        if(err){
            return next(err);
        }
        res.json(userData);
    })
});

router.route('/:id')


.delete((req, res, next) => {
    
    const id = req.params.id;   
    
    User.findByIdAndRemove(id)
    .then(data => {
        res.json(data);
    })
    .catch(next);
})

.get((req,res,next) => {
    const id = req.params.id;
    User.findById(id, (err, userData) => {
        if(err){
            return next(err);
        }
        res.json(userData);
    })
})

.put(function(req, res, next) {
    const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, userData) => {
      if (err){
          return next(err);
       }
    res.json(userData);
  });
})

module.exports = router;