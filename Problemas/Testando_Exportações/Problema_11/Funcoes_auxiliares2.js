const divisaoParEImpar = { // objeto com métodos.
    
    maiorPar (numeros){ //Método -> maior número par.
        let maiorNumPar = 0;

        for (let i = 0; i < numeros.length; i++) {
            const number = numeros[i];

            if((number % 2) === 0){
                if(number > maiorNumPar){
                    maiorNumPar = number;
                }
            }
        }
        return maiorNumPar;
    },

    menorImpar (numeros){ //Método -> menor número ímpar.
        let menorNumImpar = 0;

        for (let i = 0; i < numeros.length; i++) {
            const number = numeros[i];

            if((number % 2) === 1){ //se o resto da divisão for igual a 1.
                if (menorNumImpar !== 0){ //se não for igual a 0.
                    if(number < menorNumImpar){
                        menorNumImpar = number;
                    }
                } else if (menorNumImpar === 0){ //se for igual a 0.
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