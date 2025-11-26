/*  OBJETIVO:
        🔧 Faça:
        1 - Use filter para pegar apenas itens com preço acima de 100.
        2 - Use map para adicionar precoComDesconto (10%).
        3 - Use forEach para mostrar cada item formatado (ex.: Monitor - R$810).
        4 - Use reduce para somar o valor total dos produtos com desconto.
*/
const produtos = [
  { nome: "Mouse", preco: 70 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo HDMI", preco: 30 }
];

const produtosComDesconto = produtos
  .filter(produto => produto.preco > 100)   // filtra só os acima de 100
  .map(produto => ({ ...produto, precoComDesconto: produto.preco * 0.9 })); // aplica 10% de desconto

produtosComDesconto.forEach(produto => {    // mostra cada produto
  console.log(`${produto.nome} - R$${produto.precoComDesconto}`);
});

const total = produtosComDesconto.reduce((acc, produto) => acc + produto.precoComDesconto, 0);  // soma o total

console.log("Total com desconto: R$" + total);