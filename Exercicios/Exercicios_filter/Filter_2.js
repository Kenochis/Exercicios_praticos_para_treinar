/*  Exercício 2 — Somente gratuitos
    Retorne apenas os jogos que são grátis.
*/

const jogos = [
  { nome: "Fortnite", preco: 0 },
  { nome: "Apex Legends", preco: 0 },
  { nome: "Hollow Knight", preco: 50 }
];

const jogosGratuitos = jogos.filter(jogo => jogo.preco === 0);

console.log(jogosGratuitos);

// concluido