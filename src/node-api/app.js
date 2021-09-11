const http = require('http')
const PORT = process.env.PORT || 3000

const Pokedex = require('pokedex-promise-v2')
var options = {
  protocol: 'https',
  hostName: 'localhost:443',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
var P = new Pokedex(options)

const server = http.createServer(async (req, res) => {
  // set the request route
  if (req.url === '/api' && req.method === 'GET') {
    // response headers
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // set the response
    res.write('Hi there, This is a Vanilla Node.js API')
    P.getPokemonByName('eevee') // with Promise
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log('There was an ERROR: ', error)
      })
    // end the response
    res.end()
  } else {
    // If no route present
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
})

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
})
