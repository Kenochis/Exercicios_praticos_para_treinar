/* Buscar Pokémon na API */

// FAVORITOS (LOCALSTORAGE)
let favoritosArray = JSON.parse(localStorage.getItem("Favoritos"));

// garante que sempre seja um array
if (!Array.isArray(favoritosArray)) {
    favoritosArray = [];
}

function salvarFavoritos() {
    localStorage.setItem("Favoritos", JSON.stringify(favoritosArray));
}

// ELEMENTOS PRINCIPAIS
const lista = document.querySelector('#blocoDePokemon');
const form = document.querySelector('.procurar');
const input = document.querySelector('#Buscar');

const btnMenu = document.querySelector("#btnMenu");
const painel = document.querySelector('#painel');
const listFavoritos = document.getElementById('listaDeFavoritos');

// controla se o painel está em modo "inspecionar"
let inspecionar = false;

// controla se o painel está em modo "remover"
let remover = false;

// CRIA CARD DO POKÉMON
function criarCard(pokemon) {
    const card = document.createElement('li');
    card.classList.add('card');

    const img = pokemon.sprites.other["official-artwork"].front_default;
    const name = pokemon.name;
    const id = pokemon.id;

    card.innerHTML = `
        <div class="btnsDoCard">
            <button class="btnExcluir">🗑️</button>
            <button class="btnFavoritar">⭐</button>
        </div>

        <div class="detail">
            <span class="number">#${id}</span>
            <span class="name">${name}</span>
        </div>

        <img src="${img}" alt="${name}">
    `;

    return card;
}

// EVENTOS DO CARD (DELEGAÇÃO)
function eventosDoCard(pokemon) {
    lista.addEventListener("click", (event) => {
        const clique = event.target;
        const card = clique.closest(".card");
        if (!card) return;

        // Excluir card
        if (clique.classList.contains("btnExcluir")) {
            card.remove();
        }

        // Favoritar Pokémon
        if (clique.classList.contains("btnFavoritar")) {
            addFavorito(pokemon);
        }
    });
}

// BUSCAR POKÉMON
async function buscarPokemon(infoPokeApi) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${infoPokeApi.toLowerCase()}`);
        const dados = await res.json();

        // limpa card anterior
        lista.innerHTML = "";

        const card = criarCard(dados);
        lista.appendChild(card);

        eventosDoCard(dados);

    } catch (err) {
        alert("Pokémon não encontrado");
    }
}

// FORMULÁRIO
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        input.focus();
        return;
    }

    buscarPokemon(input.value);
    input.value = "";
});

// FAVORITOS
function addFavorito(pokemon) {
    // evita duplicados
    if (favoritosArray.some(fav => fav.id === pokemon.id)) return;

    favoritosArray.push({
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other["official-artwork"].front_default
    });

    salvarFavoritos();
    renderizarFavoritos();
}

function removerFavorito(txt) {
    favoritosArray = favoritosArray.filter(poke => poke.name !== txt);
    salvarFavoritos();

    // Se não houver mais favoritos, o modo seleção DEVE ser desligado.
    if (favoritosArray.length === 0) {
        remover = false;
        inspecionar = false;
        listFavoritos.classList.remove("listFav");
    }

    renderizarFavoritos();
}

function carregarFavoritos() {
    listFavoritos.innerHTML = "";

    favoritosArray.forEach(poke => {
        const li = document.createElement("li");
        li.textContent = poke.name;
        listFavoritos.appendChild(li);
    });
}

function renderizarFavoritos() {
    listFavoritos.innerHTML = "";

    // Se estiver em qualquer modo de seleção
    if (remover || inspecionar) {
        criarSelecionar(); // checkbox substitui bolinha
    } else {
        carregarFavoritos(); // lista normal
    }
}

// MENU LATERAL
btnMenu.addEventListener("click", () => {
    painel.style.display = painel.style.display === "block" ? "none" : "block";

    // Abrir menu sempre reseta o estado
    remover = false;
    inspecionar = false;

    listFavoritos.classList.remove("listFav");
    renderizarFavoritos();
});

// MODO SELEÇÃO (checkbox)
function criarSelecionar () {
    listFavoritos.innerHTML = "";

    favoritosArray.forEach(poke => {
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="txt">${poke.name}</span>
        `;
        listFavoritos.appendChild(li);
    });
};

// BOTÕES DO TOPO (PAINEL)
painel.addEventListener("click", (event) => {
    const clique = event.target;
    const btns = clique.closest(".topoDoMenu");
    if (!btns) return;

    // Excluir dos favoritos
    if (clique.classList.contains("btnExcluirFavorito")) {
        if (remover === false) {
            listFavoritos.classList.add("listFav");

            criarSelecionar();
            remover = true;
        } else {
            listFavoritos.classList.remove("listFav");

            carregarFavoritos();
            remover = false
        }
        

        if (inspecionar === true) inspecionar = false;
    }

    // Inspecionar Pokémon
    if (clique.classList.contains("btnInspecionar")) {
        if (inspecionar === false) {
            listFavoritos.classList.add("listFav");

            criarSelecionar();
            inspecionar = true;
        } else {
            listFavoritos.classList.remove("listFav");

            carregarFavoritos();
            inspecionar = false
        }

        if (remover === true) remover = false;
    }
})

// CLIQUE NA LISTA
listFavoritos.addEventListener("click", (event) => {
    // pega o <li> mais próximo.
    const li = event.target.closest('li');

    // se não clicou dentro de uma tarefa, ignora.
    if (!li) return;

    if (event.target.tagName === "INPUT") {
        // pega o span SOMENTE dessa li.
        const txt = li.querySelector('.txt');

        // adiciona/remove o risco.
        txt.classList.toggle('risco');

        // INSPECIONAR = ação única.
        if (inspecionar === true) {
            carregarFavoritos();
            painel.style.display = painel.style.display === "block" ? "none" : "block";
            buscarPokemon(txt.textContent);

            inspecionar = false;
        }

        // REMOVER = pode ser múltiplo.
        if (remover === true) {
            removerFavorito(txt.textContent);
        }
    }
});

// INICIALIZAÇÃO
carregarFavoritos();