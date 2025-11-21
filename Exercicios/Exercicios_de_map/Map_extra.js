/*  1 - Retorne um novo array com o nome do jogo em Maiúsculas.
    2 - preço com desconto de 30%.
    obs: Uma tag "LANÇAMENTO" se preço for maior que 150 antes do desconto, senão "COMUM".
*/

/*  O operador ternário é uma forma curta de escrever um if/else em JavaScript. Ele serve para escolher um valor dependendo de uma condição.
    ---> condição ? valorSeVerdadeiro : valorSeFalso <---

        O que está antes do "?" é a condição.

        O que está entre "?" e ":" é o resultado se for verdadeiro.

        O que está depois do ":" é o resultado se for falso.
*/

const jogos = [
  { nome: "Cyberpunk 2077", preco: 200 },
  { nome: "No Man's Sky", preco: 150 },
  { nome: "Fallout 76", preco: 80 }
];

const JogosPromocao = jogos.map(jogo => {
    const precoOriginal = jogo.preco;

    const desconto = (jogo.preco / 100) * 30;
    jogo.preco = jogo.preco - desconto;

    return {
        ...jogo,
        tag: precoOriginal > 150 ? "Lançamento" : "Comum"   // condição ? valorSeVerdadeiro : valorSeFalso
    };
});

console.log(JogosPromocao);

//concluido