/* quarto - ao clicar no btnApagar ou btnInspecionar, 
os li da listFavoritos vão virar um span durante esse evento de click, com checkbox. 
Enquanto no btnApagar poderá selecionar (risco) mais de um item, 
no btnInspecionar só poderá ter um item selecionado. */

/* quinto - btnApagar (remove do localStorage e apaga o nome da lista de favoritos), 
e btnInspecionar (fecha o menu e mostra o card do pokemon selecionado). */

/* sexto - criar um botão que seleciona todos os pokemon. 
Ao acionar ele, o botão inspecionar some e fica aparece no lugar dele outro botão, 
porém de cancelar seleção. E se apertar no excluir, vai excluir todos. */

// FAVORITOS (LOCALSTORAGE)
let favoritosArray = JSON.parse(localStorage.getItem("Favoritos"));

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
    carregarFavoritos();
}

function carregarFavoritos() {
    listFavoritos.innerHTML = "";

    favoritosArray.forEach(poke => {
        const li = document.createElement("li");
        li.textContent = poke.name;
        listFavoritos.appendChild(li);
    });
}

// MENU LATERAL
btnMenu.addEventListener("click", () => {
    painel.style.display = painel.style.display === "block" ? "none" : "block";
});

// CARREGAR FAVORITOS AO INICIAR
carregarFavoritos();