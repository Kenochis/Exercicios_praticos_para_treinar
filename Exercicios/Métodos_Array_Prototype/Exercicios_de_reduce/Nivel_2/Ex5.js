//  Transforme todos os números em seus quadrados usando reduce (sem map!)

const numeros = [2, 3, 4, 5];

const numeroAoQuadrado = numeros.reduce((acumulador, numeroAtual) => {
    const aoQuadrado = numeroAtual * numeroAtual; // multiplica o numero atual por ele mesmo.
    acumulador.push(aoQuadrado) // adiciona a soma desse numero no novo array.

    return acumulador;
}, []);

console.log(numeroAoQuadrado);

// concluido