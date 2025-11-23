/*  Exercício com reduce().
    retorne a media dos alunos.
*/

const alunos = [
    {aluno: "Alura", notas: [3, 6, 10, 7]},
    {aluno: "Luan", notas: [7, 3, 1, 9]},
    {aluno: "Renan", notas: [4, 6, 2, 7]},
    {aluno: "Jack", notas: [1, 5, 6, 9]}
];

const mediaAlunos = alunos.reduce((acc, aluno) => {
    // somar as notas deste aluno
    const totalNotas = aluno.notas.reduce((soma, n) => soma + n, 0);

    // calcular a média
    const media = totalNotas / aluno.notas.length;

    // adicionar ao acumulador
    acc.push({
        aluno: aluno.aluno,
        media: media
    });

    return acc; // sempre retornar o acumulador
}, []);

console.log(mediaAlunos);

/*                       Explicando:
    -- Parte --              |           -- Função --
-----------------------------|---------------------------------------
1 - reduce((acc, aluno)...)	---> percorre cada aluno.
2 - aluno.notas.reduce(...)	---> soma as notas desse aluno.
3 - acc.push(...)	        ---> adiciona o resultado no array final.
4 - [], no fim	            ---> acumulador inicial é um array vazio.
*/