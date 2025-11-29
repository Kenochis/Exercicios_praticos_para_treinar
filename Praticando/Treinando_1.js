// boas práticas com let e const, além de nomeações claras sobre cada coisa.

const produtos = [
  { nome: "Pão", preco: 2.50 },
  { nome: "Leite", preco: 4.00 }
];

const valorTotalProdutos = produtos.reduce((acc, produto) => acc + produto.preco, 0); // usa reduce para somar todos os preços do array produtos.
console.log(`Total: R$${valorTotalProdutos.toFixed(2)}`);

/*----------------------------------------*/

const [pao, ...rest] = produtos;    // ...rest pega o resto da váriavel que não foi puxada.
console.log(pao);

/*
  Com essa desestruturação de array, eu posso nomear as posições de objetos no array, sem precisar acessar em si as posições: produtos[0].
  Poderia usar apenas: pao. 
  E para acessar algo dentro dela, só usar: pao.preco
*/

/*----------------------------------------*/

let anotacao = {
  nome: "Matheus", 
  idade: 29
};

anotacao = {...anotacao, localidade: "São Paulo"};  // ...Spread (object) copia o object/array e colar onde desejar.

console.log(anotacao)