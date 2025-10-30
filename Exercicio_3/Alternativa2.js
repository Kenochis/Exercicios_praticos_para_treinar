//Loja de desconto para diferentes tipos de clientes

function desconto(porcentagem, valor){ //recebe a porcentagem de desconto e o valor do produto

    let descontoCliente = valor / 100 * porcentagem; 
    let valorFinal = valor - descontoCliente; 
    return valorFinal;
}

//função para diferentes tipos de clientes
function clientes(tipo, ValorProduto){ 
    let cliente = [
        ["Comum", porcentagem = 5],
        ["Vip", porcentagem = 10],
        ["Funcionário", porcentagem = 20]
    ];

    //verifica o tipo de cliente e aplica o desconto correspondente
    if(tipo === "Comum"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[0][1]}% de desconto do cliente ${cliente[0][0]}, ficou por apenas ${desconto(cliente[0][1], ValorProduto)} reais.`);
    }
    else if(tipo === "Vip"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[1][1]}% de desconto do cliente ${cliente[1][0]}, ficou por apenas ${desconto(cliente[1][1], ValorProduto)} reais.`);
    }
    else if(tipo === "Funcionário"){
        console.log(`O produto no valor de ${ValorProduto} reais, com os ${cliente[2][1]}% de desconto do ${cliente[2][0]}, ficou por apenas ${desconto(cliente[2][1], ValorProduto)} reais.`);
    }
    else{
        console.log("Cliente sem desconto.")
    }
}

//Testando as funções
clientes(tipo = "Comum", notebook = 10000); //tipo de cliente e valor do produto = 10000 reais
clientes(tipo = "Vip", notebook = 10000);
clientes(tipo = "Funcionário", notebook = 10000);