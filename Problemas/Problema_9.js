/* Crie um programa que seja capaz de percorrer uma lista de número e imprima os números pares encontrados.
    1 - criar uma lista de numeros.
    2 - laço de repetição para percorrer cada numero da lista.
    3 - guardar o total de pares e imprimir os numeros que são pares.
*/

const listaDeNumeros = [1, 3, 4, 10, 32, 41, 44, 48, 59, 65, 67];

function numerosPares(listaDeNumeros){
    let totalDePares = 0;

    for (let i = 0; i < listaDeNumeros.length; i++) {
        if ((listaDeNumeros[i] % 2) === 0){
            console.log(listaDeNumeros[i]);
            totalDePares++;
        }
    }

    console.log(`O total de números pares é: ${totalDePares}`);
}

numerosPares(listaDeNumeros);