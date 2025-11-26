//  1) Filtrar números maiores que 10

const valores = [5, 12, 18, 3];

const numeros = valores.filter((valor) => {
    if (valor > 10) {
        return valor;
    }
});

console.log(numeros);

// concluido