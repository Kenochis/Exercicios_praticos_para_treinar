// função para cortar números depois da casa decimal (ex: numero = 10.22343456 --->  numero = 10.22).
function cortar(numero){
    const cortadorDecimal = Math.floor(numero * 100) / 100;
    return cortadorDecimal;
}

/*-------------------------------------------------------------*/


const notas = [5.5, 4.3, 3, 8.9, 6, 5.1]; // lista de notas.
let media = 0; // media do aluno.

for (let i = 0; i < notas.length; i++) { // calculo da media com base nas notas.

    const calculo = media + notas[i];
    media = calculo;
    if(i === (notas.length - 1)){
        media = media / notas.length;
    }
}

function gets(){ // Entrada.
    const notaDoAluno = cortar(media);
    return notaDoAluno;  //retorna o valor da media do aluno.
}

function print(texto){  // Saída.
    console.log(texto)
}

module.exports = { gets, print }; // Método de exportação.