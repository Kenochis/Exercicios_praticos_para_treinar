// 1. Mostrar quem foi clicado
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        console.log("Você clicou em: " + event.target.textContent); // ele vai identificar o botão clicado e mostrar no console seu conteúdo.
    });
});

/*---------------------------*/
// 2. Mudar a cor de cada item clicado
const itens = document.querySelectorAll('.item');

itens.forEach(item => {
    item.addEventListener("click", (event) => { // ao clicar no item.
        event.target.style.color = "#ff0000ff"; // ele vai identificar o item clicado e mudará sua cor.
    });
});

/*---------------------------*/
// 3. Detectar o tipo de evento

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        console.log("tipo de evento: " + event.type); // mostra o tipo de evento acionado.
    });
});

/*---------------------------*/
