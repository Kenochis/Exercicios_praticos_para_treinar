class Carro {
    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
        this.ultimoGasto = null; // começa sem valor definido
    }

    gastoDoPercurso(distancia, precoCombustivel) {
        const gasto = (this.combustivelPorKm * distancia) * precoCombustivel;

        this.ultimoGasto = gasto; // guarda o valor dentro do objeto
        return gasto;
    }

    exibirFrase() {
        console.log(`Marca do carro: ${this.marca}.`);
        console.log(`Cor do carro: ${this.cor}.`);
        console.log(`Gasto médio por km: ${this.combustivelPorKm} litro(s).`);

        if (this.ultimoGasto !== null) {
        console.log(`Último gasto calculado: R$${this.ultimoGasto.toFixed(2)}`);
        } else {
        console.log("Ainda não foi calculado nenhum percurso.");
        }
    }
}


const carro1 = new Carro("BMW", "Preto", 1);
carro1.gastoDoPercurso(900, 6.40);

carro1.exibirFrase();

//concluido