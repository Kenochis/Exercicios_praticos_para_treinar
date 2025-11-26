//  3) Filtrar nomes que começam com "M"

const nomes = ["Maria", "Pedro", "Marta", "João"];

const nomescomM = nomes.filter((nome) => {
    return nome.startsWith("M");
});

console.log(nomescomM);

// concluido