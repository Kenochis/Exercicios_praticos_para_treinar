//Contador de pares

//Number.isInteger() - Verifica se o valor é um número inteiro

//função para contar números pares
function contarPares(limite){ 
    let contador = 0; //contador de números pares

    for (let i = 1; i <= limite; i++){ //laço de repetição de 1 até o limite
        
        if (Number.isInteger(i / 2)){ //verifica se o número é par
            contador++;
        }
    }
    console.log("Quantidade de números pares entre 1 e " + limite + ": " + contador);
}

contarPares(20);