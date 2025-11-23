/*  Exercício 1 — Aumentar preço.
    Use .map() para aumentar todos os preços em 10%. 
*/

const jogos = [
  { nome: "Valorant", preco: 0 },
  { nome: "Stardew Valley", preco: 24 },
  { nome: "Dark Souls", preco: 199 }
];

const jogosMaisCaros = jogos.map(jogo => {
    const porcentagem = (jogo.preco / 100) * 10;
    return {
      nome: jogo.nome,
      preco: jogo.preco + porcentagem
    };
});

console.log(jogosMaisCaros);

//concluido