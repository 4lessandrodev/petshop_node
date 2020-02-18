const http = require('http');
const url = require('url');
const petshop = require('./petshop');
const port = 3000;
const hostname = 'localhost';
const callog = () => {
  console.log(`Servidor rodando na porta: ${port}`);
};

const server = http.createServer((req, res) => {
  //Executa apenas quando é requisitado pelo navegador
  res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
  let urlCompleta = url.parse(req.url, true);
  let rota = urlCompleta.pathname;
  let query = urlCompleta.query;
  console.log(query);

  //req => request, res => response
  switch (rota) {
    case '/pets':
      res.write(petshop.listarPets());
      break;
    case '/pets/add':
      //Metodo = http://localhost:3000/pets/add?nome=Lua&&tipo=gato&&raca=Siames&&idade=2&&genero=F&&vacinado=false
      petshop.novoPet(query);
      res.write(petshop.listarPets());
      break;
    case '/pets/buscar':
      //Metodo = http://localhost:3000/pets/buscar?nome=Lua
      let pet = petshop.buscarPet(query);
      res.write(pet);
      break;
    default:
      //res.write('404 - Rota não encontrada');
      //Todos os caminhos 404 levam a pagina listar pets
      res.write(petshop.listarPets());
      break;
  }

  //Encerrar a request 
  res.end();

}).listen(port, hostname, callog());