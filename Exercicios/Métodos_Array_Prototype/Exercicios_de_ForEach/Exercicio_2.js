/*  Exercício 2 — Aumentar preços.

    Use .forEach() para aumentar todos os preços em 10 reais, alterando os objetos.
    Depois mostre o array atualizado no console.
*/

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Headset", preco: 200 }
];

produtos.forEach((produto) => {
    const taxa = (produto.preco / 100) * 10;
    produto.preco += taxa;
});

console.log(produtos);