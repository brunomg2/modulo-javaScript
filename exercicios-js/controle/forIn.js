//forIn retorna os indice
const notas = [8, 7.7, 8.9, 7, 9.8, 8.1]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 69
}

//percorrendo atributos de um objeto
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}