// 1. Mostrar mensagem no clique

const btn1 = document.getElementById('btn1');

btn1.addEventListener("click", () => {
    alert("Você alterou o título da página");  // alert("Mensagem") faz com que apareça uma mensagem/aviso flutuante na tela da página.

});

/*---------------------------*/
// 2. Trocar o texto de um <h1>

const h1 = document.getElementById('titulo');


btn1.addEventListener("click", () => {
    h1.textContent = "Título alterado";
});

/*---------------------------*/
// 3. Trocar a cor do texto do <p>

const btn2 = document.getElementById('btn2');
const p = document.querySelector('.descricao');

btn2.textContent = "Alterar cor do parágrafo";

btn2.addEventListener("click", () => {
    p.style.color = "#00268dff";
});

/*---------------------------*/
// 4. Criar um contador de cliques
const btn3 = document.getElementById('btn3');
const itens = document.querySelectorAll('.item');
const item1 = itens[0];

let clique = 0;

btn3.addEventListener("click", () => { // ao clicar no botão, vai adicionar +1 no clique e alterar o texto do item1.
    clique++;
    item1.textContent = "Clicou " + clique;
});

/*---------------------------*/
// 5. Alterar todos os itens de uma lista
const btn4 = document.getElementById('btn4');
btn4.textContent = "Alterar todos os itens";

btn4.addEventListener("click", () => {
    itens.forEach(item => {
        item.textContent = "Item alterado";
    });
});

// concluido exercicios de click.