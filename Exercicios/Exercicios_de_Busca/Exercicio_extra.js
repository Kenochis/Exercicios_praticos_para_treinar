/*  Desafio Final
    Retorne apenas jogos que:
        1 - contêm “War” em qualquer lugar, OU
        2 - começam com “Mario”.
        3 - terminam com número.
*/

/*  .startsWith() ---> Verifica o início de uma string.
    .includes() ---> Procura em todo o texto/array.
    .endsWith() ---> Verifica o fim de uma string.
*/

const jogos = ["Super Mario Bros 3", "Gears of War 2", "Fortnite", "God of War", "Mario Kart 8"];

const joguinhos = jogos.filter(jogo => {
    const ultimo = jogo[jogo.length - 1];

    // Retorne: se o (ultimo) terminar com número && o jogo começar com "Mario" ou que tenha "War".
    return !isNaN(ultimo) && (jogo.startsWith("Mario") || jogo.includes("War"));  
})

console.log(joguinhos);

// concluido