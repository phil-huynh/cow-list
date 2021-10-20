const express = require('express');
var db = require('./db');
var models = require('./models')
const path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')))



app.get('/api/cows', (req, res) => {
  models.cows.getAll((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
})

app.post('/api/cows', (req, res) => {
  const { name, description} = req.body;
  var params = [req.body.name, req.body.description];
  models.cows.create(params, (err, results) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
})

module.exports = app;