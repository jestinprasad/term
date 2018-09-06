'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 9865;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
mongoose.connect('mongodb://localhost/abc')
.then( () => { console.log('connected successfully') } )
.catch(error => { console.log('db failed to connect')});
require('./routes')(app);
app.listen(port, ()=>{ console.log(`Server started at port ${port}`) });