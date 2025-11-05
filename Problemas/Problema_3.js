/* 1 - preço etanol
   2 - preço gasolina
   3 - tipo de combustivel do seu carro
   4 - gasto médio de combustivel do carro por KM
   5 - distâcia da KM da viagem 
   
   imprima o valor necessario para realizar essa viagem */

const combustivelEtanol = 4.50;
const combustivelGasolina = 7.20;
let combustivelDoCarro = "Etanol";
let gastoPorKm = 1;
let distanciaDaViagem = 600;

const litroDecombustivel = gastoPorKm + distanciaDaViagem;
let PrecoDaViagem = 0;

if (combustivelDoCarro === "Etanol"){
    PrecoDaViagem = litroDecombustivel * combustivelEtanol
    
    console.log(`Combustível do carro é Etanol.`);
    console.log(`Gastou R$${PrecoDaViagem} para realizar essa viagem.`);
}
else if (combustivelDoCarro === "Gasolina"){
    PrecoDaViagem = litroDecombustivel * combustivelGasolina
    
    console.log(`Combustível do carro é Gasolina.`);
    console.log(`Gastou R$${PrecoDaViagem} para realizar essa viagem.`);
}

//concluido