/*  Exercício 2 — Apenas nomes.
    Retorne um novo array contendo apenas os nomes dos jogos.
*/

const jogos = [
  { nome: "GTA V", preco: 120 },
  { nome: "Terraria", preco: 20 },
  { nome: "Celeste", preco: 50 }
];

const nomesjogos = jogos.map(jogo => jogo.nome);

console.log(nomesjogos);

//concluido