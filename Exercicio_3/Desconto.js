//Loja de desconto para diferentes tipos de clientes

function desconto(tipo, valor){

    let descontoCliente = valor / 100 * tipo;
    let valorFinal = valor - descontoCliente;
    return valorFinal;
}

function clienteComum(ValorProduto){ 
    let cliente = [
        [tipo = "Comum", porcentagem = 5],
        [tipo = "Vip", porcentagem = 10],
        [tipo = "Funcionário", porcentagem = 20]
    ];

    desconto(cliente[0][1], ValorProduto);
    let tipoDeCliente = cliente[0][0];

    if(tipoDeCliente === "Comum"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[0][1]}% de desconto do cliente ${cliente[0][0]}, ficou por apenas ${desconto(cliente[0][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Vip"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1][1]}% de desconto do cliente ${cliente[1][0]}, ficou por apenas ${desconto(cliente[1][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Funcionário"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[2][1]}% de desconto do ${cliente[2][0]}, ficou por apenas ${desconto(cliente[2][1], ValorProduto)} reais.`);
    }
    else{
        console.log("Cliente sem desconto.")
    }
}

function clienteVip(ValorProduto){
    let cliente = [
        [tipo = "Comum", porcentagem = 5],
        [tipo = "Vip", porcentagem = 10],
        [tipo = "Funcionário", porcentagem = 20]
    ];

    desconto(cliente[1][1], ValorProduto);
    let tipoDeCliente = cliente[1][0];

    if(tipoDeCliente === "Comum"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[0][1]}% de desconto do cliente ${cliente[0][0]}, ficou por apenas ${desconto(cliente[0][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Vip"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1][1]}% de desconto do cliente ${cliente[1][0]}, ficou por apenas ${desconto(cliente[1][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Funcionário"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[2][1]}% de desconto do ${cliente[2][0]}, ficou por apenas ${desconto(cliente[2][1], ValorProduto)} reais.`);
    }
    else{
        console.log("Cliente sem desconto.")
    }
}

function clienteFuncionario(ValorProduto){
    let cliente = [
        [tipo = "Comum", porcentagem = 5],
        [tipo = "Vip", porcentagem = 10],
        [tipo = "Funcionário", porcentagem = 20]
    ];

    desconto(cliente[2][1], ValorProduto);
    let tipoDeCliente = cliente[2][0];

    if(tipoDeCliente === "Comum"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[0][1]}% de desconto do cliente ${cliente[0][0]}, ficou por apenas ${desconto(cliente[0][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Vip"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1][1]}% de desconto do cliente ${cliente[1][0]}, ficou por apenas ${desconto(cliente[1][1], ValorProduto)} reais.`);
    }
    else if(tipoDeCliente === "Funcionário"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[2][1]}% de desconto do ${cliente[2][0]}, ficou por apenas ${desconto(cliente[2][1], ValorProduto)} reais.`);
    } 
    else{
        console.log("Cliente sem desconto.")
    }
}

clienteComum(10000);
clienteVip(10000);
clienteFuncionario(10000);