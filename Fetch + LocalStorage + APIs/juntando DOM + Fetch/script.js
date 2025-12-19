// primeiro passo - input busca na API
// segundo passo - se não encontrar, aparece uma mensagem
// terceiro passo - btn excluir e btnFavoritar
// quarto passo - botão para abrir a lista de favoritos (com os cards inteiros)
// quinto passo - botão de remover dos favoritos

function criarCard (pokemon) {
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

        <span class="number">#${id}</span>
        <span class="name">${name}</span>

        <img src="${img}" alt="${name}">
    `;

    return card;
};

const form = document.querySelector('.procurar');
const input = document.querySelector('#Buscar');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (input.value.trim() === "") { 
        input.focus();
    } else {
        buscarPokemon(input.value);
        input.value = "";
    }
});

const lista = document.querySelector('#blocoDePokemon');

async function buscarPokemon (infoPokeApi) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${infoPokeApi}`);
        const dados = await res.json();

        // LIMPA o card anterior
        lista.innerHTML = "";

        const card = criarCard(dados);
        lista.appendChild(card);

    } catch (err) {
        alert("Pokémon não encontrado");
    }
}