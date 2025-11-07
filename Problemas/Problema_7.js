/* Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.

    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada Jose que tenha 70kg de peso e 1,75 de altura e peca ao José para dizer o valo
    do seu IMC; 
*/

class Pessoa {
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    Imc (){
        const calculoImc = this.peso / (this.altura * this.altura);
        return calculoImc;
    }

    classificarImc(){
        const imc = this.Imc();

        switch (true){
            case (imc < 18.5):
                return console.log(`Você está abaixo do peso ideal.`);
                
            
            case (imc >= 18.5 && imc < 25):
                return console.log(`Você está no peso ideal.`);
                

            case (imc >= 25 && imc < 30):
                return console.log(`Você está acima do peso ideal.`);
                

            case (imc >= 30 && imc < 40):
                return console.log(`Você está obeso.`);
                

            case (imc > 40):
                return console.log(`Você está com obesidade grave.`);
                
        }
    }
}

const kenochis = new Pessoa(`Kenochis`, 72.40, 1.77);
kenochis.classificarImc();