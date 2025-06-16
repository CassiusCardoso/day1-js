const alunos = [
    {
    nome: 'João',
    notas: [7, 8, 6, 9],
    
},
{
    nome: 'Maria',
    notas: [10, 9, 8, 7],
},
{
    nome: 'Pedro',
    notas: [5, 6, 7, 8],
},
{
    nome: 'Ana',
    notas: [9, 10, 9, 8],
},
{
    nome: 'Lucas',
    notas: [6, 5, 7, 6],
}
]

for(aluno of alunos){
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    let status;
    if(media >= 7){
        status = 'aprovado';
        console.log(`O aluno ${aluno.nome} foi aprovado com média ${media.toFixed(2)}.`);
    }else if(media >= 5 && media < 7){
        status = 'recuperação';
        console.log(`O aluno ${aluno.nome} está de recuperação com média ${media.toFixed(2)}.`);
    }else{
        status = 'reprovado';
        console.log(`O aluno ${aluno.nome} foi reprovado com média ${media.toFixed(2)}.`);
    }
    
    switch(status){
        case 'aprovado':
            console.log(`Parabéns ${aluno.nome}, continue assim!`);
            break;
        case 'recuperação':
            console.log(`Não desanime ${aluno.nome}, você pode melhorar!`);
            break;
        case 'reprovado':
            console.log(`Não desista ${aluno.nome}, estude mais e tente novamente!`);
            break;
        default:
            console.log(`Status desconhecido para o aluno ${aluno.nome}.`);
    }
}