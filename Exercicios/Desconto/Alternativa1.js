//Loja de desconto para diferentes tipos de clientes

function desconto(porcentagem, valor){ //recebe a porcentagem de desconto e o valor do produto

    const descontoCliente = valor / 100 * porcentagem; 
    const valorFinal = valor - descontoCliente; 
    return valorFinal;
}

function clienteComum(ValorProduto){ //função para cliente comum
    let cliente = [tipo = "Comum", porcentagem = 5];

    console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1]}% de desconto do cliente ${cliente[0]}, ficou por apenas ${desconto(cliente[1], ValorProduto)} reais.`);
}

function clienteVip(ValorProduto){ //função para cliente vip
    let cliente = [tipo = "Vip", porcentagem = 10];
    
    console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1]}% de desconto do cliente ${cliente[0]}, ficou por apenas ${desconto(cliente[1], ValorProduto)} reais.`);
}

function clienteFuncionario(ValorProduto){ //função para cliente funcionário
    let cliente = [tipo = "Funcionário", porcentagem = 20];

    console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1]}% de desconto do ${cliente[0]}, ficou por apenas ${desconto(cliente[1], ValorProduto)} reais.`);
}

//Testando as funções
clienteComum(notebook = 10000); //valor do produto = 10000 reais
clienteVip(notebook = 10000);
clienteFuncionario(notebook = 10000);