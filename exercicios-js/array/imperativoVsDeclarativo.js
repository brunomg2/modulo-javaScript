//imperativo vs declarativo
alunos = [
    { nome: 'Bruno', nota: 8.5 },
    { nome: 'Ana', nota: 7.5 }
]

//imperativo

let acumulador = 0
for (let i = 0; i < alunos.length; i++) {
    acumulador += alunos[i].nota
}
console.log(acumulador / alunos.length)

//declarativo 
const obterNotas = aluno => aluno.nota
const obterSoma = (nota1, nota2) => nota1 + nota2
const media = alunos.map(obterNotas).reduce(obterSoma)
console.log(media / alunos.length)
