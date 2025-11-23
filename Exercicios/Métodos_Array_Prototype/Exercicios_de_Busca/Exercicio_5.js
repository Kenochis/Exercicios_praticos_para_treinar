/*  5) Jogos que terminam com um número
    Filtre apenas jogos que terminam com um número (dica: use .endsWith() com dígitos).
*/

/*  Sempre que você quiser pegar o último elemento de uma string ou array, use: ---> obj[obj.length - 1] <---
    Usamos ---> !isNaN(ultimo) <--- porque queremos apenas valores que terminam com número.
*/

const jogos = ["Diablo 3", "Half-Life 2", "Portal", "Dark Souls 1", "Halo 5"];

const jogosComNumero = jogos.filter(jogo => {
  const ultimo = jogo[jogo.length - 1];     // pega o último caractere.
  return !isNaN(ultimo);                    // verifica se é um número.
});

console.log(jogosComNumero);

// concluido