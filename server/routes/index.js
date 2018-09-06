'use strict';

const usersRouter = require('./users');

module.exports = function (app){

    app.use('/api/users', usersRouter);
    
}