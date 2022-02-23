const restify = require('restify')
const routes = require('./routes')
const config = require('./config');

const server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes(server);

server.on('restifyError', function (req, res, err, cb) {
  // this listener will fire after both events above!
  // `err` here is the same as the error that was passed to the above
  // error handlers.
  return cb();
});

server.listen(config.api.port, () => {
  console.log(`restify server listening on port ${config.api.port}`)
});


