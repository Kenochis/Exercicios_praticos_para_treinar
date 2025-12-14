/*  1 - API = um servidor que você pode pedir dados.

    2 - fetch() serve para buscar dados de uma API.
    3 - fetch() não retorna os dados, ele retorna uma Promise!

    4 - Promise = uma promessa de que algo vai acontecer no futuro.

    5 - .then() diz: “Quando isso terminar, faça isso”.
    6 - .catch() serve para tratar erros.
*/


// buscando informação pela API.
fetch ("https://pokeapi.co/api/v2/pokemon/2")
.then (resposta => resposta.json())         // resposta.json() transforma JSON em objeto JS.
.then (pokemon => {                         // usando os dados da API.
    console.log("nome: " + pokemon.name);
    console.log("id: " + pokemon.id);
    console.log(pokemon.types);
})
.catch (error => console.log(error));       // tratando erros, se der erro.