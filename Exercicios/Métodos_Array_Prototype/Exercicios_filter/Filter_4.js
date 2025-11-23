/*  Exercício 4 — Nota mínima
    Filtre apenas jogos com nota maior ou igual a 9.
*/

const jogos = [
  { nome: "Hades", nota: 9.5 },
  { nome: "Cyberpunk 2077", nota: 6.0 },
  { nome: "Stardew Valley", nota: 9.0 }
];

const notasBoas = jogos.filter(jogo => jogo.nota >= 9);

console.log(notasBoas);

// concluido