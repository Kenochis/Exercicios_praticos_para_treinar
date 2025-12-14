const object = {
    nome: "Fulaninho",
    idade: 32,
    estado:"São Paulo"
};

// salva no localStorage com a chave "object", transformando em texto JSON.
localStorage.setItem("object", JSON.stringify(object));

// puxar e transformar em objeto de volta.
const puxar = JSON.parse(localStorage.getItem("object"));
console.log(puxar)

// obs: localStorage só funciona em browser, ou seja, página html.