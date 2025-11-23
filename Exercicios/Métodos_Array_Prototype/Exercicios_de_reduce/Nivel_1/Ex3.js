// Encontre o maior número usando apenas reduce().

const numeros = [7, 1, 9, 4, 10, 2];

const maiorNumero = numeros.reduce((acumulador, numeroAtual) => {
    if (numeroAtual > acumulador) {
        return acumulador = numeroAtual;
    }
    return acumulador;
}, 0);

console.log(maiorNumero);

// concluido