const http = require('http');
const port = 3000;
const hostname = 'localhost';
const callog = () => {
  console.log(`Servidor rodando na porta: ${port}`);
};

const server = http.createServer((req, res) => {
  //req => request
  //res => response
  switch (req.url) {
    case '/pets':
      res.end('Aqui lista os pets');
      break;
    default:
      break;
  }

  res.end('Olá mundo');
}).listen(port, hostname, callog());