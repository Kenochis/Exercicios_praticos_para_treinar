/* 1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor
gasto em reais para realizar este percurso. */

class carros {
    constructor(marca, cor, combustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
        this.gastoDaViagem = 0;
    }
    
    gastoDoPercurso(distanciaDoPercurso, valorDoCombustivel){

        this.gastoDaViagem = (this.combustivelPorKm * distanciaDoPercurso) * valorDoCombustivel;
        return this.gastoDaViagem;
    }
    exibirFrase(){
        
        console.log(`Marca do carro: ${this.marca}.`);
        console.log(`Cor do carro: ${this.cor}.`);
        console.log(`Gasto por km do carro: ${this.combustivelPorKm} litro(s).`);
        console.log(`Gasto para realizar o percurso: R$${this.gastoDaViagem.toFixed(2)} `);
    }
}

const carro1 = new carros(`BMW`, `Preto`, 1);
carro1.gastoDoPercurso(900, 6.40);

carro1.exibirFrase();

//concluido