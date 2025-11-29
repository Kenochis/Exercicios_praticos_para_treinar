// Desestruture um objeto produto dentro do forEach.

const produtos = [
    {item: "Pão de queijo", preco: 5.00, local: "Minas Gerais"}, 
    {item: "Pão de Frios", preco: 7.50, local: "São Paulo"},
    {item: "Pão Françês", preco: 1.20, local: "Rio de Janeiro"}
];

produtos.forEach(produto => {
    const {item, ...rest} = produto;    // acessando as propriedades do object.
    console.log(item);
});

/*----------------------------------*/

const modificado = produtos.map(produto => {
    const {item: comestivel, ...rest} = produto;    // modificando o array e alterando o nome da chave de uma propriedade dentro do object.
    return {
        comestivel
    };
});
console.log(modificado);

/*----------------------------------*/

const [paoDeQueijo, paoDeFrios, ...rest] = produtos;    // quebrando (desestruturando) as posições do array.
console.log(rest)