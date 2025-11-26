//  2) Calcular média

const notas = [7, 9, 10, 6];

const media = notas.reduce((acc, nota) => {
    return acc + nota / notas.length;
}, 0);

console.log(media);

// concluido