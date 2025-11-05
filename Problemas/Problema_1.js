//media de notas de um aluno

function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        console.log("A média do aluno é " + media);
        console.log("Aprovado!");
    } else {
        console.log("A média do aluno é " + media);
        console.log("Reprovado!");
    }
}

calcularMedia(8, 6, 7);

//concluido