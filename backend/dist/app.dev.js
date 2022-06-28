"use strict";

var express = require('express');

var app = express();
app.use(function (req, res, next) {
  console.log('Requête reçue !');
  next(); //renvoie vers le prochain middleware
});
app.use(function (req, res, next) {
  res.json({
    message: "Votre requête a bien été reçue!"
  });
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
