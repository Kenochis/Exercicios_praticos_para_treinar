//  3) Adicionar propriedade a objetos (sem mudar o original)
// 🔧 Use map para adicionar a propriedade plataforma: "PC"

const jogos = [
  {nome: "Celeste", preco: 50},
  {nome: "Hades", preco: 90}
];

const modificado = jogos.map((jogo) => {
    return {
        ...jogo,
        plataforma: "PC"
    };
});

console.log(modificado);

// concluido