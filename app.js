const http = require('http');
const port = 3000;
const hostname = 'localhost';
const callog = () => {
  console.log(`Servidor rodando na porta: ${port}`);
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  //req => request
  //res => response
  switch (req.url) {
    case '/pets':
      res.end('Aqui lista os pets de nossa aplicação');
      break;
    default:
      break;
  }

  res.end('Olá mundo');
}).listen(port, hostname, callog());