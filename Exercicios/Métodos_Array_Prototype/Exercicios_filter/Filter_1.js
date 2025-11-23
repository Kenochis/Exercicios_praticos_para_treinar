/*  Exercício 1 — Games caros.
    Use .filter() para retornar apenas jogos com preço maior que 100.
    Lembre: .filter() retorna apenas os itens que passam no teste.
*/ 

const jogos = [
  { nome: "Minecraft", preco: 100 },
  { nome: "Rocket League", preco: 40 },
  { nome: "Red Dead 2", preco: 250 }
];

const jogosCaros = jogos.filter(jogo => jogo.preco > 100);

console.log(jogosCaros);

// concluido