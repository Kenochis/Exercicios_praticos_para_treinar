// Some todos os números do array.

const numeros = [2, 5, 3, 8];

const somatorio = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
}, 0);

console.log(somatorio);

// concluido