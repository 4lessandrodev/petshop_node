const http = require('http');
const port = 3000;
const hostname = 'localhost';
const callog = () => {
  console.log(`Servidor rodando na porta: ${port}`);
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });

  //req => request, res => response
  switch (req.url) {
    case '/pets':
      res.write('Aqui lista os pets de nossa aplicação');
      break;
    case '/pets/add':
      res.write('Adicionar um pet');
      break;
    case '/pets/buscar':
      res.write('Buscar pet');
      break;
    default:
      res.write('404 - Rota não encontrada');
      break;
  }

  //Encerrar a request 
  res.end();

  res.end('Olá mundo');
}).listen(port, hostname, callog());