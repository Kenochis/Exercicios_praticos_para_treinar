// Criar 10 <li> com números de 1 a 10 usando createElement() + appendChild().

const lista = document.querySelector('#lista');

const btnCriarItem = document.getElementById('btn1');
btnCriarItem.textContent = "Criar novo item";

btnCriarItem.addEventListener("click", () => {
    const contador = lista.children.length + 1; // verifica o tamanho da lista e adiciona +1.
    const item = document.createElement('li'); // cria uma <li> nova no código.
    item.classList.add('item'); // adiciona uma class no item.

    item.textContent = "Item " + contador;
    lista.appendChild(item); // adiciona o item no final da lista.

    modoExcluir = false; // se eu clicar no botão (Criar novo item), vai desativar o modoExcluir.
});

/*-------------------------------*/
// Criar um botão que exclui o item selecionado.
let modoExcluir = false;

const msgErro = document.getElementById('msgErro');

const btnExcluir = document.getElementById('btn2');
const pagina = document.querySelector('body');

btnExcluir.addEventListener("click", () => {
    if (modoExcluir === false) {
        msgErro.textContent = "";
        modoExcluir = true;
    } else { 
        modoExcluir = false;
    }
});

lista.addEventListener("click", (event) => {
    if (modoExcluir === true) {
        if (event.target.tagName === "LI") { // se o local clicado for "LI" (onde se encontra os itens).
            event.target.remove(); // remova esse local.
            atualizarNumeros();
        }
    } else {
        msgErro.textContent = "Modo excluir desativado";
    }
});

// Função que renumera todos os itens
function atualizarNumeros() {
  const itens = lista.querySelectorAll(".item"); // faz uma busca por (item) dentro do elemento (lista);

  itens.forEach((item, i) => {
    item.textContent = "Item " + (i + 1);
  });
};

/*-------------------------------*/

