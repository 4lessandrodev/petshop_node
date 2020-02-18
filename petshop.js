let pets = [{
  nome: "Batman",
  tipo: "cão",
  raca: "vira-lata",
  idade: 2,
  genero: "M",
  vacinado: false,
  servicos: ["banho", "tosa", "corte de unha"]
},
{
  nome: "Lua",
  tipo: "gato",
  raca: "Siamês",
  idade: 8,
  genero: "F",
  vacinado: false,
  servicos: ["banho", "corte de unha"]
},
{
  nome: "Bill",
  tipo: "cão",
  raca: "Labrador",
  idade: 4,
  genero: "M",
  vacinado: false,
  servicos: ["banho", "corte de unha"]
},
{
  nome: "Gata",
  tipo: "gato",
  raca: "Singapura",
  idade: 3,
  genero: "F",
  vacinado: false,
  servicos: ["banho", "corte de unha"]
},
{
  nome: "Tom",
  tipo: "gato",
  raca: "vira-lata",
  idade: 3,
  genero: "M",
  vacinado: false,
  servicos: ["banho"]
}];


//Listar todos os pets
const listarPets = () => {
  let conteudo = '';
  for (let pet of pets) {
    conteudo +=
      `
      nome: ${pet.nome} => ${pet.tipo}
      -------------------
    `;
  }
  if (conteudo == '') {
    return 'Nenhum pet cadastrado';
  } else {
    return conteudo;
  }
};

//Salvar um novo pet
const novoPet = (petParam) => {
  if (verificarParametro(petParam)) {
    pets.push(petParam);
  } else {
    return false;
  }
};

//Função buscar pet
const buscarPet = (petParam) => {
  console.log('Nome recebido: ' + petParam.nome);
  if (verificarParametro(petParam)) {
    let petEncontrado = pets.find(pet => pet.nome == petParam.nome);
    petEncontrado = `${petEncontrado.nome} | ${petEncontrado.tipo} | ${petEncontrado.idade} anos | ${petEncontrado.genero}`;
    return petEncontrado;
  } else {
    return 'Não foi encontrado pet com o valor informado!';
  }
};

//Verificar se os parametros foram passados
const verificarParametro = (petParam) => {
  return (petParam.nome != undefined && petParam != null && petParam.nome != '');
};

module.exports = { listarPets, novoPet, buscarPet };