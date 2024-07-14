const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    res.end(JSON.stringify({
      id: 1,
      name: 'Sir Isaac Newton'
    }));
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'application/json');    
  } else if (req.url === '/messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac! </li>');
    res.write('<li>What are your thoughts on astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
});