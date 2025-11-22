/*  4) Jogos que terminam com “War”
    Filtre jogos que terminam com "War" (ex: "God of War").
*/

// .endsWith() ---> Verifica o fim de uma string.

const jogos = ["God of War", "Gears of War", "Star Wars", "Warframe"];

const jogosWar = jogos.filter(jogo => jogo.endsWith("War"));

console.log(jogosWar);

// concluido