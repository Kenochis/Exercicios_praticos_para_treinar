
const produtos = [
  { nome: "Pão", preco: 2.50 },
  { nome: "Leite", preco: 4.00 }
];

// 1
produtos.push({nome: "Café", preco: 5.00});
/*----------------------------------------*/

// 2
produtos.forEach((produto) => console.log(produto));
/*----------------------------------------*/

// 3
const nomes = produtos.map(produto => produto.nome);    // para retornar apenas uma coisa, não precisa das {}.
console.log(nomes);
/*----------------------------------------*/

// 4
const valores = produtos.filter(produto => produto.preco >= 4 );

console.log(valores);

// concluido