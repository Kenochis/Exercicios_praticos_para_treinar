/*  Crie um array listaDeJogos com 5 jogos e:
        1 - Mostre o primeiro e último item.
        2 - Adicione um jogo no final.
        3 - Remova o primeiro.
        4 - Mostre o tamanho total.
        5 - Liste todos com um for simples.
*/

/*  .at() é ideal para pegar posições específicas, principalmente do fim do array.

    Dá tanto pra pegar da primeira a última ordem, como da última pra primeira:
        .at(-1) = última posição.
        .at(-2) = penúltima posição, etc..

        .at(0) = primeira posição.
        .at(1) = segunda posição, etc..
*/

const jogos = ["The Last of Us", "Horizon", "Delta Force", "Ghost of Tsushima", "Once Human"];

//parte 1.
console.log(`${jogos.at(0)} e ${jogos.at(-1)}`);

//parte 2.
jogos.push("Safari");
console.log(jogos);

//parte 3.
jogos.shift();
console.log(jogos);

//parte 4.
console.log(`Tamanho do array: ${jogos.length}`);

//parte 5.
for (let i = 0; i < jogos.length; i++) {
    console.log(jogos[i]);
};

// concluido