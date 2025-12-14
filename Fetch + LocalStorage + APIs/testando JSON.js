const object = {
    nome: "Fulaninho",
    idade: 32,
    estado:"São Paulo"
};

// transformando objeto em texto JSON.
const guardar = JSON.stringify(object);
console.log(guardar);

// transformando texto JSON em objeto.
const pegar = JSON.parse(guardar);
console.log(pegar);

// pode acessar as propriedades agora.
console.log(pegar.nome);