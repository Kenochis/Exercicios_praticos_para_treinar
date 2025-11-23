// Retire apenas nomes que começam com “A” usando reduce

const nomes = ["Ana", "Luiz", "Amanda", "Carlos", "Ari"];

const nomesComA = nomes.reduce((acumulador, nomeAtual) => {
    if (nomeAtual.startsWith("A")) {
        acumulador.push(nomeAtual);
    }
    return acumulador;
}, []);

console.log(nomesComA);

// concluido