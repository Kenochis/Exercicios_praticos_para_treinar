//  Exercício 1 — Somar todos os valores.

const numeros = [5, 12, 8, 4, 3];
let valores = 0;

numeros.forEach((valor) => {
    valores += valor    // somando e atribuindo a valores.
});

console.log(valores);