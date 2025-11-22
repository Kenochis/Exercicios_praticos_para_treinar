/*  3) Buscar por prefixo digitado
    retornar jogos que começam com o texto da variável busca.
*/

const jogos = ["Terraria", "Tetris", "Tekken", "Mario", "Team Fortress"];

const jogosTe = jogos.filter(jogo => jogo.startsWith("Te"));

console.log(jogosTe);

// concluido