/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e a escolha da condicão de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:
1 - A vista Débito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preco normal de etiqueta sem juros;
4 - Acima de duas vezes, preco normal de etiqueta mais juros de 10%; */

function condicaoDePagamento(valorProduto, formaDePagamento, parcelado = 0){
    let desconto = 0;
    let juros = 10;
    let valorDoJuros = ((valorProduto / 100) * juros) + valorProduto;

    let valorFinal = valorProduto - ((valorProduto / 100) * desconto);
    
    console.log(`Produto custa R$${valorProduto}`);

    if (formaDePagamento === `Débito`){
        desconto = 10;
        valorFinal = valorProduto - ((valorProduto / 100) * desconto);

        console.log(`Você escolheu a opção de pagamento à vista no ${formaDePagamento}.`);
        console.log(`O preço final do seu produto ficou por apenas R$${valorFinal.toFixed(2)}.`);

    } else if (formaDePagamento === `Dinheiro` || formaDePagamento === `Pix`){
        desconto = 15;
        valorFinal = valorProduto - ((valorProduto / 100) * desconto);

        console.log(`Você escolheu a opção de pagamento à vista no ${formaDePagamento}.`);
        console.log(`O preço final do seu produto ficou por apenas R$${valorFinal.toFixed(2)}.`);

    } else if (formaDePagamento === `Crédito` && parcelado === 2){
        valorFinal = valorProduto / parcelado;

        console.log(`Você escolheu a opção de pagamento no ${formaDePagamento}, parcelado em ${parcelado} vezes.`);
        console.log(`O preço final do seu produto ficou por apenas 2 parcelas de R$${valorFinal.toFixed(2)} sem juros.`);

    } else if (formaDePagamento === `Crédito` && parcelado > 2){
        valorFinal = valorDoJuros / parcelado;

        console.log(`Você escolheu a opção de pagamento no ${formaDePagamento}, parcelado em ${parcelado} vezes.`);
        console.log(`O preço final do seu produto ficou por apenas ${parcelado} parcelas de R$${valorFinal.toFixed(2)} com juros.`);

    } else {
        console.log(`Opção inválida! Escolha outra forma de pagamento.`);
    }
}

condicaoDePagamento(valor = 990.00, metodoDePagamento = `Crédito`, parcela = 3);

//concluido