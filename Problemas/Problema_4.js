/* O IMC - Indice de Massa Corporal é um critério da Organizacão Mundial de Saúde para dar uma indicação sobre
a condiçã de peso de uma pessoa adulta.

Formula do IMC: IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condicão de acordo com a tabela abaixo.
IMC em adultos Condição:

1 - Abaixo de 18.5 Abaixo do peso;
2 - Entre 18.5 e 25 Peso normal;
3 - Entre 25 e 30 Acima do peso;
4 - Entre 30 e 40 Obeso;
5 - Acima de 40 Obsesidade Grave; */

const altura = 1.77;
const peso = 72.4;

const imc = peso / (altura * altura);

switch (true){
    case (imc < 18.5):
        console.log(`Você está abaixo do peso ideal.`);
        break;
    
    case (imc >= 18.5 && imc < 25):
        console.log(`Você está no peso ideal.`);
        break;

    case (imc >= 25 && imc < 30):
        console.log(`Você está acima do peso ideal.`);
        break;

    case (imc >= 30 && imc < 40):
        console.log(`Você está obeso.`);
        break;

    case (imc > 40):
        console.log(`Você está com obesidade grave.`);
        break;
}

//concluido