/*    1) Jogos que começam com “Super”
    Use .filter() para pegar somente os jogos que começam com "Super".
*/

// .startsWith() ---> Verifica o início de uma string.

const jogos = ["Super Mario", "Super Metroid", "God of War", "Super Smash Bros"];

const jogosSuper = jogos.filter(jogo => jogo.startsWith("Super"));

console.log(jogosSuper);

// concluido