
async function buscarPokemon (nome) {
    try {
        const resposta = await fetch (`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const dados = await resposta.json();

        const img = dados.sprites.other["official-artwork"].front_default;

        const types = dados.types.map((typeSlot) => typeSlot.type.name)
        const [type1, type2] = types

        console.log(dados.id);
        console.log(dados.name);
        
        console.log(img);
        console.log(types);

    } catch (erro) {
        console.log(erro);
    }
};

buscarPokemon("Ho-Oh");