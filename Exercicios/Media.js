// calculadora de medias

//Math.round() - arredonda o número para o inteiro mais próximo

//função para calcular a média e situação do aluno
function calcularMedia(aluno, notas){
    let soma = (notas[0] + notas[1] + notas[2]) / 3; //calculando a soma das notas e dividindo por 3 para obter a média
    let media = Math.round(soma * 100) / 100; //arredondando a média para 2 casas decimais

    console.log("A média foi de: " + media);

    if (media >= 7){
    console.log(aluno + " foi aprovado.");
    }
    else if (media < 7 && media >= 5){
    console.log(aluno + " ficou de recuperação");
    }
    else {
    console.log(aluno + " foi reprovado");
    }
}

let notasAluno1 = [aluno = "Kauã", notas = [8, 5, 10]]; //definindo o nome do aluno e suas notas
calcularMedia(notasAluno1[0], notasAluno1[1]); //chamando a função com as notas e o nome do aluno
