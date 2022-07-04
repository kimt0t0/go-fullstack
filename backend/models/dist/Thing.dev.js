"use strict";

var mongoose = require('mongoose');

var thingSchema = mongoose.Schema({
  //objet dictant les champs nécessaires dans le schéma des objets de la base de donnée - le _id est automatiquement généré par la base de données:
  //ajout sous forme de paire clé: {type: String, éléments-de-configuration}
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
}); //exporter le modèle pour pouvoir l'utiliser ailleurs avec une autre extension de mongoose:

module.exports = mongoose.model('Thing', thingSchema);
//# sourceMappingURL=Thing.dev.js.map
