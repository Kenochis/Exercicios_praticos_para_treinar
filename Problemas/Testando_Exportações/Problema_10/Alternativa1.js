/* Faça um programa que receba a média de um aluno.

    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 e < 7 imprima "Recuperacão"
    Caso a média seja >= 7 imprima "Aprovado"

    Ex: Entrada: --> 5.5
        Saida: --> Recuperação
*/

const { gets, print } = require('./Funcoes_auxiliares.js'); //Método de importação.
const media = gets();

print(media);

if (media >= 7){
    print(`Aprovado.`)
} else if (media >= 5 && media < 7){
    print(`Recuperação.`);
} else if (media < 5){
    print(`Reprovado.`);
}
