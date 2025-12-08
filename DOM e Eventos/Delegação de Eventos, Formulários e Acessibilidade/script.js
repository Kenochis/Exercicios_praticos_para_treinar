// Crie 5 botões dentro de uma <div> e use apenas um listener no pai.

const colunaBtn = document.getElementById('blocoBtns');

colunaBtn.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") { // verifica o local do botão pressionado.
        console.log("Clicou em:", event.target);
    }
});

/*---------------------------*/
// Quando pressionar “Enter”, mostrar -> console.log("Você apertou Enter!").

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // verifica se é a tecla "Enter".
        console.log("Você pressionou Enter!");

    } else if (event.key === "Escape") { // verifica se é a tecla "Esc".
        console.log("Você pressionou sair!");
    }
});

/*----------------------------*/
// Quando clicar no botão, o JS deve executar: input.focus();

const focoInput = document.querySelector(".campoDeFoco");

const btnFoco = focoInput.querySelector("#botao");
const input = focoInput.querySelector("#campo");

// ao clicar no btnFoco, vai acionar o foco para o input.
btnFoco.addEventListener("click", () => {
    input.focus(); 
});


/*----------------------------*/
let estadoDoMenu = false;
const painel = document.getElementById("painel");

document.querySelector("#btnMenu").addEventListener("click", () => {
    painel.style.display = painel.style.display === "block" ? "none" : "block";

    if (estadoDoMenu === false) {
        estadoDoMenu = true;
        console.log("Painel aberto!");
        
    } else {
        estadoDoMenu = false;
        console.log("Painel fechado!");
    }
    
});