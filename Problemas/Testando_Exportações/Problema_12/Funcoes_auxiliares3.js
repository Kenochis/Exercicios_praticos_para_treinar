const salario = 2000.00;
const beneficios = 250.00;

function calcularSalario(salarioBruto, valorBeneficios){
    let salarioLiquido = 0;
    
    if(salarioBruto >= 0 && salarioBruto <= 1100){
        salarioLiquido = salarioBruto - ((salarioBruto / 100) * 5);

    } else if(salarioBruto >= 1100.01 && salarioBruto <= 2500){
        salarioLiquido = salarioBruto - ((salarioBruto / 100) * 10);

    } else if(salarioBruto > 2500){
        salarioLiquido = salarioBruto - ((salarioBruto / 100) * 15);
    }

    return salarioLiquido + valorBeneficios;
}

function gets(){
    return calcularSalario(salario, beneficios);
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };