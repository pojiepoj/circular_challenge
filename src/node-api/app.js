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

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/getpokemon/:id', (req, res) => {
  let num = req.params.id;
  P.getPokemonByName(num) // with Promise
    .then(function (response) {
      res.send(response);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    })
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenin on port ${port}`));