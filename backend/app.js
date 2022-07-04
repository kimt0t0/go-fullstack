const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); //intercepte toutes les requêtes dont le content-type est json et les met à dispo sur l'objet requête dans req.body
//(autre façon de faire plus ancienne: utiliser le package bodyparser)


mongoose.connect("mongodb+srv://kimt0t0:<adaJNM39-&>@kimrobcluster.8tem1u2.mongodb.net/?retryWrites=true&w=majority",
//connexion à la base de donnée mongoDB
//penser à intégrer le mot de passe utilisateur MongoDB après le nom utilisateur ici.mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')
);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //permet d'accéder à l'API depuis n'importe-quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajout des headers aux requêtes envoyées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //envoi des requêtes avec les méthodes mentionnées
    next();
  });

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({     //201 = code pour création de ressource, nécessaire de renvoyer ce statut sinon ça plante côté utilisateur
    message: 'Objet créé !'
  });
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });


module.exports = app;