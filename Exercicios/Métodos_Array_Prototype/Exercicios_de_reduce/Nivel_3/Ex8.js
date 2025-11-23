// Contabilize categorias de produtos.

const produtos = [
  {produto: "TV", categoria: "eletronico"},
  {produto: "Maçã", categoria: "alimento"},
  {produto: "Violão", categoria: "musica"},
  {produto: "Arroz", categoria: "alimento"},
];

const contagemDeCategoria = produtos.reduce((acumulador, produtoAtual) => {
    if (acumulador[produtoAtual.categoria]) {
        acumulador[produtoAtual.categoria]++;
    } else {
        acumulador[produtoAtual.categoria] = 1;
    }
    return acumulador;
}, []);

console.log(contagemDeCategoria);

// concluido