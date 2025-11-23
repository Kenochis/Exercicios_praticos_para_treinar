// Conte quantas vezes cada nome aparece.

const nomes = ["Ana", "Luiz", "Ana", "Marcos", "Luiz", "Ana"]

// Esse reduce cria um array onde cada chave é um nome e o valor é quantas vezes aparece no array.
const contagemDeRepeticao = nomes.reduce((acumulador, nomeAtual) => {
    if (acumulador[nomeAtual]) { // se a chave(nome) já existe, adicione +1.
        acumulador[nomeAtual]++;
    } else {                     // se não existe, atribua 1 ao nome.
        acumulador[nomeAtual] = 1;
    }
    return acumulador;
}, []);

console.log(contagemDeRepeticao);

// concluido