/*  Exercício 3 — Filtrar por nome
    Retorne apenas jogos da categoria "Corrida".
*/

const jogos = [
  { nome: "Mario Kart 8", categoria: "Corrida" },
  { nome: "Need for Speed", categoria: "Corrida" },
  { nome: "The Sims", categoria: "Simulação" }
];

const jogosDeCorrida = jogos.filter(jogo => jogo.categoria === "Corrida");

console.log(jogosDeCorrida);

// concluido