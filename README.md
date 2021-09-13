# Now Circular Challenge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Libraries Used
- Firebase
    - This is for user authentication and user creation
    - Installation is already included in the package.json as part of dependencies
- Pokedex Promise V2
    - This is a wrapper library to help call the Pokeapi.co
    - Installation is already included in the package.json as part of dependencies

### Pokedex Promise v2.
```
npm install pokedex-promise-v2 --save
```
For [Pokedex Promise reference](https://github.com/PokeAPI/pokedex-promise-v2).

### Api Server
Used Node to host locally and API server, using port 3000 as default port if there is no configuration env available. 
Used Express to build and create API routes.
To launch the node server; traverse into /src/node-api and execute
```
node app.js
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
