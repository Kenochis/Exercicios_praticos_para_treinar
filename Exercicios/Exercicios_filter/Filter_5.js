/*  Exercício 5 — Jogos disponíveis
    Use .filter() para retornar apenas jogos com disponivel: true.
*/

const jogos = [
  { nome: "God of War", disponivel: false },
  { nome: "Cuphead", disponivel: true },
  { nome: "Ori", disponivel: true }
];

const jogosDisponiveis = jogos.filter(jogo => jogo.disponivel === true);

console.log(jogosDisponiveis);

// concluido