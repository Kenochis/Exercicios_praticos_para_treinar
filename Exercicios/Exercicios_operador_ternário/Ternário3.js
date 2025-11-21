/*  Exercício 3 — Aprovado ou Reprovado
        Crie uma variável nota.
        Use o ternário para definir resultado:
            A: "Aprovado" se nota for maior ou igual a 6.
            B: "Reprovado" caso contrário.

        Exemplo esperado:
        Se nota = 5.5 → resultado deve ser "Reprovado".
*/

const notas = (Math.random() * 10).toFixed(2);

const resultado = notas >= 6 ? "Aprovado" : "Reprovado";

console.log(notas);
console.log(resultado);

// concluido