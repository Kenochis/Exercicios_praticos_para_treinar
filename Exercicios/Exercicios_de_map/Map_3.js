/*  Exercício 3 — Transformar em frases
    Usando o mesmo array do exercício 2:
        Crie um array de frases assim:
            "Celeste custa R$ 50"
*/

const jogos = [
  { nome: "GTA V", preco: 120 },
  { nome: "Terraria", preco: 20 },
  { nome: "Celeste", preco: 50 }
];

const fraseCeleste = jogos.map(jogo => `${jogo.nome} custa R$${jogo.preco}`);

console.log(fraseCeleste);

// concluido