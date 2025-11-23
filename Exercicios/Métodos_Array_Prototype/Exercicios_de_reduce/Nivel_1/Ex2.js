// Some apenas os números maiores que 10.

const numeros = [4, 18, 11, 3, 9, 20];

const somatorio = numeros.reduce((acumulador, numeroAtual) => {
    if (numeroAtual > 10) {
        return acumulador + numeroAtual;
    }
    return acumulador;
}, 0);

console.log(somatorio);

// concluido