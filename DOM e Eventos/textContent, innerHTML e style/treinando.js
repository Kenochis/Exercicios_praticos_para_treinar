// 1 - Faça um botão que altera o textContent do <h1>.

const btnTitle = document.querySelector('#btn1');
const btnTodos = document.querySelector('#btn2');
const btnAlterar = document.querySelector('#btn3');

const textH1 = document.querySelector('h1');

/*-----------------*/
// pega o btn e adiciona um evento a ele ao clicar.

btnTitle.addEventListener("click", () => { 
    textH1.textContent = "Título alterado!";
});

/*-----------------*/
// seleciona todos os itens da lista.

btnTodos.addEventListener("click", () => {
    const itens = document.querySelectorAll("#lista li");

    itens.forEach(item => {
        item.style.background = "#50c7ffff"; 
    });
});

/*-----------------*/
// Altere style para mudar cor, padding e display de um elemento.

btnAlterar.textContent = "Alterar texto do parágrafo";

btnAlterar.addEventListener("click", () => {
    const paragrafo = document.querySelector('p');

    [paragrafo].forEach(p => {
        p.textContent = "Treinando a alteração de textos com botão";

        p.style.color = "#720000ff";
        p.style.padding = "10px";
        p.style.display = none;
    });
});

/*-----------------*/
// Leia com getComputedStyle a altura/width de um elemento e mostre no console.

const estilos = getComputedStyle(textH1);

console.log(estilos.display);
console.log(estilos.width);
console.log(estilos.background);