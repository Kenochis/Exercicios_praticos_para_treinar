/*  Exercício 5 — Nota de avaliação
    Retorne um novo array adicionando uma nota aleatória entre 0 e 10 (ex: nota: 8.5).
*/

/*  Math.random() --> É uma função que gera um número aleatório entre 0 e 1, mas nunca chega a 1. 
    
    Ou seja:    0  ≤  Math.random()  <  1
*/

/*    Math.floor() --> É uma função que arredonda um número para baixo, sempre para o inteiro menor ou igual a ele.   */

const jogos = [
  { nome: "Sekiro" },
  { nome: "Hades" },
  { nome: "The Witcher 3" }
];

const notasDosJogos = jogos.map(jogo => {
    // Math.floor() arredondar pra baixo: Isso gera um número inteiro de 0 a 9.
    const numero = Math.floor(Math.random() * 10) + 1; // + 1 --> gera um número inteiro de 0 a 10.

    return {
        ...jogo,
        nota: numero
    };
});

console.log(notasDosJogos);

// concluido