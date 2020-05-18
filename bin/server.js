const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', onListening)
console.log('API rodando na porta: ' + port)

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}