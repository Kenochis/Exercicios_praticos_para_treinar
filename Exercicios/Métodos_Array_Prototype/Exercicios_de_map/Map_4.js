/*  Exercício 4 — Criar uma nova propriedade.
    Use .map() para adicionar uma nova propriedade plataforma: "Nintendo" em cada objeto.
    ⚠ Não altere o array original.
*/
const jogos = [
  { nome: "FIFA 23", preco: 200 },
  { nome: "Mario Kart 8", preco: 299 }
];

const JogosNitendo = jogos.map(jogo => {
    return {
        plataforma: "Nintendo",  // adiciona nova propriedade
        ...jogo                  // copia o objeto original
    };
});

console.log(jogos);
console.log(JogosNitendo);

//concluido