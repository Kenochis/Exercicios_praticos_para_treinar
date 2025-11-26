//  2) Filtrar filmes com nota alta
// 🔧 Use filter para pegar apenas filmes com nota ≥ 8

const filmes = [
  {titulo: "Duna", nota: 9},
  {titulo: "Venom", nota: 5},
  {titulo: "Batman", nota: 8}
];

const notaAlta = filmes.filter((filme) => {
    if (filme.nota >= 8) {
        return filme;
    }
});

console.log(notaAlta);

// concluido