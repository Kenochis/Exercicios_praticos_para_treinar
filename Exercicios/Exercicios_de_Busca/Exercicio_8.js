/*  8) Começam com “The” e terminam com número
    Pegue jogos que começam com "The" e terminam com número.
*/

const jogos = ["The Witcher 3", "The Last of Us", "The King of Fighters 2002", "The Sims 4"];

const jogoMultiplos = jogos.filter(jogo => {
    const ultimos = jogo[jogo.length - 1];
    if (!isNaN(ultimos)) {      // se o último for número.
        return jogo.startsWith("The");  // retorne os jogos que começam com "The".
    }
});

console.log(jogoMultiplos);

// concluido