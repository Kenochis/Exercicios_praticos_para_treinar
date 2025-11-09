const divisaoParEImpar = { // objeto com métodos.
    
    maiorPar (numeros){ //Método -> maior número par.
        let maiorNumPar = null;

        for (let i = 0; i < numeros.length; i++) {
            const number = numeros[i];

            if((number % 2) === 0){
                if(number > maiorNumPar || maiorNumPar === null){ // qualquer um dos dois adiciona um novo valor na variável.
                    maiorNumPar = number;
                }
            }
        }
        return maiorNumPar;
    },

    menorImpar (numeros){ //Método -> menor número ímpar.
        let menorNumImpar = null;

        for (let i = 0; i < numeros.length; i++) {
            const number = numeros[i];

            if((number % 2) === 1){ //se o resto da divisão for igual a 1.
                if (menorNumImpar !== null){ //se não for igual a null.
                    if(number < menorNumImpar){
                        menorNumImpar = number;
                    }
                } else if (menorNumImpar === null){ //se for igual a null.
                    menorNumImpar = number;
                }
            }
        }
        return menorNumImpar;
    }
}

function gets(){
    return divisaoParEImpar;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };