//  1) Transformar para maiúsculas.
// O método .toUpperCase() converte todos os caracteres da string para maiúsculas.

const frutas = ["banana", "uva", "maçã"];

const frutasNovas = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(frutasNovas);

// concluido