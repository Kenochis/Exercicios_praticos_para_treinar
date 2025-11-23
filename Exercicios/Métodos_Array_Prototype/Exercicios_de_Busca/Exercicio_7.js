/*  7) Nome contém “of”
    Filtre apenas jogos cujo nome contém "of".
*/

// .includes() ---> Procura em todo o texto/array.

const jogos = ["Call of Duty", "God of War", "The King of Fighters", "Ori"];

const jogosOf = jogos.filter(jogo => jogo.includes("of"));

console.log(jogosOf);

// concluido