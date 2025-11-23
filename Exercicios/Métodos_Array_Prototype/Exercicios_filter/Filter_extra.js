/*  Desafio Extra — Jogos de PC
    Retorne apenas jogos que estão disponíveis para PC, verificando dentro do array de plataformas.
    Dica: você pode usar .includes("PC") dentro do filter.
*/

const jogos = [
  { nome: "The Witcher 3", plataformas: ["PC", "PS4", "Xbox"] },
  { nome: "Bloodborne", plataformas: ["PS4"] },
  { nome: "Valorant", plataformas: ["PC"] }
];

// .includes("PC") é um método de array que verifica se um valor existe dentro do array, e retorna true ou false.
const disponibilidade = jogos.filter(jogo => jogo.plataformas.includes("PC"));

console.log(disponibilidade);

// concluido