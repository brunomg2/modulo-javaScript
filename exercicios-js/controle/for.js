//estrutura de repetição diferença while e for
let contador = 1
while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log('******************************')

for (contador = 0; contador <= 10; contador++) {
    console.log(contador)
}

console.log('******************************')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
let totalNotas = 0

for(let i = 0; i < notas.length; i++) {
    totalNotas += notas[i]
    console.log(`Nota = ${notas[i]}`)
}

const media = totalNotas / notas.length
console.log(media)
