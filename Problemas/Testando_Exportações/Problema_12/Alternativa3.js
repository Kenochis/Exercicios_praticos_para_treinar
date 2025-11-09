/*  Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo, receba o valor bruto do salário e o adicional dos benefícios. 
        
    O salário a ser transferido é calculado da seguinte maneira:
        Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios.
        
            Para calcular o percentual de imposto segue as aliquotas:

                1 - De R$ 0.00 a R$ 1100.00 = 5.00%
                2 - De R$ 1100.01 a R$ 2500.00 = 10.00%
                3 - Maior que R$ 2500.00 = 15.00%

        Ex: Entrada -->  R$2000,00 e R$250,00
            Saída -->  R$2050,00
*/

const { gets, print } = require(`./Funcoes_auxiliares3.js`);

const calcularSalario = gets();

print(calcularSalario);