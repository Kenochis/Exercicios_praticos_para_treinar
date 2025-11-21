/*  Exercício 1 — Adulto ou Criança.

    1 - Crie uma variável idade.
    2 - Usando operador ternário, defina a variável tipo:
        A: -> "Adulto" se idade for maior ou igual a 18.
        B: -> "Criança" caso contrário.

    Exemplo esperado:
    Se idade = 12 → tipo deve ser "Criança".
*/

const pessoas = [
    {nome: "Ana", idade: 17},
    {nome: "Letícia", idade: 13},
    {nome: "Isabela", idade: 25}
]

const grupoSocial = pessoas.map(pessoa => {
    return {
        ...pessoa,
        tipo: pessoa.idade >= 18 ? "Adulto" : "Criança"  // Ternário
    };
});

console.log(grupoSocial);

//concluido