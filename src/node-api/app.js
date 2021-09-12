/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const express = require('express');
const app = express();

const Pokedex = require('pokedex-promise-v2')
var options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
var P = new Pokedex(options)

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/getpokemon/:id', (req, res) => {
  let num = req.params.id;
  console.log(num);
  P.getPokemonByName(num) // with Promise
    .then(function (response) {
      // return only the necessary items
      var o = {}; // empty Object
      o.name = response.name;
      o.img = response.sprites.front_default;
      o.stats = [];
      for (var key in response.stats) {
        let item = response.stats[key];
        let s = {};
        s.name = item.stat.name;
        s.value = item.base_stat;
        o.stats.push(s);
      }
      res.send(o);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    })
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenin on port ${port}`));