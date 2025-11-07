/* crie um programa que dado um número imprima sua tabuada.
    1 - variavel numero que será executado.
    2 - laço de repetição que executará o número 10 vezes da tabuada.]
    3 - exiba o resultado. 
*/ 

function calculoDaTabuada(numeroTabuada, limite){

    for (let i = 1; i <= limite; i++) {
        const calculo = numeroTabuada * i;
        console.log(`${numeroTabuada} * ${i} = ${calculo}`);
        
    }
}

calculoDaTabuada(7, 10);