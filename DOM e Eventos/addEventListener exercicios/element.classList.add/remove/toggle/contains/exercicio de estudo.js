// Criar um botão que ligue/deslige uma cor na tela.

const btn1 = document.querySelector('#btn1');
btn1.textContent = "Alterar cor dos itens";

const itens = document.querySelector('#lista');
const paragrafo = document.querySelector('.descricao');

btn1.addEventListener("click", () => {
    itens.classList.toggle('teste1');
    paragrafo.classList.toggle('teste1');
});

/*----------------------------*/
// Criar um menu que aparece e desaparece com animação.

const btnMenu = document.getElementById('btn-menu');
const menuPainel = document.getElementById('menu-lateral');

// ao clicar, vai atribuir uma verificação. E se for "true" vira false, e se for "false" vira true (aberto e/ou fechado).
btnMenu.addEventListener("click", () => { 
    menuPainel.style.display = menuPainel.style.display === "block" ? "none" : "block";
});

/*----------------------------*/
// Se o campo estiver vazio ao sair (evento blur), ativar classe erro.

const msg = document.getElementById('msgErro');
const input = document.getElementById('campo');

input.addEventListener("blur", () => {
    if (input.value.trim() === "") { // verificar se está vazia.
        input.classList.add('erro');
        msg.textContent = "Campo obrigatório!";
    } else {
        input.classList.remove('erro');
        msg.textContent = "";
    }
});

/*----------------------------*/
// usar classList.toggle() + CSS com transition para expandir.
const btnExpandir = document.getElementById('btn5');

btnExpandir.addEventListener("click", () => {
  box.classList.toggle("expandido");
});