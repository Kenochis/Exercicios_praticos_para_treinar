// Copie a lista usando Spread.

const produtos = [
    {padaria: "Pão de queijo", preco: 5.00, local: "Minas Gerais"}, 
    {padaria: "Pão de Frios", preco: 7.50, local: "São Paulo"},
    {padaria: "Pão Françês", preco: 1.20, local: "Rio de Janeiro"}
];

produtos.push({padaria: "Pão Doce", preco: 2.00, local: "Bahia"}); // adicionando um object no final.

console.log(produtos);

/*-------------------------------------*/

function copiar (...produto) {
    const [paoDeQueijo, ...rest] = produto;
    return paoDeQueijo.padaria;
};

console.log(copiar(...produtos));

/*  copiar(produtos)   -> passa um array único como argumento.
    copiar(...produtos) -> espalha os itens e passa cada um como argumento individual.
*/

/*-------------------------------------*/

function imprimir (ob1, ob2, ob3, ob4) { // nomeio os parâmetros recebido. assim eu uso e/ou acesso as propriedades dele.
    return ob4.padaria;
};

console.log(imprimir(...produtos))  // mandei os objetos soltos pro parâmetro -> [0], [1], [2], [3]

/*-------------------------------------*/

// ...precos junta TODOS os argumentos em um array.
function pegarPrecos(...precos) {
    const soma = precos.reduce((acc, preco) => acc + preco, 0); // somando os precos com reduce.
    console.log(soma);
}

pegarPrecos(...produtos.map(p => p.preco));
/*  1 - map() cria um array só com os preços: [5, 7.5, 1.2, 2].
    2 - ... espalha esse array e manda cada preço como um argumento separado -->  pegarPrecos(5, 7.5, 1.2, 2).
*/