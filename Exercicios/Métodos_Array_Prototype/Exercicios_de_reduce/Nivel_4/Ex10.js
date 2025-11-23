// Calcule a média geral de todos os alunos.

const alunos = [
  {aluno: "Ana", notas: [7, 8, 10]},
  {aluno: "Pedro", notas: [5, 6, 9]},
  {aluno: "Lia", notas: [10, 10, 9]}
];

const notasDosAlunos = alunos.reduce((acumulador, aluno) => {
    const notas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    const media = notas / aluno.notas.length;

    acumulador.push({
        aluno: aluno.aluno,
        media: Math.floor(media * 100) / 100    // ajusta a média para não ficar infinito (ex: 7.333333334 ---> 7.33).
    });
    
    return acumulador;
}, []);

console.log(notasDosAlunos);

// concluido