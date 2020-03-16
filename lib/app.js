const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/red') {
      client.end(createResponse({ status: '200 OK', contentType: 'text/html', body: `<html>
      <body>
        <h1>This is red</h1>
      </body>
      </html>` }));
    }

    client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
