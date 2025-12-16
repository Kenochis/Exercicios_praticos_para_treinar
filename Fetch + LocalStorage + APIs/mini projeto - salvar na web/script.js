// Carrega os favoritos salvos no localStorage (ou array vazio se não existir)
let favoritosArray = JSON.parse(localStorage.getItem("listFavoritos")) || [];

// Lista principal de tarefas
const lista = document.getElementById('lista');

// Input onde o usuário digita a tarefa
const input = document.getElementById('nova-tarefa');


// Cria uma nova tarefa na lista
function adicionarTarefa() {
    const tarefaNova = document.createElement('li');
    tarefaNova.classList.add('tarefa');

    // Estrutura da tarefa (checkbox + texto + botão)
    tarefaNova.innerHTML = `
    <div class="esquerda">
        <input type="checkbox" class="checkbox">
        <span class="txt">${input.value}</span>
    </div>

    <button class="btnDelete">Delete</button>
    `;

    // Adiciona a tarefa no final da lista
    lista.appendChild(tarefaNova);
}


// Formulário de adicionar tarefa
document.querySelector('.addTarefa').addEventListener("submit", (event) => {
    event.preventDefault(); // impede recarregar a página

    // Se o input estiver vazio, não cria tarefa
    if (input.value.trim() === "") { 
        input.focus();
    } else {
        adicionarTarefa();   // cria a tarefa
        input.value = "";    // limpa o input
    }
});


// Lida com cliques dentro da lista de tarefas (delegação de eventos)
lista.addEventListener("click", (event) => {

    // Pega a tarefa (<li>) relacionada ao clique
    const tarefa = event.target.closest('.tarefa');
    if (!tarefa) return;

    // Span do texto dessa tarefa
    const txt = tarefa.querySelector('.txt');

    // Clique no checkbox → risca / desrisca o texto
    if (event.target.tagName === "INPUT") {
        txt.classList.toggle('risco');
    } 
    
    // Clique no botão Delete → remove a tarefa
    if (event.target.tagName === "BUTTON") {
        tarefa.remove();
    }

    // Se o modo favoritar estiver ativo
    if (fav === true) {
        addFav(txt.textContent); // adiciona o texto aos favoritos
        fav = false;             // desativa modo favoritar
        painel.style.display = "block"; // reabre o painel
    }
});


// Estados de controle
let fav = false;    // modo favoritar
let apagar = false; // modo apagar favorito


// Elementos do painel de favoritos
const listFavoritos = document.querySelector('#tarefasFavoritas');
const painel = document.getElementById("painel");

const btnFavoritar = document.querySelector('.btnFavoritar');
const btnExcluirFavorito = document.querySelector('.btnExcluirFavorito');


// Abre e fecha o painel lateral
document.querySelector("#btnMenu").addEventListener("click", () => {
    painel.style.display = painel.style.display === "block" ? "none" : "block";
});


// Salva o array de favoritos no localStorage
function salvarFavoritos() {
    localStorage.setItem("listFavoritos", JSON.stringify(favoritosArray));
}


// Adiciona um item aos favoritos
function addFav(texto) {

    // Evita adicionar o mesmo favorito duas vezes
    if (favoritosArray.includes(texto)) return;

    // Adiciona no array
    favoritosArray.push(texto);

    // Cria o item no painel
    const li = document.createElement('li');
    li.textContent = texto;
    listFavoritos.appendChild(li);

    // Salva no localStorage
    salvarFavoritos();
}


// Remove um item dos favoritos
function removerFavorito(anotacao) {
    favoritosArray = favoritosArray.filter(item => item !== anotacao);
    salvarFavoritos();
}


// Ativa o modo favoritar e fecha o painel
btnFavoritar.addEventListener("click", () => {
    fav = true;
    painel.style.display = "none";
});


// Ativa o modo apagar favoritos
btnExcluirFavorito.addEventListener("click", () => {
    apagar = true;
});


// Clique na lista de favoritos
listFavoritos.addEventListener("click", (event) => {
    if (apagar === true) {
        const li = event.target.closest("li");
        if (!li) return;

        removerFavorito(li.textContent); // remove do array
        li.remove();                     // remove do DOM
    }
});


// Carrega os favoritos salvos ao abrir a página
function carregarFavoritos() {
    favoritosArray.forEach(texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        listFavoritos.appendChild(li);
    });
}

carregarFavoritos();