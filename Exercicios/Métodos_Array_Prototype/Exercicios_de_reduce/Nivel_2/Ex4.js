// Filtre os números pares usando só reduce (sem filter!)

const numeros = [5, 8, 12, 3, 9, 4];

const pares = numeros.reduce((acumulador, numeroAtual) => {
    if ((numeroAtual % 2) === 0) {
        acumulador.push(numeroAtual);  // .push(elemento) -> adiciona o novo elemento no array.
    }
    return acumulador;
}, []);

console.log(pares);

// concluido