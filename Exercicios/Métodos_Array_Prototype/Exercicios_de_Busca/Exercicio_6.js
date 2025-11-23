/*  6) Buscar jogos com final “nite”
    Filtrar apenas nomes que terminam com "nite".
*/

const jogos = ["Fortnite", "Unite", "Infinite", "Horizon"];

const joguinhos = jogos.filter(jogo => jogo.endsWith("nite"));

console.log(joguinhos);

// concluido