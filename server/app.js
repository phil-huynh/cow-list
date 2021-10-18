const express = require('express');
var db = require('./db');
var models = require('./models')
const path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/api/cows', (req, res) => {
  console.log('**** GET is connected ****')
  models.cows.getAll((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
})

app.post('/api/cows', (req, res) => {
  console.log('**** POST is connected ****')
  const { name, description} = req.body;
  var params = [req.body.name, req.body.description];
  models.cows.create(params, (err, results) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
  console.log('#### POST is connected ####')

})

module.exports = app;