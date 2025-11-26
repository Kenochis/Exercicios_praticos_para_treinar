//  3) Contar quantas vezes aparece a letra "a".

const letras = ["a", "b", "a", "c", "a"];

const contagem = letras.reduce((acc, letra) => {
    if (acc[letra]) {
        acc[letra]++;
    } else {
        acc[letra] = 1;
    }
    
    return acc;
}, []);

console.log(contagem);