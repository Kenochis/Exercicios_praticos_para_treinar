/*  Crie um programa que receba X (quantidade de números) e seus respectivos valores. 
    Imprima o maior número par e o menor número ímpar.

        Ex: 
            Entrada: [5, 3, 4, 1, 10, 8]

            Saída: Maior número par -> 10
                   Menor número ímpar -> 1
*/

const { gets, print } = require(`./Funcoes_auxiliares2.js`);

const listaDeNumeros = [6, 7, 1, 3, 10, 11, 34, 25, 99, 16];

const maiorNumPar = gets().maiorPar(listaDeNumeros);
const menorNumImpar = gets().menorImpar(listaDeNumeros);

print(`Maior número par da lista: ${maiorNumPar}`);
print(`Menor número ímpar da lista: ${menorNumImpar}`);
