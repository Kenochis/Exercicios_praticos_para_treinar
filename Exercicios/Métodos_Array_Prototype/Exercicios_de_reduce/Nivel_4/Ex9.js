// Some todas as notas de todos os alunos
// .reduce() altera apenas um array.

const alunos = [
  {aluno: "Ana", notas: [7, 8, 10]},
  {aluno: "Pedro", notas: [5, 6, 9]}
];

const notasSomadas = alunos.reduce((acumulador, aluno) => { // usa .reduce() para alterar o array de alunos.
    const notas = aluno.notas.reduce((acc, nota) => acc + nota, 0); // usa .reduce() para alterar o array de notas.

    acumulador.push({ // modifica o novo array que está sendo criado.
        aluno: aluno.aluno,
        nota: notas
    });

    return acumulador;
}, []);

console.log(notasSomadas);

// concluido