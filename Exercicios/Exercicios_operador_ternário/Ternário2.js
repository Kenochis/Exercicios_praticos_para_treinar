/*  Exercício 2 — Promoção de Jogo.
        1 - Crie uma variável preco.
        2 - Use o ternário para criar uma variável promocao que seja:
            A: "Desconto aplicado" se o preço for acima de 100.
            B: "Sem desconto" caso contrário.

        Exemplo esperado:
        Se preco = 90 → promocao deve ser "Sem desconto".
*/

const preco = Math.floor(Math.random() * 200) + 1;

const promocao = preco > 100 ? "Desconto Aplicado" : "Sem Desconto";

console.log(preco);
console.log(promocao);

//concluido