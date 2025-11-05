function contarPares(inicio, fim) {
    let totalPares = 0;

    for (let i = inicio; i < fim; i++){
        if (i % 2 === 0) {
            console.log(i);
            totalPares++;
        }
    }

    console.log("Total de números pares: " + totalPares);
}

contarPares(2, 10);

//concluido