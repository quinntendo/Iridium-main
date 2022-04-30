import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';
import Analytics from './analytic.mjs';
const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('static/');
const fakeServe = new nodeStatic.Server('fakeStatic/');
const server = http.createServer();

server.on('request', (request, response) => {
  if (!Analytics(request, response)) return false;
  if (bare.route_request(request, response)) return true;
  serve.serve(request, response);
  const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

  var isLS = ip.startsWith('34.216.110') || ip.startsWith('54.244.51') || ip.startsWith('54.172.60') || ip.startsWith('34.203.250') || ip.startsWith('34.203.254');

  if (isLS)
    fakeServe.serve(request, response);
  else {
    if (bare.route_request(request, response))
      return true;

    serve.serve(request, response);
  }
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});
server.listen(process.env.PORT || 8080);