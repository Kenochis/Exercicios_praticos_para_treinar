/*  Exercício 3 — Mostrar apenas maiores de idade

    Use forEach para mostrar no console apenas o nome das pessoas que são maiores de idade (idade ≥ 18).
*/

const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Maria", idade: 15 },
  { nome: "João", idade: 19 }
];

pessoas.forEach((pessoa) => {
    if (pessoa.idade >= 18) {
        console.log(pessoa.nome + " é maior de idade!");
    }
});
