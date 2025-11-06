/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e a escolha da condicão de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:
1 - A vista Débito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preco normal de etiqueta sem juros;
4 - Acima de duas vezes, preco normal de etiqueta mais juros de 10%; */

function condicaoDePagamento(valorProduto, formaDePagamento){
    let desconto;
    let calculoDoProduto = valorProduto - ((valorProduto / 100) * desconto);

    console.log(`valor do produto: R$${valorProduto}`);

    if (formaDePagamento === 1){
        desconto = 10;
        calculoDoProduto = valorProduto - ((valorProduto / 100) * desconto);

        console.log(`Valor do produto com desconto ficou por R$${calculoDoProduto}`);

    } else if (formaDePagamento === 2){
        desconto = 15;
        calculoDoProduto = valorProduto - ((valorProduto / 100) * desconto);

        console.log(`Valor do produto com desconto ficou por R$${calculoDoProduto}`);

    } else if (formaDePagamento === 3){
        desconto = 0;
        calculoDoProduto = valorProduto - ((valorProduto / 100) * desconto);

        console.log(`Valor do produto com desconto ficou por R$${calculoDoProduto}`);

    } else if (formaDePagamento === 4){
        let juros = 10;
        calculoDoProduto = valorProduto + ((valorProduto / 100) * juros);

        console.log(`Valor do produto com desconto ficou por R$${calculoDoProduto}`);

    }
}

condicaoDePagamento(900, 4);

//concluido - código mais simples;